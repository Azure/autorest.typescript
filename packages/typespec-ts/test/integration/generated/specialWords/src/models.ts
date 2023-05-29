// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is a base model has discriminator name containing dot. */
export interface BaseModelParent {
  "model.kind": "BaseModel" | "derived";
}

/** This is a model has property names of special words or characters. */
export interface DerivedModel extends BaseModelParent {
  "model.kind": "derived";
  "derived.name": string;
  for: string;
}

/** This is a base model has discriminator name containing dot. */
export type BaseModel = DerivedModel;
