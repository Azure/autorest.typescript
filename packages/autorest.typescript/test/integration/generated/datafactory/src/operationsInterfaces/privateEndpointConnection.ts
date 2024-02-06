import {
  PrivateLinkConnectionApprovalRequestResource,
  PrivateEndpointConnectionCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionCreateOrUpdateResponse,
  PrivateEndpointConnectionGetOptionalParams,
  PrivateEndpointConnectionGetResponse,
  PrivateEndpointConnectionDeleteOptionalParams,
} from "../models";

/** Interface representing a PrivateEndpointConnection. */
export interface PrivateEndpointConnection {
  /**
   * Approves or rejects a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param privateEndpointWrapper Private Endpoint Connection Approval ARM resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    privateEndpointWrapper: PrivateLinkConnectionApprovalRequestResource,
    options?: PrivateEndpointConnectionCreateOrUpdateOptionalParams,
  ): Promise<PrivateEndpointConnectionCreateOrUpdateResponse>;
  /**
   * Gets a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionGetOptionalParams,
  ): Promise<PrivateEndpointConnectionGetResponse>;
  /**
   * Deletes a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionDeleteOptionalParams,
  ): Promise<void>;
}
