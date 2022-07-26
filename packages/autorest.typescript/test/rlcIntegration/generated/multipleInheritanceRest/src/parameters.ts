// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Horse, Pet, Feline, Cat, Kitten } from "./models";

export type GetHorseParameters = RequestParameters;

export interface PutHorseBodyParam {
  /** Put a horse with name 'General' and isAShowHorse false */
  body: Horse;
}

export interface PutHorseMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PutHorseParameters = PutHorseMediaTypesParam &
  PutHorseBodyParam &
  RequestParameters;
export type GetPetParameters = RequestParameters;

export interface PutPetBodyParam {
  /** Put a pet with name 'Butter' */
  body: Pet;
}

export interface PutPetMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PutPetParameters = PutPetMediaTypesParam &
  PutPetBodyParam &
  RequestParameters;
export type GetFelineParameters = RequestParameters;

export interface PutFelineBodyParam {
  /** Put a feline who hisses and doesn't meow */
  body: Feline;
}

export interface PutFelineMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PutFelineParameters = PutFelineMediaTypesParam &
  PutFelineBodyParam &
  RequestParameters;
export type GetCatParameters = RequestParameters;

export interface PutCatBodyParam {
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  body: Cat;
}

export interface PutCatMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PutCatParameters = PutCatMediaTypesParam &
  PutCatBodyParam &
  RequestParameters;
export type GetKittenParameters = RequestParameters;

export interface PutKittenBodyParam {
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  body: Kitten;
}

export interface PutKittenMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PutKittenParameters = PutKittenMediaTypesParam &
  PutKittenBodyParam &
  RequestParameters;
