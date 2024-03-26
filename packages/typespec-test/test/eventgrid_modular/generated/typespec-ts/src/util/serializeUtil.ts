// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";
import {
  RejectOptions,
  ReleaseOptions,
  AcknowledgeOptions,
  CloudEvent,
  RejectResult,
  ReleaseResult,
  FailedLockToken,
  AcknowledgeResult,
  BrokerProperties,
  ReceiveDetails,
  ReceiveResult,
} from "../models/models.js";
import {
  RejectOptions as RestRejectOptions,
  ReleaseOptions as RestReleaseOptions,
  AcknowledgeOptions as RestAcknowledgeOptions,
  CloudEvent as RestCloudEvent,
  RejectResultOutput as RestRejectResult,
  ReleaseResultOutput as RestReleaseResult,
  FailedLockTokenOutput as RestFailedLockToken,
  AcknowledgeResultOutput as RestAcknowledgeResult,
  BrokerPropertiesOutput as RestBrokerProperties,
  ReceiveDetailsOutput as RestReceiveDetails,
  ReceiveResultOutput as RestReceiveResult,
} from "../rest/index.js";

export function serializeRejectOptions(o: RejectOptions): RestRejectOptions {
  return {
    lockTokens: o["lockTokens"],
  };
}

export function serializeReleaseOptions(o: ReleaseOptions): RestReleaseOptions {
  return {
    lockTokens: o["lockTokens"],
  };
}

export function serializeAcknowledgeOptions(
  o: AcknowledgeOptions,
): RestAcknowledgeOptions {
  return {
    lockTokens: o["lockTokens"],
  };
}

export function serializeCloudEvent(o: CloudEvent): RestCloudEvent {
  return {
    subject: o["subject"],
    datacontenttype: o["datacontenttype"],
    dataschema: o["dataschema"],
    specversion: o["specversion"],
    time: o["time"] === undefined ? o["time"] : o["time"].toISOString(),
    type: o["type"],
    data_base64:
      o["dataBase64"] === undefined
        ? o["dataBase64"]
        : uint8ArrayToString(o["dataBase64"], "base64"),
    data: o["data"] === undefined ? o["data"] : FIXME,
    source: o["source"],
    id: o["id"],
  };
}

export function deserializeRejectResult(o: RestRejectResult): RejectResult {
  return {
    succeededLockTokens: o["succeededLockTokens"],
    failedLockTokens: o["failedLockTokens"].map((e: RestFailedLockToken) =>
      MISSING_SERIALIZER(e),
    ),
  };
}

export function deserializeReleaseResult(o: RestReleaseResult): ReleaseResult {
  return {
    succeededLockTokens: o["succeededLockTokens"],
    failedLockTokens: o["failedLockTokens"].map((e: RestFailedLockToken) =>
      MISSING_SERIALIZER(e),
    ),
  };
}

export function deserializeFailedLockToken(
  o: RestFailedLockToken,
): FailedLockToken {
  return {
    errorDescription: o["errorDescription"],
    errorCode: o["errorCode"],
    lockToken: o["lockToken"],
  };
}

export function deserializeAcknowledgeResult(
  o: RestAcknowledgeResult,
): AcknowledgeResult {
  return {
    succeededLockTokens: o["succeededLockTokens"],
    failedLockTokens: o["failedLockTokens"].map((e: RestFailedLockToken) =>
      MISSING_SERIALIZER(e),
    ),
  };
}

export function deserializeBrokerProperties(
  o: RestBrokerProperties,
): BrokerProperties {
  return {
    deliveryCount: o["deliveryCount"],
    lockToken: o["lockToken"],
  };
}

export function deserializeReceiveDetails(
  o: RestReceiveDetails,
): ReceiveDetails {
  return {
    event: MISSING_DESERIALIZER(o["event"]),
    brokerProperties: MISSING_SERIALIZER(o["brokerProperties"]),
  };
}

export function deserializeReceiveResult(o: RestReceiveResult): ReceiveResult {
  return {
    value: o["value"].map((e: RestReceiveDetails) => MISSING_SERIALIZER(e)),
  };
}
