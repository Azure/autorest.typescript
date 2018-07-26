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
task 'test', '', ['test/generator-unit', 'test/typecheck', 'test/chrome-unit', 'test/nodejs-unit', 'test/metadata', 'test/azure-metadata'], (done) ->
  done();

task 'testci/generator-unit', '', [], (done) ->
  global.verbose = true
  await run "test/generator-unit", defer _
  done()

task 'test/generator-unit', 'run generator unit tests', [], (done) ->
  await execute "dotnet test #{basefolder}/unittests/autorest.typescript.tests.csproj /nologo", defer _
  done()

task 'testci/typecheck', '', [], (done) ->
  global.verbose = true
  await run "test/typecheck", defer _
  done()

task 'testci/metadata', '', ['test/metadata', 'test/azure-metadata'], (done) ->
  done()

task 'test/metadata', '', [], (done) ->
  await execute "npm install",{cwd:"#{basefolder}/test/metadata/generated", silent:false }, defer _
  await execute "npm run build",{cwd:"#{basefolder}/test/metadata/generated", silent:false }, defer _
  done()

task 'test/azure-metadata', '', [], (done) ->
  await execute "npm install",{cwd:"#{basefolder}/test/azuremetadata/generated", silent:false }, defer _
  await execute "npm run build",{cwd:"#{basefolder}/test/azuremetadata/generated", silent:false }, defer _
  done()

task 'test/typecheck', 'type check generated code', [], (done) ->
  await execute "#{basefolder}/node_modules/.bin/tsc -p #{basefolder}/test/tsconfig.generated.json", defer _
  done();

task 'testci/nodejs-unit', '', [], (done) ->
  global.verbose = true
  await run "test/nodejs-unit", defer _
  await execute "node #{basefolder}/.scripts/coverage", defer _
  done()

task 'test/nodejs-unit', 'run nodejs unit tests', [], (done) ->
  await execute "#{basefolder}/node_modules/.bin/mocha", defer _
  done();

task 'testci/chrome-unit', '', [], (done) ->
  global.verbose = true
  await run "test/chrome-unit", defer _
  await execute "node #{basefolder}/.scripts/coverage", defer _
  done()

task 'test/chrome-unit', 'run browser unit tests', ['test/nodejs-unit'], (done) ->
  webpackDevServer = child_process.spawn("#{basefolder}/node_modules/.bin/ts-node", ["#{basefolder}/testserver"], { shell: true })
  cleanupDevServer = () ->
    webpackDevServer.stderr.destroy()
    webpackDevServer.stdout.destroy()
    webpackDevServer.kill()

  process.on("exit", () -> webpackDevServer.kill())
  mochaChromeRunning = false
  webpackDevServerHandler = (data) ->
    if !mochaChromeRunning
      mochaChromeRunning = true
      try
        await execute "#{basefolder}/node_modules/.bin/mocha-chrome http://localhost:3000", defer _;
        # would just use a finally block but they appear to be broken in iced-coffee-script
        cleanupDevServer()
        done()
      catch err
        cleanupDevServer()
        done(err)

  webpackDevServer.stderr.on 'data', (data) -> console.error(data.toString())
  webpackDevServer.stdout.on 'data', webpackDevServerHandler
  webpackDevServer.on 'exit', webpackDevServerHandler

checkRegeneration = (taskName) ->
  # install latest AutoRest
  await autorest ["--latest"], defer code, stderr, stdout

  # regenerate
  await run taskName, defer _
  # diff ('add' first so 'diff' includes untracked files)
  await execute "git add -A", defer code, stderr, stdout
  await execute "git diff --staged -w", defer code, stderr, stdout
  # eval
  echo stderr
  echo stdout
  throw "Potentially unnoticed regression (see diff above)! Run `npm run regenerate`, then review and commit the changes." if stdout.length + stderr.length > 0

# Run language-specific tests:
task 'testci', '', [], (done) ->
  # VSTS can't handle regenerating after running browser tests
  await checkRegeneration "regenerate", defer _
  await run "test", defer _
  done();

task 'testci/regenerate-ts', '', [], (done) ->
  await checkRegeneration "regenerate-ts", defer _


task 'testci/regenerate-tsazure', '', [], (done) ->
  await checkRegeneration "regenerate-tsazure", defer _

