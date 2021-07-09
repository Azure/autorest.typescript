# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments

# How to contribute to the Azure TypeScript SDK generator project

There are many ways that you can contribute to the Azure TypeScript SDK generator project:

- Submit a bug
- Submit a code fix for a bug
- Submit additions or modifications to the documentation
- Submit a feature request

All code submissions will be reviewed and tested by the team, and those that meet a high bar for both quality and design/roadmap appropriateness will be merged into the source. Be sure to follow the existing file/folder structure when adding new boards or sensors.

If you encounter any bugs please file an issue in the [Issues](https://github.com/Azure/autorest.typescript/issues) section of the project.

## Things to keep in mind when contributing

Some guidance for when you make a contribution:

- Add/update unit tests and code as required by your change
- Make sure you run all the unit tests on the affected platform(s)/languages. If the change is in common code, generally running on one platform would be acceptable.
- Run end-to-end tests or simple sample code to make sure the lib works in an end-to-end scenario.

## Big contributions

If your contribution is significantly big it is better to first check with the project developers in order to make sure the change aligns with the long term plans. This can be done simply by submitting a question via the GitHub Issues section.

Want to get started hacking on the code? Great! Keep reading. This contributing guide helps you to start working with and contributing to the Azure Typescript/Javascript SDK Generator.

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

Whenever you work on adding a feature/fixing a bug, this would probably be your first step. You create a test case and then run it through the generator, see the result, modify the generator, run it again and so on, until you get the desired output.

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
