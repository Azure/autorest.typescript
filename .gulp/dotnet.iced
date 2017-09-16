
# ==============================================================================
# file selections

Import
  projects:() ->
    source '**/*.csproj'
      .pipe except /preview/ig

# ==============================================================================
# Functions

dotnet = (cmd) ->
  foreach (file, callback) ->
    # check if the file is an actual file. 
    # if it's not, just skip this tool.
    if !file or !file.path
      return callback null, file
    
    # do something with the file
    await execute "dotnet #{cmd} #{ file.path } /nologo", defer code,stdout,stderr
    # Fail "dotnet #{cmd} failed" if code
    # or just done, no more processing
    return callback null

# ==============================================================================
# Tasks


task 'build','dotnet',['restore'], (done) ->
  execute "dotnet build -c #{configuration} #{solution} /nologo /clp:NoSummary", (code, stdout, stderr) ->
    execute "dotnet publish -c #{configuration} #{sourceFolder} --output #{sourceFolder}/bin/netcoreapp2.0 /nologo /clp:NoSummary ", (code, stdout, stderr) ->
      done()

task 'clear-cache-on-force', '', (done)->
  if global.force 
    execute "dotnet nuget locals http-cache --clear", (c,o,e) ->
      done()
  else 
    done()

task 'restore','restores the dotnet packages for the projects',['clear-cache-on-force'], (done) -> 
  
  if ! test '-d', "#{os.homedir()}/.nuget"
    global.force = true

  projects()
    .pipe where (each) ->  # check for project.assets.json files are up to date  
      rm "#{folder each.path}/obj/project.assets.json" if (force and test '-f', "#{folder each.path}/obj/project.assets.json")
      return true if force
      assets = "#{folder each.path}/obj/project.assets.json"
      return false if (exists assets) and (newer assets, each.path)
      return true
    .pipe foreach (each,done)->
      execute "dotnet restore #{ each.path } /nologo", {retry:1},(code,stderr,stdout) ->
        done()
        
# the dotnet gulp-plugin.
module.exports = dotnet