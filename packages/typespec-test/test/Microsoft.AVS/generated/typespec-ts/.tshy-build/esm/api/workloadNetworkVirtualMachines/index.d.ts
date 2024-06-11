import { WorkloadNetworkVirtualMachineListResult, WorkloadNetworkVirtualMachine } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, WorkloadNetworkVirtualMachinesGet200Response, WorkloadNetworkVirtualMachinesGetDefaultResponse, WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response, WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams, WorkloadNetworkVirtualMachinesGetOptionalParams } from "../../models/options.js";
export declare function _listByWorkloadNetworkSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams): StreamableMethod<WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse>;
export declare function _listByWorkloadNetworkDeserialize(result: WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse): Promise<WorkloadNetworkVirtualMachineListResult>;
/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export declare function listByWorkloadNetwork(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams): StreamableMethod<WorkloadNetworkVirtualMachinesGet200Response | WorkloadNetworkVirtualMachinesGetDefaultResponse>;
export declare function _getDeserialize(result: WorkloadNetworkVirtualMachinesGet200Response | WorkloadNetworkVirtualMachinesGetDefaultResponse): Promise<WorkloadNetworkVirtualMachine>;
/** Get a WorkloadNetworkVirtualMachine */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams): Promise<WorkloadNetworkVirtualMachine>;
//# sourceMappingURL=index.d.ts.map