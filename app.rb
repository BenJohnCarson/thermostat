require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    'Hello Thermostat!'
  end

   post '/temperature' do
    
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
