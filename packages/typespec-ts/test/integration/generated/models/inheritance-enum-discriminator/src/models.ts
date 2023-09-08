// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface DogParent {
  /** Weight of the dog */
  weight: number;
  kind: string;
}

/** Golden dog model */
export interface Golden extends DogParent {
  /** discriminator property */
  kind: "golden";
}

/** Test fixed enum type for discriminator */
export interface SnakeParent {
  /** Length of the snake */
  length: number;
  kind: string;
}

/** Cobra model */
export interface Cobra extends SnakeParent {
  /** discriminator property */
  kind: "cobra";
}

/** Test extensible enum type for discriminator */
export type Dog = Golden;
/** Test fixed enum type for discriminator */
export type Snake = Cobra;
