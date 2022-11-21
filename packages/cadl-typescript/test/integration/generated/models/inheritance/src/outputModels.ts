// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The third level model in the normal multiple levels inheritance. */
export interface SiameseOutput extends CatOutput {
  smart: boolean;
}

/** The second level model in the normal multiple levels inheritance. */
export interface CatOutput extends PetOutput {
  age: number;
}

/** This is base model for non-discriminator normal multiple levels inheritance. */
export interface PetOutput {
  name: string;
}

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface FishOutputParent {
  age: number;
  kind: "Fish" | "shark" | "salmon";
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface SharkOutputParent extends FishOutputParent {
  kind: "shark";
  sharktype: "Shark" | "saw" | "goblin";
}

/** The third level model SawShark in polymorphic multiple levels inheritance. */
export interface SawSharkOutput extends SharkOutputParent {
  sharktype: "saw";
}

/** The third level model GoblinShark in polymorphic multiple levels inheritance. */
export interface GoblinSharkOutput extends SharkOutputParent {
  sharktype: "goblin";
}

/** The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances. */
export interface SalmonOutput extends FishOutputParent {
  kind: "salmon";
  friends?: Array<FishOutput>;
  hate?: Record<string, FishOutput>;
  /** This is base model for polymorphic multiple levels inheritance with a discriminator. */
  partner?: FishOutput;
}

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export type FishOutput = SharkOutput | SalmonOutput;
/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export type SharkOutput = SawSharkOutput | GoblinSharkOutput;
