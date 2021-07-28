import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operation, AuthorizationOperationsListOptionalParams } from "../models";
/** Interface representing a AuthorizationOperations. */
export interface AuthorizationOperations {
    /**
     * Lists all of the available Microsoft.Authorization REST API operations.
     * @param options The options parameters.
     */
    list(options?: AuthorizationOperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}
//# sourceMappingURL=authorizationOperations.d.ts.map