class BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
    @location = Location.first # Change this to fetch the desired location
  end
end
