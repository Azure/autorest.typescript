# Client Context with API Version

Tests client context generation when API version parameter is present

## TypeSpec

```tsp
@route("/test")
interface Operations {
  @doc("Test operation")
  @get
  testOperation(@query apiVersion: string): string;
}
```

## Config

```yaml
needTCGC: true
withVersionedApiVersion: true
```

## Code

```ts clientContext
export interface AzureTypeScriptTestingContext extends Client {
  apiVersion: string;
}
```
