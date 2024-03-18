// Licensed under the MIT license.
import { create } from "../../api/completions/index.js";
export function getCompletions(context) {
    return {
        create: (body, options) => create(context, body, options),
    };
}
export function getCompletionsOperations(context) {
    return {
        ...getCompletions(context),
    };
}
//# sourceMappingURL=index.js.map