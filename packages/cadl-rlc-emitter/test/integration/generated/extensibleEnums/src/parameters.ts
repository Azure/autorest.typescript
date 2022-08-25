import { RequestParameters } from "@azure-rest/core-client";

export type ExtensibleEnumsGetKnownValueParameters = RequestParameters;
export type ExtensibleEnumsGetUnknownValueParameters = RequestParameters;

export interface ExtensibleEnumsPutKnownValueBodyParam {
  body: string;
}

export type ExtensibleEnumsPutKnownValueParameters =
  ExtensibleEnumsPutKnownValueBodyParam & RequestParameters;

export interface ExtensibleEnumsPutUnknownValueBodyParam {
  body: string;
}

export type ExtensibleEnumsPutUnknownValueParameters =
  ExtensibleEnumsPutUnknownValueBodyParam & RequestParameters;
