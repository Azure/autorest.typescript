// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  CloudEvent,
  ReceiveResult,
  AcknowledgeOptions,
  AcknowledgeResult,
  ReleaseOptions,
  ReleaseResult,
  RejectOptions,
  RejectResult,
} from "./models/models.js";
import {
  PublishCloudEventOptions,
  PublishCloudEventsOptions,
  ReceiveCloudEventsOptions,
  AcknowledgeCloudEventsOptions,
  ReleaseCloudEventsOptions,
  RejectCloudEventsOptions,
} from "./models/options.js";
import {
  createEventGrid,
  EventGridClientOptions,
  EventGridContext,
  publishCloudEvent,
  publishCloudEvents,
  receiveCloudEvents,
  acknowledgeCloudEvents,
  releaseCloudEvents,
  rejectCloudEvents,
} from "./api/index.js";

export { EventGridClientOptions } from "./api/EventGridContext.js";

export class EventGridClient {
  private _client: EventGridContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Messaging EventGrid Client */
  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: EventGridClientOptions = {},
  ) {
    this._client = createEventGrid(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Publish Single Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
  publishCloudEvent(
    topicName: string,
    event: CloudEvent,
    options: PublishCloudEventOptions = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return publishCloudEvent(this._client, topicName, event, options);
  }

  /** Publish Batch Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
  publishCloudEvents(
    topicName: string,
    events: CloudEvent[],
    options: PublishCloudEventsOptions = { requestOptions: {} },
  ): Promise<Record<string, any>> {
    return publishCloudEvents(this._client, topicName, events, options);
  }

  /** Receive Batch of Cloud Events from the Event Subscription. */
  receiveCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    options: ReceiveCloudEventsOptions = { requestOptions: {} },
  ): Promise<ReceiveResult> {
    return receiveCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      options,
    );
  }

  /** Acknowledge batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully acknowledged. The response body will include the set of successfully acknowledged lockTokens, along with other failed lockTokens with their corresponding error information. Successfully acknowledged events will no longer be available to any consumer. */
  acknowledgeCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    lockTokens: AcknowledgeOptions,
    options: AcknowledgeCloudEventsOptions = { requestOptions: {} },
  ): Promise<AcknowledgeResult> {
    return acknowledgeCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      lockTokens,
      options,
    );
  }

  /** Release batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully released. The response body will include the set of successfully released lockTokens, along with other failed lockTokens with their corresponding error information. */
  releaseCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    lockTokens: ReleaseOptions,
    options: ReleaseCloudEventsOptions = { requestOptions: {} },
  ): Promise<ReleaseResult> {
    return releaseCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      lockTokens,
      options,
    );
  }

  /** Reject batch of Cloud Events. */
  rejectCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    lockTokens: RejectOptions,
    options: RejectCloudEventsOptions = { requestOptions: {} },
  ): Promise<RejectResult> {
    return rejectCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      lockTokens,
      options,
    );
  }
}
