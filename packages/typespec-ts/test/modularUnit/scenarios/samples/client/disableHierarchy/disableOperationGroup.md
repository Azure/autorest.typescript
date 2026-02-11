# Should generate samples for disabled hierarchy client and disabled operation group

Will prompt all operations into top-level.

## TypeSpec

This is tsp definition.

```tsp
model A {
  prop1: string;
}

@route("b")
namespace B {
  model A {
    prop2: string;
  }
  interface C {
    op foo(@body body: A):  { @body body: {}};
  }
}

@route("/d")
interface D {
  op bar(@body body: A):  { @body body: {}};
}
```

This is the tspconfig.yaml.

```yaml
hierarchy-client: false
enable-operation-group: false
```

## Provide examples and generated samples

Raw json files.

```json for bar
{
  "title": "bar",
  "operationId": "D_bar",
  "parameters": {
    "body": {
      "prop1": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
```

Raw json files.

```json for foo
{
  "title": "foo",
  "operationId": "C_foo",
  "parameters": {
    "body": {
      "prop2": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
```
