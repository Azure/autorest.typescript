# Should not flatten extensible enum if not ARM

Sample generation should arm template and operations successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";

using TypeSpec.Http;
@service(#{
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
/** Type of Foo */
export type Foo = "test" | "foo" | "bar";
```
