// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  cloudEventSerializer,
  CloudEvent,
  PublishResult,
  ReceiveResult,
  AcknowledgeOptions,
  AcknowledgeResult,
  ReleaseOptions,
  ReleaseResult,
  RejectOptions,
  RejectResult,
} from "../models/models.js";
import { EventGridContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  PublishCloudEventOptionalParams,
  PublishCloudEventsOptionalParams,
  ReceiveCloudEventsOptionalParams,
  AcknowledgeCloudEventsOptionalParams,
  ReleaseCloudEventsOptionalParams,
  RejectCloudEventsOptionalParams,
} from "./options.js";

export function _publishCloudEventSend(
  context: Client,
  topicName: string,
  event: { event: CloudEvent },
  options: PublishCloudEventOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/topics/{topicName}:publish", topicName)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/cloudevents+json; charset=utf-8",
      body: { event: cloudEventSerializer(event.event) },
    });
}

export async function _publishCloudEventDeserialize(
  result: PathUncheckedResponse,
): Promise<PublishResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Publish Single Cloud Event to namespace topic. In case of success, the server responds with an HTTP 200 status code with an empty JSON object in response. Otherwise, the server can return various error codes. For example, 401: which indicates authorization failure, 403: which indicates quota exceeded or message is too large, 410: which indicates that specific topic is not found, 400: for bad request, and 500: for internal server error. */
export async function publishCloudEvent(
  context: Client,
  topicName: string,
  event: { event: CloudEvent },
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

export function _publishCloudEventsSend(
  context: Client,
  topicName: string,
  events: CloudEvent[],
  options: PublishCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  });
}

export async function _publishCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<PublishResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
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

export function _receiveCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  options: ReceiveCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:receive",
      topicName,
      eventSubscriptionName,
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
  result: PathUncheckedResponse,
): Promise<ReceiveResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
            p.event["time"] !== undefined
              ? new Date(p.event["time"])
              : undefined,
          specversion: p.event["specversion"],
          dataschema: p.event["dataschema"],
          datacontenttype: p.event["datacontenttype"],
          subject: p.event["subject"],
        },
      };
    }),
  };
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

export function _acknowledgeCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:acknowledge",
      topicName,
      eventSubscriptionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _acknowledgeCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<AcknowledgeResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p: any) => {
      return {
        lockToken: p["lockToken"],
        errorCode: p["errorCode"],
        errorDescription: p["errorDescription"],
      };
    }),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
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

export function _releaseCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:release",
      topicName,
      eventSubscriptionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _releaseCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<ReleaseResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p: any) => {
      return {
        lockToken: p["lockToken"],
        errorCode: p["errorCode"],
        errorDescription: p["errorDescription"],
      };
    }),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
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

export function _rejectCloudEventsSend(
  context: Client,
  topicName: string,
  eventSubscriptionName: string,
  lockTokens: RejectOptions,
  options: RejectCloudEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:reject",
      topicName,
      eventSubscriptionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    });
}

export async function _rejectCloudEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<RejectResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    failedLockTokens: result.body["failedLockTokens"].map((p: any) => {
      return {
        lockToken: p["lockToken"],
        errorCode: p["errorCode"],
        errorDescription: p["errorDescription"],
      };
    }),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
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
