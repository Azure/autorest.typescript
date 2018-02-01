
# Installation
```
npm install -g autorest
```

# Usage
### Basic Usage:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version>
```
If you have a markdown config file then there is no need to use `--input-file`, simply provide the path to the markdown file:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib or src folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION <path-to-readme.md> --package-name=<your-package-name> --package-version<your-package-version>
```
### Generate Metadata files
Generating MetaData files enable you to build and pack the result as an NPM Package.
If you want to generate metadata files provide `--generate-metadata=true`

- package.json
- .npmignore
- webpack.config.js
- tsconfig.json
- README.md (with a sample))

**NOTE:**
- This will generate all the metadata files one level above the output-folder.
- The output-folder **must end in the lib folder** for now. For example `--output-folder=D:\tmp\TSProject\lib`. This is required because the includes array in tsconfig.json and stuff inside webpack.config.js is hardwired to look for the generated stuff inside the lib folder.

```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version> --generate-metadata=true
```

###Azure Service Client
For generating a client for an azure service, provide `--typescript.azure-arm=true`:
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version> --generate-metadata=true --typescript.azure-arm=true
```

### With Client Credentials
If you want to use services which need authorization you need to generate a constructor taking `msRest.ServiceClientCredentials`. In order to to do so add `--add-credentials` as commandline parameter
```
autorest --typescript --output-folder=<path-to-the-output-folder(usually upto lib folder of your project)> --license-header=MICROSOFT_MIT_NO_VERSION --input-file=<path-to-swagger-spec> --package-name=<your-package-name> --package-version<your-package-version> --add-credentials=true
```

the generated constructor will look like
```
constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRest.ServiceClientOptions)
```

### Furhter Documentation on the CMD Line
The complete list of CMD line arguments can be found [here](https://github.com/Azure/autorest/blob/master/docs/user/cli.md). Not every CMD line switch is available for the typescript extension.

# Development

### Building the project
After cloning the repo, execute:
- `npm install`
- `npm install -g gulp` (gulp should be installed globally too)
- `npm run build`

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
