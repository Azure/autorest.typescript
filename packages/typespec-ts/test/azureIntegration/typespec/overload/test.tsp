import "@typespec/rest";

using TypeSpec.Http;

@service(#{
  title: "FooTest",
})
@server(
  "{$host}",
  "Foo cases.",
  {
    $host: string,
  }
)
@doc("Foo cases.")
namespace TypeScript.Test.Test;

/**
 * This file only contains in main.tsp but not in client.tsp 
 * So it is not included in client generation.
 */
interface FooOperations {
  @route("/foo/get")
  foo(@body param: string): void;
}
