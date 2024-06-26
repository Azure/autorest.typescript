// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Pet as PetRest,
  Cat as CatRest,
  Siamese as SiameseRest,
} from "../rest/index.js";

/** This is base model for not-discriminated normal multiple levels inheritance. */
export interface Pet {
  name: string;
}

export function petSerializer(item: Pet): PetRest {
  return {
    name: item["name"],
  };
}

/** The second level model in the normal multiple levels inheritance. */
export interface Cat extends Pet {
  age: number;
}

export function catSerializer(item: Cat): CatRest {
  return {
    name: item["name"],
    age: item["age"],
  };
}

/** The third level model in the normal multiple levels inheritance. */
export interface Siamese extends Cat {
  smart: boolean;
}

export function siameseSerializer(item: Siamese): SiameseRest {
  return {
    age: item["age"],
    name: item["name"],
    smart: item["smart"],
  };
}
