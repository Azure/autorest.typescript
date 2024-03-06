// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NamingContext } from "../../api/NamingContext.js";
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

export function getClientModel(context: NamingContext) {
  return {
    client: (body: ClientModel, options?: ClientModelClientOptions) =>
      client(context, body, options),
    language: (body: TSModel, options?: ClientModelLanguageOptions) =>
      language(context, body, options),
  };
}

export function getClientModelOperations(
  context: NamingContext,
): ClientModelOperations {
  return {
    ...getClientModel(context),
  };
}
