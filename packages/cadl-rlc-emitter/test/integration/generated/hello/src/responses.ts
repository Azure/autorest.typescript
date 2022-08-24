import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface HelloWorld200Response extends HttpResponse {
  status: "200";
  body: string;
}
