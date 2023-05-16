import "@typespec/rest";
import "@typespec/http";
import "./routes.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
@service({
  title: "BodyFile",
})
@server(
  "{$host}",
  "Test Infrastructure for AutoRest Swagger BAT",
  {
    $host: string,
  }
)
@doc("Test Infrastructure for AutoRest Swagger BAT")
namespace TypeScript.Testing.BodyFile;
