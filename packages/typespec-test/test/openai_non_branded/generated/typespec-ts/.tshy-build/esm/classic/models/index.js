// Licensed under the MIT license.
import { list, retrieve, deleteOperation } from "../../api/models/index.js";
export function getModels(context) {
    return {
        list: (options) => list(context, options),
        retrieve: (model, options) => retrieve(context, model, options),
        deleteOperation: (model, options) => deleteOperation(context, model, options),
    };
}
export function getModelsOperations(context) {
    return {
        ...getModels(context),
    };
}
//# sourceMappingURL=index.js.map