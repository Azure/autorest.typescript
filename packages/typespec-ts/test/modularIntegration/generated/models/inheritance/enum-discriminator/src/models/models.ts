// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface Dog {
  /** discriminator property */
  kind: DogKind;
  /** Weight of the dog */
  weight: number;
  kind: any;
}

/** extensible enum type for discriminator */
/** "golden" */
export type DogKind = string;

/** Test fixed enum type for discriminator */
export interface Snake {
  /** discriminator property */
  kind: SnakeKind;
  /** Length of the snake */
  length: number;
  kind: any;
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
