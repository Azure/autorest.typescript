// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfigurationInfo } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ConnectorGenerateConfigurationsOptionalParams
  extends OperationOptions {
  body?: ConfigurationInfo;
}

/** Optional parameters. */
export interface ConnectorValidateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectorDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectorListDryrunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectorDeleteDryrunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConnectorUpdateDryrunOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorCreateDryrunOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConnectorGetDryrunOptionalParams extends OperationOptions {}
