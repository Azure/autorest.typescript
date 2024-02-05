// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface Fish {
  age: number;
  /** the discriminator possible values: shark, salmon */
  kind: string;
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface Shark extends Fish {
  kind: "shark";
  /** the discriminator possible values: saw, goblin */
  sharktype: string;
}

/** The third level model SawShark in polymorphic multiple levels inheritance. */
export interface SawShark extends Shark {
  sharktype: "saw";
}

/** The third level model GoblinShark in polymorphic multiple levels inheritance. */
export interface GoblinShark extends Shark {
  sharktype: "goblin";
}

/** The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances. */
export interface Salmon extends Fish {
  kind: "salmon";
  friends?: FishUnion[];
  hate?: Record<string, FishUnion>;
  partner?: FishUnion;
}

/** Alias for FishUnion */
export type FishUnion = SharkUnion | Salmon | Fish;
/** Alias for SharkUnion */
export type SharkUnion = SawShark | GoblinShark | Shark;
