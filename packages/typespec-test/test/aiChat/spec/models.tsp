import "@typespec/http";
import "@typespec/http/streams";

using TypeSpec.Http;
using TypeSpec.Http.Streams;

model ContextProp {
  context?: Record<unknown>;
}

model SessionStateProp {
  sessionState?: unknown;
}

enum AIChatRole {
  assistant,
  user,
  system,
}

model AIChatMessage {
  role: AIChatRole;
  content: string;
  ...ContextProp;
}

model AIChatMessageDelta {
  role?: AIChatRole;
  content?: string;
  ...ContextProp;
}

model AIChatCompletion {
  message: AIChatMessage;
  ...ContextProp;
  ...SessionStateProp;
}

model AIChatCompletionDeltaStream is JsonlStream<AIChatCompletionDelta>;

model AIChatCompletionDelta {
  delta: AIChatMessageDelta;
  ...ContextProp;
  ...SessionStateProp;
}

model AIChatCompletionRequest {
  messages: AIChatMessage[];
  ...ContextProp;
  ...SessionStateProp;
}

model AIChatErrorResponse {
  error: AIChatError;
}

model AIChatError {
  code: string;
  message: string;
}