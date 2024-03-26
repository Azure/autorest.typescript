// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Siamese, Cat, Pet } from "../models/models.js";
import {
  Siamese as RestSiamese,
  Cat as RestCat,
  Pet as RestPet,
} from "../rest/index.js";

export function serializeSiamese(o: Siamese): RestSiamese {
  return {
    age: o["age"],
    smart: o["smart"],
  };
}

export function deserializeSiamese(o: RestSiamese): Siamese {
  return {
    age: o["age"],
    smart: o["smart"],
  };
}

export function serializeCat(o: Cat): RestCat {
  return {
    name: o["name"],
    age: o["age"],
  };
}

export function deserializeCat(o: RestCat): Cat {
  return {
    name: o["name"],
    age: o["age"],
  };
}

export function serializePet(o: Pet): RestPet {
  return {
    name: o["name"],
  };
}

export function deserializePet(o: RestPet): Pet {
  return {
    name: o["name"],
  };
}
