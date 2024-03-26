// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BEA, BA, A } from "../models/models.js";
import { Bea as RestBEA, Ba as RestBA, A as RestA } from "../rest/index.js";

export function serializeBEA(o: BEA): RestBEA {
  return {
    prop3: o["prop3"],
  };
}

export function serializeBA(o: BA): RestBA {
  return {
    prop2: o["prop2"],
  };
}

export function serializeA(o: A): RestA {
  return {
    prop1: o["prop1"],
  };
}
