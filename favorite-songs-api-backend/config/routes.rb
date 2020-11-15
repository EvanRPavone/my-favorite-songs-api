Rails.application.routes.draw do

  get '/songs' => 'songs#index'
  get '/songs/:artist_name' => 'songs#show'
  post '/songs' => 'songs#create'

  get '/artists' => 'artists#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
