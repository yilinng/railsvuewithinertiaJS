class IncrementCountWorker
  include Sidekiq::Worker
  #ensure that Sidekiq does not retry the upload in the case of failure.
  sidekiq_options retry: false
  # a ||= 100, https://www.rubyguides.com/2018/07/ruby-operators/
    #(defined?(a) && a) ? a : a = 100
    #“If a doesn’t exist or if it is false or nil then assign 100 to it, 
    #otherwise just return the value of a”
  def perform(note_id)
    note = Note.find(note_id)
    note.likes_count ||= 0
    note.likes_count += 1
    note.save
  end

end
