root_path = File.expand_path(File.dirname(__FILE__))
use Rack::Static, root: root_path
run Rack::URLMap.new({'/' => Rack::Directory.new(root_path)})
