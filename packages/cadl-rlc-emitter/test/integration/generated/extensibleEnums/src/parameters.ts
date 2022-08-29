import { RequestParameters } from "@azure-rest/core-client";

export type StringGetKnownValueParameters = RequestParameters;
export type StringGetUnknownValueParameters = RequestParameters;

export interface StringPutKnownValueBodyParam {
  body: string;
}

export type StringPutKnownValueParameters = StringPutKnownValueBodyParam &
  RequestParameters;

export interface StringPutUnknownValueBodyParam {
  body: string;
}

export type StringPutUnknownValueParameters = StringPutUnknownValueBodyParam &
  RequestParameters;
