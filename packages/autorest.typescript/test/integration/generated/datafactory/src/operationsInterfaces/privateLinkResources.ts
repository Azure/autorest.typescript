import type {
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse,
} from "../models/index.js";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    options?: PrivateLinkResourcesGetOptionalParams,
  ): Promise<PrivateLinkResourcesGetResponse>;
}
