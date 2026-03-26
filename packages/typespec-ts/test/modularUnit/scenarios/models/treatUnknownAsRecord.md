# treat-unknown-as-record maps unknown property to Record<string, unknown>

When `treat-unknown-as-record` is enabled, TypeSpec `unknown` type properties should be mapped to `Record<string, unknown>` instead of `any` in Modular SDK.

## TypeSpec

```tsp
model Foo {
  bar: unknown;
  baz: unknown[];
}
op read(): Foo;
```

```yaml
treat-unknown-as-record: true
```

## Models

```ts models interface Foo
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  bar: Record<string, unknown>;
  baz: Record<string, unknown>[];
}
```

# treat-unknown-as-record disabled maps unknown to any

When `treat-unknown-as-record` is not set, TypeSpec `unknown` type properties should be mapped to `any`.

## TypeSpec

```tsp
model Foo {
  bar: unknown;
  baz: unknown[];
}
op read(): Foo;
```

## Models

```ts models interface Foo
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  bar: any;
  baz: any[];
}
```
