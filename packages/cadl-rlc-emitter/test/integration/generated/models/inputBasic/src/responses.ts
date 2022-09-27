import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface InputBasicGetModel200Response extends HttpResponse {
  status: "200";
}
