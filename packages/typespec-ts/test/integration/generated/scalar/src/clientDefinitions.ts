// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetParameters,
  StringModelPutParameters,
  BooleanModelGetParameters,
  BooleanModelPutParameters,
  UnknownGetParameters,
  UnknownPutParameters,
  DecimalTypeResponseBodyParameters,
  DecimalTypeRequestBodyParameters,
  DecimalTypeRequestParameterParameters,
  Decimal128TypeResponseBodyParameters,
  Decimal128TypeRequestBodyParameters,
  Decimal128TypeRequestParameterParameters,
  DecimalVerifyPrepareVerifyParameters,
  DecimalVerifyVerifyParameters,
  Decimal128VerifyPrepareVerifyParameters,
  Decimal128VerifyVerifyParameters,
} from "./parameters";
import {
  StringModelGet200Response,
  StringModelPut204Response,
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  UnknownGet200Response,
  UnknownPut204Response,
  DecimalTypeResponseBody200Response,
  DecimalTypeRequestBody204Response,
  DecimalTypeRequestParameter204Response,
  Decimal128TypeResponseBody200Response,
  Decimal128TypeRequestBody204Response,
  Decimal128TypeRequestParameter204Response,
  DecimalVerifyPrepareVerify200Response,
  DecimalVerifyVerify204Response,
  Decimal128VerifyPrepareVerify200Response,
  Decimal128VerifyVerify204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringModelGet {
  /** get string value */
  get(
    options?: StringModelGetParameters,
  ): StreamableMethod<StringModelGet200Response>;
  /** put string value */
  put(
    options: StringModelPutParameters,
  ): StreamableMethod<StringModelPut204Response>;
}

export interface BooleanModelGet {
  /** get boolean value */
  get(
    options?: BooleanModelGetParameters,
  ): StreamableMethod<BooleanModelGet200Response>;
  /** put boolean value */
  put(
    options: BooleanModelPutParameters,
  ): StreamableMethod<BooleanModelPut204Response>;
}

export interface UnknownGet {
  /** get unknown value */
  get(options?: UnknownGetParameters): StreamableMethod<UnknownGet200Response>;
  /** put unknown value */
  put(options: UnknownPutParameters): StreamableMethod<UnknownPut204Response>;
}

export interface DecimalTypeResponseBody {
  get(
    options?: DecimalTypeResponseBodyParameters,
  ): StreamableMethod<DecimalTypeResponseBody200Response>;
}

export interface DecimalTypeRequestBody {
  put(
    options: DecimalTypeRequestBodyParameters,
  ): StreamableMethod<DecimalTypeRequestBody204Response>;
}

export interface DecimalTypeRequestParameter {
  get(
    options: DecimalTypeRequestParameterParameters,
  ): StreamableMethod<DecimalTypeRequestParameter204Response>;
}

export interface Decimal128TypeResponseBody {
  get(
    options?: Decimal128TypeResponseBodyParameters,
  ): StreamableMethod<Decimal128TypeResponseBody200Response>;
}

export interface Decimal128TypeRequestBody {
  put(
    options: Decimal128TypeRequestBodyParameters,
  ): StreamableMethod<Decimal128TypeRequestBody204Response>;
}

export interface Decimal128TypeRequestParameter {
  get(
    options: Decimal128TypeRequestParameterParameters,
  ): StreamableMethod<Decimal128TypeRequestParameter204Response>;
}

export interface DecimalVerifyPrepareVerify {
  get(
    options?: DecimalVerifyPrepareVerifyParameters,
  ): StreamableMethod<DecimalVerifyPrepareVerify200Response>;
}

export interface DecimalVerifyVerify {
  post(
    options: DecimalVerifyVerifyParameters,
  ): StreamableMethod<DecimalVerifyVerify204Response>;
}

export interface Decimal128VerifyPrepareVerify {
  get(
    options?: Decimal128VerifyPrepareVerifyParameters,
  ): StreamableMethod<Decimal128VerifyPrepareVerify200Response>;
}

export interface Decimal128VerifyVerify {
  post(
    options: Decimal128VerifyVerifyParameters,
  ): StreamableMethod<Decimal128VerifyVerify204Response>;
}

export interface Routes {
  /** Resource for '/type/scalar/string' has methods for the following verbs: get, put */
  (path: "/type/scalar/string"): StringModelGet;
  /** Resource for '/type/scalar/boolean' has methods for the following verbs: get, put */
  (path: "/type/scalar/boolean"): BooleanModelGet;
  /** Resource for '/type/scalar/unknown' has methods for the following verbs: get, put */
  (path: "/type/scalar/unknown"): UnknownGet;
  /** Resource for '/type/scalar/decimal/response_body' has methods for the following verbs: get */
  (path: "/type/scalar/decimal/response_body"): DecimalTypeResponseBody;
  /** Resource for '/type/scalar/decimal/resquest_body' has methods for the following verbs: put */
  (path: "/type/scalar/decimal/resquest_body"): DecimalTypeRequestBody;
  /** Resource for '/type/scalar/decimal/request_parameter' has methods for the following verbs: get */
  (path: "/type/scalar/decimal/request_parameter"): DecimalTypeRequestParameter;
  /** Resource for '/type/scalar/decimal128/response_body' has methods for the following verbs: get */
  (path: "/type/scalar/decimal128/response_body"): Decimal128TypeResponseBody;
  /** Resource for '/type/scalar/decimal128/resquest_body' has methods for the following verbs: put */
  (path: "/type/scalar/decimal128/resquest_body"): Decimal128TypeRequestBody;
  /** Resource for '/type/scalar/decimal128/request_parameter' has methods for the following verbs: get */
  (
    path: "/type/scalar/decimal128/request_parameter",
  ): Decimal128TypeRequestParameter;
  /** Resource for '/type/scalar/decimal/prepare_verify' has methods for the following verbs: get */
  (path: "/type/scalar/decimal/prepare_verify"): DecimalVerifyPrepareVerify;
  /** Resource for '/type/scalar/decimal/verify' has methods for the following verbs: post */
  (path: "/type/scalar/decimal/verify"): DecimalVerifyVerify;
  /** Resource for '/type/scalar/decimal128/prepare_verify' has methods for the following verbs: get */
  (
    path: "/type/scalar/decimal128/prepare_verify",
  ): Decimal128VerifyPrepareVerify;
  /** Resource for '/type/scalar/decimal128/verify' has methods for the following verbs: post */
  (path: "/type/scalar/decimal128/verify"): Decimal128VerifyVerify;
}

export type ScalarClient = Client & {
  path: Routes;
};
