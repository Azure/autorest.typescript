# Azure TypeScript SDK and RLC Code Generator Libraries

This repository is the code generator libraries for Azure TypeScript SDK and Azure TypeScript Rest Level Client libraries.

## Packages

| Name                                                                        | Changelog                                    | Latest                                                                                                                                               | Next                                                                            |
| --------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [@autorest/typescript][autorest_typescript_src]                             | [Changelog][autorest_typescript_chg]               | [![](https://img.shields.io/npm/v/@autorest/typescript)](https://www.npmjs.com/package/@autorest/typescript)                             | ![](https://img.shields.io/npm/v/@autorest/typescript/next)               |
| [@azure-tools/cadl-typescript][cadl-typescript_src]                         | [Changelog][cadl-typescript_chg]             | [![](https://img.shields.io/npm/v/@azure-tools/cadl-typescript)](https://www.npmjs.com/package/@azure-tools/cadl-typescript)                         | ![](https://img.shields.io/npm/@azure-tools/cadl-azure-core/next)               |
| [@azure-tools/rlc-common][rlc-common_src]       | [Changelog][rlc-common_chg] | [![](https://img.shields.io/npm/v/@azure-tools/rlc-common)](https://www.npmjs.com/package/@azure-tools/rlc-common) | ![](https://img.shields.io/npm/@azure-tools/rlc-common/next)   |


[autorest_typescript_src]: packages/autorest.typescript/
[autorest_typescript_chg]: packages/autorest.typescript/CHANGELOG.md
[cadl-typescript_src]: packages/cadl-typescript
[cadl-typescript_chg]: packages/cadl-typescript/CHANGELOG.md
[rlc-common_src]: packages/rlc-common
[rlc-common_chg]: packages/rlc-common/CHANGELOG.md


`@next` version of the package are the latest versions available on the `main` branch.

### General Introduction

Inside this project, we support both high level client generation and rest level client generation. In the rest level client generation, we support generate code from both rest api specs and cadl. In the high level client generation, we only support generation from rest api specs.  

- [**@autorest/typescript:**](https://github.com/Azure/autorest.typescript/tree/main/packages/autorest.typescript) contains the original high level client generation and the rest level client generation, mostly including the transformation from autorest code model into RLC model part.
- [**@azure-tools/cadl-typescript:**](https://github.com/Azure/autorest.typescript/tree/main/packages/cadl-typescript) is the typescript cadl emitter, which contains the transformation from cadl model into RLC model.
- [**@azure-tools/rlc-common:**](https://github.com/Azure/autorest.typescript/tree/main/packages/rlc-common) contains the common generation logic from RLC model into rest client libraries code part. Which is depended by both `@autorest/typescript` rlc generation part and `@azure-tools/cadl-typescript`.
