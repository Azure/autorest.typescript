# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Simple AutoRest Extension

A simple AutoRest extension that can be used as a template for or documentation about writing such extensions.
Since this a TypeScript project, we distinguish between language agnostic and language dependent requirements.

## Language Agnostic Requirements

More information about these can be found [here](https://github.com/Azure/autorest/tree/master/docs/developer), summary:

1. Specify the start command of the extension as the `start` script in the `package.json`
2. Implement the AutoRest extension protocol (here: handled by library, see below)
3. Hook up plugins into the AutoRest pipeline DAG, e.g.

```yaml
version: 3.1.2
use-extension:
  "@autorest/modelerfour": "4.15.456"

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

pipeline:
  typescript: # <- name of plugin
    input: modelerfour/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

typescript-scope/emitter:
  input-artifact: typescript-files

output-artifact: typescript-files
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
