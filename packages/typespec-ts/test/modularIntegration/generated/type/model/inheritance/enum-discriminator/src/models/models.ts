// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Dog as DogRest,
  Golden as GoldenRest,
  Snake as SnakeRest,
  Cobra as CobraRest,
} from "../rest/index.js";

/** Test extensible enum type for discriminator */
export interface Dog {
  /** the discriminator possible values: golden */
  kind: DogKind;
  /** Weight of the dog */
  weight: number;
}

export function dogUnionSerializer(item: DogUnion) {
  switch (item.kind) {
    case "golden":
      return goldenSerializer(item as Golden);

    default:
      return dogSerializer(item);
  }
}

export function dogSerializer(item: DogUnion): DogRest {
  return {
    kind: item["kind"],
    weight: item["weight"],
  };
}

/** Golden dog model */
export interface Golden extends Dog {
  /** discriminator property */
  kind: "golden";
}

export function goldenSerializer(item: Golden): GoldenRest {
  return {
    kind: item["kind"],
    weight: item["weight"],
  };
}

/** extensible enum type for discriminator */
/** */
export type DogKind = "golden";

/** Test fixed enum type for discriminator */
export interface Snake {
  /** the discriminator possible values: cobra */
  kind: SnakeKind;
  /** Length of the snake */
  length: number;
}

export function snakeUnionSerializer(item: SnakeUnion) {
  switch (item.kind) {
    case "cobra":
      return cobraSerializer(item as Cobra);

    default:
      return snakeSerializer(item);
  }
}

export function snakeSerializer(item: SnakeUnion): SnakeRest {
  return {
    kind: item["kind"],
    length: item["length"],
  };
}

/** Cobra model */
export interface Cobra extends Snake {
  /** discriminator property */
  kind: "cobra";
}

export function cobraSerializer(item: Cobra): CobraRest {
  return {
    kind: item["kind"],
    length: item["length"],
  };
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
/** Alias for DogUnion */
export type DogUnion = Golden | Dog;
/** Alias for SnakeUnion */
export type SnakeUnion = Cobra | Snake;
