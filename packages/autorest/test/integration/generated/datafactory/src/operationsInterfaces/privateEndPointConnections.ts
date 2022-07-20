import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateEndpointConnectionResource,
  PrivateEndPointConnectionsListByFactoryOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndPointConnections. */
export interface PrivateEndPointConnections {
  /**
   * Lists Private endpoint connections
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: PrivateEndPointConnectionsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnectionResource>;
}
