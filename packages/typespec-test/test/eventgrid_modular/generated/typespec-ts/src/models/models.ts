// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

/** model interface _PublishCloudEventRequest */
export interface _PublishCloudEventRequest {
  event: CloudEvent;
}

export function _publishCloudEventRequestSerializer(
  item: _PublishCloudEventRequest,
): any {
  return { event: cloudEventSerializer(item["event"]) };
}

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
    time: item["time"]?.toISOString(),
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
  /** The token used to lock the event. */
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

export function receiveDetailsArrayDeserializer(
  result: Array<ReceiveDetails>,
): any[] {
  return result.map((item) => {
    return receiveDetailsDeserializer(item);
  });
}

/** Array of lock token strings for the corresponding received Cloud Events to be acknowledged. */
export interface AcknowledgeOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function acknowledgeOptionsSerializer(item: AcknowledgeOptions): any {
  return {
    lockTokens: item["lockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** The result of the Acknowledge operation. */
export interface AcknowledgeResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully acknowledged cloud events. */
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

/** Failed LockToken information. */
export interface FailedLockToken {
  /** LockToken value */
  lockToken: string;
  /** Error code related to the token. Example of such error codes are BadToken: which indicates the Token is not formatted correctly, TokenLost: which indicates that token is not found, and InternalServerError: For any internal server errors. */
  errorCode: string;
  /** Description of the token error. */
  errorDescription: string;
}

export function failedLockTokenDeserializer(item: any): FailedLockToken {
  return {
    lockToken: item["lockToken"],
    errorCode: item["errorCode"],
    errorDescription: item["errorDescription"],
  };
}

export function failedLockTokenArrayDeserializer(
  result: Array<FailedLockToken>,
): any[] {
  return result.map((item) => {
    return failedLockTokenDeserializer(item);
  });
}

/** Array of lock token strings for the corresponding received Cloud Events to be released. */
export interface ReleaseOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function releaseOptionsSerializer(item: ReleaseOptions): any {
  return {
    lockTokens: item["lockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** The result of the Release operation. */
export interface ReleaseResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully released cloud events. */
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

/** Array of lock token strings for the corresponding received Cloud Events to be rejected. */
export interface RejectOptions {
  /** String array of lock tokens. */
  lockTokens: string[];
}

export function rejectOptionsSerializer(item: RejectOptions): any {
  return {
    lockTokens: item["lockTokens"].map((p: any) => {
      return p;
    }),
  };
}

/** The result of the Reject operation. */
export interface RejectResult {
  /** Array of LockToken values for failed cloud events. Each LockToken includes the lock token value along with the related error information (namely, the error code and description). */
  failedLockTokens: FailedLockToken[];
  /** Array of lock tokens values for the successfully rejected cloud events. */
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

/** Known values of {@link ServiceApiVersions} that the service accepts. */
export enum KnownServiceApiVersions {
  v2023_06_01_preview = "2023-06-01-preview",
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
