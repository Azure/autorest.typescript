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

/** This is base model for not-discriminated normal multiple levels inheritance. */
export interface Pet {
  name: string;
}
