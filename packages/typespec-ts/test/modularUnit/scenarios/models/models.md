# generate constant type model

## TypeSpec

```tsp
@doc("The configuration for a streaming chat completion request.")
model StreamingChatCompletionOptions {

  @doc("Indicates whether the completion is a streaming or non-streaming completion.")
  stream: true;
}
op read(@path id: string): {
  @bodyRoot result: StreamingChatCompletionOptions
};
```

## Operations

```ts models
/** The configuration for a streaming chat completion request. */
export interface StreamingChatCompletionOptions {
  /** Indicates whether the completion is a streaming or non-streaming completion. */
  stream: true;
}

export function streamingChatCompletionOptionsDeserializer(
  item: any
): StreamingChatCompletionOptions {
  return {
    stream: true
  };
}
```
