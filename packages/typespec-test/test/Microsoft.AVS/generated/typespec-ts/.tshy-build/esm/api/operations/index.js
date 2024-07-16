// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listSend(context, options = { requestOptions: {} }) {
    return context
        .path("/providers/Microsoft.AVS/operations")
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        value: result.body["value"].map((p) => {
            return {
                name: p["name"],
                isDataAction: p["isDataAction"],
                display: !p.display
                    ? undefined
                    : {
                        provider: p.display?.["provider"],
                        resource: p.display?.["resource"],
                        operation: p.display?.["operation"],
                        description: p.display?.["description"],
                    },
                origin: p["origin"],
                actionType: p["actionType"],
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List the operations for the provider */
export function list(context, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listSend(context, options), _listDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
//# sourceMappingURL=index.js.map