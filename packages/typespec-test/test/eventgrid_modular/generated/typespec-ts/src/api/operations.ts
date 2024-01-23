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
  AcknowledgeCloudEventsBodyParam,
  AcknowledgeCloudEventsDefaultResponse,
  AcknowledgeCloudEventsMediaTypesParam,
  AcknowledgeCloudEventsParameters,
  PublishCloudEvent200Response,
  PublishCloudEventBodyParam,
  PublishCloudEventDefaultResponse,
  PublishCloudEventMediaTypesParam,
  PublishCloudEventParameters,
  PublishCloudEvents200Response,
  PublishCloudEventsBodyParam,
  PublishCloudEventsDefaultResponse,
  PublishCloudEventsMediaTypesParam,
  PublishCloudEventsParameters,
  ReceiveCloudEvents200Response,
  ReceiveCloudEventsDefaultResponse,
  ReceiveCloudEventsParameters,
  ReceiveCloudEventsQueryParam,
  RejectCloudEvents200Response,
  RejectCloudEventsBodyParam,
  RejectCloudEventsDefaultResponse,
  RejectCloudEventsMediaTypesParam,
  RejectCloudEventsParameters,
  ReleaseCloudEvents200Response,
  ReleaseCloudEventsBodyParam,
  ReleaseCloudEventsDefaultResponse,
  ReleaseCloudEventsMediaTypesParam,
  ReleaseCloudEventsParameters,
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

export function _publishCloudEventSend(
  context: Client,
  _topicName: string,
  _event: CloudEvent,
  options: PublishCloudEventOptions = { requestOptions: {} }
): StreamableMethod<
  PublishCloudEvent200Response | PublishCloudEventDefaultResponse
> {
  const { requestOptions, topicName } = _publishCloudEventOptionsSerialize({
    topicName: _topicName,
    event: _event,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as PublishCloudEventParameters;
  return context.path("/topics/{topicName}:publish", topicName).post({
    ...requestParameters,
    ...requestOptions,
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

export function _publishCloudEventsSend(
  context: Client,
  _topicName: string,
  _events: CloudEvent[],
  options: PublishCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  PublishCloudEvents200Response | PublishCloudEventsDefaultResponse
> {
  const { requestOptions, topicName } = _publishCloudEventsOptionsSerialize({
    topicName: _topicName,
    events: _events,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as PublishCloudEventsParameters;
  return context.path("/topics/{topicName}:publish", topicName).post({
    ...requestParameters,
    ...requestOptions,
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

export function _receiveCloudEventsSend(
  context: Client,
  _topicName: string,
  _eventSubscriptionName: string,
  options: ReceiveCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ReceiveCloudEvents200Response | ReceiveCloudEventsDefaultResponse
> {
  const { requestOptions, topicName, eventSubscriptionName } =
    _receiveCloudEventsOptionsSerialize({
      topicName: _topicName,
      eventSubscriptionName: _eventSubscriptionName,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as ReceiveCloudEventsParameters;
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:receive",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...requestParameters,
      ...requestOptions,
      queryParameters: {
        ...requestParameters.queryParameters,
        ...requestOptions.queryParameters,
      },
    });
}

export async function _receiveCloudEventsDeserialize(
  result: ReceiveCloudEvents200Response | ReceiveCloudEventsDefaultResponse
): Promise<ReceiveResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _receiveResultDeserialize(result);
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

export function _acknowledgeCloudEventsSend(
  context: Client,
  _topicName: string,
  _eventSubscriptionName: string,
  _lockTokens: AcknowledgeOptions,
  options: AcknowledgeCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  AcknowledgeCloudEvents200Response | AcknowledgeCloudEventsDefaultResponse
> {
  const { requestOptions, topicName, eventSubscriptionName } =
    _acknowledgeCloudEventsOptionsSerialize({
      topicName: _topicName,
      eventSubscriptionName: _eventSubscriptionName,
      lockTokens: _lockTokens,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as AcknowledgeCloudEventsParameters;
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:acknowledge",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...requestParameters,
      ...requestOptions,
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

  return _acknowledgeResultDeserialize(result);
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

export function _releaseCloudEventsSend(
  context: Client,
  _topicName: string,
  _eventSubscriptionName: string,
  _lockTokens: ReleaseOptions,
  options: ReleaseCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ReleaseCloudEvents200Response | ReleaseCloudEventsDefaultResponse
> {
  const { requestOptions, topicName, eventSubscriptionName } =
    _releaseCloudEventsOptionsSerialize({
      topicName: _topicName,
      eventSubscriptionName: _eventSubscriptionName,
      lockTokens: _lockTokens,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as ReleaseCloudEventsParameters;
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:release",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _releaseCloudEventsDeserialize(
  result: ReleaseCloudEvents200Response | ReleaseCloudEventsDefaultResponse
): Promise<ReleaseResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _releaseResultDeserialize(result);
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

export function _rejectCloudEventsSend(
  context: Client,
  _topicName: string,
  _eventSubscriptionName: string,
  _lockTokens: RejectOptions,
  options: RejectCloudEventsOptions = { requestOptions: {} }
): StreamableMethod<
  RejectCloudEvents200Response | RejectCloudEventsDefaultResponse
> {
  const { requestOptions, topicName, eventSubscriptionName } =
    _rejectCloudEventsOptionsSerialize({
      topicName: _topicName,
      eventSubscriptionName: _eventSubscriptionName,
      lockTokens: _lockTokens,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as RejectCloudEventsParameters;
  return context
    .path(
      "/topics/{topicName}/eventsubscriptions/{eventSubscriptionName}:reject",
      topicName,
      eventSubscriptionName
    )
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _rejectCloudEventsDeserialize(
  result: RejectCloudEvents200Response | RejectCloudEventsDefaultResponse
): Promise<RejectResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _rejectResultDeserialize(result);
}

export function _publishCloudEventOptionsSerialize(parameters: {
  topicName: string;
  event: CloudEvent;
  options: PublishCloudEventOptions;
}): {
  topicName: string;
  event: CloudEvent;
  requestOptions: PublishCloudEventBodyParam & PublishCloudEventMediaTypesParam;
} {
  const { topicName, event } = parameters;
  return {
    topicName,
    event,
    requestOptions: {
      contentType: "application/cloudevents+json; charset=utf-8",
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
    },
  };
}

export function _publishCloudEventsOptionsSerialize(parameters: {
  topicName: string;
  events: CloudEvent[];
  options: PublishCloudEventsOptions;
}): {
  topicName: string;
  requestOptions: PublishCloudEventsBodyParam &
    PublishCloudEventsMediaTypesParam;
} {
  const { topicName, events } = parameters;
  return {
    topicName,
    requestOptions: {
      contentType: "application/cloudevents-batch+json; charset=utf-8",
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
    },
  };
}

export function _receiveCloudEventsOptionsSerialize(parameters: {
  topicName: string;
  eventSubscriptionName: string;
  options: ReceiveCloudEventsOptions;
}): {
  topicName: string;
  eventSubscriptionName: string;
  requestOptions: ReceiveCloudEventsQueryParam;
} {
  const { topicName, eventSubscriptionName, options } = parameters;
  return {
    topicName,
    eventSubscriptionName,
    requestOptions: {
      queryParameters: {
        maxEvents: options?.maxEvents,
        maxWaitTime: options?.maxWaitTime,
      },
    },
  };
}

export function _acknowledgeCloudEventsOptionsSerialize(parameters: {
  topicName: string;
  eventSubscriptionName: string;
  lockTokens: AcknowledgeOptions;
  options: AcknowledgeCloudEventsOptions;
}): {
  topicName: string;
  eventSubscriptionName: string;
  requestOptions: AcknowledgeCloudEventsBodyParam &
    AcknowledgeCloudEventsMediaTypesParam;
} {
  const { topicName, eventSubscriptionName, lockTokens } = parameters;
  return {
    topicName,
    eventSubscriptionName,
    requestOptions: {
      contentType: "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    },
  };
}

export function _releaseCloudEventsOptionsSerialize(parameters: {
  topicName: string;
  eventSubscriptionName: string;
  lockTokens: ReleaseOptions;
  options: ReleaseCloudEventsOptions;
}): {
  topicName: string;
  eventSubscriptionName: string;
  requestOptions: ReleaseCloudEventsBodyParam &
    ReleaseCloudEventsMediaTypesParam;
} {
  const { topicName, eventSubscriptionName, lockTokens } = parameters;
  return {
    topicName,
    eventSubscriptionName,
    requestOptions: {
      contentType: "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    },
  };
}

export function _rejectCloudEventsOptionsSerialize(parameters: {
  topicName: string;
  eventSubscriptionName: string;
  lockTokens: RejectOptions;
  options: RejectCloudEventsOptions;
}): {
  topicName: string;
  eventSubscriptionName: string;
  requestOptions: RejectCloudEventsBodyParam & RejectCloudEventsMediaTypesParam;
} {
  const { topicName, eventSubscriptionName, lockTokens } = parameters;
  return {
    topicName,
    eventSubscriptionName,
    requestOptions: {
      contentType: "application/json; charset=utf-8",
      body: { lockTokens: lockTokens["lockTokens"] },
    },
  };
}

export function _receiveResultDeserialize(
  result: ReceiveCloudEvents200Response
): ReceiveResult {
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

export function _acknowledgeResultDeserialize(
  result: AcknowledgeCloudEvents200Response
): AcknowledgeResult {
  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}

export function _releaseResultDeserialize(
  result: ReleaseCloudEvents200Response
): ReleaseResult {
  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}

export function _rejectResultDeserialize(
  result: RejectCloudEvents200Response
): RejectResult {
  return {
    failedLockTokens: result.body["failedLockTokens"].map((p) => ({
      lockToken: p["lockToken"],
      errorCode: p["errorCode"],
      errorDescription: p["errorDescription"],
    })),
    succeededLockTokens: result.body["succeededLockTokens"],
  };
}
