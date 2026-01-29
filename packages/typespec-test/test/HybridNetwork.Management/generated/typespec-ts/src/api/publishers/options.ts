// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TagsObject, Publisher } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface PublishersListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublishersListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PublishersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PublishersUpdateOptionalParams extends OperationOptions {
  /** Parameters supplied to the create publisher operation. */
  parameters?: TagsObject;
}

/** Optional parameters. */
export interface PublishersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Parameters supplied to the create publisher operation. */
  parameters?: Publisher;
}

/** Optional parameters. */
export interface PublishersGetOptionalParams extends OperationOptions {}
