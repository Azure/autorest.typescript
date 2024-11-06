# Should not flatten extensible enum if not ARM

Sample generation should arm template and operations successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";

using TypeSpec.Http;
@service({
  title: "Widget Service",
})
namespace DemoService;

union Foo {
  "bar",
  Baz,
  string,
}

enum Baz {
  test,
  foo,
}

op test(@body test: Foo): void;
```

Should enable `flatten-union-as-enum` option:

```yaml
withRawContent: true
```

## Models

Model generated.

```ts models
/** Type of Baz */
export type Baz = "test" | "foo";
/** Alias for Foo */
export type Foo = "bar" | Baz | string;

export function fooSerializer(item: Foo): any {
  return item;
}

export function fooDeserializer(item: any): Foo {
  return item;
}
```
