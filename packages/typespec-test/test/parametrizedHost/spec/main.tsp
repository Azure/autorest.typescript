import "@typespec/rest";
import "@typespec/versioning";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-autorest";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using OpenAPI;

//
// ** Service description **
//

// TODO: remove version in server temporary https://github.com/Azure/typespec-azure/issues/1608

@service(#{ title: "ParametrizedHost" })
@useAuth(OAuth2Auth<[MyFlow]>)
@versioned(Versions)
@server(
  "{host}.{subdomain}.{sufix}.com",
  "Confidential Ledger Service",
  {
    @path
    host?: string = "one",

    @path
    subdomain?: string = "two",

    @path
    sufix?: string = "three",
  }
)
namespace Azure.Test.ParametrizedHost;

enum Versions {
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v1,
}
//
// ** Parameter descriptions **
//

model MyFlow {
  type: OAuth2FlowType.implicit;
  authorizationUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/authorize";
  tokenUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/token";
  scopes: ["https://parametrized-host.azure.com/.default"];
}

//
// ** Model descriptions **
//

@resource("collections")
@doc("Identifier for collections.")
model Collection {
  @key
  @visibility(Lifecycle.Read)
  collectionId: string;
}

//
// ** Operations **
//

@route("/app")
namespace ConfidentialLedger {
  @summary("Retrieves a list of collection ids present in the Confidential Ledger")
  @doc("Collection ids are user-created collections of ledger entries")
  op listCollections is Azure.Core.Foundations.NonPagedResourceList<Collection>;
}
