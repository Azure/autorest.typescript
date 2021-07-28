import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usages } from "../operationsInterfaces";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { Usage, UsagesListByLocationOptionalParams } from "../models";
/** Class representing a Usages. */
export declare class UsagesImpl implements Usages {
    private readonly client;
    /**
     * Initialize a new instance of the class Usages class.
     * @param client Reference to the service client
     */
    constructor(client: StorageManagementClientContext);
    /**
     * Gets the current usage count and the limit for the resources of the location under the subscription.
     * @param location The location of the Azure Storage resource.
     * @param options The options parameters.
     */
    listByLocation(location: string, options?: UsagesListByLocationOptionalParams): PagedAsyncIterableIterator<Usage>;
    private listByLocationPagingPage;
    private listByLocationPagingAll;
    /**
     * Gets the current usage count and the limit for the resources of the location under the subscription.
     * @param location The location of the Azure Storage resource.
     * @param options The options parameters.
     */
    private _listByLocation;
}
//# sourceMappingURL=usages.d.ts.map