# should export RestError and isRestError from @azure/core-rest-pipeline for Azure flavor packages

## TypeSpec

```tsp
@usage(Usage.output)
model TestModel {
  prop: string;
}
```

```yaml
needTCGC: true
```

## root index

```ts root index
export type { TestModel } from "./models/index.js";
export { RestError, isRestError } from "@azure/core-rest-pipeline";
```
