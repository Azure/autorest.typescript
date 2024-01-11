// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  HorseOutput,
  ErrorModelOutput,
  PetOutput,
  FelineOutput,
  CatOutput,
  KittenOutput,
} from "./outputModels";

/** Get a horse with name 'Fred' and isAShowHorse true */
export interface GetHorse200Response extends HttpResponse {
  status: "200";
  body: HorseOutput;
}

/** Get a horse with name 'Fred' and isAShowHorse true */
export interface GetHorseDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put a horse with name 'General' and isAShowHorse false */
export interface PutHorse200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a pet with name 'Peanut' */
export interface GetPet200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

/** Get a pet with name 'Peanut' */
export interface GetPetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put a pet with name 'Butter' */
export interface PutPet200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a feline where meows and hisses are true */
export interface GetFeline200Response extends HttpResponse {
  status: "200";
  body: FelineOutput;
}

/** Get a feline where meows and hisses are true */
export interface GetFelineDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put a feline who hisses and doesn't meow */
export interface PutFeline200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
export interface GetCat200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

/** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
export interface GetCatDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
export interface PutCat200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
export interface GetKitten200Response extends HttpResponse {
  status: "200";
  body: KittenOutput;
}

/** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
export interface GetKittenDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
export interface PutKitten200Response extends HttpResponse {
  status: "200";
  body: string;
}
