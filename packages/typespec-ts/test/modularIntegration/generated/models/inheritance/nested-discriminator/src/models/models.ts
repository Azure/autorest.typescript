// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface FishParent {
  age: number;
  /** the discriminator possible values: shark, salmon */
  kind: string;
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface SharkParent extends FishParent {
  kind: "shark";
  /** the discriminator possible values: saw, goblin */
  sharktype: string;
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
  friends?: Fish[];
  hate?: Record<string, Fish>;
  partner?: Fish;
}

/** Alias for Fish */
export type Fish = Shark | Salmon | FishParent;
/** Alias for Shark */
export type Shark = SawShark | GoblinShark | SharkParent;
