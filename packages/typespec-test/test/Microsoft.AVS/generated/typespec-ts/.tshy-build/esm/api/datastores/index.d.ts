import { PollerLike, OperationState } from "@azure/core-lro";
import { DatastoreListResult, Datastore } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, DatastoresCreateOrUpdate200Response, DatastoresCreateOrUpdate201Response, DatastoresCreateOrUpdateDefaultResponse, DatastoresCreateOrUpdateLogicalResponse, DatastoresDelete200Response, DatastoresDelete202Response, DatastoresDelete204Response, DatastoresDeleteDefaultResponse, DatastoresDeleteLogicalResponse, DatastoresGet200Response, DatastoresGetDefaultResponse, DatastoresListByCluster200Response, DatastoresListByClusterDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { DatastoresListByClusterOptionalParams, DatastoresGetOptionalParams, DatastoresCreateOrUpdateOptionalParams, DatastoresDeleteOptionalParams } from "../../models/options.js";
export declare function _listByClusterSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams): StreamableMethod<DatastoresListByCluster200Response | DatastoresListByClusterDefaultResponse>;
export declare function _listByClusterDeserialize(result: DatastoresListByCluster200Response | DatastoresListByClusterDefaultResponse): Promise<DatastoreListResult>;
/** List Datastore resources by Cluster */
export declare function listByCluster(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams): PagedAsyncIterableIterator<Datastore>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams): StreamableMethod<DatastoresGet200Response | DatastoresGetDefaultResponse>;
export declare function _getDeserialize(result: DatastoresGet200Response | DatastoresGetDefaultResponse): Promise<Datastore>;
/** Get a Datastore */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams): Promise<Datastore>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams): StreamableMethod<DatastoresCreateOrUpdate200Response | DatastoresCreateOrUpdate201Response | DatastoresCreateOrUpdateDefaultResponse | DatastoresCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: DatastoresCreateOrUpdate200Response | DatastoresCreateOrUpdate201Response | DatastoresCreateOrUpdateDefaultResponse | DatastoresCreateOrUpdateLogicalResponse): Promise<Datastore>;
/** Create a Datastore */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams): PollerLike<OperationState<Datastore>, Datastore>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams): StreamableMethod<DatastoresDelete200Response | DatastoresDelete202Response | DatastoresDelete204Response | DatastoresDeleteDefaultResponse | DatastoresDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: DatastoresDelete200Response | DatastoresDelete202Response | DatastoresDelete204Response | DatastoresDeleteDefaultResponse | DatastoresDeleteLogicalResponse): Promise<void>;
/** Delete a Datastore */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map