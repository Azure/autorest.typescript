import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "./models.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Testing.BodyFile;

interface FilesOperations {
  @doc("Get file")
  @route("/files/stream/nonempty")
  @get
  op getFile(@doc("Accept header")
  @header
  Accept: "image/png, application/json"): NoContentResponse;
}
