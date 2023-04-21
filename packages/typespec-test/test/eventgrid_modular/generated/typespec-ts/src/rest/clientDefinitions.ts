// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PublishCloudEventParameters,
  PublishBatchOfCloudEventsParameters,
  ReceiveBatchOfCloudEventsParameters,
  AcknowledgeBatchOfCloudEventsParameters,
  ReleaseBatchOfCloudEventsParameters,
} from "./parameters.js";
import {
  PublishCloudEvent200Response,
  PublishCloudEventDefaultResponse,
  PublishBatchOfCloudEvents200Response,
  PublishBatchOfCloudEventsDefaultResponse,
  ReceiveBatchOfCloudEvents201Response,
  ReceiveBatchOfCloudEventsDefaultResponse,
  AcknowledgeBatchOfCloudEvents200Response,
  AcknowledgeBatchOfCloudEventsDefaultResponse,
  ReleaseBatchOfCloudEvents200Response,
  ReleaseBatchOfCloudEventsDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PublishCloudEvent {
  /** Publish Single Cloud Event to namespace topic. */
  post(
    options: PublishCloudEventParameters
  ): StreamableMethod<
    PublishCloudEvent200Response | PublishCloudEventDefaultResponse
  >;
  /** Publish Batch of Cloud Events to namespace topic. */
  post(
    options: PublishBatchOfCloudEventsParameters
  ): StreamableMethod<
    | PublishBatchOfCloudEvents200Response
    | PublishBatchOfCloudEventsDefaultResponse
  >;
}

export interface ReceiveBatchOfCloudEvents {
  /** Receive Batch of Cloud Events from the Event Subscription. */
  post(
    options?: ReceiveBatchOfCloudEventsParameters
  ): StreamableMethod<
    | ReceiveBatchOfCloudEvents201Response
    | ReceiveBatchOfCloudEventsDefaultResponse
  >;
}

export interface AcknowledgeBatchOfCloudEvents {
  /** Acknowledge Cloud Events. */
  post(
    options: AcknowledgeBatchOfCloudEventsParameters
  ): StreamableMethod<
    | AcknowledgeBatchOfCloudEvents200Response
    | AcknowledgeBatchOfCloudEventsDefaultResponse
  >;
}

export interface ReleaseBatchOfCloudEvents {
  /** Release Cloud Events. */
  post(
    options: ReleaseBatchOfCloudEventsParameters
  ): StreamableMethod<
    | ReleaseBatchOfCloudEvents200Response
    | ReleaseBatchOfCloudEventsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/topics/\{topicName\}:publish' has methods for the following verbs: post */
  (path: "/topics/{topicName}:publish", topicName: string): PublishCloudEvent;
  /** Resource for '/topics/\{topicName\}/eventsubscriptions/\{eventSubscriptionName\}:receive' has methods for the following verbs: post */
  (
    path: "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:receive",
    topicName: string,
    eventSubscriptionName: string
  ): ReceiveBatchOfCloudEvents;
  /** Resource for '/topics/\{topicName\}/eventsubscriptions/\{eventSubscriptionName\}:acknowledge' has methods for the following verbs: post */
  (
    path: "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:acknowledge",
    topicName: string,
    eventSubscriptionName: string
  ): AcknowledgeBatchOfCloudEvents;
  /** Resource for '/topics/\{topicName\}/eventsubscriptions/\{eventSubscriptionName\}:release' has methods for the following verbs: post */
  (
    path: "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:release",
    topicName: string,
    eventSubscriptionName: string
  ): ReleaseBatchOfCloudEvents;
}

export type AzureMessagingEventGridContext = Client & {
  path: Routes;
};
