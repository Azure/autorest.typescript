/**
 * Learn public APIs defined according to [Learn API Guideline](https://microsoft.sharepoint.com/:w:/t/APEXOnlineEngineers/EesqjOov-3pGjFs20usF3NoB-V5C1pxty5UBq06idFiYwg?e=33COND)
 */
import "./lib";
import "./training.tsp";

using TypeSpec.Http;

@service({
    title: "Learn Platform API",
})
@server(
    "https://learn.microsoft.com/api/v1",
    "The Learn plaform public API endpoint"
)
@useAuth([BearerAuth, OAuth2Auth<[{
    type: OAuth2FlowType.clientCredentials;
    tokenUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    refreshUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    scopes: ["https://learn.microsoft.com/.default"];
}]>])
namespace Microsoft.Learn;
