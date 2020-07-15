import * as coreHttp from "@azure/core-http";

/**
 * Defines values for Enum0.
 */
export type Enum0 = "one" | "two";

/**
 * Contains response data for the apiV1ValueGet operation.
 */
export type NoLicenseHeaderClientApiV1ValueGetResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: string;
  };
};

/**
 * Optional parameters.
 */
export interface NoLicenseHeaderClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
