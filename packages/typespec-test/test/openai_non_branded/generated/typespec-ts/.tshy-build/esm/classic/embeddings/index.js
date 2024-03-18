// Licensed under the MIT license.
import { create } from "../../api/embeddings/index.js";
export function getEmbeddings(context) {
    return {
        create: (embedding, options) => create(context, embedding, options),
    };
}
export function getEmbeddingsOperations(context) {
    return {
        ...getEmbeddings(context),
    };
}
//# sourceMappingURL=index.js.map