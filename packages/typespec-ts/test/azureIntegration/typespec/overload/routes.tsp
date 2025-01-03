import "@typespec/rest";

using TypeSpec.Http;

namespace TypeScript.Test.Overalod;

@doc("Resource to process.")
model Resource {
  id: string;
}

interface OveralodOperations {
  /**
   * Overload with same routes
   */
  @route("/get")
  getThing(@body param: string | int32): string | int32;

  /**
   * Overload with different routes
   */
  @route("/changed-routes")
  @put
  upload(
    @body
    data: string | bytes,
    @header contentType: "text/plain" | "application/octet-stream"
  ): void;

  /**
   * Overloads with different actions
   */

  @route("/changed-actions")
  @put
  process(
    data: string | bytes,
    @header contentType: "text/plain" | "application/octet-stream"
  ): void;
}
