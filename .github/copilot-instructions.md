# GitHub Copilot Instructions for autorest.typescript

This repository focuses on the TypeSpec TypeScript generator, which generates TypeScript client libraries from [TypeSpec](https://typespec.io/) specifications. TypeSpec is the recommended approach for describing cloud service APIs and generating client libraries.

> **Note:** While this repository also contains the AutoRest TypeScript generator for OpenAPI/Swagger specifications, we recommend using TypeSpec for new projects. The AutoRest generator is in maintenance mode and will be deprecated in the future.

## Project Structure

- `packages/typespec-ts/` - TypeSpec TypeScript generator

  - Generates TypeScript clients from TypeSpec definitions
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
  > **Note:** In maintenance mode, will be deprecated

## AutoRest TypeScript Generator

The AutoRest TypeScript generator (`autorest.typescript`) transforms OpenAPI/Swagger specifications into TypeScript client libraries. It supports two client styles:

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

## Upgrade TypeSpec relevant dependencies for TypeSpec TypeScript generator

To upgrade dependencies for the TypeSpec TypeScript generator, we need to focus on the `packages/typespec-ts/` and `packages/typespec-test/` packages only, not `packages/rlc-common` or `packages/autorest.typescript`.

- First look at the `package.json` files in these directories to identify the dependencies including devDependencies, peerDependencies, and dependencies.
- TypeSpec dependencies means any dependencies starting with `@typespec/` or `@azure-tools/` as these are relevant to TypeSpec and Azure tools.
- Do not update dependency for @typespec/ts-http-runtime.
- For spector relevant dependencies, the latest version which is tagged with `next` on npm including `@typespec/http-specs`, `@typespec/spector`, `@azure-tools/azure-http-specs`, and `@typespec/spec-api`.
- For other dependencies, check the latest versions which is tagged with `latest` on npm and update them accordingly.
- After updating the versions, run `rush update` to ensure all dependencies are correctly installed and the lock files are updated.
- Do run `rush build` to build the entire monorepo to check if any building issues introduced by upgrading.
- Do run `rush format` to format the codebase.
- Do run commands under `packages/typespec-ts/` to work on the TypeSpec TypeScript generator.
- Do run `rushx test` to run the TypeSpec generator tests to regen integration and run unit-test and if any issue try to fix it.
- Do run `rushx lint` to run the linter.
- Do run commands under `packages/typespec-test/` to work on the TypeSpec test framework.
- Do run `rushx test` to run the TypeSpec test framework tests to regen smoke testing for typespec and if any issue try to fix it.
