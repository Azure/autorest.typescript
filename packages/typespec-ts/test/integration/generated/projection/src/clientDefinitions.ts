// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationParameters,
  ParameterParameters,
  PropertyJsonParameters,
  PropertyClientParameters,
  PropertyLanguageParameters,
  PropertyJsonAndClientParameters,
} from "./parameters";
import {
  Operation204Response,
  Parameter204Response,
  PropertyJson204Response,
  PropertyClient204Response,
  PropertyLanguage204Response,
  PropertyJsonAndClient204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Operation {
  post(options?: OperationParameters): StreamableMethod<Operation204Response>;
}

export interface Parameter {
  post(options: ParameterParameters): StreamableMethod<Parameter204Response>;
}

export interface Json {
  post(
    options?: PropertyJsonParameters,
  ): StreamableMethod<PropertyJson204Response>;
}

export interface _Client {
  post(
    options?: PropertyClientParameters,
  ): StreamableMethod<PropertyClient204Response>;
}

export interface Language {
  post(
    options?: PropertyLanguageParameters,
  ): StreamableMethod<PropertyLanguage204Response>;
}

export interface JsonAndClient {
  post(
    options?: PropertyJsonAndClientParameters,
  ): StreamableMethod<PropertyJsonAndClient204Response>;
}

export interface Routes {
  /** Resource for '/projection/projected-name/operation' has methods for the following verbs: post */
  (path: "/projection/projected-name/operation"): Operation;
  /** Resource for '/projection/projected-name/parameter' has methods for the following verbs: post */
  (path: "/projection/projected-name/parameter"): Parameter;
  /** Resource for '/projection/projected-name/property/json' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json"): Json;
  /** Resource for '/projection/projected-name/property/client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/client"): _Client;
  /** Resource for '/projection/projected-name/property/language' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/language"): Language;
  /** Resource for '/projection/projected-name/property/json-and-client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json-and-client"): JsonAndClient;
}

export type ProjectionClient = Client & {
  path: Routes;
};
