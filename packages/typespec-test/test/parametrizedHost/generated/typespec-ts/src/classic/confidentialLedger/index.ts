// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ParametrizedHostContext } from "../../api/parametrizedHostContext.js";
import { Collection } from "../../models/models.js";
import { listCollections } from "../../api/confidentialLedger/index.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../models/options.js";

/** Interface representing a ConfidentialLedger operations. */
export interface ConfidentialLedgerOperations {
  /** Collection ids are user-created collections of ledger entries */
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
