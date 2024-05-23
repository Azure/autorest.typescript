// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface BirdOutputParent {
  wingspan: number;
  kind: string;
}

/** The second level model in polymorphic single level inheritance. */
export interface SeaGullOutput extends BirdOutputParent {
  kind: "seagull";
}

/** The second level model in polymorphic single level inheritance. */
export interface SparrowOutput extends BirdOutputParent {
  kind: "sparrow";
}

/** The second level model in polymorphic single level inheritance. */
export interface GooseOutput extends BirdOutputParent {
  kind: "goose";
}

/** The second level model in polymorphic single levels inheritance which contains references to other polymorphic instances. */
export interface EagleOutput extends BirdOutputParent {
  kind: "eagle";
  friends?: Array<BirdOutput>;
  hate?: Record<string, BirdOutput>;
  partner?: BirdOutput;
}

/** Define a base class in the legacy way. Discriminator property is not explicitly defined in the model. */
export interface DinosaurOutputParent {
  size: number;
  kind: string;
}

/** The second level legacy model in polymorphic single level inheritance. */
export interface TRexOutput extends DinosaurOutputParent {
  kind: "t-rex";
}

/** This is base model for polymorphic single level inheritance with a discriminator. */
export type BirdOutput =
  | BirdOutputParent
  | SeaGullOutput
  | SparrowOutput
  | GooseOutput
  | EagleOutput;
/** Define a base class in the legacy way. Discriminator property is not explicitly defined in the model. */
export type DinosaurOutput = DinosaurOutputParent | TRexOutput;
