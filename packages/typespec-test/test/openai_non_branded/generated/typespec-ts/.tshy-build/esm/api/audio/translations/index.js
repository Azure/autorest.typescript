// Licensed under the MIT license.
import { isUnexpected, } from "../../../rest/index.js";
import { operationOptionsToRequestParameters, uint8ArrayToString, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, audio, options = { requestOptions: {} }) {
    return context
        .path("/audio/translations")
        .post({
        ...operationOptionsToRequestParameters(options),
        contentType: options.contentType ?? "multipart/form-data",
        body: {
            file: uint8ArrayToString(audio["file"], "base64"),
            model: audio["model"],
            prompt: audio["prompt"],
            response_format: audio["responseFormat"],
            temperature: audio["temperature"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        text: result.body["text"],
    };
}
export async function create(context, audio, options = { requestOptions: {} }) {
    const result = await _createSend(context, audio, options);
    return _createDeserialize(result);
}
//# sourceMappingURL=index.js.map