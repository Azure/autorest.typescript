import { RequestParameters } from "@azure-rest/core-client";
import { Siamese, Fish } from "./models";

export interface InheritancePostValidBodyParam {
  body: Siamese;
}

export type InheritancePostValidParameters = InheritancePostValidBodyParam &
  RequestParameters;
export type InheritanceGetValidParameters = RequestParameters;

export interface InheritancePutValidBodyParam {
  body: Siamese;
}

export type InheritancePutValidParameters = InheritancePutValidBodyParam &
  RequestParameters;
export type DiscriminatedGetModelParameters = RequestParameters;

export interface DiscriminatedPutModelBodyParam {
  body: Fish;
}

export type DiscriminatedPutModelParameters = DiscriminatedPutModelBodyParam &
  RequestParameters;
export type DiscriminatedGetRecursiveModelParameters = RequestParameters;

export interface DiscriminatedPutRecursiveModelBodyParam {
  body: Fish;
}

export type DiscriminatedPutRecursiveModelParameters =
  DiscriminatedPutRecursiveModelBodyParam & RequestParameters;
export type DiscriminatedGetMissingDiscriminatorParameters = RequestParameters;
export type DiscriminatedGetWrongDiscriminatorParameters = RequestParameters;
