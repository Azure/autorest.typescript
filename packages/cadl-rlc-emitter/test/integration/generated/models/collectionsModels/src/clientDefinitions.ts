import {
  ModelCollectionPropertiesSendCollectionModelParameters,
  ModelCollectionPropertiesGetCollectionModelParameters,
  ModelCollectionPropertiesSetCollectionModelParameters,
} from "./parameters";
import {
  ModelCollectionPropertiesSendCollectionModel200Response,
  ModelCollectionPropertiesSendCollectionModelDefaultResponse,
  ModelCollectionPropertiesGetCollectionModel200Response,
  ModelCollectionPropertiesGetCollectionModelDefaultResponse,
  ModelCollectionPropertiesSetCollectionModel200Response,
  ModelCollectionPropertiesSetCollectionModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for ModelCollectionProperties operations */
export interface ModelCollectionPropertiesOperations {
  sendCollectionModel(
    options?: ModelCollectionPropertiesSendCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesSendCollectionModel200Response
    | ModelCollectionPropertiesSendCollectionModelDefaultResponse
  >;
  getCollectionModel(
    options?: ModelCollectionPropertiesGetCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesGetCollectionModel200Response
    | ModelCollectionPropertiesGetCollectionModelDefaultResponse
  >;
  setCollectionModel(
    options?: ModelCollectionPropertiesSetCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesSetCollectionModel200Response
    | ModelCollectionPropertiesSetCollectionModelDefaultResponse
  >;
}

export interface SendCollectionModel {
  post(
    options?: ModelCollectionPropertiesSendCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesSendCollectionModel200Response
    | ModelCollectionPropertiesSendCollectionModelDefaultResponse
  >;
  get(
    options?: ModelCollectionPropertiesGetCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesGetCollectionModel200Response
    | ModelCollectionPropertiesGetCollectionModelDefaultResponse
  >;
  put(
    options?: ModelCollectionPropertiesSetCollectionModelParameters
  ): StreamableMethod<
    | ModelCollectionPropertiesSetCollectionModel200Response
    | ModelCollectionPropertiesSetCollectionModelDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/collection-models/models' has methods for the following verbs: post, get, put */
  (path: "/collection-models/models"): SendCollectionModel;
}

export type ModelCollectionPropertiesClient = Client & {
  path: Routes;
  modelCollectionProperties: ModelCollectionPropertiesOperations;
};
