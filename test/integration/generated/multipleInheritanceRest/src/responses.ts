// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { Horse, ErrorModel, Pet, Feline, Cat, Kitten } from "./models";

/** Get a horse with name 'Fred' and isAShowHorse true */
export interface GetHorse200Response extends HttpResponse {
  status: "200";
  body: Horse;
}

/** Get a horse with name 'Fred' and isAShowHorse true */
export interface GetHorsedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put a horse with name 'General' and isAShowHorse false */
export interface PutHorse200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a pet with name 'Peanut' */
export interface GetPet200Response extends HttpResponse {
  status: "200";
  body: Pet;
}

/** Get a pet with name 'Peanut' */
export interface GetPetdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put a pet with name 'Butter' */
export interface PutPet200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a feline where meows and hisses are true */
export interface GetFeline200Response extends HttpResponse {
  status: "200";
  body: Feline;
}

/** Get a feline where meows and hisses are true */
export interface GetFelinedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put a feline who hisses and doesn't meow */
export interface PutFeline200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
export interface GetCat200Response extends HttpResponse {
  status: "200";
  body: Cat;
}

/** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
export interface GetCatdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
export interface PutCat200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
export interface GetKitten200Response extends HttpResponse {
  status: "200";
  body: Kitten;
}

/** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
export interface GetKittendefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
export interface PutKitten200Response extends HttpResponse {
  status: "200";
  body: string;
}
