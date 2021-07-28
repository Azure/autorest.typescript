import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AuthorizationOperations } from "../operationsInterfaces";
import { ManagementLockClientContext } from "../managementLockClientContext";
import { Operation, AuthorizationOperationsListOptionalParams } from "../models";
/** Class representing a AuthorizationOperations. */
export declare class AuthorizationOperationsImpl implements AuthorizationOperations {
    private readonly client;
    /**
     * Initialize a new instance of the class AuthorizationOperations class.
     * @param client Reference to the service client
     */
    constructor(client: ManagementLockClientContext);
    /**
     * Lists all of the available Microsoft.Authorization REST API operations.
     * @param options The options parameters.
     */
    list(options?: AuthorizationOperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all of the available Microsoft.Authorization REST API operations.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=authorizationOperations.d.ts.map