// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface FishOutputParent {
  age: number;
  kind: string;
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface SharkOutputParent extends FishOutputParent {
  kind: "shark";
  sharktype: string;
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
  partner?: FishOutput;
}

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export type FishOutput = FishOutputParent | SharkOutput | SalmonOutput;
/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export type SharkOutput =
  | SharkOutputParent
  | SawSharkOutput
  | GoblinSharkOutput;
