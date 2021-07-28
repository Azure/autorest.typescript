import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { UsageDef, UsageListOptionalParams } from "../models";
/** Class representing a Usage. */
export declare class UsageImpl implements Usage {
    private readonly client;
    /**
     * Initialize a new instance of the class Usage class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     * @param location The location for which resource usage is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: UsageListOptionalParams): PagedAsyncIterableIterator<UsageDef>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     * @param location The location for which resource usage is queried.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param location The location for which resource usage is queried.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=usage.d.ts.map