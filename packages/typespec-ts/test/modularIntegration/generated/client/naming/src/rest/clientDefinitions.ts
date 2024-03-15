// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationParameters,
  ParameterParameters,
  PropertyClientParameters,
  PropertyLanguageParameters,
  PropertyCompatibleWithEncodedNameParameters,
  HeaderRequestParameters,
  HeaderResponseParameters,
  ModelClientParameters,
  ModelLanguageParameters,
} from "./parameters.js";
import {
  Operation204Response,
  Parameter204Response,
  PropertyClient204Response,
  PropertyLanguage204Response,
  PropertyCompatibleWithEncodedName204Response,
  HeaderRequest204Response,
  HeaderResponse204Response,
  ModelClient204Response,
  ModelLanguage204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Operation {
  post(options?: OperationParameters): StreamableMethod<Operation204Response>;
}

export interface Parameter {
  post(options: ParameterParameters): StreamableMethod<Parameter204Response>;
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

export interface PropertyCompatibleWithEncodedName {
  post(
    options?: PropertyCompatibleWithEncodedNameParameters,
  ): StreamableMethod<PropertyCompatibleWithEncodedName204Response>;
}

export interface HeaderRequest {
  post(
    options: HeaderRequestParameters,
  ): StreamableMethod<HeaderRequest204Response>;
  get(
    options?: HeaderResponseParameters,
  ): StreamableMethod<HeaderResponse204Response>;
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
  /** Resource for '/client/naming/operation' has methods for the following verbs: post */
  (path: "/client/naming/operation"): Operation;
  /** Resource for '/client/naming/parameter' has methods for the following verbs: post */
  (path: "/client/naming/parameter"): Parameter;
  /** Resource for '/client/naming/property/client' has methods for the following verbs: post */
  (path: "/client/naming/property/client"): PropertyClient;
  /** Resource for '/client/naming/property/language' has methods for the following verbs: post */
  (path: "/client/naming/property/language"): PropertyLanguage;
  /** Resource for '/client/naming/property/compatible-with-encoded-name' has methods for the following verbs: post */
  (
    path: "/client/naming/property/compatible-with-encoded-name",
  ): PropertyCompatibleWithEncodedName;
  /** Resource for '/client/naming/header' has methods for the following verbs: post, get */
  (path: "/client/naming/header"): HeaderRequest;
  /** Resource for '/client/naming/model/client' has methods for the following verbs: post */
  (path: "/client/naming/model/client"): ModelClient;
  /** Resource for '/client/naming/model/language' has methods for the following verbs: post */
  (path: "/client/naming/model/language"): ModelLanguage;
}

export type NamingContext = Client & {
  path: Routes;
};
