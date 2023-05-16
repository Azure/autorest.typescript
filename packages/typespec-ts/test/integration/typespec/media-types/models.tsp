import "@typespec/rest";
import "@typespec/http";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Rest;
using TypeSpec.Http;

namespace TypeScript.Test.MediaTypes;

@Azure.Core.fixed
enum ContentType {
  @doc("Content Type 'application/pdf'") `application/pdf`,
  @doc("Content Type 'image/jpeg'") `image/jpeg`,
  @doc("Content Type 'image/png'") `image/png`,
  @doc("Content Type 'image/tiff'") `image/tiff`,
}
@Azure.Core.fixed
enum ContentType1 {
  @doc("Content Type 'application/json'") `application/json`,
  @doc("Content Type 'application/octet-stream'") `application/octet-stream`,
}
@Azure.Core.fixed
enum ContentType2 {
  @doc("Content Type 'application/json'") `application/json`,
  @doc("Content Type 'application/octet-stream'") `application/octet-stream`,
  @doc("Content Type 'text/plain'") `text/plain`,
}
@Azure.Core.fixed
enum ContentType3 {
  @doc("Content Type 'application/json'") `application/json`,
  @doc("Content Type 'text/plain'") `text/plain`,
}

@doc("Uri or local path to source data.")
model SourcePath {
  @doc("File source path.")
  source?: string;
}
