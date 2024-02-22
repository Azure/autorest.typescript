// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NameAndEncodedNameClientContext } from "../../api/NameAndEncodedNameContext.js";
import { ClientModel, TSModel } from "../../models/models.js";
import { client, language } from "../../api/model/index.js";
import {
  ModelClientOptions,
  ModelLanguageOptions,
} from "../../models/options.js";

export interface ModelOperations {
  client: (body: ClientModel, options?: ModelClientOptions) => Promise<void>;
  language: (body: TSModel, options?: ModelLanguageOptions) => Promise<void>;
}

export function getModel(context: NameAndEncodedNameClientContext) {
  return {
    client: (body: ClientModel, options?: ModelClientOptions) =>
      client(context, body, options),
    language: (body: TSModel, options?: ModelLanguageOptions) =>
      language(context, body, options),
  };
}

export function getModelOperations(
  context: NameAndEncodedNameClientContext,
): ModelOperations {
  return {
    ...getModel(context),
  };
}
