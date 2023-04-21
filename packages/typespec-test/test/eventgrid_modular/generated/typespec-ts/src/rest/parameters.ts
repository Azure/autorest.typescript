// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { CloudEventEvent, LockTokenInput, LockToken } from "./models.js";

export interface PublishCloudEventBodyParam {
  /** Single Cloud Event being published. */
  body: CloudEventEvent;
}

export interface PublishCloudEventMediaTypesParam {
  /** content type */
  contentType: "application/cloudevents+json; charset=utf-8";
}

export type PublishCloudEventParameters = PublishCloudEventMediaTypesParam &
  PublishCloudEventBodyParam &
  RequestParameters;

export interface PublishBatchOfCloudEventsBodyParam {
  /** Array of Cloud Events being published. */
  body: Array<CloudEventEvent>;
}

export interface PublishBatchOfCloudEventsMediaTypesParam {
  /** content type */
  contentType: "application/cloudevents-batch+json; charset=utf-8";
}

export type PublishBatchOfCloudEventsParameters =
  PublishBatchOfCloudEventsMediaTypesParam &
    PublishBatchOfCloudEventsBodyParam &
    RequestParameters;

export interface ReceiveBatchOfCloudEventsQueryParamProperties {
  /** Max Events count to be received. */
  maxEvents?: number;
  /** Timeout value for receive operation in Seconds. Default is 60 seconds. */
  timeout?: number;
}

export interface ReceiveBatchOfCloudEventsQueryParam {
  queryParameters?: ReceiveBatchOfCloudEventsQueryParamProperties;
}

export type ReceiveBatchOfCloudEventsParameters =
  ReceiveBatchOfCloudEventsQueryParam & RequestParameters;

export interface AcknowledgeBatchOfCloudEventsBodyParam {
  /** Array of LockTokens for the corresponding received Cloud Events to be acknowledged. */
  body: LockTokenInput;
}

export interface AcknowledgeBatchOfCloudEventsMediaTypesParam {
  /** content type */
  contentType: "application/json; charset=utf-8";
}

export type AcknowledgeBatchOfCloudEventsParameters =
  AcknowledgeBatchOfCloudEventsMediaTypesParam &
    AcknowledgeBatchOfCloudEventsBodyParam &
    RequestParameters;

export interface ReleaseBatchOfCloudEventsBodyParam {
  /** Array of LockTokens for the corresponding received Cloud Events to be acknowledged. */
  body: Array<LockToken>;
}

export interface ReleaseBatchOfCloudEventsMediaTypesParam {
  /** content type */
  contentType: "application/json; charset=utf-8";
}

export type ReleaseBatchOfCloudEventsParameters =
  ReleaseBatchOfCloudEventsMediaTypesParam &
    ReleaseBatchOfCloudEventsBodyParam &
    RequestParameters;
