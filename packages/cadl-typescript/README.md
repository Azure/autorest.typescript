# Cadl typescript introduction

This library is the cadl typescript emitter for Rest Level Client. It take [cadl](https://github.com/microsoft/cadl) as input, transform it into RLCModel, then call rlc-common library to generate the RLC code.

On a high level, the entire Rest Level Client generation process would be:

Cadl Input -> Cadl Compiler -> Cadl Program -> Transform RLCModel -> Call RLC Common library to Generate Code

Within the Transform RLCModel, it has the following stages:

Cadl Program + User Options -> Transform RLCModel Paths -> Transform RLCModel Options -> Transform RLCModel Schemas -> Transform RLCModel Response and Parameter Types -> call RLCCommon libraries to generate the code.

# How to use

## Prerequisite

Install [Node.js](https://nodejs.org/en/download/) 16 or above. (Verify by `node --version`)

Install [Cadl](https://github.com/microsoft/cadl/) 0.36.

## Initialize Cadl Project

Follow [Cadl Getting Started](https://github.com/microsoft/cadl/#using-node--npm) to initialize your Cadl project.

Make sure `npx cadl compile .` runs correctly.

## Add cadl-typescript

Make sure the version of [cadl-typescript release](https://www.npmjs.com/package/@azure-tools/cadl-typescript) depends on the same version of "@cadl-lang/compiler" as in your Cadl project.

Modify `package.json`, add one line under `dependencies`:

```diff
    "dependencies": {
      "@cadl-lang/compiler": "^0.36.0",
      "@cadl-lang/rest": "^0.18.0",
      "@azure-tools/cadl-azure-core": "^0.8.0",
+      "@azure-tools/cadl-typescript": "1.0.0-beta.3"
    },
```

Run `npm install` again to install `@azure-tools/cadl-typescript`.

Modify (or create) `cadl-project.yaml`, add one line under `emitters`:

```diff
emitters:
+  "@azure-tools/cadl-typescript": true
```

## Set up configurations

### cadl-project.yaml

Modify (or create) `cadl-project.yaml`, add one line under `emitters`:

One can further configure the SDK generated, using the emitter options on `@azure-tools/cadl-java`.

```yaml
emitters:
  "@azure-tools/cadl-java":
    generateMetadata: true
    addCredentials: false
    title: ArrayItemTypesClient
    packageDetails:
      name: "@msinternal/array-itemtypes"
      description: "Array item-types Test Service"
      version: "1.0.0"
```

### Options

## Generate Typescript

Same `npx cadl compile .` or `npx cadl compile . --outputPath=<target-folder>`.

If `outputPath` option is not provided, generated Java code will be under `cadl-output` folder.

# Contributing
