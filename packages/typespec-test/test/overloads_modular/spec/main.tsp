import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;

@useAuth(
  ApiKeyAuth<ApiKeyLocation.header, "api-key"> | OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit,
      authorizationUrl: "https://login.contoso.com/common/oauth2/v2.0/authorize",
      scopes: ["https://widget.contoso.com/.default"],
    }
  ]>
)
@service(#{
  title: "Contoso Widget Manager",
})
@server(
  "{endpoint}/widget",
  "Contoso Widget APIs",
  {
    @doc("""
Supported Widget Services endpoints (protocol and hostname, for example:
https://westus.api.widget.contoso.com).
""")
    endpoint: string,
  }
)
@versioned(Contoso.WidgetManager.Versions)
namespace Contoso.WidgetManager;

@doc("The Contoso Widget Manager service version.")
enum Versions {
  @doc("Version 2022-08-31")
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  `2022-08-30`,
}

model PngImage {
  @header contentType: "image/png";
  @body image: bytes;
}

model JpegImage {
  @header contentType: "image/jpeg";
  @body image: bytes;
}

interface FooOperations {
  @route("/avatar")
  @sharedRoute
  op getAvatarAsPng is Azure.Core.RpcOperation<PngImage, {@header accept: "image/png"; @statusCode _ : "204"; }>;
  
  @route("/avatar")
  @sharedRoute
  op getAvatarAsJpeg is Azure.Core.RpcOperation<JpegImage, {@header accept: "image/jpeg"; @statusCode _ : "204"; }>;
}
