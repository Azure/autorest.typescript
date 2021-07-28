import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ObjectReplicationPolicies } from "../operationsInterfaces";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { ObjectReplicationPolicy, ObjectReplicationPoliciesListOptionalParams, ObjectReplicationPoliciesGetOptionalParams, ObjectReplicationPoliciesGetResponse, ObjectReplicationPoliciesCreateOrUpdateOptionalParams, ObjectReplicationPoliciesCreateOrUpdateResponse, ObjectReplicationPoliciesDeleteOptionalParams } from "../models";
/** Class representing a ObjectReplicationPolicies. */
export declare class ObjectReplicationPoliciesImpl implements ObjectReplicationPolicies {
    private readonly client;
    /**
     * Initialize a new instance of the class ObjectReplicationPolicies class.
     * @param client Reference to the service client
     */
    constructor(client: StorageManagementClientContext);
    /**
     * List the object replication policies associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: ObjectReplicationPoliciesListOptionalParams): PagedAsyncIterableIterator<ObjectReplicationPolicy>;
    private listPagingPage;
    private listPagingAll;
    /**
     * List the object replication policies associated with the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Get the object replication policy of the storage account by policy ID.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
     *                                  is unknown.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, options?: ObjectReplicationPoliciesGetOptionalParams): Promise<ObjectReplicationPoliciesGetResponse>;
    /**
     * Create or update the object replication policy of the storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
     *                                  is unknown.
     * @param properties The object replication policy set to a storage account. A unique policy ID will be
     *                   created if absent.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, properties: ObjectReplicationPolicy, options?: ObjectReplicationPoliciesCreateOrUpdateOptionalParams): Promise<ObjectReplicationPoliciesCreateOrUpdateResponse>;
    /**
     * Deletes the object replication policy associated with the specified storage account.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
     *                                  is unknown.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, accountName: string, objectReplicationPolicyId: string, options?: ObjectReplicationPoliciesDeleteOptionalParams): Promise<void>;
}
//# sourceMappingURL=objectReplicationPolicies.d.ts.map