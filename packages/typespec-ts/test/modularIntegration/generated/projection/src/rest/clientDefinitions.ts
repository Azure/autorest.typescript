// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  JsonParameters,
  ClientParameters,
  LanguageParameters,
  JsonAndClientParameters,
  OperationParameters,
  ParameterParameters,
} from "./parameters.js";
import {
  Json204Response,
  Client204Response,
  Language204Response,
  JsonAndClient204Response,
  Operation204Response,
  Parameter204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Json {
  post(options?: JsonParameters): StreamableMethod<Json204Response>;
}

export interface _Client {
  post(options?: ClientParameters): StreamableMethod<Client204Response>;
}

export interface Language {
  post(options?: LanguageParameters): StreamableMethod<Language204Response>;
}

export interface JsonAndClient {
  post(
    options?: JsonAndClientParameters,
  ): StreamableMethod<JsonAndClient204Response>;
}

export interface Operation {
  post(options?: OperationParameters): StreamableMethod<Operation204Response>;
}

export interface Parameter {
  post(options: ParameterParameters): StreamableMethod<Parameter204Response>;
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

export type ProjectedNameContext = Client & {
  path: Routes;
};
