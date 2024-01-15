// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetHorseParameters,
  PutHorseParameters,
  GetPetParameters,
  PutPetParameters,
  GetFelineParameters,
  PutFelineParameters,
  GetCatParameters,
  PutCatParameters,
  GetKittenParameters,
  PutKittenParameters,
} from "./parameters";
import {
  GetHorse200Response,
  GetHorseDefaultResponse,
  PutHorse200Response,
  GetPet200Response,
  GetPetDefaultResponse,
  PutPet200Response,
  GetFeline200Response,
  GetFelineDefaultResponse,
  PutFeline200Response,
  GetCat200Response,
  GetCatDefaultResponse,
  PutCat200Response,
  GetKitten200Response,
  GetKittenDefaultResponse,
  PutKitten200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Client operations */
export interface ClientOperations {
  /** Get a horse with name 'Fred' and isAShowHorse true */
  getHorse(
    options?: GetHorseParameters,
  ): StreamableMethod<GetHorse200Response | GetHorseDefaultResponse>;
  /** Put a horse with name 'General' and isAShowHorse false */
  putHorse(options: PutHorseParameters): StreamableMethod<PutHorse200Response>;
  /** Get a pet with name 'Peanut' */
  getPet(
    options?: GetPetParameters,
  ): StreamableMethod<GetPet200Response | GetPetDefaultResponse>;
  /** Put a pet with name 'Butter' */
  putPet(options: PutPetParameters): StreamableMethod<PutPet200Response>;
  /** Get a feline where meows and hisses are true */
  getFeline(
    options?: GetFelineParameters,
  ): StreamableMethod<GetFeline200Response | GetFelineDefaultResponse>;
  /** Put a feline who hisses and doesn't meow */
  putFeline(
    options: PutFelineParameters,
  ): StreamableMethod<PutFeline200Response>;
  /** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
  getCat(
    options?: GetCatParameters,
  ): StreamableMethod<GetCat200Response | GetCatDefaultResponse>;
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  putCat(options: PutCatParameters): StreamableMethod<PutCat200Response>;
  /** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
  getKitten(
    options?: GetKittenParameters,
  ): StreamableMethod<GetKitten200Response | GetKittenDefaultResponse>;
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  putKitten(
    options: PutKittenParameters,
  ): StreamableMethod<PutKitten200Response>;
}

export interface GetHorse {
  /** Get a horse with name 'Fred' and isAShowHorse true */
  get(
    options?: GetHorseParameters,
  ): StreamableMethod<GetHorse200Response | GetHorseDefaultResponse>;
  /** Put a horse with name 'General' and isAShowHorse false */
  put(options: PutHorseParameters): StreamableMethod<PutHorse200Response>;
}

export interface GetPet {
  /** Get a pet with name 'Peanut' */
  get(
    options?: GetPetParameters,
  ): StreamableMethod<GetPet200Response | GetPetDefaultResponse>;
  /** Put a pet with name 'Butter' */
  put(options: PutPetParameters): StreamableMethod<PutPet200Response>;
}

export interface GetFeline {
  /** Get a feline where meows and hisses are true */
  get(
    options?: GetFelineParameters,
  ): StreamableMethod<GetFeline200Response | GetFelineDefaultResponse>;
  /** Put a feline who hisses and doesn't meow */
  put(options: PutFelineParameters): StreamableMethod<PutFeline200Response>;
}

export interface GetCat {
  /** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
  get(
    options?: GetCatParameters,
  ): StreamableMethod<GetCat200Response | GetCatDefaultResponse>;
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  put(options: PutCatParameters): StreamableMethod<PutCat200Response>;
}

export interface GetKitten {
  /** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
  get(
    options?: GetKittenParameters,
  ): StreamableMethod<GetKitten200Response | GetKittenDefaultResponse>;
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  put(options: PutKittenParameters): StreamableMethod<PutKitten200Response>;
}

export interface Routes {
  /** Resource for '/multipleInheritance/horse' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/horse"): GetHorse;
  /** Resource for '/multipleInheritance/pet' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/pet"): GetPet;
  /** Resource for '/multipleInheritance/feline' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/feline"): GetFeline;
  /** Resource for '/multipleInheritance/cat' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/cat"): GetCat;
  /** Resource for '/multipleInheritance/kitten' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/kitten"): GetKitten;
}

export type MultipleInheritanceRestClient = Client & {
  path: Routes;
} & ClientOperations;
