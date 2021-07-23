// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Horse, Pet, Feline, Cat, Kitten } from "./models";

export type GetHorseParameters = RequestParameters;

export interface PutHorseBodyParam {
  /** Put a horse with name 'General' and isAShowHorse false */
  body: Horse;
}

export type PutHorseParameters = PutHorseBodyParam & RequestParameters;
export type GetPetParameters = RequestParameters;

export interface PutPetBodyParam {
  /** Put a pet with name 'Butter' */
  body: Pet;
}

export type PutPetParameters = PutPetBodyParam & RequestParameters;
export type GetFelineParameters = RequestParameters;

export interface PutFelineBodyParam {
  /** Put a feline who hisses and doesn't meow */
  body: Feline;
}

export type PutFelineParameters = PutFelineBodyParam & RequestParameters;
export type GetCatParameters = RequestParameters;

export interface PutCatBodyParam {
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  body: Cat;
}

export type PutCatParameters = PutCatBodyParam & RequestParameters;
export type GetKittenParameters = RequestParameters;

export interface PutKittenBodyParam {
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  body: Kitten;
}

export type PutKittenParameters = PutKittenBodyParam & RequestParameters;
