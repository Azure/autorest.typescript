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
/** Alias for _Foo */
export type _Foo = "bar" | Baz | string;

export function _fooSerializer(item: _Foo): any {
  return item;
}

/** Type of Baz */
export type Baz = "test" | "foo";
```
