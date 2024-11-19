// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext } from "../../api/parametrizedHostContext.js";
import { listCollections } from "../../api/confidentialLedger/index.js";
import { Collection } from "../../models/models.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../api/options.js";

/** Interface representing a ConfidentialLedger operations. */
export interface ConfidentialLedgerOperations {
  /** Collection ids are user-created collections of ledger entries */
  listCollections: (
    options?: ConfidentialLedgerListCollectionsOptionalParams,
  ) => Promise<Collection[]>;
}

export function getConfidentialLedger(context: ParametrizedHostContext) {
  return {
    listCollections: (
      options?: ConfidentialLedgerListCollectionsOptionalParams,
    ) => listCollections(context, options),
  };
}

export function getConfidentialLedgerOperations(
  context: ParametrizedHostContext,
): ConfidentialLedgerOperations {
  return {
    ...getConfidentialLedger(context),
  };
}
