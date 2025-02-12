import "@typespec/rest";

using TypeSpec.Http;

namespace TypeScript.Test.MediaTypes;

@doc("Uri or local path to source data.")
model SourcePath {
  @minLength(0)
  @maxLength(2048)
  @doc("File source path.")
  source: string;
}

@route("/mediatypes")
interface MediaTypesOperations {
  /**
   * Union maps union
   */
  @doc("Union of types map union of content types.")
  @route("/union")
  @post
  getByUnionOnly(
    @body
    @doc("Input parameter.")
    input: SourcePath | bytes | string,
    @header contentType:
      | "application/pdf"
      | "application/json"
      | "image/jpeg"
      | "image/png"
      | "image/tiff"
      | "text/plain"
  ): string;

  /**
   * Shared route
   */
  @doc("Using shared route to express the mapping info - string.")
  @route("/shared-route")
  @sharedRoute
  @post
  getBySharedRouteForString(
    @body
    @doc("Input parameter.")
    input: string,
    @header contentType: "text/plain"
  ): string;

  @doc("Using shared route to express the mapping info - model.")
  @route("/shared-route")
  @sharedRoute
  @post
  getBySharedRouteForModel(
    @body
    @doc("Input parameter.")
    input: SourcePath,
    @header contentType: "application/json"
  ): string;

  @doc("Using shared route to express the mapping info - bytes.")
  @route("/shared-route")
  @sharedRoute
  @post
  getBySharedRouteForBytes(
    @body
    @doc("Input parameter.")
    input: bytes,
    @header contentType:
      | "application/pdf"
      | "image/jpeg"
      | "image/png"
      | "image/tiff"
  ): string;

  /**
   * Overload
   */
  @doc("Union of types map union of content types. Then use @overload to detailed mapping.")
  @route("/overload")
  @post
  getByOverloadParent(
    @body
    @doc("Input parameter.")
    input: SourcePath | bytes | string,
    @header contentType:
      | "application/pdf"
      | "application/json"
      | "image/jpeg"
      | "image/png"
      | "image/tiff"
      | "text/plain"
  ): string;
}
