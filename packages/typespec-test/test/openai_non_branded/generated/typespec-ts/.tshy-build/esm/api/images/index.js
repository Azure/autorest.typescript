// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, stringToUint8Array, uint8ArrayToString, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, image, options = { requestOptions: {} }) {
    return context
        .path("/images/generations")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            prompt: image["prompt"],
            n: image["n"],
            size: image["size"],
            response_format: image["responseFormat"],
            user: image["user"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        created: new Date(result.body["created"]),
        data: result.body["data"].map((p) => ({
            url: p["url"],
            b64Json: typeof p["b64_json"] === "string"
                ? stringToUint8Array(p["b64_json"], "base64")
                : p["b64_json"],
        })),
    };
}
export async function create(context, image, options = { requestOptions: {} }) {
    const result = await _createSend(context, image, options);
    return _createDeserialize(result);
}
export function _createEditSend(context, image, options = { requestOptions: {} }) {
    return context
        .path("/images/edits")
        .post({
        ...operationOptionsToRequestParameters(options),
        contentType: options.contentType ?? "multipart/form-data",
        body: {
            prompt: image["prompt"],
            image: uint8ArrayToString(image["image"], "base64"),
            mask: image["mask"] !== undefined
                ? uint8ArrayToString(image["mask"], "base64")
                : undefined,
            n: image["n"],
            size: image["size"],
            response_format: image["responseFormat"],
            user: image["user"],
        },
    });
}
export async function _createEditDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        created: new Date(result.body["created"]),
        data: result.body["data"].map((p) => ({
            url: p["url"],
            b64Json: typeof p["b64_json"] === "string"
                ? stringToUint8Array(p["b64_json"], "base64")
                : p["b64_json"],
        })),
    };
}
export async function createEdit(context, image, options = { requestOptions: {} }) {
    const result = await _createEditSend(context, image, options);
    return _createEditDeserialize(result);
}
export function _createVariationSend(context, image, options = { requestOptions: {} }) {
    return context
        .path("/images/variations")
        .post({
        ...operationOptionsToRequestParameters(options),
        contentType: options.contentType ?? "multipart/form-data",
        body: {
            image: uint8ArrayToString(image["image"], "base64"),
            n: image["n"],
            size: image["size"],
            response_format: image["responseFormat"],
            user: image["user"],
        },
    });
}
export async function _createVariationDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        created: new Date(result.body["created"]),
        data: result.body["data"].map((p) => ({
            url: p["url"],
            b64Json: typeof p["b64_json"] === "string"
                ? stringToUint8Array(p["b64_json"], "base64")
                : p["b64_json"],
        })),
    };
}
export async function createVariation(context, image, options = { requestOptions: {} }) {
    const result = await _createVariationSend(context, image, options);
    return _createVariationDeserialize(result);
}
//# sourceMappingURL=index.js.map