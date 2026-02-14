import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@typespec/openapi";
import "@typespec/rest";
import "./models.tsp";

using TypeSpec.Rest;
using Azure.ResourceManager;
using TypeSpec.Http;
using TypeSpec.OpenAPI;

namespace Microsoft.Web;
/**
 * App Service Environment ARM resource.
 */
model AppServiceEnvironmentResource
  is Azure.ResourceManager.TrackedResource<AppServiceEnvironment> {
  ...ResourceNameParameter<
    Resource = AppServiceEnvironmentResource,
    KeyName = "name",
    SegmentName = "hostingEnvironments",
    NamePattern = ""
  >;

  /** Kind of resource. If the resource is an app, you can refer to https://github.com/Azure/app-service-linux-docs/blob/master/Things_You_Should_Know/kind_property.md#app-service-resource-kind-reference for details supported values for kind. */
  #suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-invalid-envelope-property" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  kind?: string;
}

alias DiagnosticsOps = Azure.ResourceManager.Legacy.RoutedOperations<
  {
    ...ApiVersionParameter;
    ...SubscriptionIdParameter;
    ...ResourceGroupParameter;
  },
  {
    /** Name of the app. */
    @path
    @segment("hostingEnvironments")
    @key
    name: string;
  },
  ResourceRoute = #{
    route: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Web/hostingEnvironments",
  }
>;

@armResourceOperations(#{ allowStaticRoutes: true })
interface AppServiceEnvironmentResources {
  /**
   * Description for Move an App Service Environment to a different VNET.
   */
  #suppress "@azure-tools/typespec-azure-resource-manager/no-response-body" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @summary("Move an App Service Environment to a different VNET.")
  @action("changeVirtualNetwork")
  @list
  changeVnet is Azure.ResourceManager.ArmResourceActionAsyncBase<
    AppServiceEnvironmentResource,
    VirtualNetworkProfile,
    ArmResponse<WebAppCollection> | (ArmAcceptedLroResponse<LroHeaders = ArmLroLocationHeader<FinalResult = WebAppCollection>> & {
      @bodyRoot
      _: WebAppCollection;
    }),
    BaseParameters = Azure.ResourceManager.Foundations.DefaultBaseParameters<WebAppCollection>,
    Error = DefaultErrorResponse
  >;

  /**
   * Description for Resume an App Service Environment.
   */
  #suppress "@azure-tools/typespec-azure-resource-manager/no-response-body" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @summary("Resume an App Service Environment.")
  @list
  resume is ArmResourceActionAsyncBase<
    AppServiceEnvironmentResource,
    void,
    ArmResponse<WebAppCollection> | (ArmAcceptedLroResponse<LroHeaders = ArmLroLocationHeader<FinalResult = WebAppCollection>> & {
      @bodyRoot
      _: WebAppCollection;
    }),
    BaseParameters = Azure.ResourceManager.Foundations.DefaultBaseParameters<AppServiceEnvironmentResource>,
    Error = DefaultErrorResponse
  >;

  /**
   * Description for Suspend an App Service Environment.
   */
  #suppress "@azure-tools/typespec-azure-resource-manager/no-response-body" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @summary("Suspend an App Service Environment.")
  @list
  suspend is ArmResourceActionAsyncBase<
    AppServiceEnvironmentResource,
    void,
    ArmResponse<WebAppCollection> | (ArmAcceptedLroResponse<LroHeaders = ArmLroLocationHeader<FinalResult = WebAppCollection>> & {
      @bodyRoot
      _: WebAppCollection;
    }),
    BaseParameters = Azure.ResourceManager.Foundations.DefaultBaseParameters<AppServiceEnvironmentResource>,
    Error = DefaultErrorResponse
  >;
}

@@doc(AppServiceEnvironmentResource.name,
  "Name of the App Service Environment."
);
@@doc(AppServiceEnvironmentResource.properties, "Core resource properties");
@@doc(AppServiceEnvironmentResources.changeVnet::parameters.body,
  "Details for the new virtual network."
);
