// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, AzureKeyCredential } from "@azure/core-auth";
import { ClientOptions } from "./common/interfaces.js";
import {
  createAzureMessagingEventGrid,
  AzureMessagingEventGridContext,
  CloudEventEvent,
  ReceiveResponse,
  LockToken,
  LockTokensResponse,
  publishCloudEvent,
  publishBatchOfCloudEvents,
  receiveBatchOfCloudEvents,
  acknowledgeBatchOfCloudEvents,
  releaseBatchOfCloudEvents,
  PublishCloudEventOptions,
  PublishBatchOfCloudEventsOptions,
  ReceiveBatchOfCloudEventsOptions,
  AcknowledgeBatchOfCloudEventsOptions,
  ReleaseBatchOfCloudEventsOptions,
} from "./api/index.js";

export class AzureMessagingEventGridClient {
  private _client: AzureMessagingEventGridContext;

  /** Azure Messaging EventGrid Client */
  constructor(
    endpoint: string,
    credential: AzureKeyCredential | TokenCredential,
    options: ClientOptions = {}
  ) {
    this._client = createAzureMessagingEventGrid(endpoint, credential, options);
  }

  publishCloudEvent(
    id: string,
    source: string,
    type: string,
    specversion: string,
    topicName: string,
    options: PublishCloudEventOptions = { requestOptions: {} }
  ): Promise<void> {
    return publishCloudEvent(
      this._client,
      id,
      source,
      type,
      specversion,
      topicName,
      options
    );
  }

  publishBatchOfCloudEvents(
    events: CloudEventEvent[],
    topicName: string,
    options: PublishBatchOfCloudEventsOptions = { requestOptions: {} }
  ): Promise<void> {
    return publishBatchOfCloudEvents(this._client, events, topicName, options);
  }

  receiveBatchOfCloudEvents(
    topicName: string,
    eventSubscriptionName: string,
    options: ReceiveBatchOfCloudEventsOptions = { requestOptions: {} }
  ): Promise<ReceiveResponse> {
    return receiveBatchOfCloudEvents(
      this._client,
      topicName,
      eventSubscriptionName,
      options
    );
  }

  acknowledgeBatchOfCloudEvents(
    lockTokens: string[],
    topicName: string,
    eventSubscriptionName: string,
    options: AcknowledgeBatchOfCloudEventsOptions = { requestOptions: {} }
  ): Promise<LockTokensResponse> {
    return acknowledgeBatchOfCloudEvents(
      this._client,
      lockTokens,
      topicName,
      eventSubscriptionName,
      options
    );
  }

  releaseBatchOfCloudEvents(
    tokens: LockToken[],
    topicName: string,
    eventSubscriptionName: string,
    options: ReleaseBatchOfCloudEventsOptions = { requestOptions: {} }
  ): Promise<LockTokensResponse> {
    return releaseBatchOfCloudEvents(
      this._client,
      tokens,
      topicName,
      eventSubscriptionName,
      options
    );
  }
}
