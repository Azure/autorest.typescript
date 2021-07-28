import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineSizes } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { VirtualMachineSize, VirtualMachineSizesListOptionalParams } from "../models";
/** Class representing a VirtualMachineSizes. */
export declare class VirtualMachineSizesImpl implements VirtualMachineSizes {
    private readonly client;
    /**
     * Initialize a new instance of the class VirtualMachineSizes class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * This API is deprecated. Use [Resources
     * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: VirtualMachineSizesListOptionalParams): PagedAsyncIterableIterator<VirtualMachineSize>;
    private listPagingPage;
    private listPagingAll;
    /**
     * This API is deprecated. Use [Resources
     * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param options The options parameters.
     */
    private _list;
}
//# sourceMappingURL=virtualMachineSizes.d.ts.map