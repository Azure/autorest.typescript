// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Horse, Pet, Feline, Cat, Kitten } from "./models";

export type GetHorseParameters = RequestParameters;

interface PutHorseBodyParam {
  body: Horse;
}

export type PutHorseParameters = PutHorseBodyParam & RequestParameters;
export type GetPetParameters = RequestParameters;

interface PutPetBodyParam {
  body: Pet;
}

export type PutPetParameters = PutPetBodyParam & RequestParameters;
export type GetFelineParameters = RequestParameters;

interface PutFelineBodyParam {
  body: Feline;
}

export type PutFelineParameters = PutFelineBodyParam & RequestParameters;
export type GetCatParameters = RequestParameters;

interface PutCatBodyParam {
  body: Cat;
}

export type PutCatParameters = PutCatBodyParam & RequestParameters;
export type GetKittenParameters = RequestParameters;

interface PutKittenBodyParam {
  body: Kitten;
}

export type PutKittenParameters = PutKittenBodyParam & RequestParameters;
