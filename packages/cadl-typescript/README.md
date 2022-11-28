# Introduction

This library is the Cadl typescript emitter for Rest Level Client. It take [Cadl](https://github.com/microsoft/cadl) as input, transform it into RLCModel, then call rlc-common library to generate the RLC code.

On a high level, the entire Rest Level Client generation process would be:

Cadl Input -> Cadl Compiler -> Cadl Program -> Transform RLCModel -> Call RLC Common library to Generate Code

Within the Transform RLCModel, it has the following stages:

Cadl Program + User Options -> Transform RLCModel Paths -> Transform RLCModel Options -> Transform RLCModel Schemas -> Transform RLCModel Response and Parameter Types -> call RLCCommon libraries to generate the code.

# How to use

## Prerequisite

Install [Node.js](https://nodejs.org/en/download/) 16 or above. (Verify by `node --version`)

Install [Cadl](https://github.com/microsoft/cadl/) 0.37.

## Initialize Cadl Project

Follow [Cadl Getting Started](https://github.com/microsoft/cadl/#using-node--npm) to initialize your Cadl project.

Make sure `npx cadl compile .` runs correctly.

## Add cadl-typescript

Make sure the version of [cadl-typescript release](https://www.npmjs.com/package/@azure-tools/cadl-typescript) depends on the same version of "@cadl-lang/compiler" as in your Cadl project.

Modify `package.json`, add one line under `dependencies`:

```diff
    "dependencies": {
      "@cadl-lang/compiler": "^0.37.0",
      "@cadl-lang/rest": "^0.19.0",
      "@azure-tools/cadl-azure-core": "^0.9.0",
+      "@azure-tools/cadl-typescript": "1.0.0-beta.4"
    },
```

Run `npm install` again to install `@azure-tools/cadl-typescript`.

Modify (or create) `cadl-project.yaml`, add one line under `emitters`:

```diff
emitters:
+  "@azure-tools/cadl-typescript": true
```

## Modify cadl-project.yaml

One can further configure the SDK generated, using the emitter options on `@azure-tools/cadl-typescript`.

```yaml
emitters:
  "@azure-tools/cadl-typescript":
    packageDetails:
      name: "@azure-rest/confidential-ledger"
      description: "Confidential Ledger Service"
```

## Generate Typescript

Same `npx cadl compile .` or `npx cadl compile . --outputPath=<target-folder>`.

If `outputPath` option is not provided, generated code will be under `cadl-output` folder.

## Emitter Options

### packageDetails

Provide the metadata for `package.json`, `README.md` and user-agent information. And it's highly recommanded to set up this detail for your package.

| Property    | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| name        | the name of package.json file, usually start with `@azure-rest` if this is data-plane RLC client |
| description | description used in package.json file                                                            |
| version     | detailed version for your released package, the default vaule is `1.0.0-beta.1`                  |

### title

Generally the codegen will leverage the title defined in `@service` decorator in Cadl to name our client. But if you'd like to override it you could config the `title` info.

```yaml
title: AnomalyDetectorRest
```

### generateMetadata

To indicate if the codegen needs to generate metadata files which includes `package.json`, `README.md` and `tsconfig.json` etc.

By default we'll enable the option but if you'd like to disable this feature you could set it as `false`.

```yaml
generateMetadata: false
```

### generateTest

To allow the codegen generating test sample files and updating testing configuration. And the default value is `true` and you could also turn it off as `false`.

### includeShortcuts

To allow the codegen generating shortcut methods in client definition. This is an experimental feature so we disable it by default. If you want to try it just turn it on.

```yaml
includeShortcuts: true
```

### azureSdkForJs

This is used to indicate your project is generated in [azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js) repo or not. If your package is located in that repo we'll leverage `dev-tool` to accelerate our building and testing, however if not we'll remove the dependency for that tool.

Usually the released JS sdk will be put into azure-sdk-for-js so we enable this option by default.

### addCredentials

We support two types of authentication: Azure Key Credential(AzureKey) and Token credential(AADToken), any other will need to be handled manually.

There are two ways to set up our credential details

- To use `@useAuth` decorator in Cadl
- To config in yaml file

Please notice defining in Cadl is recommanded and also has higher priority than second one.

To enable credential in `cadl-project.yaml` and we need to provide more details to let codegen know types.

### credentialScopes

If we enable the option `addCredentials` and specify `credentialScopes` the details we would enable the AADToken authentication.

```yaml
addCredentials: true
credentialScopes: https://yourendpoint.azure.com/.default
```

### credentialKeyHeaderName

If we enable the option `addCredentials` and specify `credentialKeyHeaderName` the details we would enable the AzureKey authentication.

```yaml
addCredentials: true
credentialKeyHeaderName: Your-Subscription-Key
```

# Contributing

If you want to contribute on this project read the [contrubuting document](./CONTRIBUTING.md) for more details.
