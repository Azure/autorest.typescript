import {
  DogsGetDogsParameters,
  DogsSetDogsParameters,
  CatsGetCatsParameters,
  CatsSetCatsParameters,
} from "./parameters";
import {
  DogsGetDogs200Response,
  DogsSetDogs200Response,
  CatsGetCats200Response,
  CatsSetCats200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for dogs operations */
export interface dogsOperations {
  getDogs(
    options?: DogsGetDogsParameters
  ): StreamableMethod<DogsGetDogs200Response>;
  setDogs(
    options: DogsSetDogsParameters
  ): StreamableMethod<DogsSetDogs200Response>;
}

/** Contains operations for cats operations */
export interface catsOperations {
  getCats(
    options?: CatsGetCatsParameters
  ): StreamableMethod<CatsGetCats200Response>;
  setCats(
    options: CatsSetCatsParameters
  ): StreamableMethod<CatsSetCats200Response>;
}

export interface DogsGetDogs {
  get(
    options?: DogsGetDogsParameters
  ): StreamableMethod<DogsGetDogs200Response>;
}

export interface DogsSetDogs {
  put(options: DogsSetDogsParameters): StreamableMethod<DogsSetDogs200Response>;
}

export interface CatsGetCats {
  get(
    options?: CatsGetCatsParameters
  ): StreamableMethod<CatsGetCats200Response>;
  put(options: CatsSetCatsParameters): StreamableMethod<CatsSetCats200Response>;
}

export interface Routes {
  /** Resource for '/multi-interface/dogs' has methods for the following verbs: get */
  (path: "/multi-interface/dogs"): DogsGetDogs;
  /** Resource for '/multi-interface/dogs/models' has methods for the following verbs: put */
  (path: "/multi-interface/dogs/models"): DogsSetDogs;
  /** Resource for '/multi-interface/cats' has methods for the following verbs: get, put */
  (path: "/multi-interface/cats"): CatsGetCats;
}

export type AuthOauth2Client = Client & {
  path: Routes;
  dogs: dogsOperations;
  cats: catsOperations;
};
