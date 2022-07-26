# TypeScript Plugin for Autorest

[Autorest](https://github.com/Azure/autorest/blob/master/docs/readme.md) is a suite of tools to automatically generate SDKs for cloud services. This project provides an autorest extension that generates SDKs in TypeScript.

> **Note**: This project, [@autorest/typescript](https://www.npmjs.com/package/@autorest/typescript) is the latest version of the TS/JS SDK generator and is currently in preview. The earlier stable version of the SDK generator [@microsoft.azure/autorest.typescript](https://www.npmjs.com/package/@microsoft.azure/autorest.typescript) is available in the [v4x branch of the Azure/autorest.typescript repository](https://github.com/Azure/autorest.typescript/tree/v4x).

## Auto-generate your package in TypeScript using Autorest

It is easy to generate an SDK once you have a swagger specification file.

- You will need first to install Autorest

```bash
npm install -g autorest
```

- You can then generate the SDK as follows:

```bash
autorest --typescript <path to the swagger file>
```

- You will likely need to specify extra flags to control the behavior of the generation, and these flags are listed in the next section.

## Options

In addition to the [list of Autorest flags](https://github.com/Azure/autorest/blob/master/docs/generate/flags.md), you can further control the behavior of the typescript generator with the following flags:

| Flag                            | Description                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--use-core-v2`                 | Uses azure core v2 and it is enabled by default. Please set it to false if you need to regenerate a package that uses core-http and you do not want to do the migration to core v2 in that regeneration. For differences between v1 and v2, please refer to https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/README.md |
| `--hide-client`                 | Hides the client class from docs. This is typically useful when the you will write a convenience layer on top of the generated client                                                                                                                                                                                                |
| `--ignore-nullable-on-optional` | If an optional property is also marked as nullable, it will be treated as just optional                                                                                                                                                                                                                                              |
| `--generate-metadata`           | Generates meta files such as readme, license, package.json, etc. Typically, you need to specify this flag in your first generation only                                                                                                                                                                                              |
| `--tracing-info`                | Controls specification of meta info attached to requests for tracing purposes                                                                                                                                                                                                                                                        |
| `--disable-async-iterators`     | Does not generate async iterators needed for paging operations                                                                                                                                                                                                                                                                       |
| `--allow-insecure-connection`   | Allow generated clients to make requests to HTTP endpoints                                                                                                                                                                                                                                                                           |

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Autorest Typescript Plugin Configuration

```yaml
version: 3.6.6
use-extension:
  "@autorest/modelerfour": "4.23.5"

modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  # this will flatten modelers marked with 'x-ms-client-flatten'
  flatten-models: true
  # this will flatten parameters marked with 'x-ms-client-flatten'
  flatten-payloads: true
  # this will make the content-type parameter always specified
  always-create-content-type-parameter: true
  # enables parameter grouping via x-ms-parameter-grouping
  group-parameters: true
  # Enable older inconsistent behavior that an enum with a single value would become a constant by default.
  seal-single-value-enum-by-default: true
  legacy-request-body: true

typescript-scope/emitter:
  input-artifact: typescript-files

output-artifact: typescript-files
```

```yaml !$(generate-sample)
pipeline:
  typescript: # <- name of plugin
    input: modelerfour/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

```

```yaml $(generate-sample)
use-extension:
  "@autorest/testmodeler": "2.2.5"

try-require:
    - ./readme.test.md
    - ./readme.tests.md

testmodeler:
  split-parents-value: false

include-x-ms-examples-original-file: true
modelerfour:
  include-x-ms-examples-original-file: true

pipeline:
  test-modeler:
    input: modelerfour/identity
    # scope : output-scope
  test-modeler/identity:
    input: test-modeler
  typescript:
    input: test-modeler/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

```

### REST Client Generator overrides

```yaml $(rest-level-client)
modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  flatten-models: false
  flatten-payloads: false
  always-create-content-type-parameter: true
  group-parameters: false
```

## Help

```yaml
help-content:
  typescript: # type: Help as defined in autorest-core/help.ts
    activationScope: typescript
    categoryFriendlyName: Typescript Generator
    settings:
      - key: azure-arm
        description: Generate management plane flavor. Setting up the required flags for arm libraries
      - key: license-header
        description: "text to include as a header comment in generated files (magic strings: MICROSOFT_MIT, MICROSOFT_APACHE, MICROSOFT_MIT_NO_VERSION, MICROSOFT_APACHE_NO_VERSION, MICROSOFT_MIT_NO_CODEGEN)"
        type: string
      - key: add-credentials
        description: include a credential property and constructor parameter supporting different authentication behaviors
      - key: credential-scopes
        type: string | string[]
        description: Specify the scopes over which the credential functions. When generating management plane we default the scope to 'https://management.azure.com/.default'
      - key: package-name
        type: string
        description: The name of your package. This is the name your package will be published under.
      - key: source-code-folder-path
        type: string
        description: Where to output the generated code inside the output-folder. Defaults to src.
      - key: generate-metadata
        description: Whether to generate extra metadata in your package. For instance, generates a README file, license file etc if set to true.
      - key: disable-async-iterators
        description: Whether to generate pageable methods as AsyncIterators. Defaults to true.
```

## Language Specific Requirements: TypeScript

For TypeScript projects, simply import [autorest-extension-base](https://github.com/olydis/autorest-extension-base) which implements the AutoRest extension protocol and offers a simple API to register plugins.
See [index.ts](./index.ts).
