// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, embedding, options = { requestOptions: {} }) {
    return context
        .path("/embeddings")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            model: embedding["model"],
            input: embedding["input"],
            user: embedding["user"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        object: result.body["object"],
        model: result.body["model"],
        data: result.body["data"].map((p) => ({
            index: p["index"],
            object: p["object"],
            embedding: p["embedding"],
        })),
        usage: {
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
        },
    };
}
export async function create(context, embedding, options = { requestOptions: {} }) {
    const result = await _createSend(context, embedding, options);
    return _createDeserialize(result);
}
//# sourceMappingURL=index.js.map