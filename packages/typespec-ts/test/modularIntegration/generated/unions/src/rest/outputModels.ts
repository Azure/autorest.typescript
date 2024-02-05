// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface CatOutput {
  name: string;
}

export interface DogOutput {
  bark: string;
}

export interface EnumsOnlyCasesOutput {
  /** This should be receive/send the left variant */
  lr: string | string;
  /** This should be receive/send the up variant */
  ud: string | string;
}

export interface StringAndArrayCasesOutput {
  /** This should be receive/send the string variant */
  string: string | string[];
  /** This should be receive/send the array variant */
  array: string | string[];
}

export interface MixedLiteralsCasesOutput {
  /** This should be receive/send the "a" variant */
  stringLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the 2 variant */
  intLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the 3.3 variant */
  floatLiteral: "a" | 2 | 3.3 | true;
  /** This should be receive/send the true variant */
  booleanLiteral: "a" | 2 | 3.3 | true;
}

export interface MixedTypesCasesOutput {
  /** This should be receive/send the Cat variant */
  model: CatOutput | "a" | number | boolean;
  /** This should be receive/send the "a" variant */
  literal: CatOutput | "a" | number | boolean;
  /** This should be receive/send the int variant */
  int: CatOutput | "a" | number | boolean;
  /** This should be receive/send the boolean variant */
  boolean: CatOutput | "a" | number | boolean;
}

/** Alias for StringExtensibleNamedUnionOutput */
export type StringExtensibleNamedUnionOutput = string | "b" | "c";
