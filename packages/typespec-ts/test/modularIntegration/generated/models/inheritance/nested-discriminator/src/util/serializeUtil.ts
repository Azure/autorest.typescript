// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Salmon,
  GoblinShark,
  SawShark,
  Shark,
  Fish,
} from "../models/models.js";
import {
  Salmon as RestSalmon,
  GoblinShark as RestGoblinShark,
  SawShark as RestSawShark,
  Shark as RestShark,
  Fish as RestFish,
} from "../rest/index.js";

export function serializeSalmon(o: Salmon): RestSalmon {
  return {
    kind: o["kind"],
    age: o["age"],
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

export function deserializeSalmon(o: RestSalmon): Salmon {
  return {
    kind: o["kind"],
    age: o["age"],
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

export function serializeGoblinShark(o: GoblinShark): RestGoblinShark {
  return {
    sharktype: o["sharktype"],
    kind: o["kind"],
  };
}

export function deserializeGoblinShark(o: RestGoblinShark): GoblinShark {
  return {
    sharktype: o["sharktype"],
    kind: o["kind"],
  };
}

export function serializeSawShark(o: SawShark): RestSawShark {
  return {
    sharktype: o["sharktype"],
    kind: o["kind"],
  };
}

export function deserializeSawShark(o: RestSawShark): SawShark {
  return {
    sharktype: o["sharktype"],
    kind: o["kind"],
  };
}

export function serializeShark(o: Shark): RestShark {
  return {
    kind: o["kind"],
    age: o["age"],
    sharktype: o["sharktype"],
  };
}

export function deserializeShark(o: RestShark): Shark {
  return {
    kind: o["kind"],
    age: o["age"],
    sharktype: o["sharktype"],
  };
}

export function serializeFish(o: Fish): RestFish {
  return {
    kind: o["kind"],
    age: o["age"],
  };
}

export function deserializeFish(o: RestFish): Fish {
  return {
    kind: o["kind"],
    age: o["age"],
  };
}
