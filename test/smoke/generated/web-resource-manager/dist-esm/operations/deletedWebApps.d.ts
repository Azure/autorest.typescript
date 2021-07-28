import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeletedWebApps } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { DeletedSite, DeletedWebAppsListOptionalParams, DeletedWebAppsListByLocationOptionalParams, DeletedWebAppsGetDeletedWebAppByLocationOptionalParams, DeletedWebAppsGetDeletedWebAppByLocationResponse } from "../models";
/** Class representing a DeletedWebApps. */
export declare class DeletedWebAppsImpl implements DeletedWebApps {
    private readonly client;
    /**
     * Initialize a new instance of the class DeletedWebApps class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get all deleted apps for a subscription.
     * @param options The options parameters.
     */
    list(options?: DeletedWebAppsListOptionalParams): PagedAsyncIterableIterator<DeletedSite>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Get all deleted apps for a subscription at location
     * @param location
     * @param options The options parameters.
     */
    listByLocation(location: string, options?: DeletedWebAppsListByLocationOptionalParams): PagedAsyncIterableIterator<DeletedSite>;
    private listByLocationPagingPage;
    private listByLocationPagingAll;
    /**
     * Description for Get all deleted apps for a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Get all deleted apps for a subscription at location
     * @param location
     * @param options The options parameters.
     */
    private _listByLocation;
    /**
     * Description for Get deleted app for a subscription at location.
     * @param location
     * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
     * @param options The options parameters.
     */
    getDeletedWebAppByLocation(location: string, deletedSiteId: string, options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByLocationNext
     * @param location
     * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
     * @param options The options parameters.
     */
    private _listByLocationNext;
}
//# sourceMappingURL=deletedWebApps.d.ts.map