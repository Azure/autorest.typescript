import { PollerLike, OperationState } from "@azure/core-lro";
import { VirtualMachine, VirtualMachineRestrictMovement, _VirtualMachinesList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, VirtualMachinesGet200Response, VirtualMachinesGetDefaultResponse, VirtualMachinesListByCluster200Response, VirtualMachinesListByClusterDefaultResponse, VirtualMachinesRestrictMovement202Response, VirtualMachinesRestrictMovementDefaultResponse, VirtualMachinesRestrictMovementLogicalResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { VirtualMachinesListByClusterOptionalParams, VirtualMachinesGetOptionalParams, VirtualMachinesRestrictMovementOptionalParams } from "../../models/options.js";
export declare function _listByClusterSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams): StreamableMethod<VirtualMachinesListByCluster200Response | VirtualMachinesListByClusterDefaultResponse>;
export declare function _listByClusterDeserialize(result: VirtualMachinesListByCluster200Response | VirtualMachinesListByClusterDefaultResponse): Promise<_VirtualMachinesList>;
/** List VirtualMachine resources by Cluster */
export declare function listByCluster(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams): PagedAsyncIterableIterator<VirtualMachine>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams): StreamableMethod<VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse>;
export declare function _getDeserialize(result: VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse): Promise<VirtualMachine>;
/** Get a VirtualMachine */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams): Promise<VirtualMachine>;
export declare function _restrictMovementSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams): StreamableMethod<VirtualMachinesRestrictMovement202Response | VirtualMachinesRestrictMovementDefaultResponse | VirtualMachinesRestrictMovementLogicalResponse>;
export declare function _restrictMovementDeserialize(result: VirtualMachinesRestrictMovement202Response | VirtualMachinesRestrictMovementDefaultResponse | VirtualMachinesRestrictMovementLogicalResponse): Promise<void>;
/** Enable or disable DRS-driven VM movement restriction */
export declare function restrictMovement(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map