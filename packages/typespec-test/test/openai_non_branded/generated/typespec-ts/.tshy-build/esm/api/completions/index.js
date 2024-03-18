// Licensed under the MIT license.
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, body, options = { requestOptions: {} }) {
    return context
        .path("/completions")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            model: body["model"],
            prompt: body["prompt"],
            suffix: body["suffix"],
            temperature: body["temperature"],
            top_p: body["topP"],
            n: body["n"],
            max_tokens: body["maxTokens"],
            stop: body["stop"],
            presence_penalty: body["presencePenalty"],
            frequency_penalty: body["frequencyPenalty"],
            logit_bias: body["logitBias"],
            user: body["user"],
            stream: body["stream"],
            logprobs: body["logprobs"],
            echo: body["echo"],
            best_of: body["bestOf"],
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
        created: new Date(result.body["created"]),
        model: result.body["model"],
        choices: result.body["choices"].map((p) => ({
            index: p["index"],
            text: p["text"],
            logprobs: p.logprobs === null
                ? null
                : {
                    tokens: p.logprobs["tokens"],
                    tokenLogprobs: p.logprobs["token_logprobs"],
                    topLogprobs: p.logprobs["top_logprobs"],
                    textOffset: p.logprobs["text_offset"],
                },
            finishReason: p["finish_reason"],
        })),
        usage: !result.body.usage
            ? undefined
            : {
                promptTokens: result.body.usage?.["prompt_tokens"],
                completionTokens: result.body.usage?.["completion_tokens"],
                totalTokens: result.body.usage?.["total_tokens"],
            },
    };
}
export async function create(context, body, options = { requestOptions: {} }) {
    const result = await _createSend(context, body, options);
    return _createDeserialize(result);
}
//# sourceMappingURL=index.js.map