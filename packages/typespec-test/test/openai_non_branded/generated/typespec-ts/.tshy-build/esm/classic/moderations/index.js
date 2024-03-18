// Licensed under the MIT license.
import { create } from "../../api/moderations/index.js";
export function getModerations(context) {
    return {
        create: (content, options) => create(context, content, options),
    };
}
export function getModerationsOperations(context) {
    return {
        ...getModerations(context),
    };
}
//# sourceMappingURL=index.js.map