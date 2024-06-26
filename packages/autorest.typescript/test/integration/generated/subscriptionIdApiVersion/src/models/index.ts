/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface SampleResourceGroup {
  /** resource group name 'testgroup101' */
  name?: string;
  /** resource group location 'West US' */
  location?: string;
}

export interface ErrorModel {
  code?: number;
  message?: string;
}

/** Optional parameters. */
export interface GroupGetSampleResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSampleResourceGroup operation. */
export type GroupGetSampleResourceGroupResponse = SampleResourceGroup;

/** Optional parameters. */
export interface SubscriptionIdApiVersionClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
