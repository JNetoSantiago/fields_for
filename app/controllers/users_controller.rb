class UsersController < ApplicationController
  def index
    # @users = User.search(params['query'], fields: [{"name" => :word_start}], misspellings: false, limit: 10)
    @users = User.search("*")

    render json: @users.results
  end
end
