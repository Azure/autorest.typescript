// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ParametrizedHostContext } from "../../api/ParametrizedHostContext.js";
import { Collection } from "../../models/models.js";
import { listCollections } from "../../api/confidentialLedger/index.js";
import { ConfidentialLedgerListCollectionsOptions } from "../../models/options.js";

export interface ConfidentialLedgerOperations {
  listCollections: (
    apiVersion: string,
    options?: ConfidentialLedgerListCollectionsOptions,
  ) => Promise<Collection[]>;
}

export function getConfidentialLedger(context: ParametrizedHostContext) {
  return {
    listCollections: (
      apiVersion: string,
      options?: ConfidentialLedgerListCollectionsOptions,
    ) => listCollections(context, apiVersion, options),
  };
}

export function getConfidentialLedgerOperations(
  context: ParametrizedHostContext,
): ConfidentialLedgerOperations {
  return {
    ...getConfidentialLedger(context),
  };
}
