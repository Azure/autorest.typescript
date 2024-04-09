// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ParametrizedHostContext } from "../../api/ParametrizedHostContext.js";
import { Collection } from "../../models/models.js";
import { listCollections } from "../../api/confidentialLedger/index.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../models/options.js";

export interface ConfidentialLedgerOperations {
  listCollections: (
    apiVersion: string,
    options?: ConfidentialLedgerListCollectionsOptionalParams,
  ) => Promise<Collection[]>;
}

export function getConfidentialLedger(context: ParametrizedHostContext) {
  return {
    listCollections: (
      apiVersion: string,
      options?: ConfidentialLedgerListCollectionsOptionalParams,
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
