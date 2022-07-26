import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  IntegrationRuntimeObjectMetadataRefreshResponse,
  IntegrationRuntimeObjectMetadataGetOptionalParams,
  IntegrationRuntimeObjectMetadataGetResponse
} from "../models";

/** Interface representing a IntegrationRuntimeObjectMetadata. */
export interface IntegrationRuntimeObjectMetadata {
  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginRefresh(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IntegrationRuntimeObjectMetadataRefreshResponse>,
      IntegrationRuntimeObjectMetadataRefreshResponse
    >
  >;
  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginRefreshAndWait(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams
  ): Promise<IntegrationRuntimeObjectMetadataRefreshResponse>;
  /**
   * Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata
   * list.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataGetOptionalParams
  ): Promise<IntegrationRuntimeObjectMetadataGetResponse>;
}
