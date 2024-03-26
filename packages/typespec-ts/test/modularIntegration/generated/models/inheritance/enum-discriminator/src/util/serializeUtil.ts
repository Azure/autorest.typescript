// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Cobra, Snake, Golden, Dog } from "../models/models.js";
import {
  Cobra as RestCobra,
  Snake as RestSnake,
  Golden as RestGolden,
  Dog as RestDog,
} from "../rest/index.js";

export function serializeCobra(o: Cobra): RestCobra {
  return {
    length: o["length"],
    kind: o["kind"],
  };
}

export function deserializeCobra(o: RestCobra): Cobra {
  return {
    length: o["length"],
    kind: o["kind"],
  };
}

export function serializeSnake(o: Snake): RestSnake {
  return {
    length: o["length"],
    kind: o["kind"],
  };
}

export function deserializeSnake(o: RestSnake): Snake {
  return {
    length: o["length"],
    kind: o["kind"],
  };
}

export function serializeGolden(o: Golden): RestGolden {
  return {
    weight: o["weight"],
    kind: o["kind"],
  };
}

export function deserializeGolden(o: RestGolden): Golden {
  return {
    weight: o["weight"],
    kind: o["kind"],
  };
}

export function serializeDog(o: Dog): RestDog {
  return {
    weight: o["weight"],
    kind: o["kind"],
  };
}

export function deserializeDog(o: RestDog): Dog {
  return {
    weight: o["weight"],
    kind: o["kind"],
  };
}
