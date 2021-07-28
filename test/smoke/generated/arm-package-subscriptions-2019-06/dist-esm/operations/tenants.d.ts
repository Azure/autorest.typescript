import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Tenants } from "../operationsInterfaces";
import { SubscriptionClientContext } from "../subscriptionClientContext";
import { TenantIdDescription, TenantsListOptionalParams } from "../models";
/** Class representing a Tenants. */
export declare class TenantsImpl implements Tenants {
    private readonly client;
    /**
     * Initialize a new instance of the class Tenants class.
     * @param client Reference to the service client
     */
    constructor(client: SubscriptionClientContext);
    /**
     * Gets the tenants for your account.
     * @param options The options parameters.
     */
    list(options?: TenantsListOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets the tenants for your account.
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
//# sourceMappingURL=tenants.d.ts.map