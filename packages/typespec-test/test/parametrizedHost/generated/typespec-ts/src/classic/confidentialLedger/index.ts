// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext } from "../../api/parametrizedHostContext.js";
import {
  listCollections,
  ConfidentialLedgerListCollectionsOptionalParams,
} from "../../api/confidentialLedger/index.js";
import { Collection } from "../../models/models.js";

/** Interface representing a ConfidentialLedger operations. */
export interface ConfidentialLedgerOperations {
  /** Collection ids are user-created collections of ledger entries */
  listCollections: (
    options?: ConfidentialLedgerListCollectionsOptionalParams,
  ) => Promise<Collection[]>;
}

function _getConfidentialLedger(context: ParametrizedHostContext) {
  return {
    listCollections: (
      options?: ConfidentialLedgerListCollectionsOptionalParams,
    ) => listCollections(context, options),
  };
}

export function _getConfidentialLedgerOperations(
  context: ParametrizedHostContext,
): ConfidentialLedgerOperations {
  return {
    ..._getConfidentialLedger(context),
  };
}
