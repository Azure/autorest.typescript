import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ExpressRouteServiceProviders } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { ExpressRouteServiceProvider, ExpressRouteServiceProvidersListOptionalParams } from "../models";
/** Class representing a ExpressRouteServiceProviders. */
export declare class ExpressRouteServiceProvidersImpl implements ExpressRouteServiceProviders {
    private readonly client;
    /**
     * Initialize a new instance of the class ExpressRouteServiceProviders class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the available express route service providers.
     * @param options The options parameters.
     */
    list(options?: ExpressRouteServiceProvidersListOptionalParams): PagedAsyncIterableIterator<ExpressRouteServiceProvider>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the available express route service providers.
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
//# sourceMappingURL=expressRouteServiceProviders.d.ts.map