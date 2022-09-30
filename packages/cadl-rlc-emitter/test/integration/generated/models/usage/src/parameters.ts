import { RequestParameters } from "@azure-rest/core-client";
import { InputRecord, InputOutputRecord } from "./models";

export interface UsageInputBodyParam {
  body: InputRecord;
}

export type UsageInputParameters = UsageInputBodyParam & RequestParameters;
export type UsageOutputParameters = RequestParameters;

export interface UsageInputAndOutputBodyParam {
  body: InputOutputRecord;
}

export type UsageInputAndOutputParameters = UsageInputAndOutputBodyParam &
  RequestParameters;
