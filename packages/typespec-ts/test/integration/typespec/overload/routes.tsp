import "@typespec/rest";

using TypeSpec.Http;

namespace TypeScript.Test.Overalod;

@doc("Resource to process.")
model Resource {
  id: string;
}
@route("/overload")
interface OveralodOperations {
  /**
   * Overload with same routes
   */
  @route("/get")
  getThing(@body param: string | int32): string | int32;

  @overload(OveralodOperations.getThing)
  getString(@body param: string): string;

  @overload(OveralodOperations.getThing)
  getNumber(@body param: int32): int32;

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

  @overload(OveralodOperations.upload)
  @route("/toString")
  uploadString(@body data: string, @header contentType: "text/plain"): void;

  @overload(OveralodOperations.upload)
  uploadBytes(
    @body
    data: bytes,
    @header contentType: "application/octet-stream"
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

  @overload(OveralodOperations.process)
  @post
  processString(data: string, @header contentType: "text/plain"): void;

  @overload(OveralodOperations.process)
  processBytes(
    data: bytes,
    @header contentType: "application/octet-stream"
  ): void;
}
