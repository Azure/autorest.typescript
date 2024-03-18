// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, edit, options = { requestOptions: {} }) {
    return context
        .path("/edits")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            model: edit["model"],
            input: edit["input"],
            instruction: edit["instruction"],
            n: edit["n"],
            temperature: edit["temperature"],
            top_p: edit["topP"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        object: result.body["object"],
        created: new Date(result.body["created"]),
        choices: result.body["choices"].map((p) => ({
            text: p["text"],
            index: p["index"],
            finishReason: p["finish_reason"],
        })),
        usage: {
            promptTokens: result.body.usage["prompt_tokens"],
            completionTokens: result.body.usage["completion_tokens"],
            totalTokens: result.body.usage["total_tokens"],
        },
    };
}
export async function create(context, edit, options = { requestOptions: {} }) {
    const result = await _createSend(context, edit, options);
    return _createDeserialize(result);
}
//# sourceMappingURL=index.js.map