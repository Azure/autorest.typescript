// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  getHorseParameters,
  putHorseParameters,
  getPetParameters,
  putPetParameters,
  getFelineParameters,
  putFelineParameters,
  getCatParameters,
  putCatParameters,
  getKittenParameters,
  putKittenParameters
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
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface getHorse {
  /** Get a horse with name 'Fred' and isAShowHorse true */
  get(
    options?: getHorseParameters
  ): Promise<GetHorse200Response | GetHorsedefaultResponse>;
  /** Put a horse with name 'General' and isAShowHorse false */
  put(options: putHorseParameters): Promise<PutHorse200Response>;
}

export interface getPet {
  /** Get a pet with name 'Peanut' */
  get(
    options?: getPetParameters
  ): Promise<GetPet200Response | GetPetdefaultResponse>;
  /** Put a pet with name 'Butter' */
  put(options: putPetParameters): Promise<PutPet200Response>;
}

export interface getFeline {
  /** Get a feline where meows and hisses are true */
  get(
    options?: getFelineParameters
  ): Promise<GetFeline200Response | GetFelinedefaultResponse>;
  /** Put a feline who hisses and doesn't meow */
  put(options: putFelineParameters): Promise<PutFeline200Response>;
}

export interface getCat {
  /** Get a cat with name 'Whiskers' where likesMilk, meows, and hisses is true */
  get(
    options?: getCatParameters
  ): Promise<GetCat200Response | GetCatdefaultResponse>;
  /** Put a cat with name 'Boots' where likesMilk and hisses is false, meows is true */
  put(options: putCatParameters): Promise<PutCat200Response>;
}

export interface getKitten {
  /** Get a kitten with name 'Gatito' where likesMilk and meows is true, and hisses and eatsMiceYet is false */
  get(
    options?: getKittenParameters
  ): Promise<GetKitten200Response | GetKittendefaultResponse>;
  /** Put a kitten with name 'Kitty' where likesMilk and hisses is false, meows and eatsMiceYet is true */
  put(options: putKittenParameters): Promise<PutKitten200Response>;
}

export interface Routes {
  /** Resource for '/multipleInheritance/horse' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/horse"): getHorse;
  /** Resource for '/multipleInheritance/pet' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/pet"): getPet;
  /** Resource for '/multipleInheritance/feline' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/feline"): getFeline;
  /** Resource for '/multipleInheritance/cat' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/cat"): getCat;
  /** Resource for '/multipleInheritance/kitten' has methods for the following verbs: get, put */
  (path: "/multipleInheritance/kitten"): getKitten;
}

export type MultipleInheritanceRestClientRestClient = Client & {
  path: Routes;
};

export default function MultipleInheritanceRestClient(
  options: ClientOptions = {}
): MultipleInheritanceRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as MultipleInheritanceRestClientRestClient;
}
