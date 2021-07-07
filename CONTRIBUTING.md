# Azure Typescript/Javascript SDK Generator Development

This contributing guide helps you to start working with and contributing to the Azure Typescript/Javascript SDK Generator.

## Prerequisites

### General Autorest generation design

_TBA_

### Typescript/Javascript SDK generator Design

The generated Typescript/Javascript SDK has the following structure:

1. Client (Handled by [clientFileGenerator.ts](./src/generators/clientFileGenerator.ts))
2. Client Context (Handled by [clientContextFileGenerator.ts](./src/generators/clientContextFileGenerator.ts))
3. Operation Interfaces (Handled by [operationInterfaceGenerator.ts](./src/generators/operationInterfaceGenerator.ts))
4. Operations (Handled by [operationGenerator.ts](./src/generators/operationGenerator.ts))
5. Models (Handled by [modelsGenerator.ts](./src/generators/modelsGenerator.ts))
6. Parameters (Handled by [parametersGenerator.ts](./src/generators/parametersGenerator.ts))
7. Index File (Handled by [indexGenerator.ts](./src/generators/indexGenerator.ts))
8. Metadata (Handled [here](./src/generators/static))

The entry point for this design is at [main.ts](./src/main.ts) which invokes the [typescriptGenerator.ts](./src/typescriptGenerator.ts) and starts the entire generation process. You could find all the options that could be sent to the generator at [autorestOptions.ts](./src/utils/autorestOptions.ts)

On a high level, the entire SDK generation process would be:

Swagger Input -> Autorest Core & Modeler -> CodeModel -> TS/JS SDK Generator -> Generated SDK

Within the TS/JS SDK Generator, it has the following stages:

CodeModel + User Options -> Transform CodeModel -> Generate Client -> Generate Client Context -> Generate Operations/Interfaces -> Generate Models -> Generate Parameters -> Generate Index -> Format & Output Generated SDK

### Steps to clone, build & test

1. Use the following command to clone the Typescript/Javascript SDK generator repository:

```
git clone https://github.com/Azure/autorest.typescript.git
```

2. Use the following commands to build the SDK generator:

```
cd autorest.typescript
npm install
npm run build
```

3. There are 3 test-suites in the generator:
   1. Unit tests (which could be found at `test/unit/*`)
   2. Integration tests (which could be found at `test/integration/*`)
   3. Smoke tests
4. You can run the Unit tests & Integration tests using the following command:

```
npm run test
```

**_Note_**: If your development environment is Windows, then run the command `npm run start-test-server:v2`(in a seperate window) before running `npm run test` and run the command `npm run stop-test-server` after.

5. You can run the Smoke tests using the following command:

```
npm run clone:specs
npm run smoke-test
```

**_Note_**: If the command `npm run clone:specs` errors out, delete the `.tmp` folder and then try again.

### How to add an integration test case

In this section, we would learn the steps to add a integration test case. Why is this important? Whenever you work on adding a feature/fixing a bug, this would probably be your first step. You create a test case and then run it through the generator, see the result, modify the generator, run it again and so on, until you get the desired output.

1. Create your test input. In our case, it could be
   1. A simple Swagger/OpenAPI file (Eg: Available [here](./test/integration/swaggers/license-header.json))
   2. A standalone configuration markup file (pointing to Swagger file somewhere else)(Eg: Available [here](./test/integration/swaggers/bodyComplex.md))
   3. A combination of configuration markup file and Swagger/OpenAPI file.(Eg: Available [here](./test/integration/swaggers/textAnalytics.md) and [here](./test/integration/swaggers/textAnalytics.json))

Let us say your test input will be called `testUserCase.json`.

2. Now add the test input to the integration test suite to the file [`test-swagger-gen.ts`](./test/utils/test-swagger-gen.ts). In the file, add the following to the array `testSwaggers`:

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

If you would like to debug the `testUserCase.spec.ts` file (after the SDK is generated), Open the repository in VS Code -> Open the `testUserCase.spec.ts` file -> Select `Run and Debug` section -> Click `IntegrationTests - Current File`.

### Before creating the PR

If your test case is working fine as expected, now you are ready to create the PR. But, before that, make sure you run all the tests (Unit/Integration/Smoke) and ensure there are no unintentional changes. And if there are any changes (intentional) in any of the test cases, include those files also in your PR.
