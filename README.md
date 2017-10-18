
# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# AutoRest extension configuration

``` yaml
use-extension:
  "@microsoft.azure/autorest.modeler": "2.1.22"

pipeline:
  typescript/modeler:
    input: swagger-document/identity
    output-artifact: code-model-v1
    scope: typescript
  typescript/commonmarker:
    input: modeler
    output-artifact: code-model-v1
  typescript/cm/transform:
    input: commonmarker
    output-artifact: code-model-v1
  typescript/cm/emitter:
    input: transform
    scope: scope-cm/emitter
  typescript/generate:
    plugin: typescript
    input: cm/transform
    output-artifact: source-file-typescript
  typescript/transform:
    input: generate
    output-artifact: source-file-typescript
    scope: scope-transform-string
  typescript/emitter:
    input: transform
    scope: scope-typescript/emitter
    
scope-typescript/emitter:
  input-artifact: source-file-typescript
  output-uri-expr: $key

output-artifact:
- source-file-typescript
```
