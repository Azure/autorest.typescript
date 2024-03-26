// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listCollections } from "../../api/confidentialLedger/index.js";
export function getConfidentialLedger(context) {
    return {
        listCollections: (apiVersion, options) => listCollections(context, apiVersion, options),
    };
}
export function getConfidentialLedgerOperations(context) {
    return {
        ...getConfidentialLedger(context),
    };
}
//# sourceMappingURL=index.js.map