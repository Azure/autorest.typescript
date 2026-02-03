# Should apply client default values for optional model properties during serialization

## TypeSpec

This is the tsp definition that tests client default values.

```tsp configs={"needTCGC": true}
model Configuration {
  /** The name of the configuration */
  name: string;
  
  /** Enable verbose logging */
  @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(false)
  verbose?: boolean;
  
  /** Maximum retry count */
  @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(3)
  maxRetries?: int32;
  
  /** Default timeout in seconds */
  @Azure.ClientGenerator.Core.Legacy.clientDefaultValue(30)
  timeout?: int32;
  
  /** Default log level */
  @Azure.ClientGenerator.Core.Legacy.clientDefaultValue("info")
  logLevel?: string;
}

@route("/config")
@post
op createConfig(@body config: Configuration): void;
```

## Generated models and serializers

The serializer should apply default values when properties are not provided.

```ts models function configurationSerializer
export function configurationSerializer(item: Configuration): any {
  return {
    name: item["name"],
    verbose: !item["verbose"] ? item["verbose"] ?? false : item["verbose"],
    maxRetries: !item["maxRetries"]
      ? item["maxRetries"] ?? 3
      : item["maxRetries"],
    timeout: !item["timeout"] ? item["timeout"] ?? 30 : item["timeout"],
    logLevel: !item["logLevel"]
      ? item["logLevel"] ?? "info"
      : item["logLevel"],
  };
}
```
