import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";

import "./routes.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

#suppress "@azure-tools/typespec-azure-core/casing-style" "OpenAI is a case-sensitive name"
@useAuth(
  ApiKeyAuth<ApiKeyLocation.header, "api-key"> | OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit,
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      scopes: ["https://cognitiveservices.azure.com/.default"],
    }
  ]>
)
@service(#{ title: "Azure OpenAI API" })
@server(
  "{endpoint}/openai",
  "Azure OpenAI APIs for completions and search",
  {
    @doc("""
      Supported Cognitive Services endpoints (protocol and hostname, for example:
      https://westus.api.cognitive.microsoft.com).
      """)
    endpoint: string,
  }
)
@versioned(ServiceApiVersions)
@doc("Azure OpenAI APIs for completions and search")
namespace Azure.OpenAI;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "https://github.com/Azure/typespec-azure/issues/3107"
enum ServiceApiVersions {
  v2022_12_01: "2022-12-01",
  v2023_05_15: "2023-05-15",
  v2023_06_01_Preview: "2023-06-01-preview",
  v2023_07_01_Preview: "2023-07-01-preview",
  v2023_08_01_Preview: "2023-08-01-preview",
}

@doc("A specific deployment")
@TypeSpec.Rest.resource("deployments")
model Deployment {
  @visibility(Lifecycle.Read)
  @doc("Specifies either the model deployment name (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request.")
  @clientName("deploymentOrModelName", "java")
  @key
  deploymentId: string;
}
