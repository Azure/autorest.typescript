// Licensed under the MIT license.
import { getChatCompletionsOperations, } from "./completions/index.js";
export function getChatOperations(context) {
    return {
        completions: getChatCompletionsOperations(context),
    };
}
//# sourceMappingURL=index.js.map