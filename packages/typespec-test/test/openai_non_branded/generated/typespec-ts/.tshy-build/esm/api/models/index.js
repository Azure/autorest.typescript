// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@typespec/ts-http-runtime";
export function _listSend(context, options = { requestOptions: {} }) {
    return context
        .path("/models")
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        object: result.body["object"],
        data: result.body["data"].map((p) => ({
            id: p["id"],
            object: p["object"],
            created: new Date(p["created"]),
            ownedBy: p["owned_by"],
        })),
    };
}
export async function list(context, options = { requestOptions: {} }) {
    const result = await _listSend(context, options);
    return _listDeserialize(result);
}
export function _retrieveSend(context, model, options = { requestOptions: {} }) {
    return context
        .path("/models/{model}", model)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _retrieveDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        created: new Date(result.body["created"]),
        ownedBy: result.body["owned_by"],
    };
}
export async function retrieve(context, model, options = { requestOptions: {} }) {
    const result = await _retrieveSend(context, model, options);
    return _retrieveDeserialize(result);
}
export function _deleteOperationSend(context, model, options = { requestOptions: {} }) {
    return context
        .path("/models/{model}", model)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _deleteOperationDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        deleted: result.body["deleted"],
    };
}
export async function deleteOperation(context, model, options = { requestOptions: {} }) {
    const result = await _deleteOperationSend(context, model, options);
    return _deleteOperationDeserialize(result);
}
//# sourceMappingURL=index.js.map