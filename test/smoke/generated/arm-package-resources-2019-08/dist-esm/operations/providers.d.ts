import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Providers } from "../operationsInterfaces";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { Provider, ProvidersListOptionalParams, ProvidersListAtTenantScopeOptionalParams, ProvidersUnregisterOptionalParams, ProvidersUnregisterResponse, ProvidersRegisterOptionalParams, ProvidersRegisterResponse, ProvidersGetOptionalParams, ProvidersGetResponse, ProvidersGetAtTenantScopeOptionalParams, ProvidersGetAtTenantScopeResponse } from "../models";
/** Class representing a Providers. */
export declare class ProvidersImpl implements Providers {
    private readonly client;
    /**
     * Initialize a new instance of the class Providers class.
     * @param client Reference to the service client
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Gets all resource providers for a subscription.
     * @param options The options parameters.
     */
    list(options?: ProvidersListOptionalParams): PagedAsyncIterableIterator<Provider>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all resource providers for the tenant.
     * @param options The options parameters.
     */
    listAtTenantScope(options?: ProvidersListAtTenantScopeOptionalParams): PagedAsyncIterableIterator<Provider>;
    private listAtTenantScopePagingPage;
    private listAtTenantScopePagingAll;
    /**
     * Unregisters a subscription from a resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider to unregister.
     * @param options The options parameters.
     */
    unregister(resourceProviderNamespace: string, options?: ProvidersUnregisterOptionalParams): Promise<ProvidersUnregisterResponse>;
    /**
     * Registers a subscription with a resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider to register.
     * @param options The options parameters.
     */
    register(resourceProviderNamespace: string, options?: ProvidersRegisterOptionalParams): Promise<ProvidersRegisterResponse>;
    /**
     * Gets all resource providers for a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets all resource providers for the tenant.
     * @param options The options parameters.
     */
    private _listAtTenantScope;
    /**
     * Gets the specified resource provider.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param options The options parameters.
     */
    get(resourceProviderNamespace: string, options?: ProvidersGetOptionalParams): Promise<ProvidersGetResponse>;
    /**
     * Gets the specified resource provider at the tenant level.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param options The options parameters.
     */
    getAtTenantScope(resourceProviderNamespace: string, options?: ProvidersGetAtTenantScopeOptionalParams): Promise<ProvidersGetAtTenantScopeResponse>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListAtTenantScopeNext
     * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
     * @param options The options parameters.
     */
    private _listAtTenantScopeNext;
}
//# sourceMappingURL=providers.d.ts.map