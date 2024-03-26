// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Dog,
  EnumsOnlyCases,
  StringAndArrayCases,
  MixedLiteralsCases,
  Cat,
  MixedTypesCases,
} from "../models/models.js";
import {
  DogOutput as RestDog,
  EnumsOnlyCasesOutput as RestEnumsOnlyCases,
  StringAndArrayCasesOutput as RestStringAndArrayCases,
  MixedLiteralsCasesOutput as RestMixedLiteralsCases,
  CatOutput as RestCat,
  MixedTypesCasesOutput as RestMixedTypesCases,
} from "../rest/index.js";

export function deserializeDog(o: RestDog): Dog {
  return {
    bark: o["bark"],
  };
}

export function deserializeEnumsOnlyCases(
  o: RestEnumsOnlyCases,
): EnumsOnlyCases {
  return {
    ud: o["ud"],
    lr: o["lr"],
  };
}

export function deserializeStringAndArrayCases(
  o: RestStringAndArrayCases,
): StringAndArrayCases {
  return {
    array: o["array"],
    string: o["string"],
  };
}

export function deserializeMixedLiteralsCases(
  o: RestMixedLiteralsCases,
): MixedLiteralsCases {
  return {
    booleanLiteral: o["booleanLiteral"],
    floatLiteral: o["floatLiteral"],
    intLiteral: o["intLiteral"],
    stringLiteral: o["stringLiteral"],
  };
}

export function deserializeCat(o: RestCat): Cat {
  return {
    name: o["name"],
  };
}

export function deserializeMixedTypesCases(
  o: RestMixedTypesCases,
): MixedTypesCases {
  return {
    boolean: o["boolean"],
    int: o["int"],
    literal: o["literal"],
    model: o["model"],
  };
}
