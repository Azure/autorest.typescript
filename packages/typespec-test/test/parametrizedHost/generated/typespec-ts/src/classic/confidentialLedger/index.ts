// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParametrizedHostContext } from "../../api/parametrizedHostContext.js";
import { listCollections } from "../../api/confidentialLedger/operations.js";
import { ConfidentialLedgerListCollectionsOptionalParams } from "../../api/confidentialLedger/options.js";
import { ConfidentialLedgerListCollectionsResponse } from "../../models/models.js";

/** Interface representing a ConfidentialLedger operations. */
export interface ConfidentialLedgerOperations {
  /** Collection ids are user-created collections of ledger entries */
  listCollections: (
    options?: ConfidentialLedgerListCollectionsOptionalParams,
  ) => Promise<ConfidentialLedgerListCollectionsResponse>;
}

function _getConfidentialLedger(context: ParametrizedHostContext) {
  return {
    listCollections: (options?: ConfidentialLedgerListCollectionsOptionalParams) =>
      listCollections(context, options),
  };
}

export function _getConfidentialLedgerOperations(
  context: ParametrizedHostContext,
): ConfidentialLedgerOperations {
  return {
    ..._getConfidentialLedger(context),
  };
}
