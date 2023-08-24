// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PropertyJsonParameters,
  PropertyClientParameters,
  PropertyLanguageParameters,
  PropertyJsonAndClientParameters,
  OperationParameters,
  ParameterParameters,
} from "./parameters";
import {
  PropertyJson204Response,
  PropertyJsonDefaultResponse,
  PropertyClient204Response,
  PropertyClientDefaultResponse,
  PropertyLanguage204Response,
  PropertyLanguageDefaultResponse,
  PropertyJsonAndClient204Response,
  PropertyJsonAndClientDefaultResponse,
  Operation204Response,
  OperationDefaultResponse,
  Parameter204Response,
  ParameterDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Json {
  post(
    options?: PropertyJsonParameters
  ): StreamableMethod<PropertyJson204Response | PropertyJsonDefaultResponse>;
}

export interface _Client {
  post(
    options?: PropertyClientParameters
  ): StreamableMethod<
    PropertyClient204Response | PropertyClientDefaultResponse
  >;
}

export interface Language {
  post(
    options?: PropertyLanguageParameters
  ): StreamableMethod<
    PropertyLanguage204Response | PropertyLanguageDefaultResponse
  >;
}

export interface JsonAndClient {
  post(
    options?: PropertyJsonAndClientParameters
  ): StreamableMethod<
    PropertyJsonAndClient204Response | PropertyJsonAndClientDefaultResponse
  >;
}

export interface Operation {
  post(
    options?: OperationParameters
  ): StreamableMethod<Operation204Response | OperationDefaultResponse>;
}

export interface Parameter {
  post(
    options: ParameterParameters
  ): StreamableMethod<Parameter204Response | ParameterDefaultResponse>;
}

export interface Routes {
  /** Resource for '/projection/projected-name/property/json' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json"): Json;
  /** Resource for '/projection/projected-name/property/client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/client"): _Client;
  /** Resource for '/projection/projected-name/property/language' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/language"): Language;
  /** Resource for '/projection/projected-name/property/json-and-client' has methods for the following verbs: post */
  (path: "/projection/projected-name/property/json-and-client"): JsonAndClient;
  /** Resource for '/projection/projected-name/operation' has methods for the following verbs: post */
  (path: "/projection/projected-name/operation"): Operation;
  /** Resource for '/projection/projected-name/parameter' has methods for the following verbs: post */
  (path: "/projection/projected-name/parameter"): Parameter;
}

export type ProjectionClient = Client & {
  path: Routes;
};
