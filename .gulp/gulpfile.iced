require './common.iced'

# ==============================================================================
# tasks required for this build
Tasks "dotnet"  # dotnet functions
Tasks "regeneration"
Tasks "publishing"

Install "child_process"
Install "process"

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

task 'fetch_submodules',"", (done) ->
  execute "git submodule update --init --recursive", done

task 'install_common',"", (done) ->
  # global.verbose = true
  execute "npm install",{cwd:"#{basefolder}/autorest.common", silent:false }, done

# Run language-specific tests:
task 'test', '', ['test/generator-unit', 'test/typecheck', 'test/nodejs-unit'], (done) ->
  done();

task 'test/generator-unit', 'run generator unit tests', [], (done) ->
  await execute "dotnet test #{basefolder}/unittests/autorest.typescript.tests.csproj /nologo", defer _
  done()

task 'test/typecheck', 'type check generated code', [], (done) ->
  await execute "#{basefolder}/node_modules/.bin/tsc -p #{basefolder}/test/tsconfig.generated.json", defer _
  done();

task 'set-tsnode-typecheck', 'set ts-node to type check mode', [], (done) ->
  # This has to be set or else ts-node won't find const enum values.
  process.env.TS_NODE_TYPE_CHECK = 'Y'
  done()

task 'test/nodejs-unit', 'run nodejs unit tests', ['set-tsnode-typecheck'], (done) ->
  await execute "#{basefolder}/node_modules/.bin/mocha --no-colors", defer _
  done();

task 'test/chrome-unit', 'run browser unit tests', [], (done) ->
  webpackDevServer = child_process.spawn("#{basefolder}/node_modules/.bin/ts-node", ["#{basefolder}/testserver"], { shell: true })
  process.on("exit", () -> webpackDevServer.kill())
  mochaChromeRunning = false
  webpackDevServerHandler = (data) ->
    if !mochaChromeRunning
      mochaChromeRunning = true
      try
        await execute "#{basefolder}/node_modules/.bin/mocha-chrome http://localhost:3000", defer _;
        # would just use a finally block but they appear to be broken in iced-coffee-script
        webpackDevServer.kill()
        done()
      catch err
        webpackDevServer.kill()
        done(err)

  webpackDevServer.stderr.on 'data', (data) -> console.error(data.toString())
  webpackDevServer.stdout.on 'data', webpackDevServerHandler
  webpackDevServer.on 'exit', webpackDevServerHandler

# CI job
task 'regenerateci', '', [], (done) ->
  # regenerate
  await run "regenerate", defer _
  # diff ('add' first so 'diff' includes untracked files)
  await execute "git add -A", defer code, stderr, stdout
  await execute "git diff --staged -w", defer code, stderr, stdout
  # eval
  echo stderr
  echo stdout
  throw "Potentially unnoticed regression (see diff above)! Run `npm run regenerate`, then review and commit the changes." if stdout.length + stderr.length > 0

task 'testci', "more", [], (done) ->
  # install latest AutoRest
  await autorest ["--latest"], defer code, stderr, stdout

  ## TEST SUITE
  global.verbose = true
  await run "test", defer _

  done()