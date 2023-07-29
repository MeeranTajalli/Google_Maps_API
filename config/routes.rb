Rails.application.routes.draw do
  resources :breweries, only: [:index]
  root to: 'breweries#index'
end
