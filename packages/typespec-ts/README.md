# @azure-tools/typespec-ts

An experimental TypeSpec emitter for TypeScript RLC

## Install

```bash
npm install @azure-tools/typespec-ts
```

## Usage

1. Via the command line

```bash
tsp compile . --emit=@azure-tools/typespec-ts
```

2. Via the config

```yaml
emit:
  - "@azure-tools/typespec-ts"
```

The config can be extended with options as follows:

```yaml
emit:
  - "@azure-tools/typespec-ts"
options:
  "@azure-tools/typespec-ts":
    option: value
```

## Emitter options

### `emitter-output-dir`

**Type:** `absolutePath`

Defines the emitter output directory. Defaults to `{output-dir}/@azure-tools/typespec-ts`
See [Configuring output directory for more info](https://typespec.io/docs/handbook/configuration/configuration/#configuring-output-directory)

### `include-shortcuts`

**Type:** `boolean`

Deprecated option for RLC legacy generation.

### `multi-client`

**Type:** `boolean`

Deprecated option for RLC legacy generation.

### `batch`

**Type:** `array`

Deprecated option for RLC legacy generation.

### `package-details`

**Type:** `object`

This is to indicate the package information such as package name, package description etc.

### `add-credentials`

**Type:** `boolean`

      We support two types of authentication: Azure Key Credential(AzureKey) and Token credential(AADToken), any other will need to be handled manually.

      There are two ways to set up our credential details

      - To use `@useAuth` decorator in TypeSpec
      - To config in yaml file

      Please notice defining in TypeSpec is recommanded and also has higher priority than second one.

      To enable credential in `tspconfig.yaml` and we need to provide more details to let codegen know types.


### `credential-scopes`

**Type:** `array`

If we enable the option `add-credentials` and specify `credential-scopes` the details we would enable the AADToken authentication.

### `credential-key-header-name`

**Type:** `string`

If we enable the option `add-credentials` and specify `credential-key-header-name` the details we would enable the AzureKey authentication.

### `custom-http-auth-header-name`

**Type:** `string`

This option is used for special Key Auth, when the key has a shared prefix and this header is to set the header name

### `custom-http-auth-shared-key-prefix`

**Type:** `string`

This option is used for special Key Auth, when the key a shared prefix and this header is to pass the rest of the header key.

### `generate-metadata`

**Type:** `boolean`

      Whether to generate metadata files which includes package.json, README.md and tsconfig.json etc. Defaults to `undefined`. If there's not a package.json ender package-dir, defaults to `true`. but if you'd like to disable this feature you could set it as `false`.


### `generate-test`

**Type:** `boolean`

      Whether to generate test files, for basic testing of your generated sdks. Defaults to `undefined`.
      other cases:
      - If azure-sdk-for-js is `false`. Defaults to `false`.
      - If azure-sdk-for-js is `true` but there's a test folder under package-dir. Defaults to `false`.
      - If azure-sdk-for-js is `true` but there's not a test folder under package-dir. Defaults to `true`.


### `generate-sample`

**Type:** `boolean`

Whether to generate sample files, for basic samples of your generated sdks. Defaults to `undefined`. Management packages' default to `true`.

### `azure-sdk-for-js`

**Type:** `boolean`

This is used to indicate your project is generated in [azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js) repo or not. If your package is located in that repo we'll leverage `dev-tool` to accelerate our building and testing, however if not we'll remove the dependency for that tool. Defaults to `undefined`. Services with Flavor equal to 'Azure' default to 'true'.

### `azure-output-directory`

**Type:** `string`

Deprecated option for RLC legacy generation

### `is-typespec-test`

**Type:** `boolean`

Internal option for test

### `title`

**Type:** `string`

Deprecated option for RLC legacy generation.

### `dependency-info`

**Type:** `object`

Deprecated option for RLC legacy generation.

### `product-doc-link`

**Type:** `string`

Deprecated option for RLC legacy generation.

### `service-info`

**Type:** `object`

Deprecated option for RLC legacy generation.

### `azure-arm`

**Type:** `boolean`

Whether the package is an arm package.

### `source-from`

**Type:** `string`

Internal option, the value is default for TypeSpec generation

### `is-modular-library`

**Type:** `boolean`

Whether to generate a Modular library. Defaults to `false`. Arm packages default to `true`.

### `enable-operation-group`

**Type:** `boolean`

An option to add treat interface as operation group. This is not recommended unless specifically told so

### `enable-model-namespace`

**Type:** `boolean`

An option to add model namespace as prefix if there's any model name conflicts within different namespaces. This is not recommended unless specifically told so

### `hierarchy-client`

**Type:** `boolean`

An option to organize the client as hierarchy way as defined by `@clientInitialization`. This is true by default.

### `branded`

**Type:** `boolean`

A section of flavor

### `flavor`

**Type:** `string`

The flavor of the SDK.

### `module-kind`

**Type:** `"esm" | "cjs"`

Internal option for test.

### `compatibility-mode`

**Type:** `boolean`

Whether to affect the generation of the additional property feature for the Modular client. Defaults to `false`.

### `experimental-extensible-enums`

**Type:** `boolean`

Whether to transform union type enums to extensible enums

### `clear-output-folder`

**Type:** `boolean`

Determine whether to clear the entire output folder. By default, only the 'sources' folder is cleared, so metadata files at the project root remain untouched. This option can be useful in pipeline scenarios.

### `ignore-property-name-normalize`

**Type:** `boolean`

The emitter will use camel case to normalize the property name, to ignore this normalization, you can set this option to true

### `ignore-enum-member-name-normalize`

**Type:** `boolean`

The emitter has a normalization logic for enum member key, to ignore this normalization, you can set this option to true

### `compatibility-query-multi-format`

**Type:** `boolean`

Whether to generate the backward-compatible code for query parameter serialization for array types in RLC. Defaults to `false`

### `default-value-object`

**Type:** `boolean`

Deprecated option for RLC legacy generation.

### `typespec-title-map`

**Type:** `object`

Only for Modular generation
By default, code generation uses the titles specified in the `@client` and `@service` decorators in TypeSpec to name modular clients. If you need to override these names, you can configure the `typespec-title-map`. The map's keys represent the original client names from TypeSpec, and the values are the desired client names. This configuration supports renaming multiple clients.

      ```yaml
      typespec-title-map:
        AnomalyDetectorClient: AnomalyDetectorRest
        AnomalyDetectorClient2: AnomalyDetectorRest2
      ```


### `should-use-pnpm-dep`

**Type:** `boolean`

Internal option for test.
