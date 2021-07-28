import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Provider } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { ApplicationStackResource, ProviderGetAvailableStacksOptionalParams, CsmOperationDescription, ProviderListOperationsOptionalParams, ProviderGetAvailableStacksOnPremOptionalParams } from "../models";
/** Class representing a Provider. */
export declare class ProviderImpl implements Provider {
    private readonly client;
    /**
     * Initialize a new instance of the class Provider class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacks(options?: ProviderGetAvailableStacksOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
    private getAvailableStacksPagingPage;
    private getAvailableStacksPagingAll;
    /**
     * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes
     * resource metric definitions
     * @param options The options parameters.
     */
    listOperations(options?: ProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
    private listOperationsPagingPage;
    private listOperationsPagingAll;
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacksOnPrem(options?: ProviderGetAvailableStacksOnPremOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
    private getAvailableStacksOnPremPagingPage;
    private getAvailableStacksOnPremPagingAll;
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    private _getAvailableStacks;
    /**
     * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes
     * resource metric definitions
     * @param options The options parameters.
     */
    private _listOperations;
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    private _getAvailableStacksOnPrem;
    /**
     * GetAvailableStacksNext
     * @param nextLink The nextLink from the previous successful call to the GetAvailableStacks method.
     * @param options The options parameters.
     */
    private _getAvailableStacksNext;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    private _listOperationsNext;
    /**
     * GetAvailableStacksOnPremNext
     * @param nextLink The nextLink from the previous successful call to the GetAvailableStacksOnPrem
     *                 method.
     * @param options The options parameters.
     */
    private _getAvailableStacksOnPremNext;
}
//# sourceMappingURL=provider.d.ts.map