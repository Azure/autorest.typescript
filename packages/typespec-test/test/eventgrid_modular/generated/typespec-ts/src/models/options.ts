// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface PublishCloudEventOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** content type */
  contentType?: string;
}

export interface PublishCloudEventsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** content type */
  contentType?: string;
}

export interface ReceiveCloudEventsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** Max Events count to be received. Minimum value is 1, while maximum value is 100 events. If not specified, the default value is 1. */
  maxEvents?: number;
  /** Max wait time value for receive operation in Seconds. It is the time in seconds that the server approximately waits for the availability of an event and responds to the request. If an event is available, the broker responds immediately to the client. Minimum value is 10 seconds, while maximum value is 120 seconds. If not specified, the default value is 60 seconds. */
  maxWaitTime?: number;
}

export interface AcknowledgeCloudEventsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** content type */
  contentType?: string;
}

export interface ReleaseCloudEventsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** content type */
  contentType?: string;
}

export interface RejectCloudEventsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-06-01-preview";
  /** content type */
  contentType?: string;
}
