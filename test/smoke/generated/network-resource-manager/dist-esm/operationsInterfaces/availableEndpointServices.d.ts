import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EndpointServiceResult, AvailableEndpointServicesListOptionalParams } from "../models";
/** Interface representing a AvailableEndpointServices. */
export interface AvailableEndpointServices {
    /**
     * List what values of endpoint services are available for use.
     * @param location The location to check available endpoint services.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailableEndpointServicesListOptionalParams): PagedAsyncIterableIterator<EndpointServiceResult>;
}
//# sourceMappingURL=availableEndpointServices.d.ts.map