import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "@typespec/versioning";

using Azure.Core;
using global.Azure.Core.Traits;
using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;

#suppress "@azure-tools/typespec-azure-core/casing-style" "For spec"
@doc("Illustrates bodies templated with Azure Core with long-running operation")
@useAuth(
  ApiKeyAuth<ApiKeyLocation.header, "api-key"> | OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit,
      authorizationUrl: "https://login.contoso.com/common/oauth2/v2.0/authorize",
      scopes: ["https://widget.contoso.com/.default"],
    }
  ]>
)
@service({
  title: "Contoso Widget Manager",
})
@server(
  "http://localhost:3000/azure/core/lro/standard",
  "Contoso Widget APIs"
)
@versioned(_Specs_.Azure.Core.Lro.Standard.Versions)
namespace _Specs_.Azure.Core.Lro.Standard;

enum Versions {
  @useDependency(global.Azure.Core.Versions.v1_0_Preview_2)
  v2022_12_01_preview: "2022-12-01-preview",
}

alias ResourceOperations = global.Azure.Core.ResourceOperations<NoConditionalRequests &
  NoRepeatableRequests &
  NoClientRequestId>;

@resource("users")
@doc("Details about a user.")
model User {
  @key
  @visibility("read")
  @doc("The name of user.")
  name: string;

  @doc("The role of user")
  role: string;
}

@doc("The parameters for exporting a user.")
model UserExportParams {
  @query
  @doc("The format of the data.")
  format: string;
}

@doc("The exported user data.")
model ExportedUser {
  @doc("The name of user.")
  name: string;

  @doc("The exported URI.")
  resourceUri: string;
}


@doc("Creates or replaces a User")
@summary("Adds a user or replaces a user's fields.")
@global.Azure.Core.pollingOperation(ResourceOperations.GetResourceOperationStatus<User, never>)
op createOrReplace is ResourceOperations.LongRunningResourceCreateOrReplace<User>;

@doc("Exports a User")
@summary("Exports a user.")
@global.Azure.Core.pollingOperation(ResourceOperations.GetResourceOperationStatus<User, ExportedUser>)
op export is ResourceOperations.LongRunningResourceAction<User, UserExportParams, ExportedUser>;
