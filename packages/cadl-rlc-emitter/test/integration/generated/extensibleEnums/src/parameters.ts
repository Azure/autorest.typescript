import { RequestParameters } from "@azure-rest/core-client";

export type StringGetKnownValueParameters = RequestParameters;
export type StringGetUnknownValueParameters = RequestParameters;

export interface StringPutKnownValueBodyParam {
  /** Possible values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday */
  body: string;
}

export type StringPutKnownValueParameters = StringPutKnownValueBodyParam &
  RequestParameters;

export interface StringPutUnknownValueBodyParam {
  /** Possible values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday */
  body: string;
}

export type StringPutUnknownValueParameters = StringPutUnknownValueBodyParam &
  RequestParameters;
