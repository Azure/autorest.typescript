import "@typespec/http";
import "@typespec/http/streams";

import "./models.tsp";

using TypeSpec.Http;
using TypeSpec.Http.Streams;

namespace AI.Chat;

alias Response<T> = T | AIChatErrorResponse;

@post
@route("/chat")
op getStreamedCompletion(
  @header contentType: "application/json",
  body: AIChatCompletionRequest,
): Response<AIChatCompletionDeltaStream>;