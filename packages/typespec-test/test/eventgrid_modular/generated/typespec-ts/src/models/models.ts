// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";
import {
  CloudEvent as CloudEventRest,
  AcknowledgeOptions as AcknowledgeOptionsRest,
  ReleaseOptions as ReleaseOptionsRest,
  RejectOptions as RejectOptionsRest,
} from "../rest/index.js";

/** Properties of an event published to an Azure Messaging EventGrid Namespace topic using the CloudEvent 1.0 Schema. */
export interface CloudEvent {
  /** An identifier for the event. The combination of id and source must be unique for each distinct event. */
  id: string;
  /** Identifies the context in which an event happened. The combination of id and source must be unique for each distinct event. */
  source: string;
  /** Event data specific to the event type. */
  data?: any;
  /** Event data specific to the event type, encoded as a base64 string. */
  dataBase64?: Uint8Array;
  /** Type of event related to the originating occurrence. */
  type: string;
  /** The time (in UTC) the event was generated, in RFC3339 format. */
  time?: Date;
  /** The version of the CloudEvents specification which the event uses. */
  specversion: string;
  /** Identifies the schema that data adheres to. */
  dataschema?: string;
  /** Content type of data value. */
  datacontenttype?: string;
  /** This describes the subject of the event in the context of the event producer (identified by source). */
  subject?: string;
}

export function cloudEventSerializer(item: CloudEvent): CloudEventRest {
  return {
    id: item["id"],
    source: item["source"],
    data: item["data"],
    data_base64:
      item["dataBase64"] !== undefined
        ? uint8ArrayToString(item["dataBase64"], "base64")
        : undefined,
    type: item["type"],
    time: item["time"]?.toISOString(),
    specversion: item["specversion"],
    dataschema: item["dataschema"],
    datacontenttype: item["datacontenttype"],
    subject: item["subject"],
  };
}

/** The result of the Publish operation. */
export interface PublishResult {}

/** Details of the Receive operation response. */
export interface ReceiveResult {
  /** Array of receive responses, one per cloud event. */
  value: ReceiveDetails[];
}

/** Receive operation details per Cloud Event. */
export interface ReceiveDetails {
  /** The Event Broker details. */
  brokerProperties: BrokerProperties;
  /** Cloud Event details. */
  event: CloudEvent;
}

/** Properties of the Event Broker operation. */
export interface BrokerProperties {
  /** The token used to lock the event. */
  lockToken: string;
  /** The attempt count for delivering the event. */
  deliveryCount: number;
}

/** Array of lock token strings for the corresponding received Cloud Events to be acknowledged. */
export interface AcknowledgeOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function acknowledgeOptionsSerializer(
  item: AcknowledgeOptions,
): AcknowledgeOptionsRest {
  return {
    lockTokens: item["lockTokens"],
  };
}

/** The result of the Acknowledge operation. */
export interface AcknowledgeResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully acknowledged cloud events. */
  succeededLockTokens: string[];
}

/** Failed LockToken information. */
export interface FailedLockToken {
  /** LockToken value */
  lockToken: string;
  /** Error code related to the token. Example of such error codes are BadToken: which indicates the Token is not formatted correctly, TokenLost: which indicates that token is not found, and InternalServerError: For any internal server errors. */
  errorCode: string;
  /** Description of the token error. */
  errorDescription: string;
}

/** Array of lock token strings for the corresponding received Cloud Events to be released. */
export interface ReleaseOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function releaseOptionsSerializer(
  item: ReleaseOptions,
): ReleaseOptionsRest {
  return {
    lockTokens: item["lockTokens"],
  };
}

/** The result of the Release operation. */
export interface ReleaseResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully released cloud events. */
  succeededLockTokens: string[];
}

/** Array of lock token strings for the corresponding received Cloud Events to be rejected. */
export interface RejectOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function rejectOptionsSerializer(
  item: RejectOptions,
): RejectOptionsRest {
  return {
    lockTokens: item["lockTokens"],
  };
}

/** The result of the Reject operation. */
export interface RejectResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully rejected cloud events. */
  succeededLockTokens: string[];
}

export type ServiceApiVersions = "2023-06-01-preview";
