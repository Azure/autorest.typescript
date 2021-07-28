import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationStackResource, ProviderGetAvailableStacksOptionalParams, CsmOperationDescription, ProviderListOperationsOptionalParams, ProviderGetAvailableStacksOnPremOptionalParams } from "../models";
/** Interface representing a Provider. */
export interface Provider {
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacks(options?: ProviderGetAvailableStacksOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
    /**
     * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes
     * resource metric definitions
     * @param options The options parameters.
     */
    listOperations(options?: ProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
    /**
     * Description for Get available application frameworks and their versions
     * @param options The options parameters.
     */
    listAvailableStacksOnPrem(options?: ProviderGetAvailableStacksOnPremOptionalParams): PagedAsyncIterableIterator<ApplicationStackResource>;
}
//# sourceMappingURL=provider.d.ts.map