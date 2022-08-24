import { RequestParameters } from "@azure-rest/core-client";
import { InputModel, RoundTripModel } from "./models";

export interface CollectionPropertiesBasicSendCollectionModelBodyParam {
  body: InputModel;
}

export type CollectionPropertiesBasicSendCollectionModelParameters =
  CollectionPropertiesBasicSendCollectionModelBodyParam & RequestParameters;
export type CollectionPropertiesBasicGetCollectionModelParameters =
  RequestParameters;

export interface CollectionPropertiesBasicSetCollectionModelBodyParam {
  body: RoundTripModel;
}

export type CollectionPropertiesBasicSetCollectionModelParameters =
  CollectionPropertiesBasicSetCollectionModelBodyParam & RequestParameters;
