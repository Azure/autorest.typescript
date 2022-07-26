import {
  PrivateLinkResourcesListByServiceOptionalParams,
  PrivateLinkResourcesListByServiceResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources that need to be created for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinkResourcesListByServiceOptionalParams
  ): Promise<PrivateLinkResourcesListByServiceResponse>;
  /**
   * Gets a private link resource that need to be created for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param groupName The name of the private link resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse>;
}
