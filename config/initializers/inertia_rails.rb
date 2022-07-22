# config/initializers/inertia_rails.rb
InertiaRails.configure do | config |
  config.version = '1.0' # used for asset verioning
  # config.layout = 'some_other_file' # use this to change the default layout file that inertia will use. Default it uses application.html.erb.
    # set the current version for automatic asset refreshing. A string value should be used if any.
    config.version = nil
  
    # set the layout you want inertia components to be rendered within. This layout must include any required inertia javascript.
    config.layout = 'application'
  
end