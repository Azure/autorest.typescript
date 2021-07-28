import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { ComputeOperationValue, OperationsListOptionalParams } from "../models";
/** Class representing a Operations. */
export declare class OperationsImpl implements Operations {
    private readonly client;
    /**
     * Initialize a new instance of the class Operations class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets a list of compute operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<ComputeOperationValue>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets a list of compute operations.
     * @param options The options parameters.
     */
    private _list;
}
//# sourceMappingURL=operations.d.ts.map