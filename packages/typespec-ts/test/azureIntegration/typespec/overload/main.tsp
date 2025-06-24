import "@typespec/rest";
import "@typespec/http";
import "./routes.tsp";
import "./test.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
@service(#{
  title: "OverloadTest",
})
@server(
  "{$host}",
  "Play with overload cases.",
  {
    $host: string,
  }
)
@doc("Play with overload cases.")
namespace TypeScript.Test.Overalod;
