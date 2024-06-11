import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetwork } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworksGetOptionalParams, WorkloadNetworksListByPrivateCloudOptionalParams } from "../../models/options.js";
export interface WorkloadNetworksOperations {
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams) => Promise<WorkloadNetwork>;
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<WorkloadNetwork>;
}
export declare function getWorkloadNetworks(context: AVSContext): {
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams) => Promise<WorkloadNetwork>;
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<WorkloadNetwork, WorkloadNetwork[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getWorkloadNetworksOperations(context: AVSContext): WorkloadNetworksOperations;
//# sourceMappingURL=index.d.ts.map