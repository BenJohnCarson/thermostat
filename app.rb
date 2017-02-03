require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  
  enable :sessions
  set :session_secret, 'super secret'
  
  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    p session[:temperature]
    temperature = session[:temperature] || 20
    
    content_type :json
    { temperature: temperature }.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temperature] = params[:temperature]
    200
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
