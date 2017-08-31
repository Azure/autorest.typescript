through = require 'through2'
util = require 'util'


# place an object into global namespace 
global['Import'] = (object) -> 
  for key, value of object
    global[key] = value 

Import
  # require into the global namespace (modulename = module)
  Install: (modulename, module) -> 
    global[modulename] = require module or modulename 

  # require a gulp-Plugin into the global namespace 
  Plugin: () ->
    Install module,"gulp-#{module}" for module in arguments

  # require a module, placing exports into global namespace
  Include: () -> 
    Import require module  for module in arguments

  Tasks: () -> 
    require "#{__dirname}/#{module}" for module in arguments

###############################################
# force-global a bunch of stuff.
require 'shelljs/global'
Install 'marked'
Install 'vinyl'
Install 'os'
Install 'path'
Install 'fs'
Install 'gulp'
Install 'util'
Install 'moment'
Install 'chalk'
Install 'yargs'
Install 'semver'

Install 'eol', 'gulp-line-ending-corrector'
Install 'through', 'through2-parallel'
Install 'run', 'run-sequence'

# do a bit of monkeypatching
_gulpStart = gulp.Gulp::start
_runTask = gulp.Gulp::_runTask

gulp.Gulp::start = (taskName) ->
  @currentStartTaskName = taskName
  _gulpStart.apply this, arguments
  return

gulp.Gulp::_runTask = (task) ->
  @currentRunTaskName = task.name
  _runTask.apply this, arguments
  return

#  echo 'this.currentStartTaskName: ' + this.currentStartTaskName
#  echo 'this.currentRunTaskName: ' + this.currentRunTaskName

# bring some gulp-Plugins along
# Plugin 'filter',
#  'zip'
  #'unzip'
  #'rename'

# force this into global namespace
global['argv'] = yargs.argv

fs = require('fs')
path = require('path')

concurrency = 0 
queue = []
global.completed = []
vfs = require('vinyl-fs');

module.exports =
  # lets us just handle each item in a stream easily.
  foreach: (delegate) ->
    through.obj { concurrency: threshold }, ( each, enc, done ) -> 
      delegate each, done, this

  count: (result,passthru) => 
    foreach (each,done) => 
      result++
      done null

  hashCode: (s) ->
    (s.split('').reduce ((a, b) ->
      a = (a << 5) - a + b.charCodeAt(0)
      a & a
    ), 0 ) .toString(16)

  toArray: (result,passthru) => 
    foreach (each,done) => 
      result.push(each)
      if passthru 
        done null, each
      else
        done null

  showFiles: () ->
    foreach (each,done) ->
      echo info each.path
      done null, each

  onlyFiles: () -> 
    foreach (each,done) ->
      return done null, each if fs.statSync(each.path).isFile()
      done null

  source: (globs, options ) -> 
    options = options or { }
    options.follow = true
    vfs.src( globs, options) 

  watchFiles: (src,tasks) ->
    return gulp.watch( src,tasks) 

  destination: (globs, options ) -> 
    gulp.dest( globs, options) 

  later: (fn) ->
    setTimeout fn, 10

  mklink: (link,target) ->
    # unlink link
    if ! test "-d", link 
      fs.symlinkSync target, link, "junction"

  unlink: (link) ->
    if test "-d", link 
      fs.unlinkSync link

  erase: (file) -> 
    if test "-f", file
      fs.unlinkSync file

  task: (name, description, deps, fn) ->
    throw "Invalid task name " if typeof name isnt 'string' 
    throw "Invalid task description #{name} " if typeof description isnt 'string' 

    if typeof deps == 'function'
      fn = deps
      deps = []

    # chain the task if it's a repeat
    if name of gulp.tasks
      prev = gulp.tasks[name]

      # reset the name of this task to be a 'child'' task
      name = "#{name}/#{description}"
      description = ''

      # add this task as a dependency of the original task.
      prev.dep.unshift name
    
    # add the new task.
    # gulp.task name, deps, fn
    skip = (name.startsWith "init") or (name.startsWith "npm-install") or (name.startsWith "clean") or (name is "copy-dts-files") or (name.startsWith "nuke") or (name.startsWith "reset") or (name.startsWith "autorest") or description.endsWith("!")
    
    description = '' if description = '!'
    
    if !skip
      deps.unshift "init" 

    if fn.length # see if the task function has arguments (betcha never saw that before!)
      gulp.task name, deps, (done)->
        if not global.completed[name] 
          #echo warning "Running task #{name} #{typeof done}"
          global.completed[name] = true
          return fn(done)
        #echo warning "Skipping completed task #{name}"
        return done()
    else 
      gulp.task name, deps, ()->
        if not global.completed[name] 
          #echo warning "Running task #{name}"
          global.completed[name] = true
          return fn()
        #echo warning "Skipping completed task #{name}"
        return null
    
    
    # set the description
    gulp.tasks[name].description = description

    return

  where: (predicate) -> 
    foreach (each,done) ->
      #return done null if each?
      return done null, each if predicate each 
      done null

  splitPath: (path) ->
    s = path.match /^(.+)[\\\/]([^\/]+)$/  or [path, '',path]
    f = s[2].match(/^(.*)([\\.].*)$/ ) or [s[2],s[2],'']
    d = (path.match /^(.:)[\\\/]?(.*)$/ ) or ['','',path]
    return {
      fullname : path
      folder : s[1]
      filename : s[2]
      basename : f[1]
      extension : f[2]
      drive:  d[1] or ''
      folders: (d[2].split /[\\\/]/ )or path
    }

  folder: (path) ->
    return '' if not path 
    return (splitPath path).folder

  split: (path) ->
    return '' if not path 
    return (splitPath path).folders

  filename: (path) ->
    return '' if not path 
    p = splitPath path
    return p.filename

  extension: (path) ->
    return '' if not path 
    p = splitPath path
    return p.extension

  basename: (path) ->
    return '' if not path 
    p = splitPath path
    return p.basename

  exists: (path) ->
    return test '-f', path 

  fileExists: (path) ->
    return test '-f', path 

  dirExists: (path) ->
    return test '-d', path 

  newer: (first,second) ->
    return true if (!test "-d", second) and (!test "-f", second)
    return false if (!test "-d",first) and (!test "-f", first)
    f = fs.statSync(first).mtime
    s = fs.statSync(second).mtime
    return f > s 

  flattenEncode: (path) ->
    path.basename = "#{ path.dirname.replace(/[\/\\]/g, '_') }_#{path.basename}" 
    path.dirname = ""

  flattenDecode: (path) ->
    f = path.basename.match(/^(.*)_(.*)$/ )
    path.basename = "#{f[1].replace(/[_]/g, '/') }/#{f[2]}"
    path.dirname = ""

  except: (match) -> 
    # await through.obj  defer file, enc, callback
    through.obj (file, enc, callback) ->

      # check if the file is an actual file. 
      # if it's not, just skip this tool.
      if !file or !file.path
        return callback null, file
      
      # do something with the file
      if file.path.match( match ) 
        return callback null
      
      return callback null, file


  rmfile: (dir, file, callback) ->
    p = path.join(dir, file)
    fs.lstat p, (err, stat) ->
      if err
        callback.call null, err
      else if stat.isDirectory()
        rmdir p, callback
      else
        fs.unlink p, callback
      return
    return

  rmdir: (dir, callback) ->
    #echo "RMDIR #{dir}"
    fs.readdir dir, (err, files) ->
      if err
        callback.call null, err
      else if files.length
        i = undefined
        j = undefined
        i = j = files.length
        while i--
          rmfile dir, files[i], (err) ->
            if err
              callback.call null, err
            else if --j == 0
              fs.rmdir dir, callback
            return
      else
        fs.rmdir dir, callback
      return
    return

  guid: ->
    x = -> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1
    "#{x()}#{x()}-#{x()}-#{x()}-#{x()}-#{x()}#{x()}#{x()}"

  Fail: (text) ->
    echo ""
    echo "#{ error 'Task Failed:' }  #{error_message text}"
    echo ""
    rm '-rf', workdir
    process.exit(1)

  execute: (cmdline,options,callback, ondata)->
    if typeof options == 'function' 
      ondata = callback
      callback = options
      options = { }

    # if we're busy, schedule again...
    if concurrency >= threshold
      queue.push(->
          execute cmdline, options, callback, ondata
      )
      return
  
    concurrency++

    options.cwd = options.cwd or basefolder 
    echo  "           #{quiet_info options.cwd} :: #{info cmdline}" if !options.silent 
    
    options.silent = !verbose 

    proc = exec cmdline, options, (code,stdout,stderr)-> 
      concurrency--

      if code and (options.retry or 0) > 0
        echo warning "retrying #{options.retry} #{options.cwd}/#{cmdline}"
        options.retry--
        return execute cmdline,options,callback,ondata


      # run the next one in the queue
      if queue.length
        fn = (queue.shift())
        fn() 

      if code and !options.ignoreexitcode
        echo error "Exec Failed #{quiet_info options.cwd} :: #{info cmdline}"  
        if( stderr.length )
          echo error "(stderr)"
          echo marked  ">> #{error stderr}"
        if( stdout.length ) 
          echo warning "(stdout)" 
          echo warning stdout

        Fail "Execute Task failed, fast exit"
      callback(code,stdout,stderr)

    proc.stdout.on 'data', ondata if ondata
    return proc

  autorest: (args,done,ignoreexitcode) ->
    echo info "Queuing up: AutoRest #{args.join(' ')}"
    execute "autorest \"--use=#{basefolder}\" #{args.map((a) -> "\"#{a}\"").join(' ')}" , {silent:true, ignoreexitcode: ignoreexitcode || false}, (code,stdout,stderr) ->
      return done(code,stdout,stderr)

# build task for global build
module.exports.task 'build', 'builds project', -> 
  echo "Building project in #{basefolder}"

module.exports.task 'clean', 'cleans the project files', -> 

module.exports.task 'regenerate', 'regenerates expected files for testing', -> 


# task for vs code
module.exports.task 'code', 'launches vs code', -> 
  exec "code #{basefolder}"

module.exports.task 'release-only', '', (done)-> 
  Fail( "This command requires --configuration release" ) if configuration isnt "Release"
  done()
 
configString = (s)->
  "#{s.charAt 0 .toUpperCase()}#{s.slice 1 .toLowerCase() }"

# bring current module into global namespace.
Import module.exports

###############################################
# Global values
process.env["autorest.home"] = path.normalize("#{os.tmpdir()}/autorest#{hashCode(basefolder)}")
process.env.tmp = process.env.tmp or "#{basefolder}/tmp"

package_json = require("#{basefolder}/package.json")


Import 
  stable: argv.stable or false
  configuration: if argv.configuration then configString( argv.configuration)  else (if argv.release then 'Release' else 'Debug')
  github_apikey: argv.github_apikey or process.env.GITHUB_APIKEY or null
  nuget_apikey: argv.nuget_apikey or process.env.NUGET_APIKEY or null
  npm_apikey:  argv.npm_apikey or process.env.NPM_APIKEY or null
  autorest_home: process.env["autorest.home"]
  today: moment().format('YYYYMMDD')
  now: moment().format('YYYYMMDD-HHmm')
  force: argv.force or false
  threshold: argv.threshold or ((os.cpus().length)-1) or 1
  verbose: argv.verbose or null
  workdir: "#{process.env.tmp}/gulp/#{module.exports.guid()}"
  watch: argv.watch or false

mkdir "-p", workdir if !test "-d", workdir

###############################################
# UI stuff
TerminalRenderer = require('marked-terminal')
marked.setOptions {
  renderer: new TerminalRenderer({
    heading: chalk.green.bold,
    firstHeading: chalk.green.bold,
    showSectionPrefix: false,
    strong: chalk.bold.cyan,
    em: chalk.cyan,
    blockquote: chalk.magenta,
    tab: 2
  })
}

set '+e'

Import 
  error: chalk.bold.red
  error_message: chalk.bold.cyan
  warning: chalk.bold.yellow
  info: chalk.bold.green
  quiet_info: chalk.green

###############################################
task 'default','', ->
  cmds = ""

  for name, t of gulp.tasks 
    cmds += "\n  gulp **#{name}** - #{t.description}" if t.description? and t.description.length
  switches = ""

  echo marked  """

# Usage

## gulp commands  
#{cmds}

## available switches  
  *--force*          specify when you want to force an action (restore, etc)
  *--configuration*  'debug' or 'release'
  *--release*        same as --configuration=release
  *--nightly*        generate label for package as 'YYYYMMDD-0000-nightly'
  *--preview*        generate label for package as 'YYYYMMDD-HHmm-preview'
  *--verbose*        enable verbose output
  *--threshold=nn*   set parallelism threshold (default = 10)

#{switches}
"""

task 'test', "Run Tests", ->
  
task 'fix-line-endings', 'Fixes line endings to file-type appropriate values.', ->
  source "**/*.iced"
    .pipe eol {eolc: 'LF', encoding:'utf8'}
    .pipe destination '.'

task 'version-number', '!', (done)->
  if argv.version
    global.version =  argv.version if argv.version
    done();
  else 
    # git rev-list --parents HEAD --count --full-history
    execute "git rev-list --parents HEAD --count --full-history" , {silent:true}, (c,o,e)->
      pv = (package_json.version).trim()
      global.version = "#{semver.major(pv)}.#{semver.minor(pv)}.#{o.trim()}"
      done();
