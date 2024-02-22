// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NameAndEncodedNameClientContext } from "../../api/NameAndEncodedNameContext.js";
import {
  JsonEncodedNameModel,
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "../../models/models.js";
import {
  json,
  client,
  language,
  jsonAndClient,
} from "../../api/property/index.js";
import {
  PropertyJsonOptions,
  PropertyClientOptions,
  PropertyLanguageOptions,
  PropertyJsonAndClientOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  json: (
    body: JsonEncodedNameModel,
    options?: PropertyJsonOptions,
  ) => Promise<void>;
  client: (
    body: ClientNameModel,
    options?: PropertyClientOptions,
  ) => Promise<void>;
  language: (
    body: LanguageClientNameModel,
    options?: PropertyLanguageOptions,
  ) => Promise<void>;
  jsonAndClient: (
    body: ClientNameAndJsonEncodedNameModel,
    options?: PropertyJsonAndClientOptions,
  ) => Promise<void>;
}

export function getProperty(context: NameAndEncodedNameClientContext) {
  return {
    json: (body: JsonEncodedNameModel, options?: PropertyJsonOptions) =>
      json(context, body, options),
    client: (body: ClientNameModel, options?: PropertyClientOptions) =>
      client(context, body, options),
    language: (
      body: LanguageClientNameModel,
      options?: PropertyLanguageOptions,
    ) => language(context, body, options),
    jsonAndClient: (
      body: ClientNameAndJsonEncodedNameModel,
      options?: PropertyJsonAndClientOptions,
    ) => jsonAndClient(context, body, options),
  };
}

export function getPropertyOperations(
  context: NameAndEncodedNameClientContext,
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
