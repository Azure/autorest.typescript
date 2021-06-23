// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Horse, Pet, Feline, Cat, Kitten } from "./models";

export type GetHorseParameters = RequestParameters;

export interface PutHorseBodyParam {
  body: Horse;
}

export type PutHorseParameters = PutHorseBodyParam & RequestParameters;
export type GetPetParameters = RequestParameters;

export interface PutPetBodyParam {
  body: Pet;
}

export type PutPetParameters = PutPetBodyParam & RequestParameters;
export type GetFelineParameters = RequestParameters;

export interface PutFelineBodyParam {
  body: Feline;
}

export type PutFelineParameters = PutFelineBodyParam & RequestParameters;
export type GetCatParameters = RequestParameters;

export interface PutCatBodyParam {
  body: Cat;
}

export type PutCatParameters = PutCatBodyParam & RequestParameters;
export type GetKittenParameters = RequestParameters;

export interface PutKittenBodyParam {
  body: Kitten;
}

export type PutKittenParameters = PutKittenBodyParam & RequestParameters;
