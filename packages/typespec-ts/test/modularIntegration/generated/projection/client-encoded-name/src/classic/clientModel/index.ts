// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NameAndEncodedNameClientContext } from "../../api/NameAndEncodedNameContext.js";
import { ClientModel, TSModel } from "../../models/models.js";
import { client, language } from "../../api/clientModel/index.js";
import {
  ClientModelClientOptions,
  ClientModelLanguageOptions,
} from "../../models/options.js";

export interface ClientModelOperations {
  client: (
    body: ClientModel,
    options?: ClientModelClientOptions,
  ) => Promise<void>;
  language: (
    body: TSModel,
    options?: ClientModelLanguageOptions,
  ) => Promise<void>;
}

export function getClientModel(context: NameAndEncodedNameClientContext) {
  return {
    client: (body: ClientModel, options?: ClientModelClientOptions) =>
      client(context, body, options),
    language: (body: TSModel, options?: ClientModelLanguageOptions) =>
      language(context, body, options),
  };
}

export function getClientModelOperations(
  context: NameAndEncodedNameClientContext,
): ClientModelOperations {
  return {
    ...getClientModel(context),
  };
}
