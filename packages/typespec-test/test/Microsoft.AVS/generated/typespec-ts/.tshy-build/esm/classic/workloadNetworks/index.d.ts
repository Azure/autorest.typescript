import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetwork } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworksGetOptionalParams, WorkloadNetworksListByPrivateCloudOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
    /** Get a WorkloadNetwork */
    get: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams) => Promise<WorkloadNetwork>;
    /** List WorkloadNetwork resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<WorkloadNetwork>;
}
export declare function getWorkloadNetworks(context: AVSContext, subscriptionId: string): {
    get: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams) => Promise<WorkloadNetwork>;
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<WorkloadNetwork, WorkloadNetwork[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getWorkloadNetworksOperations(context: AVSContext, subscriptionId: string): WorkloadNetworksOperations;
//# sourceMappingURL=index.d.ts.map