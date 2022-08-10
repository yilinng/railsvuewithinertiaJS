class IncrementCountWorker
  include Sidekiq::Worker
  #ensure that Sidekiq does not retry the upload in the case of failure.
  sidekiq_options retry: false

  def perform(note_id)
    note = Note.find(note_id)
    puts note, 'from increment count worker..find note'
    note.likes_count ||= 0
    note.likes_count += 1
    note.save
  end

end
