// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CloudEvent,
  ReceiveResult,
  AcknowledgeOptions,
  AcknowledgeResult,
  ReleaseOptions,
  ReleaseResult,
  RejectOptions,
  RejectResult,
} from "../models/models.js";
import {
  isUnexpected,
  EventGridContext as Client,
  AcknowledgeCloudEvents200Response,
  AcknowledgeCloudEventsDefaultResponse,
  PublishCloudEvent200Response,
  PublishCloudEventDefaultResponse,
  PublishCloudEvents200Response,
  PublishCloudEventsDefaultResponse,
  ReceiveCloudEvents200Response,
  ReceiveCloudEventsDefaultResponse,
  RejectCloudEvents200Response,
  RejectCloudEventsDefaultResponse,
  ReleaseCloudEvents200Response,
  ReleaseCloudEventsDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  PublishCloudEventOptions,
  PublishCloudEventsOptions,
  ReceiveCloudEventsOptions,
  AcknowledgeCloudEventsOptions,
  ReleaseCloudEventsOptions,
  RejectCloudEventsOptions,
} from "../models/options.js";

export function _publishCloudEventSend(
  context: Client,
  topicName: string,
  event: CloudEvent,
  options: PublishCloudEventOptions = { requestOptions: {} }
): StreamableMethod<
  PublishCloudEvent200Response | PublishCloudEventDefaultResponse
> {
  return context
    .path("/topics/{topicName}:publish", topicName)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/cloudevents+json; charset=utf-8",
      body: {
        event: {
          id: event["id"],
          source: event["source"],
          data: event["data"],
          data_base64:
            event["dataBase64"] !== undefined
              ? uint8ArrayToString(event["dataBase64"], "base64")
              : undefined,
          type: event["type"],
          time: event["time"]?.toISOString(),
          specversion: event["specversion"],
          dataschema: event["dataschema"],
          datacontenttype: event["datacontenttype"],
          subject: event["subject"],
        },
      },
    }) as StreamableMethod<
    PublishCloudEvent200Response | PublishCloudEventDefaultResponse
  >;
}

export async function _publishCloudEventDeserialize(
  result: PublishCloudEvent200Response | PublishCloudEventDefaultResponse
): Promise<Record<string, any>> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/** Publish Single Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
export async function publishCloudEvent(
  context: Client,
  topicName: string,
  event: CloudEvent,
  options: PublishCloudEventOptions = { requestOptions: {} }
): Promise<Record<string, any>> {
  const result = await _publishCloudEventSend(
    context,
    topicName,
    event,
    options
  );
  return _publishCloudEventDeserialize(result);
}

export function _publishCloudEventsSend(
  context: Client,
  topicName: string,
  events: CloudEvent[],
  options: PublishCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  PublishCloudEvents200Response | PublishCloudEventsDefaultResponse
> {
  return context.path("/topics/{topicName}:publish", topicName).post({
    ...operationOptionsToRequestParameters(options),
    contentType:
      (options.contentType as any) ??
      "application/cloudevents-batch+json; charset=utf-8",
    body: (events ?? []).map((p) => {
      return {
        id: p["id"],
        source: p["source"],
        data: p["data"],
        data_base64:
          p["dataBase64"] !== undefined
            ? uint8ArrayToString(p["dataBase64"], "base64")
            : undefined,
        type: p["type"],
        time: p["time"]?.toISOString(),
        specversion: p["specversion"],
        dataschema: p["dataschema"],
        datacontenttype: p["datacontenttype"],
        subject: p["subject"],
      };
    }),
  }) as StreamableMethod<
    PublishCloudEvents200Response | PublishCloudEventsDefaultResponse
  >;
}

export async function _publishCloudEventsDeserialize(
  result: PublishCloudEvents200Response | PublishCloudEventsDefaultResponse
): Promise<Record<string, any>> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/** Publish Batch Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
export async function publishCloudEvents(
  context: Client,
  topicName: string,
  events: CloudEvent[],
  options: PublishCloudEventsOptions = { requestOptions: {} }
): Promise<Record<string, any>> {
  const result = await _publishCloudEventsSend(
    context,
    topicName,
    events,
    options
  );
  return _publishCloudEventsDeserialize(result);
}

export function _receiveCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  options: ReceiveCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ReceiveCloudEvents200Response | ReceiveCloudEventsDefaultResponse
> {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:receive",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxEvents: options?.maxEvents,
        maxWaitTime: options?.maxWaitTime,
      },
    });
}

export async function _receiveCloudEventsDeserialize(
  result: ReceiveCloudEvents200Response | ReceiveCloudEventsDefaultResponse
): Promise<ReceiveResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: result.body["value"].map((p) => ({
      brokerProperties: {
        lockToken: p.brokerProperties["lockToken"],
        deliveryCount: p.brokerProperties["deliveryCount"],
      },
      event: {
        id: p.event["id"],
        source: p.event["source"],
        data: p.event["data"],
        dataBase64:
          typeof p.event["data_base64"] === "string"
            ? stringToUint8Array(p.event["data_base64"], "base64")
            : p.event["data_base64"],
        type: p.event["type"],
        time:
          p.event["time"] !== undefined ? new Date(p.event["time"]) : undefined,
        specversion: p.event["specversion"],
        dataschema: p.event["dataschema"],
        datacontenttype: p.event["datacontenttype"],
        subject: p.event["subject"],
      },
    })),
  };
}

/** Receive Batch of Cloud Events from the Event Subscription. */
export async function receiveCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  options: ReceiveCloudEventsOptions = { requestOptions: {} }
): Promise<ReceiveResult> {
  const result = await _receiveCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    options
  );
  return _receiveCloudEventsDeserialize(result);
}

export function _acknowledgeCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  AcknowledgeCloudEvents200Response | AcknowledgeCloudEventsDefaultResponse
> {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:acknowledge",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _acknowledgeCloudEventsDeserialize(
  result:
    | AcknowledgeCloudEvents200Response
    | AcknowledgeCloudEventsDefaultResponse
): Promise<AcknowledgeResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}

/** Acknowledge batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully acknowledged. The response body will include the set of successfully acknowledged lockTokens, along with other failed lockTokens with their corresponding error information. Successfully acknowledged events will no longer be available to any consumer. */
export async function acknowledgeCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptions = { requestOptions: {} }
): Promise<AcknowledgeResult> {
  const result = await _acknowledgeCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options
  );
  return _acknowledgeCloudEventsDeserialize(result);
}

export function _releaseCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ReleaseCloudEvents200Response | ReleaseCloudEventsDefaultResponse
> {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:release",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _releaseCloudEventsDeserialize(
  result: ReleaseCloudEvents200Response | ReleaseCloudEventsDefaultResponse
): Promise<ReleaseResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}

/** Release batch of Cloud Events. The server responds with an HTTP 200 status code if at least one event is successfully released. The response body will include the set of successfully released lockTokens, along with other failed lockTokens with their corresponding error information. */
export async function releaseCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptions = { requestOptions: {} }
): Promise<ReleaseResult> {
  const result = await _releaseCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options
  );
  return _releaseCloudEventsDeserialize(result);
}

export function _rejectCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: RejectOptions,
  options: RejectCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  RejectCloudEvents200Response | RejectCloudEventsDefaultResponse
> {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:reject",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _rejectCloudEventsDeserialize(
  result: RejectCloudEvents200Response | RejectCloudEventsDefaultResponse
): Promise<RejectResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}

/** Reject batch of Cloud Events. */
export async function rejectCloudEvents(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: RejectOptions,
  options: RejectCloudEventsOptions = { requestOptions: {} }
): Promise<RejectResult> {
  const result = await _rejectCloudEventsSend(
    context,
    topicName,
    eventSubscriptionName,
    lockTokens,
    options
  );
  return _rejectCloudEventsDeserialize(result);
}
