// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Eagle,
  Goose,
  Sparrow,
  SeaGull,
  Bird,
  TRex,
  Dinosaur,
} from "../models/models.js";
import {
  Eagle as RestEagle,
  Goose as RestGoose,
  Sparrow as RestSparrow,
  SeaGull as RestSeaGull,
  Bird as RestBird,
  TRexOutput as RestTRex,
  DinosaurOutput as RestDinosaur,
} from "../rest/index.js";

export function serializeEagle(o: Eagle): RestEagle {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
    partner:
      o["partner"] === undefined
        ? o["partner"]
        : MISSING_SERIALIZER(o["partner"]),
    hate: o["hate"] === undefined ? o["hate"] : FIXME,
    friends:
      o["friends"] === undefined
        ? o["friends"]
        : o["friends"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeEagle(o: RestEagle): Eagle {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
    partner:
      o["partner"] === undefined
        ? o["partner"]
        : MISSING_SERIALIZER(o["partner"]),
    hate: o["hate"] === undefined ? o["hate"] : FIXME,
    friends:
      o["friends"] === undefined
        ? o["friends"]
        : o["friends"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeGoose(o: Goose): RestGoose {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function deserializeGoose(o: RestGoose): Goose {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function serializeSparrow(o: Sparrow): RestSparrow {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function deserializeSparrow(o: RestSparrow): Sparrow {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function serializeSeaGull(o: SeaGull): RestSeaGull {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function deserializeSeaGull(o: RestSeaGull): SeaGull {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function serializeBird(o: Bird): RestBird {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function deserializeBird(o: RestBird): Bird {
  return {
    wingspan: o["wingspan"],
    kind: o["kind"],
  };
}

export function deserializeTRex(o: RestTRex): TRex {
  return {
    kind: o["kind"],
    size: o["size"],
  };
}

export function deserializeDinosaur(o: RestDinosaur): Dinosaur {
  return {
    kind: o["kind"],
    size: o["size"],
  };
}
