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

### `multi-client`

**Type:** `boolean`

### `batch`

**Type:** `array`

### `package-details`

**Type:** `object`

### `add-credentials`

**Type:** `boolean`

### `credential-scopes`

**Type:** `array`

### `credential-key-header-name`

**Type:** `string`

### `custom-http-auth-header-name`

**Type:** `string`

### `custom-http-auth-shared-key-prefix`

**Type:** `string`

### `generate-metadata`

**Type:** `boolean`

### `generate-test`

**Type:** `boolean`

### `generate-sample`

**Type:** `boolean`

### `azure-sdk-for-js`

**Type:** `boolean`

### `azure-output-directory`

**Type:** `string`

### `is-typespec-test`

**Type:** `boolean`

### `title`

**Type:** `string`

### `dependency-info`

**Type:** `object`

### `product-doc-link`

**Type:** `string`

### `service-info`

**Type:** `object`

### `azure-arm`

**Type:** `boolean`

### `source-from`

**Type:** `string`

### `is-modular-library`

**Type:** `boolean`

### `enable-operation-group`

**Type:** `boolean`

### `enable-model-namespace`

**Type:** `boolean`

### `hierarchy-client`

**Type:** `boolean`

### `branded`

**Type:** `boolean`

### `flavor`

**Type:** `string`

### `module-kind`

**Type:** `"esm" | "cjs"`

### `compatibility-mode`

**Type:** `boolean`

### `experimental-extensible-enums`

**Type:** `boolean`

### `clear-output-folder`

**Type:** `boolean`

### `ignore-property-name-normalize`

**Type:** `boolean`

### `ignore-enum-member-name-normalize`

**Type:** `boolean`

### `compatibility-query-multi-format`

**Type:** `boolean`

### `default-value-object`

**Type:** `boolean`

### `typespec-title-map`

**Type:** `object`

### `should-use-pnpm-dep`

**Type:** `boolean`
