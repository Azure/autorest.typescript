# should handle recursive nullable union

## TypeSpec

```tsp
model Base {
  foo: int32;
}
model A extends Base{
  ...Record<int32>;
  prop: int32
}
op post(@body body: A): { @body body: A };
```

The config would be like:

```yaml
compatibilityMode: true
```

## Model interface A

```ts models interface A
/** model interface A */
export interface A extends Base, Record<string, number> {
  prop: number;
}
```

## Model function aSerializer

```ts models function aSerializer
export function aSerializer(item: A): any {
  return { ...item, foo: item["foo"], prop: item["prop"] };
}
```

## Model interface Base

```ts models interface Base
/** model interface Base */
export interface Base {
  foo: number;
}
```

## Model function baseSerializer

```ts models function baseSerializer
export function baseSerializer(item: Base): any {
  return { foo: item["foo"] };
}
```
