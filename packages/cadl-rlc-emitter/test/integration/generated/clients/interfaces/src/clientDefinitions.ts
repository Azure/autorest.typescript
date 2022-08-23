import {
  MultiInterfaceClientGetDogsParameters,
  MultiInterfaceClientSetDogsParameters,
  MultiInterfaceClientGetCatsParameters,
  MultiInterfaceClientSetCatsParameters,
} from "./parameters";
import {
  MultiInterfaceClientGetDogs200Response,
  MultiInterfaceClientGetDogsDefaultResponse,
  MultiInterfaceClientSetDogs200Response,
  MultiInterfaceClientSetDogsDefaultResponse,
  MultiInterfaceClientGetCats200Response,
  MultiInterfaceClientGetCatsDefaultResponse,
  MultiInterfaceClientSetCats200Response,
  MultiInterfaceClientSetCatsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetDogs {
  get(
    options: MultiInterfaceClientGetDogsParameters
  ): StreamableMethod<
    | MultiInterfaceClientGetDogs200Response
    | MultiInterfaceClientGetDogsDefaultResponse
  >;
}

export interface SetDogs {
  put(
    options: MultiInterfaceClientSetDogsParameters
  ): StreamableMethod<
    | MultiInterfaceClientSetDogs200Response
    | MultiInterfaceClientSetDogsDefaultResponse
  >;
}

export interface GetCats {
  get(
    options: MultiInterfaceClientGetCatsParameters
  ): StreamableMethod<
    | MultiInterfaceClientGetCats200Response
    | MultiInterfaceClientGetCatsDefaultResponse
  >;
  put(
    options: MultiInterfaceClientSetCatsParameters
  ): StreamableMethod<
    | MultiInterfaceClientSetCats200Response
    | MultiInterfaceClientSetCatsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/dogs' has methods for the following verbs: get */
  (path: "/dogs"): GetDogs;
  /** Resource for '/dogs/models' has methods for the following verbs: put */
  (path: "/dogs/models"): SetDogs;
  /** Resource for '/cats' has methods for the following verbs: get, put */
  (path: "/cats"): GetCats;
}

export type MultiInterfaceClient = Client & {
  path: Routes;
};
