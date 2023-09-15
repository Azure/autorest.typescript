// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is base model for polymorphic single level inheritance with a discriminator. */
export interface Bird {
  /** the discriminator possible values seagull, sparrow, goose, eagle */
  kind: string;
  wingspan: number;
}

/** Define a base class in the legacy way. Discriminator property is not explicitly defined in the model. */
export interface Dinosaur {
  size: number;
}
