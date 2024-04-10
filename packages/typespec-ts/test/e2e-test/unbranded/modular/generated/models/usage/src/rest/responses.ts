// Licensed under the MIT license.

import { HttpResponse } from "@typespec/ts-http-runtime";
import { OutputRecordOutput, InputOutputRecordOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface Input204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Output200Response extends HttpResponse {
  status: "200";
  body: OutputRecordOutput;
}

/** The request has succeeded. */
export interface InputAndOutput200Response extends HttpResponse {
  status: "200";
  body: InputOutputRecordOutput;
}
