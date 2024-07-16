import { AVSContext } from "../../api/aVSContext.js";
import { Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";
/** Interface representing a Operations operations. */
export interface OperationsOperations {
    /** List the operations for the provider */
    list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation>;
}
export declare function getOperations(context: AVSContext): {
    list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation, Operation[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getOperationsOperations(context: AVSContext): OperationsOperations;
//# sourceMappingURL=index.d.ts.map