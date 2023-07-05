// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PropertyJsonParameters,
  PropertyClientParameters,
  PropertyLanguageParameters,
  PropertyJsonAndClientParameters,
  ProjectedNameOperationParameters,
  ProjectedNameParameterParameters,
} from "./parameters";
import {
  PropertyJson204Response,
  PropertyClient204Response,
  PropertyLanguage204Response,
  PropertyJsonAndClient204Response,
  ProjectedNameOperation204Response,
  ProjectedNameParameter204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PropertyJson {
  post(
    options?: PropertyJsonParameters
  ): StreamableMethod<PropertyJson204Response>;
}

export interface PropertyClient {
  post(
    options?: PropertyClientParameters
  ): StreamableMethod<PropertyClient204Response>;
}

export interface PropertyLanguage {
  post(
    options?: PropertyLanguageParameters
  ): StreamableMethod<PropertyLanguage204Response>;
}

export interface PropertyJsonAndClient {
  post(
    options?: PropertyJsonAndClientParameters
  ): StreamableMethod<PropertyJsonAndClient204Response>;
}

export interface ProjectedNameOperation {
  post(
    options?: ProjectedNameOperationParameters
  ): StreamableMethod<ProjectedNameOperation204Response>;
}

export interface ProjectedNameParameter {
  post(
    options: ProjectedNameParameterParameters
  ): StreamableMethod<ProjectedNameParameter204Response>;
}

export interface Routes {
  /** Resource for '/projection/projected-name/property/json' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json"): PropertyJson;
  /** Resource for '/projection/projected-name/property/client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/client"): PropertyClient;
  /** Resource for '/projection/projected-name/property/language' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/language"): PropertyLanguage;
  /** Resource for '/projection/projected-name/property/json-and-client' has methods for the following verbs: post */
  (
    path: "/projection/projected-name/property/json-and-client"
  ): PropertyJsonAndClient;
  /** Resource for '/projection/projected-name/operation' has methods for the following verbs: post */
  (path: "/projection/projected-name/operation"): ProjectedNameOperation;
  /** Resource for '/projection/projected-name/parameter' has methods for the following verbs: post */
  (path: "/projection/projected-name/parameter"): ProjectedNameParameter;
}

export type ProjectionClient = Client & {
  path: Routes;
};
