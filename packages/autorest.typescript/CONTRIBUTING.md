# Contributing  

This package contains the High Level Client generation and the Rest Level Client generation from swagger. We will introduce both on how to contribute to high level client generation and rest level client generation.  

## Typescript/Javascript High Level Client SDK generator Design

The generated Typescript/Javascript SDK has the following structure: 

1. Client (Handled by [clientFileGenerator.ts](./src/generators/clientFileGenerator.ts))
1. Operation Interfaces (Handled by [operationInterfaceGenerator.ts](./src/generators/operationInterfaceGenerator.ts))
1. Operations (Handled by [operationGenerator.ts](./src/generators/operationGenerator.ts))
1. Models (Handled by [modelsGenerator.ts](./src/generators/modelsGenerator.ts))
1. Parameters (Handled by [parametersGenerator.ts](./src/generators/parametersGenerator.ts))
1. Mappers (Handled by [mappersGenerator.ts](./src/generators/mappersGenerator.ts))
1. Index File (Handled by [indexGenerator.ts](./src/generators/indexGenerator.ts))
1. Metadata (Handled [here](./src/generators/static))

The entry point for this design is at [main.ts](./src/main.ts) which invokes the [typescriptGenerator.ts](./src/typescriptGenerator.ts) and starts the entire generation process. You could find all the options that could be sent to the generator at [autorestOptions.ts](./src/utils/autorestOptions.ts)

On a high level, the entire SDK generation process would be:

Swagger Input -> Autorest Core & Modeler -> CodeModel -> TS/JS SDK Generator -> Generated SDK

Within the TS/JS SDK Generator, it has the following stages:

CodeModel + User Options -> Transform CodeModel -> Generate Client -> Generate Client Context -> Generate Operations/Interfaces -> Generate Models -> Generate Parameters -> Generate Index -> Format & Output Generated SDK  

### Prerequisite

Please follow the **[Prerequisite](../../CONTRIBUTING.md#prerequisites)** part to install the dependencies.

### Steps to clone, build & test

1. Use the following command to clone the Typescript/Javascript SDK generator repository:

```
git clone https://github.com/Azure/autorest.typescript.git
```

2. Use the following commands to build the SDK generator:

```
npm install -g @autorest/autorest
pnpm install
pnpm build
```

3. There are 3 test-suites in the generator:
   1. Unit tests (which could be found at `test/unit/*`)
   2. Integration tests (which could be found at `test/integration/*`)
   3. Smoke tests
   4. Version Tolerence Tests
4. You can run the Unit tests & Integration tests using the following command:

```
npm run test
```

Running the command above will do the following things:

- Start TestServer
- Build Autorest.Typescript
- Generate all scenarios in parallel (i.e. BodyString, BodyComplex, Url, CustomUrl, Header, XmlService
- Run all the tests under test/integration
- Stop TestServer

**_Note_**: If your development environment is Windows, then run the command `npm run start-test-server:v2`(in a seperate window) before running `npm run test` and run the command `npm run stop-test-server` after. (In non windows machines, we could run the test-server in the background automatically. But, in Windows machines, it has to be done manually.)

5. You can run the Smoke tests using the following command:

```
npm run clone:specs
npm run smoke-test
```

**_Note_**: If the command `npm run clone:specs` errors out with the following error:

```
fatal: destination path './.tmp/specs' already exists and is not an empty directory.
```

delete the `.tmp` folder and then try again.

### Version Tolerence Tests

Version tolerance tests provide coverage against unexpected **breaking changes** when generating a newer version of a swagger. RLCs are not expected to produce breaking changes unless the swagger itself has an API breaking change.

Version Tolerance tests would generate 2 clients one from an initial Swagger and a second from the `updated` swagger that contains changes that are not expected to generate breaking changes. The same set of tests is run against both generated clients to make sure no breaking changes resulted.

Version Tolerance tests have the following npm scripts:

- `npm run validate-version-tolerance`: generates SDKs and tests for breaking changes between swagger versions
- `generate-version-tolerance`: Generates version tolerance before and after sdks
- `generate-version-tolerance:tests`: generates `updated` spec.ts based on hand written tests against the initial SDK
- `test-version-tolerance`: executes all .spec.ts tests under `test/version-tolerance/`

In CI we'll run `npm run validate-version-tolerance` which calls all the other npm scripts. The other individual npm scripts are useful for development.

For more details on the implementation see [#1268](https://github.com/Azure/autorest.typescript/pull/1268)

### How to add an integration test case

Whenever you work on adding a feature/fixing a bug, this would probably be your first step. You create a test case and then run it through the generator, see the result, modify the generator, run it again and so on, until you get the desired output.

1. Create your test input. Below are some examples
   1. A simple [Swagger/OpenAPI file](./test/integration/swaggers/license-header.json))
   2. A standalone [configuration markup file](./test/integration/swaggers/bodyComplex.md) (pointing to Swagger file somewhere else)
   3. A combination of configuration markup file and Swagger/OpenAPI file.

Let us say your test input will be called `testUserCase.json`.

2. Now add the test input to the integration test suite to the file [`test-swagger-gen.ts`](./test/commands/test-swagger-gen.ts). In the file, add the following to the array `testSwaggers`:

```
testUserCase: {
    swaggerOrConfig: "test/integration/swaggers/testUserCase.json",
    clientName: "TestUserCaseClient",
    packageName: "test-user-case",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
},
```

3. Now, You can generate the SDK only for your test case with the following command: (Initially, during your development, you do not want to run all the cases during every step of your development. But, once your code changes are complete for your case, then you need to run the entire suite to ensure that your changes did not cause any unwanted changes.)

```
npm run generate-swaggers -- -b -i testUserCase
```

4. Once you are satisfied with the generated code, you can add a spec file such as `testUserCase.spec.ts` file [here](./test/integration). You can find several examples in the same place.

### How to debug an integration test case

#### `generate-swaggers` step

If you would like to debug the `generate-swaggers` step for our test input, use the following command:

```
npm run generate-swaggers -- -b -i testUserCase --debug
```

Now, the code will wait for the debugger to be attached. Open the repository in VS Code -> Select `Run and Debug` section -> Click `Attach`.

#### Spec file

If you would like to debug the `testUserCase.spec.ts` file (after the SDK is generated), Open the repository in VS Code -> Open the `testUserCase.spec.ts` file -> Select `Run and Debug` section -> Click `[autorest.typescript]-IntegrationTests - Current File`.

#### How to debug an unit test case

- In VS Code, We have created a Debugging profile for UnitTests to start debugging:

  1. Go to the debugger tab
  2. Select the "[autorest.typescript]-UnitTests" Profile
  3. Click the "Play" button

- Your breakpoints will start hitting, you can set breakpoints in either Test or Generator code

#### Integration Tests

- In order to debug integration tests you need to start the test server, by running:

      npm run start-test-server:v1

- Once the Test Server is running

  1. In VSCode go to the debugger tab
  2. Select the "[autorest.typescript]-IntegrationTests" profile from the drop down
  3. Click the "Play" button

- **\*\***IMPORTANT**\*\***: Running Integration Tests for debugging, does not re-generate the test clients so make sure that after each change you do:

  - Re-generate all the test swaggers

        npm run generate-swaggers -- --build

  - Re-generate a specific swagger

        npm run generate-swaggers -- -i bodyComplex -b

## Typescript/Javascript Rest Level Client generator Design

Rest Level Client generation will be trigger when you specify `--rest-level-client=true` in the command line.

The entry point for this design is at [main.ts](./src/main.ts) which invokes the [generateRestLevel.ts](./src/restLevelClient/generateRestLevel.ts) and starts the entire generation process. You could find all the options that could be sent to the generator at [autorestOptions.ts](./src/utils/autorestOptions.ts)

On a high level, the entire Rest Level Client generation process would be:

Swagger Input -> Autorest Core & Modeler -> CodeModel -> Transform RLCModel -> Call RLC Common library to Generate Code

Within the Transform RLCModel, it has the following stages:

CodeModel + User Options -> Transform RLCModel Paths -> Transform RLCModel Options -> Transform RLCModel Schemas -> Transform RLCModel Response and Parameter Types -> call RLCCommon libraries to generate the code.


### Steps to clone, build & test

1. Use the following command to clone the Typescript/Javascript SDK generator repository:

```
git clone https://github.com/Azure/autorest.typescript.git
```

2. Use the following commands to build the SDK generator:

```
npm install -g pnpm
pnpm install
pnpm build
```

3. There are also 3 test-suites in the RLC generator:
   1. Unit tests (which could be found at `test/unit/restLevelClient/*`)
   2. Integration tests (which could be found at `test/rlcIntegration/*`)
   3. Smoke tests
   4. Version Tolerence Tests
4. You can run the Unit tests & Integration tests using the following command:

```
npm run test
```

Running the command above will do the following things:

- Start TestServer
- Build Autorest.Typescript
- Generate all scenarios in parallel (i.e. BodyString, BodyComplex, Url, CustomUrl, Header, XmlService
- Run all the tests under test/integration
- Stop TestServer

**_Note_**: If your development environment is Windows, then run the command `npm run start-test-server:v2`(in a seperate window) before running `npm run test` and run the command `npm run stop-test-server` after. (In non windows machines, we could run the test-server in the background automatically. But, in Windows machines, it has to be done manually.)

5. You can run the Smoke tests using the following command:

```
npm run clone:specs
npm run smoke-test
```

**_Note_**: If the command `npm run clone:specs` errors out with the following error:

```
fatal: destination path './.tmp/specs' already exists and is not an empty directory.
```

delete the `.tmp` folder and then try again.

### Version Tolerence Tests

Version tolerance tests provide coverage against unexpected **breaking changes** when generating a newer version of a swagger. RLCs are not expected to produce breaking changes unless the swagger itself has an API breaking change.

Version Tolerance tests would generate 2 clients one from an initial Swagger and a second from the `updated` swagger that contains changes that are not expected to generate breaking changes. The same set of tests is run against both generated clients to make sure no breaking changes resulted.

Version Tolerance tests have the following npm scripts:

- `npm run validate-version-tolerance`: generates SDKs and tests for breaking changes between swagger versions
- `generate-version-tolerance`: Generates version tolerance before and after sdks
- `generate-version-tolerance:tests`: generates `updated` spec.ts based on hand written tests against the initial SDK
- `test-version-tolerance`: executes all .spec.ts tests under `test/version-tolerance/`

In CI we'll run `npm run validate-version-tolerance` which calls all the other npm scripts. The other individual npm scripts are useful for development.

For more details on the implementation see [#1268](https://github.com/Azure/autorest.typescript/pull/1268)

### How to add an integration test case

Whenever you work on adding a feature/fixing a bug, this would probably be your first step. You create a test case and then run it through the generator, see the result, modify the generator, run it again and so on, until you get the desired output.

1. Create your test input. Below are some examples
   1. A simple [Swagger/OpenAPI file](./test/rlcIntegration/swaggers/multipleUrlParameter.json))
   2. A standalone [configuration markup file](./test/rlcIntegration/swaggers/bodyComplex.md) (pointing to Swagger file somewhere else)
   3. A combination of configuration markup file and Swagger/OpenAPI file.

Let us say your test input will be called `testUserCase.json`.

2. Now add the test input to the integration test suite to the file [`test-swagger-gen.ts`](./test/commands/test-swagger-gen.ts). In the file, add the following to the array `rlcTestSwaggers`:

```
testUserCase: {
    swaggerOrConfig: "test/rlcIntegration/swaggers/testUserCase.json",
    clientName: "TestUserCaseClient",
    packageName: "test-user-case",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    restLevelClient: true
},
```

3. Now, You can generate the SDK only for your test case with the following command: (Initially, during your development, you do not want to run all the cases during every step of your development. But, once your code changes are complete for your case, then you need to run the entire suite to ensure that your changes did not cause any unwanted changes.)

```
npm run rlc-generate-swaggers -- -b -i testUserCase
```

4. Once you are satisfied with the generated code, you can add a spec file such as `testUserCaseRest.spec.ts` file [here](./test/rlcIntegration). You can find several examples in the same place.

### How to debug an integration test case

#### `rlc-generate-swaggers` step

If you would like to debug the `rlc-generate-swaggers` step for our test input, use the following command:

```
npm run rlc-generate-swaggers -- -b -i testUserCase --debug
```

Now, the code will wait for the debugger to be attached. Open the repository in VS Code -> Select `Run and Debug` section -> Click `Attach`.

#### Spec file

If you would like to debug the `testUserCaseRest.spec.ts` file (after the SDK is generated), Open the repository in VS Code -> Open the `testUserCaseRest.spec.ts` file -> Select `Run and Debug` section -> Click `IntegrationTests - Current File`.

#### How to debug an unit test case

- In VS Code, We have created a Debugging profile for UnitTests to start debugging:

  1. Go to the debugger tab
  2. Select the "Unit Test" Profile
  3. Click the "Play" button

- Your breakpoints will start hitting, you can set breakpoints in either Test or Generator code

#### Integration Tests

- In order to debug integration tests you need to start the test server, by running:

      npm run start-test-server:v1

- Once the Test Server is running

  1. In VSCode go to the debugger tab
  2. Select the "IntegrationTests" profile from the drop down
  3. Click the "Play" button

- **\*\***IMPORTANT**\*\***: Running Integration Tests for debugging, does not re-generate the test clients so make sure that after each change you do:

  - Re-generate all the test swaggers

        npm run rlc-generate-swaggers -- --build

  - Re-generate a specific swagger

        npm run rlc-generate-swaggers -- -i bodyComplexRest -b

### Before investing more time investigating

- Make sure to reset autorest, this will ensure that the versions used by Auotrest Core are the correct ones. This will solve many problems

      autorest --reset
