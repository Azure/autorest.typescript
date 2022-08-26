import { RequestParameters } from "@azure-rest/core-client";
import { ModelCollectionModel } from "./models";

export interface ModelCollectionPropertiesSendCollectionModelBodyParam {
  body: ModelCollectionModel;
}

export type ModelCollectionPropertiesSendCollectionModelParameters =
  ModelCollectionPropertiesSendCollectionModelBodyParam & RequestParameters;
export type ModelCollectionPropertiesGetCollectionModelParameters =
  RequestParameters;

export interface ModelCollectionPropertiesSetCollectionModelBodyParam {
  body: ModelCollectionModel;
}

export type ModelCollectionPropertiesSetCollectionModelParameters =
  ModelCollectionPropertiesSetCollectionModelBodyParam & RequestParameters;
