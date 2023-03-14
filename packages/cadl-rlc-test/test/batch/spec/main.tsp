import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-autorest";
import "@typespec/openapi";
import "./routes.tsp";

using TypeSpec.Reflection;
using TypeSpec.Http;
using TypeSpec.Rest;
using Autorest;
using TypeSpec.Versioning;
using Azure.Core;
using OpenAPI;

@service({
  title: "BatchServiceClient",
  version: "2022-10-01.16.0",
})
@useAuth(AADToken)
@useDependency(Azure.Core.Versions.v1_0_Preview_1)
@doc("A client for issuing REST requests to the Azure Batch service.")
namespace BatchServiceClient;

@doc("The Azure Active Directory OAuth2 Flow")
model AADToken
  is OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit;
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/authorize";
      scopes: ["user_impersonation"];
    }
  ]>;
