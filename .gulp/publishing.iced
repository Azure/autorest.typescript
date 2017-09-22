task 'publish-preview', '', ['version-number'] , (done) ->
  package_path = "#{basefolder}/package.json"
  package_folder = "#{basefolder}"

  # 1. update the patch number
  package_json = require package_path
  package_json.version = version
  JSON.stringify(package_json,null,'  ').to package_path 

  # 2. call npm publish --tag preview 
  # Note : this will call the npm prepare task, which will call
  execute "npm publish --tag preview",{cwd:package_folder, silent:false }, (c,o,e) -> 
    echo  "\n\nPublished:  #{package_json.name}@#{info package_json.version} (tagged as @preview)\n\n"
    done()
    