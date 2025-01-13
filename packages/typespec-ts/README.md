# Introduction

This library is the TypeSpec typescript emitter for Rest Level Client. It take [TypeSpec](https://github.com/microsoft/typespec) as input, transform it into RLCModel, then call rlc-common library to generate the RLC code.

On a high level, the entire Rest Level Client generation process would be:

TypeSpec Input -> TypeSpec Compiler -> TypeSpec Program -> Transform RLCModel -> TypeSpec RLC Common library to Generate Code

Within the Transform RLCModel, it has the following stages:

TypeSpec Program + User Options -> Transform RLCModel Paths -> Transform RLCModel Options -> Transform RLCModel Schemas -> Transform RLCModel Response and Parameter Types -> TypeSpec RLCCommon libraries to generate the code.

# How to use

## Prerequisite

Install [Node.js](https://nodejs.org/en/download/) 16 or above. (Verify by `node --version`)

Install [TypeSpec](https://github.com/microsoft/typespec) latest.

## Initialize TypeSpec Project

Follow [TypeSpec Getting Started](https://github.com/microsoft/typespec#getting-started) to initialize your TypeSpec project.

Make sure `npx tsp compile .` runs correctly.

## Add typespec-ts

Make sure the version of [typespec-ts release](https://www.npmjs.com/package/@azure-tools/typespec-ts) depends on the same version of "@typespec/compiler" as in your TypeSpec project.

Modify `package.json`, add one line under `dependencies`:

```diff
    "dependencies": {
      "@typespec/compiler": "latest",
      "@typespec/rest": "latest",
      "@azure-tools/typespec-azure-core": "latest",
+      "@azure-tools/typespec-ts": "latest"
    },
```

Run `npm install` again to install `@azure-tools/typespec-ts`.

Modify (or create) `tspconfig.yaml`, add one line under `emit`:

```diff
emit:
+  - "@azure-tools/typespec-ts"
```

## Modify tspconfig.yaml

One can further configure the SDK generated, using the emitter options on `@azure-tools/typespec-ts`.

```yaml
options:
  "@azure-tools/typespec-ts":
    packageDetails:
      name: "@azure-rest/confidential-ledger"
      description: "Confidential Ledger Service"
```

## Generate Typescript

Same `npx tsp compile .` or `npx tsp compile . --output-path=<target-folder>`.

If `output-path` option is not provided, generated code will be under `tsp-output` folder.

## Emitter Options

### packageDetails

Provide the metadata for `package.json`, `README.md` and user-agent information. And it's highly recommanded to set up this detail for your package.

| Property    | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| name        | the name of package.json file, usually start with `@azure-rest` if this is data-plane RLC client |
| description | description used in package.json file                                                            |
| version     | detailed version for your released package, the default vaule is `1.0.0-beta.1`                  |

### title (only for RLC generation)

Generally the codegen will leverage the title defined in `@client` and `@service` decorator in TypeSpec to name our RLC client. But if you'd like to override it you could config the `title` info.

```yaml
title: AnomalyDetectorRest
```

### typespecTitleMap (only for Modular generation)

Generally the codegen will leverage the title defined in `@client` and `@service` decorator in TypeSpec to name our modular client. But if you'd like to override it you could config the `typespecTitleMap` info. The key is the client name from typespec, and the value is the client name we'd like to rename. This also support config multiple clients

```yaml
typespecTitleMap: 
  AnomalyDetectorClient: AnomalyDetectorRest
  AnomalyDetectorClient2: AnomalyDetectorRest2
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

- To use `@useAuth` decorator in TypeSpec
- To config in yaml file

Please notice defining in TypeSpec is recommanded and also has higher priority than second one.

To enable credential in `tspconfig.yaml` and we need to provide more details to let codegen know types.

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

### clearOutputFolder

If we enable this option `clearOutputFolder` we would empty the whole output folder. By default we only empty the sources folder which means any metadata files will not be removed if it is at project root. This would be useful in pipeline.

```yaml
clearOutputFolder: true
```

### compatibilityMode

By default, this option will be disabled. If this option is enabled, it will affect the generation of the additional property feature for the Modular client.

```yaml
compatibilityMode: true
```

### compatibilityQueryMultiFormat

By default, this option will be disabled. If this option is enabled, we should generate the backward-compatible code for query parameter serialization for array types in RLC.

```yaml
compatibilityQueryMultiFormat: true
```

# Contributing

If you want to contribute on this project read the [contrubuting document](./CONTRIBUTING.md) for more details.
