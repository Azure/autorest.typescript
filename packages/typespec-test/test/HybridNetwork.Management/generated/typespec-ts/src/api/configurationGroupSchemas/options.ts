// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ConfigurationGroupSchemasUpdateStateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConfigurationGroupSchemasListByPublisherOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConfigurationGroupSchemasDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConfigurationGroupSchemasUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConfigurationGroupSchemasCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConfigurationGroupSchemasGetOptionalParams extends OperationOptions {}
