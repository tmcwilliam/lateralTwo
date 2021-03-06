###
# Compass
###

# ZURB Foundation
require "zurb-foundation"

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "robots.txt", :layout => false
page "humans.txt", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers do
  def nav_active(page)
    current_page.data.page_id == page ? {:class => "active"} : {}
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
activate :livereload
# Use relative URLs
set :relative_links, true
activate :relative_assets
activate :directory_indexes

page "/404.html", directory_index: false
page "/sitemap.xml", :layout => false

# activate :blog do |blog|
#   # set options on blog
# end

# activate :blog_editor

# activate :navigation

# activate :deploy do |deploy|
#   deploy.method = :git
#   # deploy.remote = "custom-remote" # remote name or git url, default: origin
#   # deploy.branch = "custom-branch" # default: gh-pages
# end

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = "lateralfitnesschicago.com"
  deploy.path   = "/kunden/homepages/14/d417008924/htdocs"
  # Optional Settings
  deploy.user  = "u69058958" # no default
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = "-rltgoDvzO --no-p --del -e" # add custom flags, default: -avze
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  set :relative_links, true
  activate :relative_assets
  activate :directory_indexes

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  set :http_path, "/lateralTwo/images/"
end
