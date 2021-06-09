import * as coreClient from "@azure/core-client";

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Optional parameters. */
export interface SkipLibCheckClientApiV1ValueGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the apiV1ValueGet operation. */
export type SkipLibCheckClientApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface SkipLibCheckClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
