// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createEventGrid,
  EventGridContext,
  EventGridClientOptionalParams,
  rejectCloudEvents,
  releaseCloudEvents,
  acknowledgeCloudEvents,
  receiveCloudEvents,
  publishCloudEvents,
  publishCloudEvent,
  RejectCloudEventsOptionalParams,
  ReleaseCloudEventsOptionalParams,
  AcknowledgeCloudEventsOptionalParams,
  ReceiveCloudEventsOptionalParams,
  PublishCloudEventsOptionalParams,
  PublishCloudEventOptionalParams,
} from "./api/index.js";
import {
  CloudEvent,
  PublishResult,
  ReceiveResult,
  AcknowledgeOptions,
  AcknowledgeResult,
  ReleaseOptions,
  ReleaseResult,
  RejectOptions,
  RejectResult,
} from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential } from "@azure/core-auth";

export { EventGridClientOptionalParams } from "./api/eventGridContext.js";

export class EventGridClient {
  private _client: EventGridContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Messaging EventGrid Client */
  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: EventGridClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createEventGrid(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Reject batch of Cloud Events. */
  rejectCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    lockTokens: RejectOptions,
    options: RejectCloudEventsOptionalParams = { requestOptions: {} },
  ): Promise<RejectResult> {
    return rejectCloudEvents(
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
    options: ReleaseCloudEventsOptionalParams = { requestOptions: {} },
  ): Promise<ReleaseResult> {
    return releaseCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      lockTokens,
      options,
    );
  }

  /** Acknowledge batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully acknowledged. The response body will include the set of successfully acknowledged lockTokens, along with other failed lockTokens with their corresponding error information. Successfully acknowledged events will no longer be available to any consumer. */
  acknowledgeCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    lockTokens: AcknowledgeOptions,
    options: AcknowledgeCloudEventsOptionalParams = { requestOptions: {} },
  ): Promise<AcknowledgeResult> {
    return acknowledgeCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      lockTokens,
      options,
    );
  }

  /** Receive Batch of Cloud Events from the Event Subscription. */
  receiveCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    options: ReceiveCloudEventsOptionalParams = { requestOptions: {} },
  ): Promise<ReceiveResult> {
    return receiveCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      options,
    );
  }

  /** Publish Batch Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
  publishCloudEvents(
    topicName: string,
    events: CloudEvent[],
    options: PublishCloudEventsOptionalParams = { requestOptions: {} },
  ): Promise<PublishResult> {
    return publishCloudEvents(this._client, topicName, events, options);
  }

  /** Publish Single Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
  publishCloudEvent(
    topicName: string,
    event: {
      event: CloudEvent;
    },
    options: PublishCloudEventOptionalParams = { requestOptions: {} },
  ): Promise<PublishResult> {
    return publishCloudEvent(this._client, topicName, event, options);
  }
}
