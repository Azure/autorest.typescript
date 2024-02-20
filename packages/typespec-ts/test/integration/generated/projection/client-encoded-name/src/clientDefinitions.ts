// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationParameters,
  ParameterParameters,
  HeaderParameters,
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
  Header204Response,
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

export interface Header {
  post(options: HeaderParameters): StreamableMethod<Header204Response>;
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
  /** Resource for '/projection/client-name-and-encoded-name/operation' has methods for the following verbs: post */
  (path: "/projection/client-name-and-encoded-name/operation"): Operation;
  /** Resource for '/projection/client-name-and-encoded-name/parameter' has methods for the following verbs: post */
  (path: "/projection/client-name-and-encoded-name/parameter"): Parameter;
  /** Resource for '/projection/client-name-and-encoded-name/header' has methods for the following verbs: post */
  (path: "/projection/client-name-and-encoded-name/header"): Header;
  /** Resource for '/projection/client-name-and-encoded-name/property/json' has methods for the following verbs: post */
  (
    path: "/projection/client-name-and-encoded-name/property/json",
  ): PropertyJson;
  /** Resource for '/projection/client-name-and-encoded-name/property/client' has methods for the following verbs: post */
  (
    path: "/projection/client-name-and-encoded-name/property/client",
  ): PropertyClient;
  /** Resource for '/projection/client-name-and-encoded-name/property/language' has methods for the following verbs: post */
  (
    path: "/projection/client-name-and-encoded-name/property/language",
  ): PropertyLanguage;
  /** Resource for '/projection/client-name-and-encoded-name/property/json-and-client' has methods for the following verbs: post */
  (
    path: "/projection/client-name-and-encoded-name/property/json-and-client",
  ): PropertyJsonAndClient;
  /** Resource for '/projection/client-name-and-encoded-name/model/client' has methods for the following verbs: post */
  (path: "/projection/client-name-and-encoded-name/model/client"): ModelClient;
  /** Resource for '/projection/client-name-and-encoded-name/model/language' has methods for the following verbs: post */
  (
    path: "/projection/client-name-and-encoded-name/model/language",
  ): ModelLanguage;
}

export type ClientEncodedNameClient = Client & {
  path: Routes;
};
