# only: Playground to see if @@usage is respected

### Enable TCGC and Azure core for this scenario

```yaml
needTCGC: true
needAzureCore: true
```

### Input TypeSpec

```tsp
// This enum is used and will get generated
enum MyEnum {
  Aaa,
  Bbbb,
}

// set usage to output to force the enum to get generated
@usage(Usage.output)
enum OrphanEnumWithUsage {
  Aaa;
}

// another enum without @usage to ensure it doesn't get generated
enum OrphanEnumWithoutUsage {
  Bbb;
}

model MyModel {
  value: MyEnum
}

op operation(): MyModel;
```

### Emitted models

Looks good, both `MyEnum` and `OrphanEnumWithUsage` are generated.

```ts models
/** model interface MyModel */
export interface MyModel {
  value: MyEnum;
}

export function myModelDeserializer(item: any): MyModel {
  return {
    value: item["value"],
  };
}

/** Type of MyEnum */
export type MyEnum = "Aaa" | "Bbbb";
/** Type of OrphanEnumWithUsage */
export type OrphanEnumWithUsage = "Aaa";
```