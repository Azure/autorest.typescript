task 'publish-preview', '', ['version-number','build'] , (done) ->
  package_json = require "#{basefolder}/package.json"

  # move .gitignore out  of the way - yarn bug
  rm "-f", "#{basefolder}/.gitignore"
  execute "#{basefolder}/node_modules/.bin/yarn publish --tag preview --new-version #{version} --access public ",{cwd:basefolder, silent:false }, (c,o,e) -> 
    echo  "\n\nPublished:  #{package_json.name}@#{info version} (tagged as @preview)\n\n"
    # bring back .gitignore!
    execute "git checkout #{basefolder}/.gitignore",{cwd:basefolder, silent:true }, done