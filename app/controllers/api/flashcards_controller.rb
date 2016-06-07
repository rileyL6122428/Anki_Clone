class Api::FlashcardsController < ApplicationController
  #TODO sanitize Query inputs ??? IMPORTANT
  def create
    @flashcard = Flashcard.new(flashcard_params)
    @flashcard.deck_id = params[:deck_id]
    @flashcard.grade = 0;
    @flashcard.review_total = 0;

    if @flashcard.save
      render 'api/flashcards/show'
    else
      @errors = @flashcard.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def index
    @flashcards = Flashcard.where(deck_id: params[:deck_id])
    render 'api/flashcards/index'
  end

  def update
    @flashcard = Flashcard.find(params[:id])

    if @flashcard.update(flashcard_params)
      render 'api/flashcards/show'
    else
      @errors = @flashcard.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @flashcard = Flashcard.find(params[:id])

    if @flashcard.destroy
      render 'api/flashcards/show'
    else
      @errors = @flashcard.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def show
    @flashcard = Flashcard.find(params[:id])

    if @flashcard
      render 'api/flashcards/show'
    else
      @errors = @flashcard.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  private
  def flashcard_params
    params.require(:flashcard).permit(:front, :back)
  end

end
