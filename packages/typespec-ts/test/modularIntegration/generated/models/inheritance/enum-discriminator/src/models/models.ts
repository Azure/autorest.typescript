// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface Dog {
  /** the discriminator possible values golden */
  kind: DogKind;
  /** Weight of the dog */
  weight: number;
}

/** extensible enum type for discriminator */
/** "golden" */
export type DogKind = string;

/** Test fixed enum type for discriminator */
export interface Snake {
  /** the discriminator possible values cobra */
  kind: SnakeKind;
  /** Length of the snake */
  length: number;
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
