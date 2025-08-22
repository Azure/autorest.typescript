// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface BarApiPostSendOnDefaultOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Contains response data for the postSendOnDefault operation. */
export type BarApiPostSendOnDefaultResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface FooApiPostSendOnDefault$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Optional parameters. */
export interface FooApiPostSendOnDefault$textOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Contains response data for the postSendOnDefault operation. */
export type FooApiPostSendOnDefaultResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface FooApiPostSend$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Optional parameters. */
export interface FooApiPostSend$textOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Contains response data for the postSend operation. */
export type FooApiPostSendResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface MediaTypesV3ClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
