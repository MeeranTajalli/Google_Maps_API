class ApplicationController < ActionController::Base
  def index
    @breweries = Brewery.all
    @location = Location.first # Change this to fetch the desired location or check if it exists
  end
end
