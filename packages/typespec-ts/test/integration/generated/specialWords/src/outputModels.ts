// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is a base model has discriminator name containing dot. */
export interface BaseModelOutputParent {
  "model.kind": "BaseModel" | "derived";
}

/** This is a model has property names of special words or characters. */
export interface DerivedModelOutput extends BaseModelOutputParent {
  "model.kind": "derived";
  "derived.name": string;
  for: string;
}

/** This is a base model has discriminator name containing dot. */
export type BaseModelOutput = DerivedModelOutput;
