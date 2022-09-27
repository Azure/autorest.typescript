import { HttpResponse } from "@azure-rest/core-client";
import { OutputModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface OutputBasicGetModel200Response extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}
