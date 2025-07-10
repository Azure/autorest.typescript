# GitHub Copilot Instructions for autorest.typescript

This repository focuses on the TypeSpec TypeScript emitter, which generates TypeScript client libraries from [TypeSpec](https://typespec.io/) specifications.

## Key Concepts

We have two main SDK styles in this repository. One is the [REST Level Client (RLC) SDK](https://devblogs.microsoft.com/azure-sdk/azure-rest-libraries-for-javascript/), and the other is the [Modular SDK](https://devblogs.microsoft.com/azure-sdk/azure-sdk-modularized-libraries-for-javascript/).

1. **REST Level Client (RLC) SDK**

   - Low-level, direct mapping to REST API operations
   - One-to-one correspondence with API endpoints
   - Follows REST Level Client patterns
   - Minimal abstraction over HTTP operations

2. **Modular SDK**

   - Higher-level abstraction over REST API operations
   - Modularized design for better organization
   - Provides a more user-friendly API surface
   - Strong type safety and IntelliSense support

## Project Structure

- `packages/typespec-ts/` - TypeSpec TypeScript emitter

  - Generates TypeScript http clients from TypeSpec definitions and this is a plugin to the TypeSpec compiler which is called by the compiler with the compiled program as output:
    - Both RLC and Modular SDK generation
    - RLC provides low-level REST client operations
    - Modular SDK offers modern, enhanced developer experience

- `packages/rlc-common/` - Common utilities for REST Level Client generation

  - Some shared utilities among RLC and Modular SDK
  - Files generation changes and utilities specific to RLC go here

- `packages/typespec-test/` - Smoke test for TypeSpec TypeScript emitter

  - Under `packages/typespec-test/test/` directory, it contains various test scenarios for validating the TypeSpec TypeScript emitter
  - For each test scenario, the `spec` folder contains the TypeSpec definitions and the `generated` folder contains the generated TypeScript client libraries
  - Each test scenario is designed to ensure the generated client libraries are correct, buildable, and function as expected
  - The test scenarios cover both RLC and Modular SDK generation

- `packages/autorest.typescript/` - AutoRest TypeScript generator
  > **Note:** @autorest/typescript is in maintenance mode and should not be used as reference nor edited unless explicitly requested.

## AutoRest TypeScript Generator

The AutoRest TypeScript generator (`autorest.typescript`) is in maintenance mode and should not be used as reference nor edited unless explicitly requested. For more information [AutoRest documentation](https://github.com/Azure/autorest).

## TypeSpec Test Project

The TypeSpec test project (`typespec-test`) which is smoke test for TypeSpec emitter provides utilities and test fixtures for validating there is no build or compile issues for generated codes.

## TypeSpec TypeScript Emitter

The TypeSpec TypeScript emitter (`typespec-ts`) generates TypeScript client libraries from [TypeSpec](https://typespec.io/) specifications. The emitter supports two distinct SDK styles: RLC libraries and Modular libraries.

## How to Upgrade TypeSpec dependencies for @azure-tools/typespec-ts (packagest/typespec-ts)

When upgrading TypeSpec dependencies only work on `packages/typespec-ts/` and `packages/typespec-test/` . `packages/rlc-common` and `packages/autorest.typescript` should not be edited.

- Identify dependencies within the @typespec or @azure-tools npm-scopes under "dependencies", "devDependencies" and "peerDependencies" in package.json
- You should resolve the version in "next" tag for dependencies on `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, and `@typespec/spec-api`
- You should resolve the version in "latest" tag for the other dependencies
- Run "pnpm install" after editing the dependencies in package.json
- TypeSpec dependencies means any dependencies starting with `@typespec/` or `@azure-tools/` as these are relevant to TypeSpec and Azure tools.
- Do not update dependency for @typespec/ts-http-runtime.
- For spector relevant dependencies, the latest version which is tagged with `next` on npm including `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, and `@typespec/spec-api`.
- For other dependencies, check the latest versions which is tagged with `latest` on npm and update them accordingly.
- After updating the versions, run `pnpm install` to ensure all dependencies are correctly installed and the lock files are updated.
- Do run `pnpm build` to build the entire monorepo to check if any building issues introduced by upgrading.
- Do run `pnpm format` to format the codebase.
- Do run `npm run unit-test` under `packages/typespec-ts/` to validate our Unit Test and follow the below instructions to fix any test failures.
- Do run `npm run copy:typespec` to copy the files which integration test may use.
- Do run `npm run integration-test-ci:azure-modular` under `packages/typespec-ts/` to validate our Azure Modular Integration Test and follow the below instructions to fix any test failures. Please do not skip this test. This would take around 30 min.
- Do run `npm run integration-test-ci:modular` under `packages/typespec-ts/` to validate our Modular Integration Test and follow the below instructions to fix any test failures. Please do not skip this test. This would take around 30 min.
- Do run `npm run integration-test-ci:rlc` under `packages/typespec-ts/` to validate our RLC Integration Test and follow the below instructions to fix any test failures. Please do not skip this test. This would take around 30 min.
- Do run `npm run integration-test-ci:azure-rlc` under `packages/typespec-ts/` to validate our Azure RLC Integration Test and follow the below instructions to fix any test failures. Please do not skip this test. This would take around 30 min.
- Do wait all 4 integration tests to be done under `packages/typespec-ts/` even the integration would take around 1 hour or skip 4 integration testings under `packages/typespec-ts/`
- Do run `npm run lint` under `packages/typespec-ts/` to run the linter.
- Do run `npm run smoke-test` under `packages/typespec-test/` to validate our test scenarios for typespec and if any issue try to fix it.
- RLC integration testing finish is NOT enough and please pay patient to wait the Modular and Azure Modular integration completed.
- Do not write a summery if all 4 integration testings or smoke testing are still in progress and don't write final progress update if integration testing are still in progress and please monitor the job to be done not just running successfully
- Do wait around 1 hour that all tasks are completed not just start running
- Follow my instructions exactly and please don't skip modular or azure integrations and wait all 4 integrations
- Don't return or terminal AI during monitoring, please monitor the 4 integration status every 30 seconds until they finish
- Fix any issues that arise during the process, and ensure all tests pass before considering the upgrade complete

## How to run and fix test failures in TypeSpec TypeScript emitter

Run `pnpm install` and `pnpm build` before running tests.

The tests in the TypeSpec TypeScript emitter can be categorized into:

1. **Unit Tests** - These tests validate the functionality of individual components in isolation. They are typically fast and cover specific logic or behavior.
2. **Integration Tests** - These tests validate the interaction between multiple components or systems.
3. **Smoke Tests** - These tests provide a high-level validation of the overall functionality of the TypeSpec TypeScript emitter.

### How to run and fix Unit Tests

We have two types of unit tests in the TypeSpec TypeScript emitter:

- **RLC Unit Tests** - Located in `packages/typespec-ts/test/unit`. These tests validate the functionality of the REST Level Client (RLC) components.
- **Modular Unit Tests** - Located in `packages/typespec-ts/test/modularUnit`. These tests validate the functionality of the Modular SDK components.

The following commands should be ran under `packages/typespec-ts/`. To fix these tests, follow these steps:

- Do read existing RLC Unit tests in `packages/typespec-ts/test/unit` and Modular Unit tests in `packages/typespec-ts/test/modularUnit` to understand the expected behavior.
- Do run `npm run unit-test` to run both and `npm run test:rlc` to run the RLC unit tests and `npm run test:modular` to run the Modular unit tests.
- Do identify the failing tests and read the error messages to understand the root cause.
- For Modular failures, if the generated code is not as expected, you could try to regenerate the code by running `export SCENARIOS_UPDATE=true && npm run test:modular` to refresh the generated code.
- For RLC failures, if the generated code is not as expected, you need to update the relevant typescript codes and usually it is the second parameter in `assertEqualContent` function in the test files.
- If the test failures are due to that generated code has compile issues or can't format correctly, then this usually means this is an emitter issue and may be fixed under `packages/typespec-ts/src/modular` for Modular or `packages/typespec-ts/src/rlc/transform/` for RLC.
- After fixing the issues, run `npm run format` to format the codebase.
- Run `npm run unit-test` again to ensure all unit tests pass.

### How to run and fix Integration Tests

Please ensure you have ran `npm run copy:typespec` before running integration tests to ensure the TypeSpec definitions are copied to the correct location. We have four types of integration tests in the TypeSpec TypeScript emitter:

- **RLC Integration Tests** - Tag is `rlc` and located in `packages/typespec-ts/test/integration`. These tests validate the functionality of the REST Level Client (RLC) components.
- **Modular Integration Tests** - Tag is `modular` and located in `packages/typespec-ts/test/modularIntegration`. These tests validate the functionality of the Modular SDK components.
- **RLC Integration Tests for Azure** - Tag is `azure-rlc` and located in `packages/typespec-ts/test/azureIntegration`. These tests validate the functionality of the REST Level Client (RLC) components specifically for Azure services.
- **Modular Integration Tests for Azure** - Tag is `azure-modular` and located in `packages/typespec-ts/test/azureModularIntegration`. These tests validate the functionality of the Modular SDK components specifically for Azure services.

Generally integration tests involve mock servers to validate the end-to-end functionality of the generated clients

- First we need to run `npm run generate-tsp-only:tag` to regenerate the integration test scenarios e.g `npm run generate-tsp-only:rlc` for RLC integration tests or `npm run generate-tsp-only:azure-modular` for Modular for Azure integration tests.
- Relevant generated codes are located in `packages/typespec-test/test/**folder**/generated/` e.g `packages/typespec-test/test/rlc/generated/` for RLC integration tests or `packages/typespec-test/test/modular/generated/` for Modular integration tests.
- Then open a terminal in the `packages/typespec-ts/` directory and run `npm run start-test-server:tag` to start the test server for the specific integration test tag, e.g. `npm run start-test-server:rlc` for RLC integration tests or `npm run start-test-server:azure-modular` for Modular for Azure integration tests.
- If you meet issues during starting the test server, you could try to stop the test server first by running `npm run stop-test-server -- -p 3000` for RLC integration tests or `npm run stop-test-server -- -p 3002` for Modular integration tests, and then start the test server again.
- After the test server is started, you can run the integration tests in another terminal by running `integration-test:alone:tag` command, e.g. `npm run integration-test:alone:rlc` for RLC integration tests or `npm run integration-test:alone:azure-modular` for Modular for Azure integration tests.
- Do read existing RLC Integration tests in `packages/typespec-ts/test/integration` and Modular Integration tests in `packages/typespec-ts/test/modularIntegration` to understand the expected behavior.
- The code under `generated` directories is generated from TypeSpec definitions and should not be modified directly.
- If we have compile issues during running integration tests, it usually means the relevant integration test cases are not matched with the generated code, you need to update the test files under `packages/typespec-ts/test/**folder**/**.spec.ts` e.g. `packages/typespec-ts/test/integration/arrayItemTypes.spec.ts` for RLC integration tests with different item types for array elements.
- If all integration tests are passing, you can run `npm run stop-test-server -- -p 3000` to stop the RLC test server or `npm run stop-test-server -- -p 3002` to stop the Modular test server.
