import * as coreHttp from "@azure/core-http";

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Contains response data for the apiV1ValueGet operation. */
export type NoLicenseHeaderClientApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string;
  };
};

/** Optional parameters. */
export interface NoLicenseHeaderClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
