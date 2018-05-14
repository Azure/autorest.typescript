require './common.iced'

# ==============================================================================
# tasks required for this build
Tasks "dotnet"  # dotnet functions
Tasks "regeneration"
Tasks "publishing"

Install "child_process"

# ==============================================================================
# Settings
Import
  initialized: false
  solution: "#{basefolder}/autorest.typescript.sln"
  sourceFolder:  "#{basefolder}/src/"

# ==============================================================================
# Tasks

task 'init', "" ,(done)->
  Fail "YOU MUST HAVE NODEJS VERSION GREATER THAN 7.10.0" if semver.lt( process.versions.node , "7.10.0" )
  done()

# Run language-specific tests:
task 'test', '', ['test/typecheck', 'test/nodejs-unit'], (done) ->
  done();

task 'test/typecheck', 'type check generated code', [], (done) ->
  await execute "#{basefolder}/node_modules/.bin/tsc -p #{basefolder}/test/tsconfig.generated.json", defer _
  done();

task 'test/nodejs-unit', 'run nodejs unit tests', [], (done) ->
  await execute "#{basefolder}/node_modules/.bin/mocha", defer _
  done();

task 'test/chrome-unit', 'run browser unit tests', [], (done) ->
  webpackDevServer = child_process.spawn("#{basefolder}/node_modules/.bin/ts-node", ["testserver"], { shell: true })
  mochaChromeRunning = false
  webpackDevServerHandler = (data) ->
    console.log(data && data.toString())
    if !mochaChromeRunning
      mochaChromeRunning = true
      try
        await execute "#{basefolder}/node_modules/.bin/mocha-chrome http://localhost:3000", defer _;
        done()
      catch err
        done(err)
      finally
        webpackDevServer.kill()

  webpackDevServer.stdout.on 'data', webpackDevServerHandler
  webpackDevServer.on 'exit', webpackDevServerHandler

# CI job
task 'testci', "more", [], (done) ->
  # install latest AutoRest
  await autorest ["--latest"], defer code, stderr, stdout

  # ensure npm packages are installed so that typescript tests can run
  await execute "npm install", defer _

  ## TEST SUITE
  global.verbose = true
  await run "test", defer _

  ## REGRESSION TEST
  global.verbose = false
  # regenerate
  await run "regenerate", defer _
  # diff ('add' first so 'diff' includes untracked files)
  await  execute "git add -A", defer code, stderr, stdout
  await  execute "git diff --staged -w", defer code, stderr, stdout
  # eval
  echo stderr
  echo stdout
  throw "Potentially unnoticed regression (see diff above)! Run `npm run regenerate`, then review and commit the changes." if stdout.length + stderr.length > 0
  done()