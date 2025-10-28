import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "./azure-core-foundations-extensions.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Foundations.Extensions;

// NOTE: These features are missing:
// - Security definition for apiKey
@server(
  "{Endpoint}/language",
  "Language Service",
  {
    Endpoint: Endpoint,
  }
)
@service(#{
  title: "Microsoft Cognitive Language Service - Analyze Text Authoring",
})
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "Ocp-Apim-Subscription-Key">)
@route("/authoring/analyze-text/")
@versioned(Azure.Language.Authoring.Versions)
namespace Azure.Language.Authoring;

enum Versions {
  /** Version 2022-05-15-preview */
  `2022-05-15-preview`,
}

// Common Parameters
// TODO: Use the common parameter for this
@doc("The endpoint to use.")
scalar Endpoint extends string;

@doc("The details of a project deployment.")
model Deployment {
  @doc("The name of the deployment.")
  @key("deploymentName")
  @visibility(Lifecycle.Read)
  @segment("deployments")
  name: string;

  @doc("The ID of the end-user, for use in tracking and rate-limiting.")
  user?: string;

  @doc("input type of embedding search to use")
  input_type?: string;

  @doc("ID of the model to use")
  `model`?: string;

  @doc("""
    An input to embed, encoded as a string, a list of strings, or a list of token
    lists
    """)
  input: string | string[] | integer[] | integer[][];
}

@doc("Deployment resource creation parameters.")
@withVisibility(Lifecycle.Create)
model DeploymentCreationParameters {
  ...Deployment;
}

interface Deployments {
  @doc("Gets the details of a deployment.")
  getDeployment is ResourceRead<Deployment>;

  #suppress "@azure-tools/typespec-azure-core/long-running-polling-operation-required" "This operation does not follow the standard long-running operation pattern."
  @doc("Creates a new deployment or replaces an existing one.")
  deployProject is CustomResourceCreateOrReplace<
    Deployment,
    CustomBodyWrapper<DeploymentCreationParameters>
  >;
}
