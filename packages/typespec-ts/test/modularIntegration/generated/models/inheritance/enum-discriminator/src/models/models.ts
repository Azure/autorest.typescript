// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface DogParent {
  /** the discriminator possible values golden */
  kind: string;
  /** Weight of the dog */
  weight: number;
}

/** Golden dog model */
export interface Golden extends DogParent {
  /** discriminator property */
  kind: "golden";
}

/** extensible enum type for discriminator */
/** "golden" */
export type DogKind = string;

/** Test fixed enum type for discriminator */
export interface SnakeParent {
  /** the discriminator possible values cobra */
  kind: string;
  /** Length of the snake */
  length: number;
}

/** Cobra model */
export interface Cobra extends SnakeParent {
  /** discriminator property */
  kind: "cobra";
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
/** Base type for Dog */
export type Dog = Golden | DogParent;
/** Base type for Snake */
export type Snake = Cobra | SnakeParent;
