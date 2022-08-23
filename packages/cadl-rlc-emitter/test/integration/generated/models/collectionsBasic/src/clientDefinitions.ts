import {
  CollectionPropertiesBasicSendCollectionModelParameters,
  CollectionPropertiesBasicGetCollectionModelParameters,
  CollectionPropertiesBasicSetCollectionModelParameters,
} from "./parameters";
import {
  CollectionPropertiesBasicSendCollectionModel200Response,
  CollectionPropertiesBasicSendCollectionModelDefaultResponse,
  CollectionPropertiesBasicGetCollectionModel200Response,
  CollectionPropertiesBasicGetCollectionModelDefaultResponse,
  CollectionPropertiesBasicSetCollectionModel200Response,
  CollectionPropertiesBasicSetCollectionModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SendCollectionModel {
  post(
    options: CollectionPropertiesBasicSendCollectionModelParameters
  ): StreamableMethod<
    | CollectionPropertiesBasicSendCollectionModel200Response
    | CollectionPropertiesBasicSendCollectionModelDefaultResponse
  >;
  get(
    options: CollectionPropertiesBasicGetCollectionModelParameters
  ): StreamableMethod<
    | CollectionPropertiesBasicGetCollectionModel200Response
    | CollectionPropertiesBasicGetCollectionModelDefaultResponse
  >;
  put(
    options: CollectionPropertiesBasicSetCollectionModelParameters
  ): StreamableMethod<
    | CollectionPropertiesBasicSetCollectionModel200Response
    | CollectionPropertiesBasicSetCollectionModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/collection-properties-basic/models' has methods for the following verbs: post, get, put */
  (path: "/collection-properties-basic/models"): SendCollectionModel;
}

export type CollectionPropertiesBasicClient = Client & {
  path: Routes;
};
