// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface DogOutputParent {
  /** Weight of the dog */
  weight: number;
  kind: DogKindOutput;
}

/** Golden dog model */
export interface GoldenOutput extends DogOutputParent {
  /** discriminator property */
  kind: "golden";
}

/** Test fixed enum type for discriminator */
export interface SnakeOutputParent {
  /** Length of the snake */
  length: number;
  kind: "cobra";
}

/** Cobra model */
export interface CobraOutput extends SnakeOutputParent {
  /** discriminator property */
  kind: "cobra";
}

/** Test extensible enum type for discriminator */
export type DogOutput = DogOutputParent | GoldenOutput;
/** Test fixed enum type for discriminator */
export type SnakeOutput = SnakeOutputParent | CobraOutput;
/** Alias for DogKindOutput */
export type DogKindOutput = string | "golden";
