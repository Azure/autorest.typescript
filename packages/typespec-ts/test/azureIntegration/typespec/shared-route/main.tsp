import "@typespec/rest";
import "@typespec/http";
import "./routes.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
@service({
  title: "SharedRouteTest",
})
@server(
  "{$host}",
  "Play with shared route cases.",
  {
    $host: string,
  }
)
@doc("Play with shared route cases.")
namespace TypeScript.Test.SharedRoute;
