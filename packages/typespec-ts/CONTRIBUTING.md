# How to Contribute

## Prerequisite

Please follow the **[Prerequisite](../../CONTRIBUTING.md#prerequisites)** part to install the dependencies.

## Steps to clone, build & test

1. Use the following command to clone the Typescript/Javascript SDK generator repository:

```
git clone https://github.com/Azure/autorest.typescript.git
```

2. Use the following commands to build the SDK generator:

```
rush update
rush rebuild
```

3. There are also 3 test-suites in the RLC generator:

   1. Unit tests (which could be found at `test/unit/*`)
   2. Integration tests (which could be found at `test/integration/*`)
   3. Smoke tests (which could be found at `../../packages/typespec-test`)

1. You can run the Unit tests & Integration tests using the following command:

```
npm run test
```

Running the command above will do the following things:

- Start TestServer
- Build TypeSpec TS
- Generate all scenarios in parallel (i.e. Dictionary, Extensible Enums, Models, Resiliency)
- Run all the tests under test/integration
- Stop TestServer

**_Note_**: If your development environment is Windows, then run the command `npm run start-test-server`(in a seperate window) before running `npm run test` and run the command `npm run stop-test-server` after. (In non windows machines, we could run the test-server in the background automatically. But, in Windows machines, it has to be done manually.)

5. You can run the Smoke tests using the following command:

```shell
cd ../../packages/typespec-test
npm run smoke-test
```

## How to add an integration test case

Whenever you work on adding a feature/fixing a bug, this would probably be your first step. You create a test case and then run it through the generator, see the result, modify the generator, run it again and so on, until you get the desired output.

1. Pick up a typespec as your test input in cadl-ranch. Below are some examples

   Let us say your test input is `authentication/api-key/main.tsp` in @azure-tools/cadl-ranch-specs.

1. Now add an entry to the TypeSpecRanchConfig to the file [`cadl-ranch-list.ts`](./test/commands/cadl-ranch-list.ts). In the file, add the following to the array.

   ```typescript
     {
       outputPath: "authentication/apiKey",
       inputPath: "authentication/api-key"
     },
   ```

1. Create a tspconfig.yaml in `./test/integration/generated/authentication/apiKey` folder and put the following content in it.

   ```yaml
   emit:
     - "@azure-tools/typespec-ts"
   options:
     "@azure-tools/typespec-ts":
       "emitter-output-dir": "{project-root}"
       generateMetadata: true
       generateTest: true
       "include-shortcuts": true
       azureSdkForJs: false
       addCredentials: false
       isTypeSpecTest: true
       title: AuthApiKeyClient
       packageDetails:
         name: "@msinternal/auth-apikey"
         description: "Auth api key Test Service"
         version: "1.0.0"
   ```

1. Now, You can generate the RLC for your test case with the following command: (Initially, during your development, you do not want to run all the cases during every step of your development, you can comment out other test cases. But, once your code changes are complete for your case, then you need to run the entire suite to ensure that your changes did not cause any unwanted changes.)

   ```shell
   npm run generate-tsp-only
   ```

1. Once you are satisfied with the generated code, you can add a spec file such as `testUserCaseRest.spec.ts` file [here](./test/integration). You can find several examples in the same place.

## How to debug

### `generate-tsp-only` step

If you would like to debug the `generate-tsp-only` step for our test input, Open the repository in VS Code -> Select `Generate code for TypeSpec Emitter` section -> Click `Attach`.

### Spec file

If you would like to debug the `testUserCase.spec.ts` file (after the SDK is generated), Open the repository in VS Code -> Open the `testUserCase.spec.ts` file -> Select `Run and Debug` section -> Click `IntegrationTests - Current File`.

### How to debug an unit test case

- In VS Code, We have created a Debugging profile for UnitTests to start debugging:

  1. Go to the debugger tab
  2. Select the "[TypeSpec] - Unit Test" Profile
  3. Click the "Play" button

- Your breakpoints will start hitting, you can set breakpoints in either Test or Generator code

### Integration Tests

- In order to debug integration tests you need to start the test server, by running:

      npm run start-test-server:v1

- Once the Test Server is running

  1. In VSCode go to the debugger tab
  2. Select the "[TypeSpec] - Integration Test" profile from the drop down
  3. Click the "Play" button

- **\*\***IMPORTANT**\*\***: Running Integration Tests for debugging, does not re-generate the test clients so make sure that after each change you do:

  - Re-generate all the test swaggers

        npm run generate-tsp-only -- --build

  - Re-generate a specific swagger

        npm run generate-tsp-only -- -i bodyComplexRest -b
