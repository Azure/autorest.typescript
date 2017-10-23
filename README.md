
# Installation
```
npm install -g autorest
```

# Usage
- Basic Usage:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib or src folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version>
```
- If you have a markdown config file then there is no need to use --input-file, simply provide the path to the markdown file:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib or src folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION <path-to-readme.md> --package-name=<your-package-name> --package-version<your-package-version>
```
- If you want to generate metadata files **__(package.json, .npmignore, webpack.config.js, tsconfig.json, README.md(with a sample))__**, then provide `--generate-metadata=true`:

**NOTE: This will generate all the __metadata__ files one level above the output-folder.**
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib or src folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version> --generate-metadata=true
```

- For generating a client for an azure service, provide `--typescript.azure-arm=true`:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib or src folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version> --generate-metadata=true --typescript.azure-arm=true
```

# Development

### Building the project
After cloning the repo, execute:
- `npm install`
- `gulp build` (Make sure you have gulp installed globally too (`npm install -g gulp`))

### Testing the developed changes
- `gulp regenerate`
- `gulp test`

### Debugging using vscode
Add the `--typescript.debugger` to the command line and then use the Attach to Debugger option from vscode. Attach to the dotnet.exe process id that is provided in the command line.
We have the .vscode folder in the repo that has the config for attaching to the debugger.

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
  "@microsoft.azure/autorest.modeler": "2.1.23"

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
