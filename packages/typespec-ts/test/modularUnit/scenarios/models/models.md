# generate constant type model

## TypeSpec

```tsp
model StreamingChatCompletionOptions {
  stream: true;
  messages: "aaaaa";
  index: 123;
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
  messages: "aaaaa";
  index: 123;
}

export function streamingChatCompletionOptionsDeserializer(
  item: any
): StreamingChatCompletionOptions {
  return {
    stream: true,
    messages: "aaaaa",
    index: 123
  };
}
```
