# Azure TypeScript SDK and RLC Code Generator Libraries

[![Build Status](https://dev.azure.com/azure-sdk/public/_apis/build/status/Azure.autorest.typescript)](https://dev.azure.com/azure-sdk/public/_build/latest?definitionId=1234)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)

> **Generate TypeScript SDKs and Rest Level Clients from OpenAPI specifications and TypeSpec definitions**

This repository contains the official Azure code generator libraries for creating TypeScript SDKs and Rest Level Client (RLC) libraries from API specifications. Whether you're working with OpenAPI/Swagger definitions or TypeSpec, these tools help you generate production-ready TypeScript clients for Azure services and APIs.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)  
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Packages](#packages)
- [Architecture](#architecture)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

This mono-repository provides three main code generation capabilities:

- **High-Level SDK Generation**: Generate full-featured TypeScript SDKs with rich type definitions and convenience methods
- **Rest Level Client Generation**: Generate lightweight, low-level HTTP clients with minimal abstractions  
- **TypeSpec Integration**: Native support for generating clients from TypeSpec definitions

Perfect for Azure service teams, API developers, and anyone needing to create TypeScript clients from API specifications.

## Prerequisites

- **Node.js**: Version 18 or higher
- **pnpm**: Version 10.12.1 or higher (install with `npm install -g pnpm`)
- **Git**: For cloning and contributing to the repository

## Installation

### Install Individual Packages

```bash
# For AutoRest TypeScript generation
npm install -g @autorest/typescript

# For TypeSpec TypeScript generation  
npm install -g @azure-tools/typespec-ts

# For shared RLC utilities (typically a dependency)
npm install @azure-tools/rlc-common
```

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Azure/autorest.typescript.git
cd autorest.typescript

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

## Quick Start

### Generate from OpenAPI/Swagger

```bash
# Generate a Rest Level Client
autorest --typescript --output-folder=./generated --input-file=./swagger.json

# Generate a High-Level SDK  
autorest --typescript --add-credentials --output-folder=./generated --input-file=./swagger.json
```

### Generate from TypeSpec

```bash
# Install TypeSpec compiler
npm install -g @typespec/compiler

# Generate TypeScript client from TypeSpec
tsp compile . --emit=@azure-tools/typespec-ts --option output-dir=./generated
```

### Use in Your Project

```typescript
// Generated RLC client usage
import { DefaultApi } from './generated';

const client = new DefaultApi({
  endpoint: 'https://api.example.com',
  credentials: { /* auth config */ }
});

const response = await client.getData();
```

## Packages

| Package | Description | Changelog | Latest | Next |
| ------- | ----------- | --------- | ------ | ---- |
| [@autorest/typescript][autorest_typescript_src] | **Core AutoRest Generator** - Generates High-Level SDKs and RLCs from OpenAPI specifications | [Changelog][autorest_typescript_chg] | [![](https://img.shields.io/npm/v/@autorest/typescript)](https://www.npmjs.com/package/@autorest/typescript) | ![](https://img.shields.io/npm/v/@autorest/typescript/next) |
| [@azure-tools/typespec-ts][typespec-ts_src] | **TypeSpec Emitter** - Generates TypeScript clients directly from TypeSpec definitions | [Changelog][typespec-ts_chg] | [![](https://img.shields.io/npm/v/@azure-tools/typespec-ts)](https://www.npmjs.com/package/@azure-tools/typespec-ts) | ![](https://img.shields.io/npm/@azure-tools/typespec-ts/next) |
| [@azure-tools/rlc-common][rlc-common_src] | **Shared RLC Library** - Common utilities and templates for Rest Level Client generation | [Changelog][rlc-common_chg] | [![](https://img.shields.io/npm/v/@azure-tools/rlc-common)](https://www.npmjs.com/package/@azure-tools/rlc-common) | ![](https://img.shields.io/npm/@azure-tools/rlc-common/next) |


[autorest_typescript_src]: packages/autorest.typescript/
[autorest_typescript_chg]: packages/autorest.typescript/CHANGELOG.md
[typespec-ts_src]: packages/typespec-ts
[typespec-ts_chg]: packages/typespec-ts/CHANGELOG.md
[rlc-common_src]: packages/rlc-common
[rlc-common_chg]: packages/rlc-common/CHANGELOG.md


> **Note:** `@next` versions contain the latest features from the `main` branch and may include breaking changes.

## Architecture

The code generation workflow supports two primary input types with a unified output model:

```mermaid
graph TD
    A[TypeSpec Files] -->|TypeSpec Compiler| B(TypeSpec Program)
    B -->|@azure-tools/typespec-ts| C{RLC Model}
    F[OpenAPI/Swagger Files] -->|AutoRest Core| G(Modelerfour)
    G -->|@autorest/typescript| C
    C -->|@azure-tools/rlc-common| D[Generated TypeScript Code]
    
    style A fill:#e1f5fe
    style F fill:#e1f5fe  
    style C fill:#f3e5f5
    style D fill:#e8f5e8
```

### Package Responsibilities

- **[@autorest/typescript][autorest_typescript_src]**: Transforms AutoRest code models into RLC models and provides high-level SDK generation capabilities
- **[@azure-tools/typespec-ts][typespec-ts_src]**: TypeSpec emitter that transforms TypeSpec programs into RLC models  
- **[@azure-tools/rlc-common][rlc-common_src]**: Shared code generation engine that creates TypeScript Rest Level Clients from RLC models

## Documentation

- 📖 **[RLC Generation Design](docs/RLC-generation-Design.md)** - Architecture and design principles
- 🔧 **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project
- 🚀 **[TypeSpec Documentation](https://typespec.io/)** - Learn about TypeSpec language and tooling
- 📚 **[AutoRest Documentation](https://github.com/Azure/autorest)** - AutoRest core concepts and usage

## Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Found a bug? [Open an issue](https://github.com/Azure/autorest.typescript/issues)
2. **Submit PRs**: Fix bugs, add features, or improve documentation  
3. **Improve Docs**: Help us make the documentation clearer and more comprehensive
4. **Share Feedback**: Let us know how we can make the tools better

Before contributing, please:
- Read our [Contributing Guidelines](CONTRIBUTING.md)
- Review the [Code of Conduct](CODE_OF_CONDUCT.md)
- Check existing issues and PRs to avoid duplicates

### Development Workflow

```bash
# Make your changes
pnpm build          # Build all packages
pnpm test           # Run tests  
pnpm lint           # Check code style
pnpm format         # Format code
```

## Troubleshooting

### Common Issues

**Installation Problems**
```bash
# Clear cache and reinstall
pnpm store prune
rm -rf node_modules package-lock.json
pnpm install
```

**Generation Failures**
- Ensure your OpenAPI spec is valid using tools like [Swagger Editor](https://editor.swagger.io/)
- Check that all required AutoRest parameters are provided
- Verify TypeSpec files compile without errors: `tsp compile . --emit=@typespec/openapi3`

**Build Errors**
- Make sure you're using Node.js 18+ and pnpm 10.12.1+
- Run `pnpm clean` and `pnpm build` to rebuild from scratch

### Getting Help

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Azure/autorest.typescript/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/Azure/autorest.typescript/discussions)  
- 📧 **Security Issues**: [Report via Microsoft Security Response Center](SECURITY.md)

## License

This project is licensed under the [MIT License](LICENSE). 

© Microsoft Corporation. All rights reserved.

---

**Related Projects:**
- [Azure SDK for TypeScript/JavaScript](https://github.com/Azure/azure-sdk-for-js)
- [TypeSpec](https://github.com/microsoft/typespec)  
- [AutoRest](https://github.com/Azure/autorest)

[autorest_typescript_src]: packages/autorest.typescript/
