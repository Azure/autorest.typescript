import "@typespec/rest";
import "@typespec/http";
import "./routes.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
@service({
  title: "MediaTypes",
})
@server(
  "{$host}",
  "Play with produces/consumes and media-types in general.",
  {
    $host: string,
  }
)
@doc("Play with produces/consumes and media-types in general.")
namespace TypeScript.Test.MediaTypes;
