// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface BirdParent {
  wingspan: number;
  kind: string;
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
  friends?: Array<Bird>;
  hate?: Record<string, Bird>;
  partner?: Bird;
}

/** This is base model for polymorphic single level inheritance with a discriminator. */
export type Bird = BirdParent | SeaGull | Sparrow | Goose | Eagle;
