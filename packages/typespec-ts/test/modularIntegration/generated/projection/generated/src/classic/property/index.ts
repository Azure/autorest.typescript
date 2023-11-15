// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ProjectedNameContext } from "../../api/ProjectedNameContext.js";
import {
  JsonProjectedNameModel,
  ClientProjectedNameModel,
  LanguageProjectedNameModel,
  JsonAndClientProjectedNameModel,
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
    body: JsonProjectedNameModel,
    options?: PropertyJsonOptions
  ) => Promise<void>;
  client: (
    body: ClientProjectedNameModel,
    options?: PropertyClientOptions
  ) => Promise<void>;
  language: (
    body: LanguageProjectedNameModel,
    options?: PropertyLanguageOptions
  ) => Promise<void>;
  jsonAndClient: (
    body: JsonAndClientProjectedNameModel,
    options?: PropertyJsonAndClientOptions
  ) => Promise<void>;
}

export function getProperty(context: ProjectedNameContext) {
  return {
    json: (body: JsonProjectedNameModel, options?: PropertyJsonOptions) =>
      json(context, body, options),
    client: (body: ClientProjectedNameModel, options?: PropertyClientOptions) =>
      client(context, body, options),
    language: (
      body: LanguageProjectedNameModel,
      options?: PropertyLanguageOptions
    ) => language(context, body, options),
    jsonAndClient: (
      body: JsonAndClientProjectedNameModel,
      options?: PropertyJsonAndClientOptions
    ) => jsonAndClient(context, body, options),
  };
}

export function getPropertyOperations(
  context: ProjectedNameContext
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
