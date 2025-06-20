import "@typespec/rest";

using TypeSpec.Http;

namespace TypeScript.Test.Test;

/**
 * This file only contains in main.tsp but not in client.tsp 
 * So it is not included in client generation.
 */
interface OveralodOperations {
  @route("/foo/get")
  foo(@body param: string): void;
}
