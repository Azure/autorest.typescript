// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationParameters,
  ParameterParameters,
  PropertyJsonParameters,
  PropertyClientParameters,
  PropertyLanguageParameters,
  PropertyJsonAndClientParameters,
  ModelClientParameters,
  ModelLanguageParameters,
} from "./parameters";
import {
  Operation204Response,
  Parameter204Response,
  PropertyJson204Response,
  PropertyClient204Response,
  PropertyLanguage204Response,
  PropertyJsonAndClient204Response,
  ModelClient204Response,
  ModelLanguage204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Operation {
  post(options?: OperationParameters): StreamableMethod<Operation204Response>;
}

export interface Parameter {
  post(options: ParameterParameters): StreamableMethod<Parameter204Response>;
}

export interface PropertyJson {
  post(
    options?: PropertyJsonParameters,
  ): StreamableMethod<PropertyJson204Response>;
}

export interface PropertyClient {
  post(
    options?: PropertyClientParameters,
  ): StreamableMethod<PropertyClient204Response>;
}

export interface PropertyLanguage {
  post(
    options?: PropertyLanguageParameters,
  ): StreamableMethod<PropertyLanguage204Response>;
}

export interface PropertyJsonAndClient {
  post(
    options?: PropertyJsonAndClientParameters,
  ): StreamableMethod<PropertyJsonAndClient204Response>;
}

export interface ModelClient {
  post(
    options?: ModelClientParameters,
  ): StreamableMethod<ModelClient204Response>;
}

export interface ModelLanguage {
  post(
    options?: ModelLanguageParameters,
  ): StreamableMethod<ModelLanguage204Response>;
}

export interface Routes {
  /** Resource for '/projection/projected-name/operation' has methods for the following verbs: post */
  (path: "/projection/projected-name/operation"): Operation;
  /** Resource for '/projection/projected-name/parameter' has methods for the following verbs: post */
  (path: "/projection/projected-name/parameter"): Parameter;
  /** Resource for '/projection/projected-name/property/json' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json"): PropertyJson;
  /** Resource for '/projection/projected-name/property/client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/client"): PropertyClient;
  /** Resource for '/projection/projected-name/property/language' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/language"): PropertyLanguage;
  /** Resource for '/projection/projected-name/property/json-and-client' has methods for the following verbs: post */
  (
    path: "/projection/projected-name/property/json-and-client",
  ): PropertyJsonAndClient;
  /** Resource for '/projection/projected-name/model/client' has methods for the following verbs: post */
  (path: "/projection/projected-name/model/client"): ModelClient;
  /** Resource for '/projection/projected-name/model/language' has methods for the following verbs: post */
  (path: "/projection/projected-name/model/language"): ModelLanguage;
}

export type ProjectionClient = Client & {
  path: Routes;
};
