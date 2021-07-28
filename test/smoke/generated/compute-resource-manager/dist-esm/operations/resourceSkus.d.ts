import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ResourceSkus } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { ResourceSku, ResourceSkusListOptionalParams } from "../models";
/** Class representing a ResourceSkus. */
export declare class ResourceSkusImpl implements ResourceSkus {
    private readonly client;
    /**
     * Initialize a new instance of the class ResourceSkus class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
     * @param options The options parameters.
     */
    list(options?: ResourceSkusListOptionalParams): PagedAsyncIterableIterator<ResourceSku>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
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
//# sourceMappingURL=resourceSkus.d.ts.map