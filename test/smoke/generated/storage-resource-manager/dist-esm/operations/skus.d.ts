import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Skus } from "../operationsInterfaces";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { SkuInformation, SkusListOptionalParams } from "../models";
/** Class representing a Skus. */
export declare class SkusImpl implements Skus {
    private readonly client;
    /**
     * Initialize a new instance of the class Skus class.
     * @param client Reference to the service client
     */
    constructor(client: StorageManagementClientContext);
    /**
     * Lists the available SKUs supported by Microsoft.Storage for given subscription.
     * @param options The options parameters.
     */
    list(options?: SkusListOptionalParams): PagedAsyncIterableIterator<SkuInformation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists the available SKUs supported by Microsoft.Storage for given subscription.
     * @param options The options parameters.
     */
    private _list;
}
//# sourceMappingURL=skus.d.ts.map