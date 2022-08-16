import {
  PetsDeleteParameters,
  PetsReadParameters,
  PetsCreateParameters,
  ListPetToysResponseListParameters,
} from "./parameters";
import {
  PetsDelete200Response,
  PetsDeleteDefaultResponse,
  PetsRead200Response,
  PetsRead304Response,
  PetsReadDefaultResponse,
  PetsCreate200Response,
  PetsCreateDefaultResponse,
  ListPetToysResponseList200Response,
  ListPetToysResponseListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Pets operations */
export interface PetsOperations {
  /** Delete a pet. */
  delete(
    petId: number,
    options: PetsDeleteParameters
  ): StreamableMethod<PetsDelete200Response | PetsDeleteDefaultResponse>;
  /** Returns a pet. Supports eTags. */
  read(
    petId: number,
    options: PetsReadParameters
  ): StreamableMethod<
    PetsRead200Response | PetsRead304Response | PetsReadDefaultResponse
  >;
  create(
    options: PetsCreateParameters
  ): StreamableMethod<PetsCreate200Response | PetsCreateDefaultResponse>;
}

/** Contains operations for ListPetToysResponse operations */
export interface ListPetToysResponseOperations {
  list(
    petId: string,
    options: ListPetToysResponseListParameters
  ): StreamableMethod<
    ListPetToysResponseList200Response | ListPetToysResponseListDefaultResponse
  >;
}

export interface PetsDelete {
  /** Delete a pet. */
  delete(
    options: PetsDeleteParameters
  ): StreamableMethod<PetsDelete200Response | PetsDeleteDefaultResponse>;
  /** Returns a pet. Supports eTags. */
  get(
    options: PetsReadParameters
  ): StreamableMethod<
    PetsRead200Response | PetsRead304Response | PetsReadDefaultResponse
  >;
}

export interface PetsCreate {
  post(
    options: PetsCreateParameters
  ): StreamableMethod<PetsCreate200Response | PetsCreateDefaultResponse>;
}

export interface ListPetToysResponseList {
  get(
    options: ListPetToysResponseListParameters
  ): StreamableMethod<
    ListPetToysResponseList200Response | ListPetToysResponseListDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/pets/\{petId\}' has methods for the following verbs: delete, get */
  (path: "/pets/{petId}", petId: number): PetsDelete;
  /** Resource for '/pets' has methods for the following verbs: post */
  (path: "/pets"): PetsCreate;
  /** Resource for '/pets/\{petId\}/toys' has methods for the following verbs: get */
  (path: "/pets/{petId}/toys", petId: string): ListPetToysResponseList;
}

export type PetStoreServiceClient = Client & {
  path: Routes;
  pets: PetsOperations;
  listPetToysResponse: ListPetToysResponseOperations;
};
