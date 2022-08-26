import {
  ExtensibleEnumsGetKnownValueParameters,
  ExtensibleEnumsPutKnownValueParameters,
  ExtensibleEnumsGetUnknownValueParameters,
  ExtensibleEnumsPutUnknownValueParameters,
} from "./parameters";
import {
  ExtensibleEnumsGetKnownValue200Response,
  ExtensibleEnumsPutKnownValue204Response,
  ExtensibleEnumsGetUnknownValue200Response,
  ExtensibleEnumsPutUnknownValue204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for ExtensibleEnums operations */
export interface ExtensibleEnumsOperations {
  getKnownValue(
    options?: ExtensibleEnumsGetKnownValueParameters
  ): StreamableMethod<ExtensibleEnumsGetKnownValue200Response>;
  putKnownValue(
    options?: ExtensibleEnumsPutKnownValueParameters
  ): StreamableMethod<ExtensibleEnumsPutKnownValue204Response>;
  getUnknownValue(
    options?: ExtensibleEnumsGetUnknownValueParameters
  ): StreamableMethod<ExtensibleEnumsGetUnknownValue200Response>;
  putUnknownValue(
    options?: ExtensibleEnumsPutUnknownValueParameters
  ): StreamableMethod<ExtensibleEnumsPutUnknownValue204Response>;
}

export interface GetKnownValue {
  get(
    options?: ExtensibleEnumsGetKnownValueParameters
  ): StreamableMethod<ExtensibleEnumsGetKnownValue200Response>;
  put(
    options?: ExtensibleEnumsPutKnownValueParameters
  ): StreamableMethod<ExtensibleEnumsPutKnownValue204Response>;
}

export interface GetUnknownValue {
  get(
    options?: ExtensibleEnumsGetUnknownValueParameters
  ): StreamableMethod<ExtensibleEnumsGetUnknownValue200Response>;
  put(
    options?: ExtensibleEnumsPutUnknownValueParameters
  ): StreamableMethod<ExtensibleEnumsPutUnknownValue204Response>;
}

export interface Routes {
  /** Resource for '/extensible-enums/string/known-value' has methods for the following verbs: get, put */
  (path: "/extensible-enums/string/known-value"): GetKnownValue;
  /** Resource for '/extensible-enums/string/unknown-value' has methods for the following verbs: get, put */
  (path: "/extensible-enums/string/unknown-value"): GetUnknownValue;
}

export type ExtensibleEnumsClient = Client & {
  path: Routes;
  extensibleEnums: ExtensibleEnumsOperations;
};
