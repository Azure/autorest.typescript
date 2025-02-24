// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AcknowledgeCloudEventsOptionalParams,
  EventGridContext as Client,
  PublishCloudEventOptionalParams,
  PublishCloudEventsOptionalParams,
  ReceiveCloudEventsOptionalParams,
  RejectCloudEventsOptionalParams,
  ReleaseCloudEventsOptionalParams,
} from "./index.js";
import {
  _publishCloudEventRequestSerializer,
  CloudEvent,
  cloudEventSerializer,
  PublishResult,
  publishResultDeserializer,
  ReceiveResult,
  receiveResultDeserializer,
  AcknowledgeOptions,
  acknowledgeOptionsSerializer,
  AcknowledgeResult,
  acknowledgeResultDeserializer,
  ReleaseOptions,
  releaseOptionsSerializer,
  ReleaseResult,
  releaseResultDeserializer,
  RejectOptions,
  rejectOptionsSerializer,
  RejectResult,
  rejectResultDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _rejectCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: RejectOptions,
  options: RejectCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:reject{?api-version}",
    {
      topicName: topicName,
      eventSubscriptionName: eventSubscriptionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; charset=utf-8",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: rejectOptionsSerializer(lockTokens),
    });
}

export async function _rejectCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<RejectResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return rejectResultDeserializer(result.body);
}

/** Reject batch of Cloud Events. */
export async function rejectCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: RejectOptions,
  options: RejectCloudEventsOptionalParams = { requestOptions: {} },
): Promise<RejectResult> {
  const result = await _rejectCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options,
  );
  return _rejectCloudEventsDeserialize(result);
}

export function _releaseCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:release{?api-version}",
    {
      topicName: topicName,
      eventSubscriptionName: eventSubscriptionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; charset=utf-8",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: releaseOptionsSerializer(lockTokens),
    });
}

export async function _releaseCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<ReleaseResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return releaseResultDeserializer(result.body);
}

/** Release batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully released. The response body will include the set of successfully released lockTokens, along with other failed lockTokens with their corresponding error information. */
export async function releaseCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptionalParams = { requestOptions: {} },
): Promise<ReleaseResult> {
  const result = await _releaseCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options,
  );
  return _releaseCloudEventsDeserialize(result);
}

export function _acknowledgeCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:acknowledge{?api-version}",
    {
      topicName: topicName,
      eventSubscriptionName: eventSubscriptionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; charset=utf-8",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: acknowledgeOptionsSerializer(lockTokens),
    });
}

export async function _acknowledgeCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<AcknowledgeResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return acknowledgeResultDeserializer(result.body);
}

/** Acknowledge batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully acknowledged. The response body will include the set of successfully acknowledged lockTokens, along with other failed lockTokens with their corresponding error information. Successfully acknowledged events will no longer be available to any consumer. */
export async function acknowledgeCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptionalParams = { requestOptions: {} },
): Promise<AcknowledgeResult> {
  const result = await _acknowledgeCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options,
  );
  return _acknowledgeCloudEventsDeserialize(result);
}

export function _receiveCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  options: ReceiveCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:receive{?api-version,maxEvents,maxWaitTime}",
    {
      topicName: topicName,
      eventSubscriptionName: eventSubscriptionName,
      "api-version": context.apiVersion,
      maxEvents: options?.maxEvents,
      maxWaitTime: options?.maxWaitTime,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _receiveCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<ReceiveResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return receiveResultDeserializer(result.body);
}

/** Receive Batch of Cloud Events from the Event Subscription. */
export async function receiveCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  options: ReceiveCloudEventsOptionalParams = { requestOptions: {} },
): Promise<ReceiveResult> {
  const result = await _receiveCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    options,
  );
  return _receiveCloudEventsDeserialize(result);
}

export function _publishCloudEventsSend(
  context: Client,
  topicName: string,
  events: CloudEvent[],
  options: PublishCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}:publish{?api-version}",
    {
      topicName: topicName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/cloudevents-batch+json; charset=utf-8",
    headers: { accept: "application/json", ...options.requestOptions?.headers },
    body: events.map((p: any) => {
      return cloudEventSerializer(p);
    }),
  });
}

export async function _publishCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<PublishResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return publishResultDeserializer(result.body);
}

/** Publish Batch Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
export async function publishCloudEvents(
  context: Client,
  topicName: string,
  events: CloudEvent[],
  options: PublishCloudEventsOptionalParams = { requestOptions: {} },
): Promise<PublishResult> {
  const result = await _publishCloudEventsSend(
    context,
    topicName,
    events,
    options,
  );
  return _publishCloudEventsDeserialize(result);
}

export function _publishCloudEventSend(
  context: Client,
  topicName: string,
  event: {
    event: CloudEvent;
  },
  options: PublishCloudEventOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/topics/{topicName}:publish{?api-version}",
    {
      topicName: topicName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/cloudevents+json; charset=utf-8",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: _publishCloudEventRequestSerializer(event),
    });
}

export async function _publishCloudEventDeserialize(
  result: PathUncheckedResponse,
): Promise<PublishResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return publishResultDeserializer(result.body);
}

/** Publish Single Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
export async function publishCloudEvent(
  context: Client,
  topicName: string,
  event: {
    event: CloudEvent;
  },
  options: PublishCloudEventOptionalParams = { requestOptions: {} },
): Promise<PublishResult> {
  const result = await _publishCloudEventSend(
    context,
    topicName,
    event,
    options,
  );
  return _publishCloudEventDeserialize(result);
}
