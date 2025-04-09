# generate constant type model

## TypeSpec

```tsp
model StreamingChatCompletionOptions {
  stream: true;
  messages: string;
  index: safeint;
}
op read(@path id: string): {
  @bodyRoot result: StreamingChatCompletionOptions
};
```

## Models

```ts models
/** model interface StreamingChatCompletionOptions */
export interface StreamingChatCompletionOptions {
  stream: true;
  messages: string;
  index: number;
}

export function streamingChatCompletionOptionsDeserializer(
  item: any
): StreamingChatCompletionOptions {
  return {
    stream: true,
    messages: item["messages"],
    index: item["index"]
  };
}
```
