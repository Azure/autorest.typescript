// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface BirdParent {
  /** the discriminator possible values seagull, sparrow, goose, eagle */
  kind: string;
  wingspan: number;
}

/** The second level model in polymorphic single level inheritance. */
export interface SeaGull extends BirdParent {
  kind: "seagull";
}

/** The second level model in polymorphic single level inheritance. */
export interface Sparrow extends BirdParent {
  kind: "sparrow";
}

/** The second level model in polymorphic single level inheritance. */
export interface Goose extends BirdParent {
  kind: "goose";
}

/** The second level model in polymorphic single levels inheritance which contains references to other polymorphic instances. */
export interface Eagle extends BirdParent {
  kind: "eagle";
  friends?: Bird[];
  hate?: Record<string, Bird>;
  partner?: Bird;
}

/** Define a base class in the legacy way. Discriminator property is not explicitly defined in the model. */
export interface DinosaurParent {
  size: number;
  /** the discriminator possible values t-rex */
  kind?: string;
}

/** The second level legacy model in polymorphic single level inheritance. */
export interface TRex extends DinosaurParent {
  kind: "t-rex";
}

/** Base type for Bird */
export type Bird = SeaGull | Sparrow | Goose | Eagle | BirdParent;
/** Base type for Dinosaur */
export type Dinosaur = TRex | DinosaurParent;
