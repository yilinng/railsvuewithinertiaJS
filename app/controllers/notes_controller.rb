class NotesController < ApplicationController
  before_action :set_note, only: %i[ show edit update destroy increment ]
  before_action :require_user
  
  # GET /notes or /notes.json
  def index
    notes = current_user.notes.all
    render inertia: 'Notes/Index', props: {
      notes: notes.as_json(only: [:id, :title, :content, :likes_count])
    }
  end

  # GET /notes/1 or /notes/1.json
  def show
    render inertia: 'Notes/Show', props: {
      note: @note.as_json(only: [:id, :title, :content, :likes_count])
    }
  end

  # GET /notes/new
  def new
    note = Note.new
    render inertia: 'Notes/New', props: {
      note: note.as_json
    }
  end

  # GET /notes/1/edit
  def edit
    render inertia: 'Notes/Edit', props: {
      note: @note.as_json(only: [:id, :title, :content, :likes_count])
    }
  end

  # POST /notes or /notes.json
  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      redirect_to notes_path, notice: 'Note was successfully created.', turbolinks: false
      #render json: @note, status: :created, location: @note,  turbolinks: false
    else
      redirect_to new_note_path, errors: note.errors , turbolinks: false
      #render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1 or /notes/1.json
  def update
    if @note.update(note_params)
      redirect_to notes_path, notice: 'Note was successfully update.', turbolinks: false
      #render json:  @note, notice: 'Note was successfully update.'
    else
      redirect_to edit_note_path(@note), errors: @note.errors, turbolinks: false
      #render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1 or /notes/1.json
  def destroy
    @note.destroy
    #render json: { notice: 'Note was successfully destroyed.' }, turbolinks: false
    redirect_to notes_path, notice: 'Note was successfully destroyed.', turbolinks: false
  end

  # PATCH/PUT /notes/1/increment 
  def increment
    ::IncrementCountWorker.perform_async(params[:id])
    redirect_to notes_path, notice: 'Note async increment.', turbolinks: false
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = current_user.notes.find(params[:id]) if current_user
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:title, :content, :user_id)
    end
end
