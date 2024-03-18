// Licensed under the MIT license.
import { list, create, retrieve, deleteOperation, download, } from "../../api/files/index.js";
export function getFiles(context) {
    return {
        list: (options) => list(context, options),
        create: (file, options) => create(context, file, options),
        retrieve: (fileId, options) => retrieve(context, fileId, options),
        deleteOperation: (fileId, options) => deleteOperation(context, fileId, options),
        download: (fileId, options) => download(context, fileId, options),
    };
}
export function getFilesOperations(context) {
    return {
        ...getFiles(context),
    };
}
//# sourceMappingURL=index.js.map