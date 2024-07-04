// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  Fish as FishRest,
  Shark as SharkRest,
  SawShark as SawSharkRest,
  GoblinShark as GoblinSharkRest,
  Salmon as SalmonRest,
} from "../rest/index.js";

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface Fish {
  age: number;
  /** the discriminator possible values: shark, salmon */
  kind: string;
}

export function fishUnionSerializer(item: FishUnion) {
  switch (item.kind) {
    case "shark":
      return sharkUnionSerializer(item as SharkUnion);

    case "salmon":
      return salmonSerializer(item as Salmon);

    default:
      return fishSerializer(item);
  }
}

export function fishSerializer(item: FishUnion): FishRest {
  return {
    age: item["age"],
    kind: item["kind"],
  };
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface Shark extends Fish {
  kind: "shark";
  /** the discriminator possible values: saw, goblin */
  sharktype: string;
}

export function sharkUnionSerializer(item: SharkUnion) {
  switch (item.sharktype) {
    case "saw":
      return sawSharkSerializer(item as SawShark);

    case "goblin":
      return goblinSharkSerializer(item as GoblinShark);

    default:
      return sharkSerializer(item);
  }
}

export function sharkSerializer(item: SharkUnion): SharkRest {
  return {
    age: item["age"],
    kind: item["kind"],
    sharktype: item["sharktype"],
  };
}

/** The third level model SawShark in polymorphic multiple levels inheritance. */
export interface SawShark extends Shark {
  sharktype: "saw";
}

export function sawSharkSerializer(item: SawShark): SawSharkRest {
  return {
    kind: item["kind"],
    sharktype: item["sharktype"],
    age: item["age"],
  };
}

/** The third level model GoblinShark in polymorphic multiple levels inheritance. */
export interface GoblinShark extends Shark {
  sharktype: "goblin";
}

export function goblinSharkSerializer(item: GoblinShark): GoblinSharkRest {
  return {
    kind: item["kind"],
    sharktype: item["sharktype"],
    age: item["age"],
  };
}

/** The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances. */
export interface Salmon extends Fish {
  kind: "salmon";
  friends?: FishUnion[];
  hate?: Record<string, FishUnion>;
  partner?: FishUnion;
}

export function salmonSerializer(item: Salmon): SalmonRest {
  return {
    age: item["age"],
    kind: item["kind"],
    friends: item["friends"],
    hate: !item.hate
      ? item.hate
      : (serializeRecord(item.hate as any, fishUnionSerializer) as any),
    partner: !item.partner ? item.partner : fishUnionSerializer(item.partner),
  };
}

/** Alias for FishUnion */
export type FishUnion = SharkUnion | Salmon | Fish;
/** Alias for SharkUnion */
export type SharkUnion = SawShark | GoblinShark | Shark;
