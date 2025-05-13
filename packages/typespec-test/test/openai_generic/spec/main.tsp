import "@typespec/http";
import "@typespec/openapi3";
import "@typespec/openapi";

import "./audio";
import "./completions";
import "./edits";
import "./embeddings";
import "./files";
import "./fine-tuning";
import "./images";
import "./moderation";

using TypeSpec.Http;

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
@service(#{
  title: "OpenAI API"
})
@server("https://api.openai.com/v1", "OpenAI Endpoint")
@useAuth(BearerAuth)
namespace OpenAI;
