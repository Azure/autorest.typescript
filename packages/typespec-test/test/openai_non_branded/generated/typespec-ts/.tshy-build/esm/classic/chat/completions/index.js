// Licensed under the MIT license.
import { create } from "../../../api/chat/completions/index.js";
export function getChatCompletions(context) {
    return {
        create: (body, options) => create(context, body, options),
    };
}
export function getChatCompletionsOperations(context) {
    return {
        ...getChatCompletions(context),
    };
}
//# sourceMappingURL=index.js.map