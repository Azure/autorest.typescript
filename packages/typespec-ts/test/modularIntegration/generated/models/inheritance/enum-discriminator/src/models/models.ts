// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** the base class union for poly models */
export type Dog = Golden;

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
  kind: any;
}

/** extensible enum type for discriminator */
/** "golden" */
export type DogKind = string;
/** the base class union for poly models */
export type Snake = Cobra;

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
  kind: any;
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
