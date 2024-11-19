import "@typespec/http";
import "@typespec/openapi";

import "../common/errors.tsp";
import "./models.tsp";
import "./chat-meta.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

namespace OpenAI;

@route("/chat")
namespace Chat {
  @route("/completions")
  interface Completions {
    @tag("OpenAI")
    @post
    @operationId("createChatCompletion")
    create(
      @body body: CreateChatCompletionRequest,
    ): CreateChatCompletionResponse | ErrorResponse;
  }
}
@route("/completions")
interface Completions {
  @tag("OpenAI")
  @post
  @operationId("createCompletion")
  create(
    @body body: CreateCompletionRequest,
  ): CreateCompletionResponse | ErrorResponse;
}
