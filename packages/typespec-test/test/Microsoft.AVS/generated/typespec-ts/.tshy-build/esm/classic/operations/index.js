// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { list } from "../../api/operations/index.js";
export function getOperations(context) {
    return {
        list: (options) => list(context, options),
    };
}
export function getOperationsOperations(context) {
    return {
        ...getOperations(context),
    };
}
//# sourceMappingURL=index.js.map