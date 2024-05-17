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

/** This is base model for not-discriminated normal multiple levels inheritance. */
export interface PetOutput {
  name: string;
}
