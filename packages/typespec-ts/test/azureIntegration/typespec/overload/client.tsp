import "@azure-tools/typespec-client-generator-core";
import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "./main.tsp";
import "./routes.tsp";
import "./test.tsp";

using Azure.ClientGenerator.Core;
using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.Overalod;

@client({
  name: "OverloadClient",
  service: TypeScript.Test.Overalod,
})
@route("/overload")
interface OverloadClient {
  /**
   * Overload with same routes
   */
  getThing is OveralodOperations.getThing;

  @overload(OverloadClient.getThing)
  getString(@body param: string): string;

  @overload(OverloadClient.getThing)
  getNumber(@body param: int32): int32;

  /**
   * Overload with different routes
   */

  upload is OveralodOperations.upload;

  @overload(OverloadClient.upload)
  @route("/toString")
  uploadString(@body data: string, @header contentType: "text/plain"): void;

  @overload(OverloadClient.upload)
  uploadBytes(
    @body
    data: bytes,
    @header contentType: "application/octet-stream"
  ): void;

  /**
   * Overloads with different actions
   */

  process is OveralodOperations.process;

  @overload(OverloadClient.process)
  @post
  processString(data: string, @header contentType: "text/plain"): void;

  @overload(OverloadClient.process)
  processBytes(
    data: bytes,
    @header contentType: "application/octet-stream"
  ): void;
}
