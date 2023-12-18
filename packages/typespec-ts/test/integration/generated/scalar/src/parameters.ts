// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type StringModelGetParameters = RequestParameters;

export interface StringModelPutBodyParam {
  /** _ */
  body: string;
}

export type StringModelPutParameters = StringModelPutBodyParam &
  RequestParameters;
export type BooleanModelGetParameters = RequestParameters;

export interface BooleanModelPutBodyParam {
  /** _ */
  body: boolean;
}

export type BooleanModelPutParameters = BooleanModelPutBodyParam &
  RequestParameters;
export type UnknownGetParameters = RequestParameters;

export interface UnknownPutBodyParam {
  /** _ */
  body: unknown;
}

export type UnknownPutParameters = UnknownPutBodyParam & RequestParameters;
export type DecimalTypeResponseBodyParameters = RequestParameters;

export interface DecimalTypeRequestBodyBodyParam {
  /**
   * Please note the field was supposed to be a decimal but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  body: number;
}

export type DecimalTypeRequestBodyParameters = DecimalTypeRequestBodyBodyParam &
  RequestParameters;

export interface DecimalTypeRequestParameterQueryParamProperties {
  /**
   * Please note the field was supposed to be a decimal but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  value: number;
}

export interface DecimalTypeRequestParameterQueryParam {
  queryParameters: DecimalTypeRequestParameterQueryParamProperties;
}

export type DecimalTypeRequestParameterParameters =
  DecimalTypeRequestParameterQueryParam & RequestParameters;
export type Decimal128TypeResponseBodyParameters = RequestParameters;

export interface Decimal128TypeRequestBodyBodyParam {
  /**
   * Please note the field was supposed to be a decimal128 but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  body: number;
}

export type Decimal128TypeRequestBodyParameters =
  Decimal128TypeRequestBodyBodyParam & RequestParameters;

export interface Decimal128TypeRequestParameterQueryParamProperties {
  /**
   * Please note the field was supposed to be a decimal128 but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  value: number;
}

export interface Decimal128TypeRequestParameterQueryParam {
  queryParameters: Decimal128TypeRequestParameterQueryParamProperties;
}

export type Decimal128TypeRequestParameterParameters =
  Decimal128TypeRequestParameterQueryParam & RequestParameters;
export type DecimalVerifyPrepareVerifyParameters = RequestParameters;

export interface DecimalVerifyVerifyBodyParam {
  /**
   * Please note the field was supposed to be a decimal but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  body: number;
}

export type DecimalVerifyVerifyParameters = DecimalVerifyVerifyBodyParam &
  RequestParameters;
export type Decimal128VerifyPrepareVerifyParameters = RequestParameters;

export interface Decimal128VerifyVerifyBodyParam {
  /**
   * Please note the field was supposed to be a decimal but JavaScript does not have a native 'BigDecimal' data type.
   * So it was converted to a number instead. It is recommended to use a third-party library like 'decimal.js' to handle
   * any calculations.
   */
  body: number;
}

export type Decimal128VerifyVerifyParameters = Decimal128VerifyVerifyBodyParam &
  RequestParameters;
