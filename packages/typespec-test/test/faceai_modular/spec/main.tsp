import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "./routes.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;

@useAuth(
  ApiKeyAuth<ApiKeyLocation.header, "Ocp-Apim-Subscription-Key">
)
@service({
  title: "Azure AI Face API",
})
@versioned(Face.Versions)
@server(
  "{endpoint}",
  "Azure AI Face API",
  {
    @doc("""
Supported Cognitive Services endpoints (protocol and hostname, for example:
https://<resource-name>.cognitiveservices.azure.com).
""")
    endpoint: string
  }
)
namespace Face;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "https://github.com/Azure/typespec-azure/issues/3107"
enum Versions {
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  v1_1_preview_1: "v1.1-preview.1"
}
