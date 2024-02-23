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
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  body: number;
}

export type DecimalTypeRequestBodyParameters = DecimalTypeRequestBodyBodyParam &
  RequestParameters;

export interface DecimalTypeRequestParameterQueryParamProperties {
  /**
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
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
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  body: number;
}

export type Decimal128TypeRequestBodyParameters =
  Decimal128TypeRequestBodyBodyParam & RequestParameters;

export interface Decimal128TypeRequestParameterQueryParamProperties {
  /**
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
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
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  body: number;
}

export type DecimalVerifyVerifyParameters = DecimalVerifyVerifyBodyParam &
  RequestParameters;
export type Decimal128VerifyPrepareVerifyParameters = RequestParameters;

export interface Decimal128VerifyVerifyBodyParam {
  /**
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  body: number;
}

export type Decimal128VerifyVerifyParameters = Decimal128VerifyVerifyBodyParam &
  RequestParameters;
