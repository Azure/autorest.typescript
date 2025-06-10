# GitHub Copilot Instructions for autorest.typescript

This repository focuses on the TypeSpec TypeScript generator, which generates TypeScript client libraries from [TypeSpec](https://typespec.io/) specifications. TypeSpec is the recommended approach for describing cloud service APIs and generating client libraries.

> **Note:** While this repository also contains the AutoRest TypeScript generator for OpenAPI/Swagger specifications, we recommend using TypeSpec for new projects. The AutoRest generator is in maintenance mode and will be deprecated in the future.

## Project Structure

- `packages/typespec-ts/` - TypeSpec TypeScript generator

  - Generates TypeScript http clients from TypeSpec definitions. It can generate two kinds of clients, depending on the emitter configuration:
  - Supports both RLC and Modular SDK generation
  - RLC provides low-level REST client operations
  - Modular SDK offers modern, enhanced developer experience
  - Uses TypeSpec compiler for processing

- `packages/rlc-common/` - Common utilities for REST Level Client generation

  - Core RLC patterns and utilities
  - Shared code for TypeSpec RLC implementation
  - Location for RLC changes and improvements

- `packages/typespec-test/` - Test utilities and fixtures for TypeSpec code generation

  - Test framework for TypeSpec generator
  - Sample TypeSpec definitions
  - Validation utilities
  - Test fixtures and helpers

- `packages/autorest.typescript/` - AutoRest TypeScript generator
  > **Note:** @autorest/typescript is in maintenance mode and should not be used as reference nor edited unless explicitly requested.

## AutoRest TypeScript Generator

The AutoRest TypeScript generator (`autorest.typescript`)  is in maintenance mode and should not be used as reference nor edited unless explicitly requested. For more information [AutoRest documentation](https://github.com/Azure/autorest).

1. **REST Level Client (RLC)** - Low-level mapping to REST operations
2. **High Level Client (HLC)** - Higher-level abstraction layer

For detailed documentation on the AutoRest generator, please refer to the [AutoRest documentation](https://github.com/Azure/autorest).

## TypeSpec Test Framework

The TypeSpec test framework (`typespec-test`)provides utilities and test fixtures for validating TypeSpec code generation. Here are the key aspects to consider:

## TypeSpec TypeScript Generator

The TypeSpec TypeScript generator (`typespec-ts`) generates TypeScript client libraries from [TypeSpec](https://typespec.io/) specifications. TypeSpec is a language specifically designed for API development that:

- Provides a more intuitive way to describe APIs
- Supports rich type systems and inheritance
- Enables better code organization through namespaces and imports
- Allows custom decorators for metadata and behavior
- Generates consistent API artifacts (clients, documentation, etc.)

The generator supports two distinct SDK styles:

### SDK Generation Styles

1. **REST Level Client (RLC)**

   - Low-level, direct mapping to REST API operations
   - One-to-one correspondence with API endpoints
   - Follows REST Level Client patterns
   - Minimal abstraction over HTTP operations
   - Ideal for custom client implementations

2. **Modular SDK**

   - Next generation of High Level Client (HLC)
   - Modern, enhanced developer experience
   - Structured around service capabilities
   - Strong type safety and IntelliSense support
   - Improved error handling and diagnostics

## How to Upgrade TypeSpec dependencies for @azure-tools/typespec-ts (packagest/typespec-ts)

When upgrading TypeSpec dependencies only work on `packages/typespec-ts/` and `packages/typespec-test/` . `packages/rlc-common` and `packages/autorest.typescript` should not be edited.

- Identify dependencies within the @typespec or @azure-tools npm-scopes under "dependencies", "devDependencies" and "peerDependencies" in package.json
- You should use "next" tag for dependencies on `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, and `@typespec/spec-api`
- You should use "latest" for the other TypeSpec dependencies
- Run "rush update" after editing the dependencies in package.json
- TypeSpec dependencies means any dependencies starting with `@typespec/` or `@azure-tools/` as these are relevant to TypeSpec and Azure tools.
- Do not update dependency for @typespec/ts-http-runtime.
- For spector relevant dependencies, the latest version which is tagged with `next` on npm including `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, and `@typespec/spec-api`.
- For other dependencies, check the latest versions which is tagged with `latest` on npm and update them accordingly.
- After updating the versions, run `rush update` to ensure all dependencies are correctly installed and the lock files are updated.
- Do run `rush build` to build the entire monorepo to check if any building issues introduced by upgrading.
- Do run `rush format` to format the codebase.
- Do run commands under `packages/typespec-ts/` to work on the TypeSpec TypeScript generator.
- Do run `rushx test` to run the testing and follow the instructions below to fix any test failures.
- Do run `rushx lint` to run the linter.
- Do run commands under `packages/typespec-test/` to work on the TypeSpec test framework.
- Do run `rushx test` to run the TypeSpec test framework tests to regen smoke testing for typespec and if any issue try to fix it.

## How to run and fix test failures in TypeSpec TypeScript generator

Run `rush update` and `rush build` before running tests. 

The tests in the TypeSpec TypeScript generator can be categorized into:

1. **Unit Tests** - These tests validate the functionality of individual components in isolation. They are typically fast and cover specific logic or behavior.
2. **Integration Tests** - These tests validate the interaction between multiple components or systems.
3. **Smoke Tests** - These tests provide a high-level validation of the overall functionality of the TypeSpec TypeScript generator.

### How to run and fix Unit Tests

We have two types of unit tests in the TypeSpec TypeScript generator:

- **RLC Unit Tests** - Located in `packages/typespec-ts/test/unit`. These tests validate the functionality of the REST Level Client (RLC) components.
- **Modular Unit Tests** - Located in `packages/typespec-ts/test/modularUnit`. These tests validate the functionality of the Modular SDK components.

To fix these tests, follow these steps:

- Do read existing RLC Unit tests in `packages/typespec-ts/test/unit` and Modular Unit tests in `packages/typespec-ts/test/modularUnit` to understand the expected behavior.
- Do run `rushx unit-test` to run both and `rushx test:rlc` to run the RLC unit tests and `rushx test:modular` to run the Modular unit tests.
- Do identify the failing tests and read the error messages to understand the root cause.
- For Modular failures, if the generated code is not as expected, you could try to regenerate the code by running `export SCENARIOS_UPDATE=true && rushx rushx test:modular` to refresh the generated code.
- For RLC failures, if the generated code is not as expected, you need to update the relevant typescript codes and usually it is the second parameter in `assertEqualContent` function in the test files.
- If the test failures are due to that generated code has compile issues or can't format correctly, then this usually means this is an emitter issue and may be fixed under `packages/typespec-ts/src/modular` for Modular or `packages/typespec-ts/src/rlc/transform/` for RLC.
- After fixing the issues, run `rushx format` to format the codebase.
- Run `rushx unit-test` again to ensure all unit tests pass.

### How to run and fix Integration Tests

Please ensure you have ran `rushx copy:typespec` before running integration tests to ensure the TypeSpec definitions are copied to the correct location. We have four types of integration tests in the TypeSpec TypeScript generator:

- **RLC Integration Tests** - Tag is `rlc` and located in `packages/typespec-ts/test/integration`. These tests validate the functionality of the REST Level Client (RLC) components.
- **Modular Integration Tests** - Tag is `modular` and located in `packages/typespec-ts/test/modularIntegration`. These tests validate the functionality of the Modular SDK components.
- **RLC Integration Tests for Azure** - Tag is `azure-rlc` and located in `packages/typespec-ts/test/azureIntegration`. These tests validate the functionality of the REST Level Client (RLC) components specifically for Azure services.
- **Modular Integration Tests for Azure** - Tag is `azure-modular` and located in `packages/typespec-ts/test/azureModularIntegration`. These tests validate the functionality of the Modular SDK components specifically for Azure services.

Generally integration tests involve mock servers to validate the end-to-end functionality of the generated clients

- First we need to run `rushx generate-tsp-only:tag` to regenerate the integration test scenarios e.g `rushx generate-tsp-only:rlc` for RLC integration tests or `rushx generate-tsp-only:azure-modular` for Modular for Azure integration tests.
- Relevant generated codes are located in `packages/typespec-test/test/**folder**/generated/` e.g `packages/typespec-test/test/rlc/generated/` for RLC integration tests or `packages/typespec-test/test/modular/generated/` for Modular integration tests.
- Then open a terminal in the `packages/typespec-ts/` directory and run `rushx start-test-server:tag` to start the test server for the specific integration test tag, e.g. `rushx start-test-server:rlc` for RLC integration tests or `rushx start-test-server:azure-modular` for Modular for Azure integration tests.
- If you meet issues during starting the test server, you could try to stop the test server first by running `npm run stop-test-server -- -p 3000` for RLC integration tests or `npm run stop-test-server -- -p 3002` for Modular integration tests, and then start the test server again.
- After the test server is started, you can run the integration tests in another terminal by running `integration-test:alone:tag` command, e.g. `rushx integration-test:alone:rlc` for RLC integration tests or `rushx integration-test:alone:azure-modular` for Modular for Azure integration tests.
- Do read existing RLC Integration tests in `packages/typespec-ts/test/integration` and Modular Integration tests in `packages/typespec-ts/test/modularIntegration` to understand the expected behavior.
- The code under `generated` directories is generated from TypeSpec definitions and should not be modified directly.
- If we have compile issues during running integration tests, it usually means the relevant integration test cases are not matched with the generated code, you need to update the test files under `packages/typespec-ts/test/**folder**/**.spec.ts` e.g. `packages/typespec-ts/test/integration/arrayItemTypes.spec.ts` for RLC integration tests with different item types for array elements.
- If all integration tests are passing, you can run `npm run stop-test-server -- -p 3000` to stop the RLC test server or `npm run stop-test-server -- -p 3002` to stop the Modular test server.