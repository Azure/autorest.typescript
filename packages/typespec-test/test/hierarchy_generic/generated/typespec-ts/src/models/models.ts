// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A as ARest, Ba as BaRest, Bea as BeaRest } from "../rest/index.js";

export interface A {
  prop1: string;
}

export function aSerializer(item: A): ARest {
  return {
    prop1: item["prop1"],
  };
}

export interface BA {
  prop2: string;
}

export function bASerializer(item: BA): BaRest {
  return {
    prop2: item["prop2"],
  };
}

export interface BEA {
  prop3: string;
}

export function bEASerializer(item: BEA): BeaRest {
  return {
    prop3: item["prop3"],
  };
}
