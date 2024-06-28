// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MixedTypesCases as MixedTypesCasesRest,
  Cat as CatRest,
  MixedLiteralsCases as MixedLiteralsCasesRest,
  StringAndArrayCases as StringAndArrayCasesRest,
  EnumsOnlyCases as EnumsOnlyCasesRest,
  Dog as DogRest,
} from "../rest/index.js";

export interface MixedTypesCases {
  /** This should be receive/send the Cat variant */
  model: Cat | "a" | number | boolean;
  /** This should be receive/send the "a" variant */
  literal: Cat | "a" | number | boolean;
  /** This should be receive/send the int variant */
  int: Cat | "a" | number | boolean;
  /** This should be receive/send the boolean variant */
  boolean: Cat | "a" | number | boolean;
  /** This should be receive/send 4 element with Cat, "a", int, and boolean */
  array: (Cat | "a" | number | boolean)[];
}

export function mixedTypesCasesSerializer(
  item: MixedTypesCases,
): MixedTypesCasesRest {
  return {
    model: item["model"],
    literal: item["literal"],
    int: item["int"],
    boolean: item["boolean"],
    array: item["array"],
  };
}

export interface Cat {
  name: string;
}

export function catSerializer(item: Cat): CatRest {
  return {
    name: item["name"],
  };
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

export function mixedLiteralsCasesSerializer(
  item: MixedLiteralsCases,
): MixedLiteralsCasesRest {
  return {
    stringLiteral: item["stringLiteral"],
    intLiteral: item["intLiteral"],
    floatLiteral: item["floatLiteral"],
    booleanLiteral: item["booleanLiteral"],
  };
}

export interface StringAndArrayCases {
  /** This should be receive/send the string variant */
  string: string | string[];
  /** This should be receive/send the array variant */
  array: string | string[];
}

export function stringAndArrayCasesSerializer(
  item: StringAndArrayCases,
): StringAndArrayCasesRest {
  return {
    string: item["string"],
    array: item["array"],
  };
}

export interface EnumsOnlyCases {
  /** This should be receive/send the left variant */
  lr: Lr | Ud;
  /** This should be receive/send the up variant */
  ud: Ud | Ud;
}

export function enumsOnlyCasesSerializer(
  item: EnumsOnlyCases,
): EnumsOnlyCasesRest {
  return {
    lr: item["lr"],
    ud: item["ud"],
  };
}

/** Type of Lr */
export type Lr = "left" | "right";
/** Type of Ud */
export type Ud = "up" | "down";

export interface Dog {
  bark: string;
}

export function dogSerializer(item: Dog): DogRest {
  return {
    bark: item["bark"],
  };
}

/** Type of StringExtensibleNamedUnion */
export type StringExtensibleNamedUnion = string;

export enum KnownStringExtensibleNamedUnion {
  b = "b",
  c = "c",
}
