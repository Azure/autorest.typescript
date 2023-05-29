import "@azure-tools/typespec-client-generator-core";
import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "./main.tsp";
import "./routes.tsp";

using Azure.ClientGenerator.Core;
using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.MediaTypes;

@client({
  name: "MediaTypesClient",
  service: TypeScript.Test.MediaTypes,
})
interface MediaTypesClient {
  /**
   * Multiple content-type by union
   */
  getByUnion is MediaTypesOperations.getByUnionOnly;

  /**
   * Multiple content-type by shared routes
   */
  getBySharedRouteForString is MediaTypesOperations.getBySharedRouteForString;
  getBySharedRouteForModel is MediaTypesOperations.getBySharedRouteForModel;
  getBySharedRouteForBytes is MediaTypesOperations.getBySharedRouteForBytes;

  /**
   * Multiple content-type by overload
   */
  getByOverload is MediaTypesOperations.getByOverloadParent;

  @overload(MediaTypesClient.getByOverload)
  getByOverloadString(
    @body
    @doc("Input parameter.")
    input: string,
    @header contentType: "text/plain"
  ): string;

  @overload(MediaTypesClient.getByOverload)
  getByOverloadForModel(
    @body
    @doc("Input parameter.")
    input: SourcePath,
    @header contentType: "application/json"
  ): string;

  @overload(MediaTypesClient.getByOverload)
  getByOverloadForBytes(
    @body
    @doc("Input parameter.")
    input: bytes,
    @header contentType:
      | "application/pdf"
      | "image/jpeg"
      | "image/png"
      | "image/tiff"
  ): string;
}
