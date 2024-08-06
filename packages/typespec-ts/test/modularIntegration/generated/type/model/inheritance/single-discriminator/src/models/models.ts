// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface Bird {
  /** the discriminator possible values: seagull, sparrow, goose, eagle */
  kind: string;
  wingspan: number;
}

export function birdUnionSerializer(item: BirdUnion) {
  switch (item.kind) {
    case "seagull":
      return seaGullSerializer(item as SeaGull);

    case "sparrow":
      return sparrowSerializer(item as Sparrow);

    case "goose":
      return gooseSerializer(item as Goose);

    case "eagle":
      return eagleSerializer(item as Eagle);

    default:
      return birdSerializer(item);
  }
}

export function birdSerializer(item: BirdUnion): Record<string, unknown> {
  return {
    kind: item["kind"],
    wingspan: item["wingspan"],
  };
}

/** The second level model in polymorphic single level inheritance. */
export interface SeaGull extends Bird {
  kind: "seagull";
}

export function seaGullSerializer(item: SeaGull): Record<string, unknown> {
  return {
    kind: item["kind"],
    wingspan: item["wingspan"],
  };
}

/** The second level model in polymorphic single level inheritance. */
export interface Sparrow extends Bird {
  kind: "sparrow";
}

export function sparrowSerializer(item: Sparrow): Record<string, unknown> {
  return {
    kind: item["kind"],
    wingspan: item["wingspan"],
  };
}

/** The second level model in polymorphic single level inheritance. */
export interface Goose extends Bird {
  kind: "goose";
}

export function gooseSerializer(item: Goose): Record<string, unknown> {
  return {
    kind: item["kind"],
    wingspan: item["wingspan"],
  };
}

/** The second level model in polymorphic single levels inheritance which contains references to other polymorphic instances. */
export interface Eagle extends Bird {
  kind: "eagle";
  friends?: BirdUnion[];
  hate?: Record<string, BirdUnion>;
  partner?: BirdUnion;
}

export function eagleSerializer(item: Eagle): Record<string, unknown> {
  return {
    kind: item["kind"],
    wingspan: item["wingspan"],
    friends: item["friends"],
    hate: !item.hate
      ? item.hate
      : (serializeRecord(item.hate as any, birdUnionSerializer) as any),
    partner: !item.partner ? item.partner : birdUnionSerializer(item.partner),
  };
}

/** Define a base class in the legacy way. Discriminator property is not explicitly defined in the model. */
export interface Dinosaur {
  size: number;
  /** the discriminator possible values: t-rex */
  kind: string;
}

/** The second level legacy model in polymorphic single level inheritance. */
export interface TRex extends Dinosaur {
  kind: "t-rex";
}

/** Alias for BirdUnion */
export type BirdUnion = SeaGull | Sparrow | Goose | Eagle | Bird;
/** Alias for DinosaurUnion */
export type DinosaurUnion = TRex | Dinosaur;
