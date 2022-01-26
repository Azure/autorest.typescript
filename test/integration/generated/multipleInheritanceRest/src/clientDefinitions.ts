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
  PutKittenParameters
} from "./parameters";
import {
  GetHorse200Response,
  GetHorsedefaultResponse,
  PutHorse200Response,
  GetPet200Response,
  GetPetdefaultResponse,
  PutPet200Response,
  GetFeline200Response,
  GetFelinedefaultResponse,
  PutFeline200Response,
  GetCat200Response,
  GetCatdefaultResponse,
  PutCat200Response,
  GetKitten200Response,
  GetKittendefaultResponse,
  PutKitten200Response
} from "./responses";
import { Client } from "@azure-rest/core-client";

/** Contains operations for Client operations */
export interface ClientOperations {
  /** Get a horse with name 'Fred' and isAShowHorse true */
  getHorse(
    options?: GetHorseParameters
  ): Promise<GetHorse200Response | GetHorsedefaultResponse>;
  /** Put a horse with name 'General' and isAShowHorse false */
  putHorse(options: PutHorseParameters): Promise<PutHorse200Response>;
  /** Get a pet with name 'Peanut' */
  getPet(
    options?: GetPetParameters
  ): Promise<GetPet200Response | GetPetdefaultResponse>;
  /** Put a pet with name 'Butter' */
  putPet(options: PutPetParameters): Promise<PutPet200Response>;
  /** Get a feline where meows and hisses are true */
  getFeline(
    options?: GetFelineParameters
  ): Promise<GetFeline200Response | GetFelinedefaultResponse>;
  /** Put a feline who hisses and doesn't meow */
  putFeline(options: PutFelineParameters): Promise<PutFeline200Response>;
  /** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
  getCat(
    options?: GetCatParameters
  ): Promise<GetCat200Response | GetCatdefaultResponse>;
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  putCat(options: PutCatParameters): Promise<PutCat200Response>;
  /** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
  getKitten(
    options?: GetKittenParameters
  ): Promise<GetKitten200Response | GetKittendefaultResponse>;
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  putKitten(options: PutKittenParameters): Promise<PutKitten200Response>;
}

export interface GetHorse {
  /** Get a horse with name 'Fred' and isAShowHorse true */
  get(
    options?: GetHorseParameters
  ): Promise<GetHorse200Response | GetHorsedefaultResponse>;
  /** Put a horse with name 'General' and isAShowHorse false */
  put(options: PutHorseParameters): Promise<PutHorse200Response>;
}

export interface GetPet {
  /** Get a pet with name 'Peanut' */
  get(
    options?: GetPetParameters
  ): Promise<GetPet200Response | GetPetdefaultResponse>;
  /** Put a pet with name 'Butter' */
  put(options: PutPetParameters): Promise<PutPet200Response>;
}

export interface GetFeline {
  /** Get a feline where meows and hisses are true */
  get(
    options?: GetFelineParameters
  ): Promise<GetFeline200Response | GetFelinedefaultResponse>;
  /** Put a feline who hisses and doesn't meow */
  put(options: PutFelineParameters): Promise<PutFeline200Response>;
}

export interface GetCat {
  /** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
  get(
    options?: GetCatParameters
  ): Promise<GetCat200Response | GetCatdefaultResponse>;
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  put(options: PutCatParameters): Promise<PutCat200Response>;
}

export interface GetKitten {
  /** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
  get(
    options?: GetKittenParameters
  ): Promise<GetKitten200Response | GetKittendefaultResponse>;
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  put(options: PutKittenParameters): Promise<PutKitten200Response>;
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

export type MultipleInheritanceRestClientRestClient = Client & {
  path: Routes;
} & ClientOperations;
