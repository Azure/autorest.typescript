import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

import "./operations.tsp";

using TypeSpec.Http;

@service({
  title: "Chat Protocol",
})
@server(
  "{endpoint}",
  "Chat Protocol enabled endpoint",
  {
    endpoint: string,
  }
)
namespace AI.Chat;