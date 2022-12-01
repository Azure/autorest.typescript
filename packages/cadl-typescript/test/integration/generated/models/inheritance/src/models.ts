// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The third level model in the normal multiple levels inheritance. */
export interface Siamese extends Cat {
  smart: boolean;
}

/** The second level model in the normal multiple levels inheritance. */
export interface Cat extends Pet {
  age: number;
}

/** This is base model for non-discriminator normal multiple levels inheritance. */
export interface Pet {
  name: string;
}

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface FishParent {
  age: number;
  kind: "Fish" | "shark" | "salmon";
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface SharkParent extends FishParent {
  kind: "shark";
  sharktype: "Shark" | "saw" | "goblin";
}

/** The third level model SawShark in polymorphic multiple levels inheritance. */
export interface SawShark extends SharkParent {
  sharktype: "saw";
}

/** The third level model GoblinShark in polymorphic multiple levels inheritance. */
export interface GoblinShark extends SharkParent {
  sharktype: "goblin";
}

/** The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances. */
export interface Salmon extends FishParent {
  kind: "salmon";
  friends?: Array<Fish>;
  hate?: Record<string, Fish>;
  partner?: Fish;
}

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export type Fish = Shark | Salmon;
/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export type Shark = SawShark | GoblinShark;
