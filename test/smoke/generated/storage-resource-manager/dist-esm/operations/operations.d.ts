import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { Operation, OperationsListOptionalParams } from "../models";
/** Class representing a Operations. */
export declare class OperationsImpl implements Operations {
    private readonly client;
    /**
     * Initialize a new instance of the class Operations class.
     * @param client Reference to the service client
     */
    constructor(client: StorageManagementClientContext);
    /**
     * Lists all of the available Storage Rest API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all of the available Storage Rest API operations.
     * @param options The options parameters.
     */
    private _list;
}
//# sourceMappingURL=operations.d.ts.map