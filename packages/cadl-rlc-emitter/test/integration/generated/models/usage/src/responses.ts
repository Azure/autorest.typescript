import { HttpResponse } from "@azure-rest/core-client";
import { OutputRecordOutput, InputOutputRecordOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface UsageInput204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UsageOutput200Response extends HttpResponse {
  status: "200";
  body: OutputRecordOutput;
}

/** The request has succeeded. */
export interface UsageInputAndOutput200Response extends HttpResponse {
  status: "200";
  body: InputOutputRecordOutput;
}
