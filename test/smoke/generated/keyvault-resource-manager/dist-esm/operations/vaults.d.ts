import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Vaults } from "../operationsInterfaces";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { Vault, VaultsListByResourceGroupOptionalParams, VaultsListBySubscriptionOptionalParams, DeletedVault, VaultsListDeletedOptionalParams, Resource, VaultsListOptionalParams, VaultCreateOrUpdateParameters, VaultsCreateOrUpdateOptionalParams, VaultsCreateOrUpdateResponse, VaultPatchParameters, VaultsUpdateOptionalParams, VaultsUpdateResponse, VaultsDeleteOptionalParams, VaultsGetOptionalParams, VaultsGetResponse, VaultAccessPolicyParameters, AccessPolicyUpdateKind, VaultsUpdateAccessPolicyOptionalParams, VaultsUpdateAccessPolicyResponse, VaultsGetDeletedOptionalParams, VaultsGetDeletedResponse, VaultsPurgeDeletedOptionalParams, VaultCheckNameAvailabilityParameters, VaultsCheckNameAvailabilityOptionalParams, VaultsCheckNameAvailabilityResponse } from "../models";
/** Class representing a Vaults. */
export declare class VaultsImpl implements Vaults {
    private readonly client;
    /**
     * Initialize a new instance of the class Vaults class.
     * @param client Reference to the service client
     */
    constructor(client: KeyVaultManagementClientContext);
    /**
     * The List operation gets information about the vaults associated with the subscription and within the
     * specified resource group.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VaultsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Vault>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: VaultsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Vault>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Gets information about the deleted vaults in a subscription.
     * @param options The options parameters.
     */
    listDeleted(options?: VaultsListDeletedOptionalParams): PagedAsyncIterableIterator<DeletedVault>;
    private listDeletedPagingPage;
    private listDeletedPagingAll;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    list(options?: VaultsListOptionalParams): PagedAsyncIterableIterator<Resource>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Create or update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to create or update the vault
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VaultsCreateOrUpdateResponse>, VaultsCreateOrUpdateResponse>>;
    /**
     * Create or update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to create or update the vault
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<VaultsCreateOrUpdateResponse>;
    /**
     * Update a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the server belongs.
     * @param vaultName Name of the vault
     * @param parameters Parameters to patch the vault
     * @param options The options parameters.
     */
    update(resourceGroupName: string, vaultName: string, parameters: VaultPatchParameters, options?: VaultsUpdateOptionalParams): Promise<VaultsUpdateResponse>;
    /**
     * Deletes the specified Azure key vault.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault to delete
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, vaultName: string, options?: VaultsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Azure key vault.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName The name of the vault.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, options?: VaultsGetOptionalParams): Promise<VaultsGetResponse>;
    /**
     * Update access policies in a key vault in the specified subscription.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param vaultName Name of the vault
     * @param operationKind Name of the operation
     * @param parameters Access policy to merge into the vault
     * @param options The options parameters.
     */
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: AccessPolicyUpdateKind, parameters: VaultAccessPolicyParameters, options?: VaultsUpdateAccessPolicyOptionalParams): Promise<VaultsUpdateAccessPolicyResponse>;
    /**
     * The List operation gets information about the vaults associated with the subscription and within the
     * specified resource group.
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * Gets information about the deleted vaults in a subscription.
     * @param options The options parameters.
     */
    private _listDeleted;
    /**
     * Gets the deleted Azure key vault.
     * @param vaultName The name of the vault.
     * @param location The location of the deleted vault.
     * @param options The options parameters.
     */
    getDeleted(vaultName: string, location: string, options?: VaultsGetDeletedOptionalParams): Promise<VaultsGetDeletedResponse>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @param vaultName The name of the soft-deleted vault.
     * @param location The location of the soft-deleted vault.
     * @param options The options parameters.
     */
    beginPurgeDeleted(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @param vaultName The name of the soft-deleted vault.
     * @param location The location of the soft-deleted vault.
     * @param options The options parameters.
     */
    beginPurgeDeletedAndWait(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<void>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Checks that the vault name is valid and is not already in use.
     * @param vaultName The name of the vault.
     * @param options The options parameters.
     */
    checkNameAvailability(vaultName: VaultCheckNameAvailabilityParameters, options?: VaultsCheckNameAvailabilityOptionalParams): Promise<VaultsCheckNameAvailabilityResponse>;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the Resource Group to which the vault belongs.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
    /**
     * ListDeletedNext
     * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
     * @param options The options parameters.
     */
    private _listDeletedNext;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=vaults.d.ts.map