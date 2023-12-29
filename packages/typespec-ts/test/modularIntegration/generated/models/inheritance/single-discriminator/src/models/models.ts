// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface Bird {
  /** the discriminator possible values: seagull, sparrow, goose, eagle */
  kind: string;
  wingspan: number;
}

/** The second level model in polymorphic single level inheritance. */
export interface SeaGull extends Bird {
  kind: "seagull";
}

/** The second level model in polymorphic single level inheritance. */
export interface Sparrow extends Bird {
  kind: "sparrow";
}

/** The second level model in polymorphic single level inheritance. */
export interface Goose extends Bird {
  kind: "goose";
}

/** The second level model in polymorphic single levels inheritance which contains references to other polymorphic instances. */
export interface Eagle extends Bird {
  kind: "eagle";
  friends?: BirdUnion[];
  hate?: Record<string, BirdUnion>;
  partner?: BirdUnion;
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
