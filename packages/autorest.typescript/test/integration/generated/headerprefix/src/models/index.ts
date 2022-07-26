import * as coreClient from "@azure/core-client";

export interface StorageError {
  message?: string;
}

/** Defines headers for Queue_getProperties operation. */
export interface QueueGetPropertiesHeaders {
  metadata?: { [propertyName: string]: string };
  /** The approximate number of messages in the queue. This number is not lower than the actual number of messages in the queue, but could be higher. */
  approximateMessagesCount?: number;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
}

/** Defines headers for Queue_getProperties operation. */
export interface QueueGetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Optional parameters. */
export interface QueueGetPropertiesOptionalParams
  extends coreClient.OperationOptions {
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Include this parameter to specify that the queue's metadata be returned as part of the response body. Note that metadata requested with this parameter must be stored in accordance with the naming restrictions imposed by the 2009-09-19 version of the Queue service. Beginning with this version, all metadata names must adhere to the naming conventions for C# identifiers. */
  metadata?: { [propertyName: string]: string };
}

/** Contains response data for the getProperties operation. */
export type QueueGetPropertiesResponse = QueueGetPropertiesHeaders;

/** Optional parameters. */
export interface HeaderPrefixClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
