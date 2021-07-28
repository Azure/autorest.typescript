import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TenantIdDescription, TenantsListOptionalParams } from "../models";
/** Interface representing a Tenants. */
export interface Tenants {
    /**
     * Gets the tenants for your account.
     * @param options The options parameters.
     */
    list(options?: TenantsListOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
}
//# sourceMappingURL=tenants.d.ts.map