// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  NetworkInterface,
  LoadBalancerNetworkInterfacesListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LoadBalancerNetworkInterfaces. */
export interface LoadBalancerNetworkInterfaces {
  /**
   * Gets associated load balancer network interfaces.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerNetworkInterfacesListOptionalParams,
  ): PagedAsyncIterableIterator<NetworkInterface>;
}
