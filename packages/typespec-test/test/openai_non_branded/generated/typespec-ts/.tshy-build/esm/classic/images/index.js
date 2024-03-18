// Licensed under the MIT license.
import { create, createEdit, createVariation } from "../../api/images/index.js";
export function getImages(context) {
    return {
        create: (image, options) => create(context, image, options),
        createEdit: (image, options) => createEdit(context, image, options),
        createVariation: (image, options) => createVariation(context, image, options),
    };
}
export function getImagesOperations(context) {
    return {
        ...getImages(context),
    };
}
//# sourceMappingURL=index.js.map