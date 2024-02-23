// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface MixedTypesCases {
  /** This should be receive/send the Cat variant */
  model: Cat | "a" | number | boolean;
  /** This should be receive/send the "a" variant */
  literal: Cat | "a" | number | boolean;
  /** This should be receive/send the int variant */
  int: Cat | "a" | number | boolean;
  /** This should be receive/send the boolean variant */
  boolean: Cat | "a" | number | boolean;
}

export interface Cat {
  name: string;
}

export interface MixedLiteralsCases {
  /** This should be receive/send the "a" variant */
  stringLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the 2 variant */
  intLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the 3.3 variant */
  floatLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the true variant */
  booleanLiteral: "a" | 2 | 3.3 | true;
}

export interface StringAndArrayCases {
  /** This should be receive/send the string variant */
  string: string | string[];
  /** This should be receive/send the array variant */
  array: string | string[];
}

export interface EnumsOnlyCases {
  /** This should be receive/send the left variant */
  lr: LR | UD;
  /** This should be receive/send the up variant */
  ud: UD | UD;
}

/** "left", "right" */
export type LR = string;
/** "up", "down" */
export type UD = string;

export interface Dog {
  bark: string;
}

/** Alias for StringExtensibleNamedUnion */
export type StringExtensibleNamedUnion = string | "b" | "c";
