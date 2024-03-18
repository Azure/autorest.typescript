// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, uint8ArrayToString, createRestError, } from "@typespec/ts-http-runtime";
export function _listSend(context, options = { requestOptions: {} }) {
    return context
        .path("/files")
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
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            statusDetails: p["status_details"],
        })),
    };
}
export async function list(context, options = { requestOptions: {} }) {
    const result = await _listSend(context, options);
    return _listDeserialize(result);
}
export function _createSend(context, file, options = { requestOptions: {} }) {
    return context
        .path("/files")
        .post({
        ...operationOptionsToRequestParameters(options),
        contentType: options.contentType ?? "multipart/form-data",
        body: {
            file: uint8ArrayToString(file["file"], "base64"),
            purpose: file["purpose"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        bytes: result.body["bytes"],
        createdAt: new Date(result.body["createdAt"]),
        filename: result.body["filename"],
        purpose: result.body["purpose"],
        status: result.body["status"],
        statusDetails: result.body["status_details"],
    };
}
export async function create(context, file, options = { requestOptions: {} }) {
    const result = await _createSend(context, file, options);
    return _createDeserialize(result);
}
export function _retrieveSend(context, fileId, options = { requestOptions: {} }) {
    return context
        .path("/files/files/{file_id}", fileId)
        .post({ ...operationOptionsToRequestParameters(options) });
}
export async function _retrieveDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        bytes: result.body["bytes"],
        createdAt: new Date(result.body["createdAt"]),
        filename: result.body["filename"],
        purpose: result.body["purpose"],
        status: result.body["status"],
        statusDetails: result.body["status_details"],
    };
}
export async function retrieve(context, fileId, options = { requestOptions: {} }) {
    const result = await _retrieveSend(context, fileId, options);
    return _retrieveDeserialize(result);
}
export function _deleteOperationSend(context, fileId, options = { requestOptions: {} }) {
    return context
        .path("/files/files/{file_id}", fileId)
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
export async function deleteOperation(context, fileId, options = { requestOptions: {} }) {
    const result = await _deleteOperationSend(context, fileId, options);
    return _deleteOperationDeserialize(result);
}
export function _downloadSend(context, fileId, options = { requestOptions: {} }) {
    return context
        .path("/files/files/{file_id}/content", fileId)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _downloadDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return result.body;
}
export async function download(context, fileId, options = { requestOptions: {} }) {
    const result = await _downloadSend(context, fileId, options);
    return _downloadDeserialize(result);
}
//# sourceMappingURL=index.js.map