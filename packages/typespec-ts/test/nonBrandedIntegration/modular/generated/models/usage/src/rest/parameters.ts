// Licensed under the MIT license.

import { RequestParameters } from "@typespec/ts-http-runtime";
import { InputRecord, InputOutputRecord } from "./models.js";

export interface InputBodyParam {
  body: InputRecord;
}

export type InputParameters = InputBodyParam & RequestParameters;
export type OutputParameters = RequestParameters;

export interface InputAndOutputBodyParam {
  body: InputOutputRecord;
}

export type InputAndOutputParameters = InputAndOutputBodyParam &
  RequestParameters;
