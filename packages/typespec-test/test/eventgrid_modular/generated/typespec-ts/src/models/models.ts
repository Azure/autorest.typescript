// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

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

export function cloudEventSerializer(item: CloudEvent): any {
  return {
    id: item["id"],
    source: item["source"],
    data: item["data"],
    data_base64: !item["dataBase64"]
      ? item["dataBase64"]
      : uint8ArrayToString(item["dataBase64"], "base64"),
    type: item["type"],
    time: !item["time"] ? item["time"] : item["time"].toISOString(),
    specversion: item["specversion"],
    dataschema: item["dataschema"],
    datacontenttype: item["datacontenttype"],
    subject: item["subject"],
  };
}

export function cloudEventDeserializer(item: any): CloudEvent {
  return {
    id: item["id"],
    source: item["source"],
    data: item["data"],
    dataBase64: !item["data_base64"]
      ? item["data_base64"]
      : typeof item["data_base64"] === "string"
        ? stringToUint8Array(item["data_base64"], "base64")
        : item["data_base64"],
    type: item["type"],
    time: !item["time"] ? item["time"] : new Date(item["time"]),
    specversion: item["specversion"],
    dataschema: item["dataschema"],
    datacontenttype: item["datacontenttype"],
    subject: item["subject"],
  };
}

/** The result of the Publish operation. */
export interface PublishResult {}

export function publishResultDeserializer(item: any): PublishResult {
  return item;
}

/** Details of the Receive operation response. */
export interface ReceiveResult {
  /** Array of receive responses, one per cloud event. */
  value: ReceiveDetails[];
}

export function receiveResultDeserializer(item: any): ReceiveResult {
  return {
    value: receiveDetailsArrayDeserializer(item["value"]),
  };
}

export function receiveDetailsArrayDeserializer(
  result: Array<ReceiveDetails>,
): any[] {
  return result.map((item) => {
    return receiveDetailsDeserializer(item);
  });
}

/** Receive operation details per Cloud Event. */
export interface ReceiveDetails {
  /** The Event Broker details. */
  brokerProperties: BrokerProperties;
  /** Cloud Event details. */
  event: CloudEvent;
}

export function receiveDetailsDeserializer(item: any): ReceiveDetails {
  return {
    brokerProperties: brokerPropertiesDeserializer(item["brokerProperties"]),
    event: cloudEventDeserializer(item["event"]),
  };
}

/** Properties of the Event Broker operation. */
export interface BrokerProperties {
  /** The token of the lock on the event. */
  lockToken: string;
  /** The attempt count for delivering the event. */
  deliveryCount: number;
}

export function brokerPropertiesDeserializer(item: any): BrokerProperties {
  return {
    lockToken: item["lockToken"],
    deliveryCount: item["deliveryCount"],
  };
}

/** The result of the Acknowledge operation. */
export interface AcknowledgeResult {
  /** Array of FailedLockToken for failed cloud events. Each FailedLockToken includes the lock token along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens for the successfully acknowledged cloud events. */
  succeededLockTokens: string[];
}

export function acknowledgeResultDeserializer(item: any): AcknowledgeResult {
  return {
    failedLockTokens: failedLockTokenArrayDeserializer(
      item["failedLockTokens"],
    ),
    succeededLockTokens: item["succeededLockTokens"].map((p: any) => {
      return p;
    }),
  };
}

export function failedLockTokenArrayDeserializer(
  result: Array<FailedLockToken>,
): any[] {
  return result.map((item) => {
    return failedLockTokenDeserializer(item);
  });
}

/** Failed LockToken information. */
export interface FailedLockToken {
  /** The lock token of an entry in the request. */
  lockToken: string;
  /** Error information of the failed operation result for the lock token in the request. */
  error: ErrorModel;
}

export function failedLockTokenDeserializer(item: any): FailedLockToken {
  return {
    lockToken: item["lockToken"],
    error: item["error"],
  };
}

/** The result of the Release operation. */
export interface ReleaseResult {
  /** Array of FailedLockToken for failed cloud events. Each FailedLockToken includes the lock token along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens for the successfully released cloud events. */
  succeededLockTokens: string[];
}

export function releaseResultDeserializer(item: any): ReleaseResult {
  return {
    failedLockTokens: failedLockTokenArrayDeserializer(
      item["failedLockTokens"],
    ),
    succeededLockTokens: item["succeededLockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** The result of the Reject operation. */
export interface RejectResult {
  /** Array of FailedLockToken for failed cloud events. Each FailedLockToken includes the lock token along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens for the successfully rejected cloud events. */
  succeededLockTokens: string[];
}

export function rejectResultDeserializer(item: any): RejectResult {
  return {
    failedLockTokens: failedLockTokenArrayDeserializer(
      item["failedLockTokens"],
    ),
    succeededLockTokens: item["succeededLockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** The result of the RenewLock operation. */
export interface RenewCloudEventLocksResult {
  /** Array of FailedLockToken for failed cloud events. Each FailedLockToken includes the lock token along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens for the successfully renewed locks. */
  succeededLockTokens: string[];
}

export function renewCloudEventLocksResultDeserializer(
  item: any,
): RenewCloudEventLocksResult {
  return {
    failedLockTokens: failedLockTokenArrayDeserializer(
      item["failedLockTokens"],
    ),
    succeededLockTokens: item["succeededLockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** Supported delays for release operation. */
export type ReleaseDelay = "0" | "10" | "60" | "600" | "3600";

/** Known values of {@link ServiceApiVersions} that the service accepts. */
export enum KnownServiceApiVersions {
  V20231101 = "2023-11-01",
  V20240601 = "2024-06-01",
}

export function cloudEventArraySerializer(result: Array<CloudEvent>): any[] {
  return result.map((item) => {
    return cloudEventSerializer(item);
  });
}

export function cloudEventArrayDeserializer(result: Array<CloudEvent>): any[] {
  return result.map((item) => {
    return cloudEventDeserializer(item);
  });
}
