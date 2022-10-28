import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface PollingSuccessCreate200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface PollingSuccessPolling200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface PollingSuccessGet200Response extends HttpResponse {
  status: "200";
  body: string;
}
