// Licensed under the MIT license.
import { create } from "../../api/edits/index.js";
export function getEdits(context) {
    return {
        create: (edit, options) => create(context, edit, options),
    };
}
export function getEditsOperations(context) {
    return {
        ...getEdits(context),
    };
}
//# sourceMappingURL=index.js.map