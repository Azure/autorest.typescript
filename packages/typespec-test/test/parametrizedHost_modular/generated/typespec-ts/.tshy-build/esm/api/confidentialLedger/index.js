// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listCollectionsSend(context, apiVersion, options = { requestOptions: {} }) {
    return context
        .path("/app/collections")
        .get({
        ...operationOptionsToRequestParameters(options),
        queryParameters: { "api-version": apiVersion },
    });
}
export async function _listCollectionsDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return result.body === undefined
        ? result.body
        : result.body.map((p) => ({ collectionId: p["collectionId"] }));
}
/** Collection ids are user-created collections of ledger entries */
export async function listCollections(context, apiVersion, options = { requestOptions: {} }) {
    const result = await _listCollectionsSend(context, apiVersion, options);
    return _listCollectionsDeserialize(result);
}
//# sourceMappingURL=index.js.map