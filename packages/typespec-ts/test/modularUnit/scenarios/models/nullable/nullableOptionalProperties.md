# Should not generate null for optional nullable properties in Azure services by default

## TypeSpec

```tsp
model TestModel {
  optionalNullableBoolean?: boolean | null;
  requiredNullableBoolean: boolean | null;
  optionalBoolean?: boolean;
  requiredBoolean: boolean;
}
op test(): { @body body: TestModel };
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface TestModel */
export interface TestModel {
  optionalNullableBoolean?: boolean;
  requiredNullableBoolean: boolean | null;
  optionalBoolean?: boolean;
  requiredBoolean: boolean;
}

export function testModelDeserializer(item: any): TestModel {
  return {
    optionalNullableBoolean: item["optionalNullableBoolean"],
    requiredNullableBoolean: item["requiredNullableBoolean"],
    optionalBoolean: item["optionalBoolean"],
    requiredBoolean: item["requiredBoolean"],
  };
}
```

---

# Should generate null for optional nullable properties when ignore-nullable-on-optional is false

## TypeSpec

```tsp
model TestModel {
  optionalNullableBoolean?: boolean | null;
  requiredNullableBoolean: boolean | null;
}
op test(): { @body body: TestModel };
```

## config

```yaml
ignore-nullable-on-optional: false
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface TestModel */
export interface TestModel {
  optionalNullableBoolean?: boolean | null;
  requiredNullableBoolean: boolean | null;
}

export function testModelDeserializer(item: any): TestModel {
  return {
    optionalNullableBoolean: item["optionalNullableBoolean"],
    requiredNullableBoolean: item["requiredNullableBoolean"],
  };
}
```
