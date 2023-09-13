// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic multiple levels inheritance with a discriminator. */
export interface Fish {
  age: number;
  kind: string;
}

/** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
export interface Shark extends Fish {
  kind: "shark";
  sharktype: string;
}
