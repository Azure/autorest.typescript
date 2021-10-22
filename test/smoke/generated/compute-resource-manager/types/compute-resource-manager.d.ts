import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/**
 * Defines values for AccessLevel. \
 * {@link KnownAccessLevel} can be used interchangeably with AccessLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Read** \
 * **Write**
 */
export declare type AccessLevel = string;

/** A disk access SAS uri. */
export declare interface AccessUri {
    /**
     * A SAS uri for accessing a disk.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly accessSAS?: string;
}

/** Enables or disables a capability on the virtual machine or virtual machine scale set. */
export declare interface AdditionalCapabilities {
    /** The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. */
    ultraSSDEnabled?: boolean;
}

/** Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied. */
export declare interface AdditionalUnattendContent {
    /** The pass name. Currently, the only allowable value is OobeSystem. */
    passName?: "OobeSystem";
    /** The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. */
    componentName?: "Microsoft-Windows-Shell-Setup";
    /** Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. */
    settingName?: SettingNames;
    /** Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. */
    content?: string;
}

/**
 * Defines values for AggregatedReplicationState. \
 * {@link KnownAggregatedReplicationState} can be used interchangeably with AggregatedReplicationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **InProgress** \
 * **Completed** \
 * **Failed**
 */
export declare type AggregatedReplicationState = string;

/** The API entity reference. */
export declare interface ApiEntityReference {
    /** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
    id?: string;
}

/** Api error. */
export declare interface ApiError {
    /** The Api error details */
    details?: ApiErrorBase[];
    /** The Api inner error */
    innererror?: InnerError;
    /** The error code. */
    code?: string;
    /** The target of the particular error. */
    target?: string;
    /** The error message. */
    message?: string;
}

/** Api error base. */
export declare interface ApiErrorBase {
    /** The error code. */
    code?: string;
    /** The target of the particular error. */
    target?: string;
    /** The error message. */
    message?: string;
}

/** The configuration parameters used for performing automatic OS upgrade. */
export declare interface AutomaticOSUpgradePolicy {
    /** Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true. */
    enableAutomaticOSUpgrade?: boolean;
    /** Whether OS image rollback feature should be disabled. Default value is false. */
    disableAutomaticRollback?: boolean;
}

/** Describes automatic OS upgrade properties on the image. */
export declare interface AutomaticOSUpgradeProperties {
    /** Specifies whether automatic OS upgrade is supported on the image. */
    automaticOSUpgradeSupported: boolean;
}

/** Specifies the configuration parameters for automatic repairs on the virtual machine scale set. */
export declare interface AutomaticRepairsPolicy {
    /** Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false. */
    enabled?: boolean;
    /** The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M). */
    gracePeriod?: string;
}

/** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
export declare type AvailabilitySet = Resource & {
    /** Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'. */
    sku?: Sku;
    /** Update Domain count. */
    platformUpdateDomainCount?: number;
    /** Fault Domain count. */
    platformFaultDomainCount?: number;
    /** A list of references to all virtual machines in the availability set. */
    virtualMachines?: SubResource[];
    /** Specifies information about the proximity placement group that the availability set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
    /**
     * The resource status information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statuses?: InstanceViewStatus[];
};

/** The List Availability Set operation response. */
export declare interface AvailabilitySetListResult {
    /** The list of availability sets */
    value: AvailabilitySet[];
    /** The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets. */
    nextLink?: string;
}

/** Interface representing a AvailabilitySets. */
export declare interface AvailabilitySets {
    /**
     * Lists all availability sets in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: AvailabilitySetsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<AvailabilitySet>;
    /**
     * Lists all availability sets in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: AvailabilitySetsListOptionalParams): PagedAsyncIterableIterator<AvailabilitySet>;
    /**
     * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
     * existing availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsListAvailableSizesOptionalParams): PagedAsyncIterableIterator<VirtualMachineSize>;
    /**
     * Create or update an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param parameters Parameters supplied to the Create Availability Set operation.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: AvailabilitySet, options?: AvailabilitySetsCreateOrUpdateOptionalParams): Promise<AvailabilitySetsCreateOrUpdateResponse>;
    /**
     * Update an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param parameters Parameters supplied to the Update Availability Set operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, availabilitySetName: string, parameters: AvailabilitySetUpdate, options?: AvailabilitySetsUpdateOptionalParams): Promise<AvailabilitySetsUpdateResponse>;
    /**
     * Delete an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsGetOptionalParams): Promise<AvailabilitySetsGetResponse>;
}

/** Optional parameters. */
export declare interface AvailabilitySetsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type AvailabilitySetsCreateOrUpdateResponse = AvailabilitySet;

/** Optional parameters. */
export declare interface AvailabilitySetsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface AvailabilitySetsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type AvailabilitySetsGetResponse = AvailabilitySet;

/**
 * Defines values for AvailabilitySetSkuTypes. \
 * {@link KnownAvailabilitySetSkuTypes} can be used interchangeably with AvailabilitySetSkuTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Classic** \
 * **Aligned**
 */
export declare type AvailabilitySetSkuTypes = string;

/** Optional parameters. */
export declare interface AvailabilitySetsListAvailableSizesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableSizes operation. */
export declare type AvailabilitySetsListAvailableSizesResponse = VirtualMachineSizeListResult;

/** Optional parameters. */
export declare interface AvailabilitySetsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply to the operation. */
    expand?: string;
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type AvailabilitySetsListBySubscriptionNextResponse = AvailabilitySetListResult;

/** Optional parameters. */
export declare interface AvailabilitySetsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply to the operation. */
    expand?: string;
}

/** Contains response data for the listBySubscription operation. */
export declare type AvailabilitySetsListBySubscriptionResponse = AvailabilitySetListResult;

/** Optional parameters. */
export declare interface AvailabilitySetsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailabilitySetsListNextResponse = AvailabilitySetListResult;

/** Optional parameters. */
export declare interface AvailabilitySetsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailabilitySetsListResponse = AvailabilitySetListResult;

/** Optional parameters. */
export declare interface AvailabilitySetsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type AvailabilitySetsUpdateResponse = AvailabilitySet;

/** Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated. */
export declare type AvailabilitySetUpdate = UpdateResource & {
    /** Sku of the availability set */
    sku?: Sku;
    /** Update Domain count. */
    platformUpdateDomainCount?: number;
    /** Fault Domain count. */
    platformFaultDomainCount?: number;
    /** A list of references to all virtual machines in the availability set. */
    virtualMachines?: SubResource[];
    /** Specifies information about the proximity placement group that the availability set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
    /**
     * The resource status information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statuses?: InstanceViewStatus[];
};

/** Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01. */
export declare interface BillingProfile {
    /** Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01. */
    maxPrice?: number;
}

/** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
export declare interface BootDiagnostics {
    /** Whether boot diagnostics should be enabled on the Virtual Machine. */
    enabled?: boolean;
    /** Uri of the storage account to use for placing the console output and screenshot. */
    storageUri?: string;
}

/** The instance view of a virtual machine boot diagnostics. */
export declare interface BootDiagnosticsInstanceView {
    /**
     * The console screenshot blob URI.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly consoleScreenshotBlobUri?: string;
    /**
     * The Linux serial console log blob Uri.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serialConsoleLogBlobUri?: string;
    /**
     * The boot diagnostics status information for the VM. <br><br> NOTE: It will be set only if there are errors encountered in enabling boot diagnostics.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: InstanceViewStatus;
}

/** Defines values for CachingTypes. */
export declare type CachingTypes = "None" | "ReadOnly" | "ReadWrite";

/** An error response from the Compute service. */
export declare interface CloudError {
    /** Api error. */
    error?: ApiError;
}

export declare interface Components1H8M3EpSchemasVirtualmachineidentityPropertiesUserassignedidentitiesAdditionalproperties {
    /**
     * The principal id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The client id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

export declare interface ComponentsNj115SSchemasVirtualmachinescalesetidentityPropertiesUserassignedidentitiesAdditionalproperties {
    /**
     * The principal id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The client id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

export declare class ComputeManagementClient extends ComputeManagementClientContext {
    /**
     * Initializes a new instance of the ComputeManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ComputeManagementClientOptionalParams);
    operations: Operations;
    availabilitySets: AvailabilitySets;
    proximityPlacementGroups: ProximityPlacementGroups;
    dedicatedHostGroups: DedicatedHostGroups;
    dedicatedHosts: DedicatedHosts;
    sshPublicKeys: SshPublicKeys;
    virtualMachineExtensionImages: VirtualMachineExtensionImages;
    virtualMachineExtensions: VirtualMachineExtensions;
    virtualMachineImages: VirtualMachineImages;
    usageOperations: UsageOperations;
    virtualMachines: VirtualMachines;
    virtualMachineSizes: VirtualMachineSizes;
    images: Images;
    virtualMachineScaleSets: VirtualMachineScaleSets;
    virtualMachineScaleSetExtensions: VirtualMachineScaleSetExtensions;
    virtualMachineScaleSetRollingUpgrades: VirtualMachineScaleSetRollingUpgrades;
    virtualMachineScaleSetVMExtensions: VirtualMachineScaleSetVMExtensions;
    virtualMachineScaleSetVMs: VirtualMachineScaleSetVMs;
    logAnalytics: LogAnalytics;
    virtualMachineRunCommands: VirtualMachineRunCommands;
    resourceSkus: ResourceSkus;
    disks: Disks;
    snapshots: Snapshots;
    diskEncryptionSets: DiskEncryptionSets;
    galleries: Galleries;
    galleryImages: GalleryImages;
    galleryImageVersions: GalleryImageVersions;
    galleryApplications: GalleryApplications;
    galleryApplicationVersions: GalleryApplicationVersions;
    containerServices: ContainerServices;
}

export declare class ComputeManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the ComputeManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
     *                       The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: ComputeManagementClientOptionalParams);
}

/** Optional parameters. */
export declare interface ComputeManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** The List Compute Operation operation response. */
export declare interface ComputeOperationListResult {
    /**
     * The list of compute operations
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ComputeOperationValue[];
}

/** Describes the properties of a Compute Operation value. */
export declare interface ComputeOperationValue {
    /**
     * The origin of the compute operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly origin?: string;
    /**
     * The name of the compute operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The display name of the compute operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The display name of the resource the operation applies to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resource?: string;
    /**
     * The description of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * The resource provider for the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provider?: string;
}

/** Container service. */
export declare type ContainerService = Resource & {
    /**
     * the current deployment or provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Properties of the orchestrator. */
    orchestratorProfile?: ContainerServiceOrchestratorProfile;
    /** Properties for custom clusters. */
    customProfile?: ContainerServiceCustomProfile;
    /** Properties for cluster service principals. */
    servicePrincipalProfile?: ContainerServicePrincipalProfile;
    /** Properties of master agents. */
    masterProfile?: ContainerServiceMasterProfile;
    /** Properties of the agent pool. */
    agentPoolProfiles?: ContainerServiceAgentPoolProfile[];
    /** Properties of Windows VMs. */
    windowsProfile?: ContainerServiceWindowsProfile;
    /** Properties of Linux VMs. */
    linuxProfile?: ContainerServiceLinuxProfile;
    /** Properties of the diagnostic agent. */
    diagnosticsProfile?: ContainerServiceDiagnosticsProfile;
};

/** Profile for the container service agent pool. */
export declare interface ContainerServiceAgentPoolProfile {
    /** Unique name of the agent pool profile in the context of the subscription and resource group. */
    name: string;
    /** Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. */
    count: number;
    /** Size of agent VMs. */
    vmSize: ContainerServiceVMSizeTypes;
    /** DNS prefix to be used to create the FQDN for the agent pool. */
    dnsPrefix: string;
    /**
     * FQDN for the agent pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fqdn?: string;
}

/** Properties to configure a custom container service cluster. */
export declare interface ContainerServiceCustomProfile {
    /** The name of the custom orchestrator to use. */
    orchestrator: string;
}

export declare interface ContainerServiceDiagnosticsProfile {
    /** Profile for the container service VM diagnostic agent. */
    vmDiagnostics: ContainerServiceVMDiagnostics;
}

/** Profile for Linux VMs in the container service cluster. */
export declare interface ContainerServiceLinuxProfile {
    /** The administrator username to use for Linux VMs. */
    adminUsername: string;
    /** The ssh key configuration for Linux VMs. */
    ssh: ContainerServiceSshConfiguration;
}

/** The response from the List Container Services operation. */
export declare interface ContainerServiceListResult {
    /** the list of container services. */
    value?: ContainerService[];
    /** The URL to get the next set of container service results. */
    nextLink?: string;
}

/** Profile for the container service master. */
export declare interface ContainerServiceMasterProfile {
    /** Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1. */
    count?: ContainerServiceMasterProfileCount;
    /** DNS prefix to be used to create the FQDN for master. */
    dnsPrefix: string;
    /**
     * FQDN for the master.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fqdn?: string;
}

/**
 * Defines values for ContainerServiceMasterProfileCount. \
 * {@link KnownContainerServiceMasterProfileCount} can be used interchangeably with ContainerServiceMasterProfileCount,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **1** \
 * **3** \
 * **5**
 */
export declare type ContainerServiceMasterProfileCount = number;

/** Profile for the container service orchestrator. */
export declare interface ContainerServiceOrchestratorProfile {
    /** The orchestrator to use to manage container service cluster resources. Valid values are Swarm, DCOS, and Custom. */
    orchestratorType: ContainerServiceOrchestratorTypes;
}

/** Defines values for ContainerServiceOrchestratorTypes. */
export declare type ContainerServiceOrchestratorTypes = "Swarm" | "DCOS" | "Custom" | "Kubernetes";

/** Information about a service principal identity for the cluster to use for manipulating Azure APIs. */
export declare interface ContainerServicePrincipalProfile {
    /** The ID for the service principal. */
    clientId: string;
    /** The secret password associated with the service principal. */
    secret: string;
}

/** Interface representing a ContainerServices. */
export declare interface ContainerServices {
    /**
     * Gets a list of container services in the specified subscription. The operation returns properties of
     * each container service including state, orchestrator, number of masters and agents, and FQDNs of
     * masters and agents.
     * @param options The options parameters.
     */
    list(options?: ContainerServicesListOptionalParams): PagedAsyncIterableIterator<ContainerService>;
    /**
     * Gets a list of container services in the specified subscription and resource group. The operation
     * returns properties of each container service including state, orchestrator, number of masters and
     * agents, and FQDNs of masters and agents.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ContainerServicesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ContainerService>;
    /**
     * Creates or updates a container service with the specified configuration of orchestrator, masters,
     * and agents.
     * @param resourceGroupName The name of the resource group.
     * @param containerServiceName The name of the container service in the specified subscription and
     *                             resource group.
     * @param parameters Parameters supplied to the Create or Update a Container Service operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, containerServiceName: string, parameters: ContainerService, options?: ContainerServicesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ContainerServicesCreateOrUpdateResponse>, ContainerServicesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a container service with the specified configuration of orchestrator, masters,
     * and agents.
     * @param resourceGroupName The name of the resource group.
     * @param containerServiceName The name of the container service in the specified subscription and
     *                             resource group.
     * @param parameters Parameters supplied to the Create or Update a Container Service operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, containerServiceName: string, parameters: ContainerService, options?: ContainerServicesCreateOrUpdateOptionalParams): Promise<ContainerServicesCreateOrUpdateResponse>;
    /**
     * Gets the properties of the specified container service in the specified subscription and resource
     * group. The operation returns the properties including state, orchestrator, number of masters and
     * agents, and FQDNs of masters and agents.
     * @param resourceGroupName The name of the resource group.
     * @param containerServiceName The name of the container service in the specified subscription and
     *                             resource group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, containerServiceName: string, options?: ContainerServicesGetOptionalParams): Promise<ContainerServicesGetResponse>;
    /**
     * Deletes the specified container service in the specified subscription and resource group. The
     * operation does not delete other resources created as part of creating a container service, including
     * storage accounts, VMs, and availability sets. All the other resources created with the container
     * service are part of the same resource group and can be deleted individually.
     * @param resourceGroupName The name of the resource group.
     * @param containerServiceName The name of the container service in the specified subscription and
     *                             resource group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, containerServiceName: string, options?: ContainerServicesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified container service in the specified subscription and resource group. The
     * operation does not delete other resources created as part of creating a container service, including
     * storage accounts, VMs, and availability sets. All the other resources created with the container
     * service are part of the same resource group and can be deleted individually.
     * @param resourceGroupName The name of the resource group.
     * @param containerServiceName The name of the container service in the specified subscription and
     *                             resource group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, containerServiceName: string, options?: ContainerServicesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ContainerServicesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ContainerServicesCreateOrUpdateResponse = ContainerService;

/** Optional parameters. */
export declare interface ContainerServicesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ContainerServicesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ContainerServicesGetResponse = ContainerService;

/** Optional parameters. */
export declare interface ContainerServicesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ContainerServicesListByResourceGroupNextResponse = ContainerServiceListResult;

/** Optional parameters. */
export declare interface ContainerServicesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ContainerServicesListByResourceGroupResponse = ContainerServiceListResult;

/** Optional parameters. */
export declare interface ContainerServicesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ContainerServicesListNextResponse = ContainerServiceListResult;

/** Optional parameters. */
export declare interface ContainerServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ContainerServicesListResponse = ContainerServiceListResult;

/** SSH configuration for Linux-based VMs running on Azure. */
export declare interface ContainerServiceSshConfiguration {
    /** the list of SSH public keys used to authenticate with Linux-based VMs. */
    publicKeys: ContainerServiceSshPublicKey[];
}

/** Contains information about SSH certificate public key data. */
export declare interface ContainerServiceSshPublicKey {
    /** Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers. */
    keyData: string;
}

/** Profile for diagnostics on the container service VMs. */
export declare interface ContainerServiceVMDiagnostics {
    /** Whether the VM diagnostic agent is provisioned on the VM. */
    enabled: boolean;
    /**
     * The URI of the storage account where diagnostics are stored.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageUri?: string;
}

/**
 * Defines values for ContainerServiceVMSizeTypes. \
 * {@link KnownContainerServiceVMSizeTypes} can be used interchangeably with ContainerServiceVMSizeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_A0** \
 * **Standard_A1** \
 * **Standard_A2** \
 * **Standard_A3** \
 * **Standard_A4** \
 * **Standard_A5** \
 * **Standard_A6** \
 * **Standard_A7** \
 * **Standard_A8** \
 * **Standard_A9** \
 * **Standard_A10** \
 * **Standard_A11** \
 * **Standard_D1** \
 * **Standard_D2** \
 * **Standard_D3** \
 * **Standard_D4** \
 * **Standard_D11** \
 * **Standard_D12** \
 * **Standard_D13** \
 * **Standard_D14** \
 * **Standard_D1_v2** \
 * **Standard_D2_v2** \
 * **Standard_D3_v2** \
 * **Standard_D4_v2** \
 * **Standard_D5_v2** \
 * **Standard_D11_v2** \
 * **Standard_D12_v2** \
 * **Standard_D13_v2** \
 * **Standard_D14_v2** \
 * **Standard_G1** \
 * **Standard_G2** \
 * **Standard_G3** \
 * **Standard_G4** \
 * **Standard_G5** \
 * **Standard_DS1** \
 * **Standard_DS2** \
 * **Standard_DS3** \
 * **Standard_DS4** \
 * **Standard_DS11** \
 * **Standard_DS12** \
 * **Standard_DS13** \
 * **Standard_DS14** \
 * **Standard_GS1** \
 * **Standard_GS2** \
 * **Standard_GS3** \
 * **Standard_GS4** \
 * **Standard_GS5**
 */
export declare type ContainerServiceVMSizeTypes = string;

/** Profile for Windows VMs in the container service cluster. */
export declare interface ContainerServiceWindowsProfile {
    /** The administrator username to use for Windows VMs. */
    adminUsername: string;
    /** The administrator password to use for Windows VMs. */
    adminPassword: string;
}

/** Data used when creating a disk. */
export declare interface CreationData {
    /** This enumerates the possible sources of a disk's creation. */
    createOption: DiskCreateOption;
    /** Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. */
    storageAccountId?: string;
    /** Disk source information. */
    imageReference?: ImageDiskReference;
    /** Required if creating from a Gallery Image. The id of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk. */
    galleryImageReference?: ImageDiskReference;
    /** If createOption is Import, this is the URI of a blob to be imported into a managed disk. */
    sourceUri?: string;
    /** If createOption is Copy, this is the ARM id of the source snapshot or disk. */
    sourceResourceId?: string;
    /**
     * If this field is set, this is the unique id identifying the source of this resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sourceUniqueId?: string;
    /** If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). */
    uploadSizeBytes?: number;
}

/** Describes a data disk. */
export declare interface DataDisk {
    /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
    lun: number;
    /** The disk name. */
    name?: string;
    /** The virtual hard disk. */
    vhd?: VirtualHardDisk;
    /** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
    image?: VirtualHardDisk;
    /** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
    caching?: CachingTypes;
    /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
    writeAcceleratorEnabled?: boolean;
    /** Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. */
    createOption: DiskCreateOptionTypes;
    /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** The managed disk parameters. */
    managedDisk?: ManagedDiskParameters;
    /** Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset */
    toBeDetached?: boolean;
    /**
     * Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diskIopsReadWrite?: number;
    /**
     * Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diskMBpsReadWrite?: number;
}

/** Contains the data disk images information. */
export declare interface DataDiskImage {
    /**
     * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lun?: number;
}

/** Contains encryption settings for a data disk image. */
export declare type DataDiskImageEncryption = DiskImageEncryption & {
    /** This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. */
    lun: number;
};

/** Specifies information about the Dedicated host. */
export declare type DedicatedHost = Resource & {
    /** SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values. */
    sku: Sku;
    /** Fault domain of the dedicated host within a dedicated host group. */
    platformFaultDomain?: number;
    /** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
    autoReplaceOnFailure?: boolean;
    /**
     * A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostId?: string;
    /**
     * A list of references to all virtual machines in the Dedicated Host.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachines?: SubResourceReadOnly[];
    /** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None** */
    licenseType?: DedicatedHostLicenseTypes;
    /**
     * The date when the host was first provisioned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningTime?: Date;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The dedicated host instance view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceView?: DedicatedHostInstanceView;
};

/** Represents the dedicated host unutilized capacity in terms of a specific VM size. */
export declare interface DedicatedHostAllocatableVM {
    /** VM size in terms of which the unutilized capacity is represented. */
    vmSize?: string;
    /** Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity. */
    count?: number;
}

/** Dedicated host unutilized capacity. */
export declare interface DedicatedHostAvailableCapacity {
    /** The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host. */
    allocatableVMs?: DedicatedHostAllocatableVM[];
}

/** Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group. */
export declare type DedicatedHostGroup = Resource & {
    /** Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. */
    zones?: string[];
    /** Number of fault domains that the host group can span. */
    platformFaultDomainCount?: number;
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hosts?: SubResourceReadOnly[];
};

/** The List Dedicated Host Group with resource group response. */
export declare interface DedicatedHostGroupListResult {
    /** The list of dedicated host groups */
    value: DedicatedHostGroup[];
    /** The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups. */
    nextLink?: string;
}

/** Interface representing a DedicatedHostGroups. */
export declare interface DedicatedHostGroups {
    /**
     * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
     * the response to get the next page of dedicated host groups.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DedicatedHostGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DedicatedHostGroup>;
    /**
     * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
     * response to get the next page of dedicated host groups.
     * @param options The options parameters.
     */
    listBySubscription(options?: DedicatedHostGroupsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<DedicatedHostGroup>;
    /**
     * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups
     * please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param parameters Parameters supplied to the Create Dedicated Host Group.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, hostGroupName: string, parameters: DedicatedHostGroup, options?: DedicatedHostGroupsCreateOrUpdateOptionalParams): Promise<DedicatedHostGroupsCreateOrUpdateResponse>;
    /**
     * Update an dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param parameters Parameters supplied to the Update Dedicated Host Group operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, hostGroupName: string, parameters: DedicatedHostGroupUpdate, options?: DedicatedHostGroupsUpdateOptionalParams): Promise<DedicatedHostGroupsUpdateResponse>;
    /**
     * Delete a dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, hostGroupName: string, options?: DedicatedHostGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about a dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, hostGroupName: string, options?: DedicatedHostGroupsGetOptionalParams): Promise<DedicatedHostGroupsGetResponse>;
}

/** Optional parameters. */
export declare interface DedicatedHostGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DedicatedHostGroupsCreateOrUpdateResponse = DedicatedHostGroup;

/** Optional parameters. */
export declare interface DedicatedHostGroupsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DedicatedHostGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DedicatedHostGroupsGetResponse = DedicatedHostGroup;

/** Optional parameters. */
export declare interface DedicatedHostGroupsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DedicatedHostGroupsListByResourceGroupNextResponse = DedicatedHostGroupListResult;

/** Optional parameters. */
export declare interface DedicatedHostGroupsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DedicatedHostGroupsListByResourceGroupResponse = DedicatedHostGroupListResult;

/** Optional parameters. */
export declare interface DedicatedHostGroupsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type DedicatedHostGroupsListBySubscriptionNextResponse = DedicatedHostGroupListResult;

/** Optional parameters. */
export declare interface DedicatedHostGroupsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type DedicatedHostGroupsListBySubscriptionResponse = DedicatedHostGroupListResult;

/** Optional parameters. */
export declare interface DedicatedHostGroupsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type DedicatedHostGroupsUpdateResponse = DedicatedHostGroup;

/** Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated. */
export declare type DedicatedHostGroupUpdate = UpdateResource & {
    /** Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. */
    zones?: string[];
    /** Number of fault domains that the host group can span. */
    platformFaultDomainCount?: number;
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hosts?: SubResourceReadOnly[];
};

/** The instance view of a dedicated host. */
export declare interface DedicatedHostInstanceView {
    /**
     * Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly assetId?: string;
    /** Unutilized capacity of the dedicated host. */
    availableCapacity?: DedicatedHostAvailableCapacity;
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
}

/** Defines values for DedicatedHostLicenseTypes. */
export declare type DedicatedHostLicenseTypes = "None" | "Windows_Server_Hybrid" | "Windows_Server_Perpetual";

/** The list dedicated host operation response. */
export declare interface DedicatedHostListResult {
    /** The list of dedicated hosts */
    value: DedicatedHost[];
    /** The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts. */
    nextLink?: string;
}

/** Interface representing a DedicatedHosts. */
export declare interface DedicatedHosts {
    /**
     * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in
     * the response to get the next page of dedicated hosts.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param options The options parameters.
     */
    listByHostGroup(resourceGroupName: string, hostGroupName: string, options?: DedicatedHostsListByHostGroupOptionalParams): PagedAsyncIterableIterator<DedicatedHost>;
    /**
     * Create or update a dedicated host .
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host .
     * @param parameters Parameters supplied to the Create Dedicated Host.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, hostGroupName: string, hostName: string, parameters: DedicatedHost, options?: DedicatedHostsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DedicatedHostsCreateOrUpdateResponse>, DedicatedHostsCreateOrUpdateResponse>>;
    /**
     * Create or update a dedicated host .
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host .
     * @param parameters Parameters supplied to the Create Dedicated Host.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, hostGroupName: string, hostName: string, parameters: DedicatedHost, options?: DedicatedHostsCreateOrUpdateOptionalParams): Promise<DedicatedHostsCreateOrUpdateResponse>;
    /**
     * Update an dedicated host .
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host .
     * @param parameters Parameters supplied to the Update Dedicated Host operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, hostGroupName: string, hostName: string, parameters: DedicatedHostUpdate, options?: DedicatedHostsUpdateOptionalParams): Promise<PollerLike<PollOperationState<DedicatedHostsUpdateResponse>, DedicatedHostsUpdateResponse>>;
    /**
     * Update an dedicated host .
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host .
     * @param parameters Parameters supplied to the Update Dedicated Host operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, hostGroupName: string, hostName: string, parameters: DedicatedHostUpdate, options?: DedicatedHostsUpdateOptionalParams): Promise<DedicatedHostsUpdateResponse>;
    /**
     * Delete a dedicated host.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, hostGroupName: string, hostName: string, options?: DedicatedHostsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a dedicated host.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, hostGroupName: string, hostName: string, options?: DedicatedHostsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about a dedicated host.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param hostName The name of the dedicated host.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, hostGroupName: string, hostName: string, options?: DedicatedHostsGetOptionalParams): Promise<DedicatedHostsGetResponse>;
}

/** Optional parameters. */
export declare interface DedicatedHostsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DedicatedHostsCreateOrUpdateResponse = DedicatedHost;

/** Optional parameters. */
export declare interface DedicatedHostsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DedicatedHostsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DedicatedHostsGetResponse = DedicatedHost;

/** Optional parameters. */
export declare interface DedicatedHostsListByHostGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByHostGroupNext operation. */
export declare type DedicatedHostsListByHostGroupNextResponse = DedicatedHostListResult;

/** Optional parameters. */
export declare interface DedicatedHostsListByHostGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByHostGroup operation. */
export declare type DedicatedHostsListByHostGroupResponse = DedicatedHostListResult;

/** Optional parameters. */
export declare interface DedicatedHostsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type DedicatedHostsUpdateResponse = DedicatedHost;

/** Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated. */
export declare type DedicatedHostUpdate = UpdateResource & {
    /** Fault domain of the dedicated host within a dedicated host group. */
    platformFaultDomain?: number;
    /** Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. */
    autoReplaceOnFailure?: boolean;
    /**
     * A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostId?: string;
    /**
     * A list of references to all virtual machines in the Dedicated Host.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachines?: SubResourceReadOnly[];
    /** Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None** */
    licenseType?: DedicatedHostLicenseTypes;
    /**
     * The date when the host was first provisioned.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningTime?: Date;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The dedicated host instance view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceView?: DedicatedHostInstanceView;
};

/** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
export declare interface DiagnosticsProfile {
    /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
    bootDiagnostics?: BootDiagnostics;
}

/**
 * Defines values for DiffDiskOptions. \
 * {@link KnownDiffDiskOptions} can be used interchangeably with DiffDiskOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Local**
 */
export declare type DiffDiskOptions = string;

/**
 * Defines values for DiffDiskPlacement. \
 * {@link KnownDiffDiskPlacement} can be used interchangeably with DiffDiskPlacement,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CacheDisk** \
 * **ResourceDisk**
 */
export declare type DiffDiskPlacement = string;

/** Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk. */
export declare interface DiffDiskSettings {
    /** Specifies the ephemeral disk settings for operating system disk. */
    option?: DiffDiskOptions;
    /** Specifies the ephemeral disk placement for operating system disk.<br><br> Possible values are: <br><br> **CacheDisk** <br><br> **ResourceDisk** <br><br> Default: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used.<br><br> Refer to VM size documentation for Windows VM at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. */
    placement?: DiffDiskPlacement;
}

/** Describes the disallowed disk types. */
export declare interface Disallowed {
    /** A list of disk types. */
    diskTypes?: string[];
}

/** Disk resource. */
export declare type Disk = Resource & {
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedBy?: string;
    /**
     * List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedByExtended?: string[];
    /** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
    sku?: DiskSku;
    /** The Logical zone list for Disk. */
    zones?: string[];
    /**
     * The time when the disk was created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeCreated?: Date;
    /** The Operating System type. */
    osType?: OperatingSystemTypes;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration?: HyperVGeneration;
    /** Disk source information. CreationData information cannot be changed after the disk has been created. */
    creationData?: CreationData;
    /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
    diskSizeGB?: number;
    /**
     * The size of the disk in bytes. This field is read only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diskSizeBytes?: number;
    /**
     * Unique Guid identifying the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uniqueId?: string;
    /** Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
    encryptionSettingsCollection?: EncryptionSettingsCollection;
    /**
     * The disk provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite?: number;
    /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMBpsReadWrite?: number;
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly?: number;
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMBpsReadOnly?: number;
    /**
     * The state of the disk.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diskState?: DiskState;
    /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
    encryption?: Encryption;
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares?: number;
    /**
     * Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly shareInfo?: ShareInfoElement[];
};

/**
 * Defines values for DiskCreateOption. \
 * {@link KnownDiskCreateOption} can be used interchangeably with DiskCreateOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Empty**: Create an empty data disk of a size given by diskSizeGB. \
 * **Attach**: Disk will be attached to a VM. \
 * **FromImage**: Create a new disk from a platform image specified by the given imageReference or galleryImageReference. \
 * **Import**: Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId. \
 * **Copy**: Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId. \
 * **Restore**: Create a new disk by copying from a backup recovery point. \
 * **Upload**: Create a new disk by obtaining a write token and using it to directly upload the contents of the disk.
 */
export declare type DiskCreateOption = string;

/**
 * Defines values for DiskCreateOptionTypes. \
 * {@link KnownDiskCreateOptionTypes} can be used interchangeably with DiskCreateOptionTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FromImage** \
 * **Empty** \
 * **Attach**
 */
export declare type DiskCreateOptionTypes = string;

/** disk encryption set resource. */
export declare type DiskEncryptionSet = Resource & {
    /** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
    identity?: EncryptionSetIdentity;
    /** The key vault key which is currently used by this disk encryption set. */
    activeKey?: KeyVaultAndKeyReference;
    /**
     * A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly previousKeys?: KeyVaultAndKeyReference[];
    /**
     * The disk encryption set provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
};

/**
 * Defines values for DiskEncryptionSetIdentityType. \
 * {@link KnownDiskEncryptionSetIdentityType} can be used interchangeably with DiskEncryptionSetIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned**
 */
export declare type DiskEncryptionSetIdentityType = string;

/** The List disk encryption set operation response. */
export declare interface DiskEncryptionSetList {
    /** A list of disk encryption sets. */
    value: DiskEncryptionSet[];
    /** The uri to fetch the next page of disk encryption sets. Call ListNext() with this to fetch the next page of disk encryption sets. */
    nextLink?: string;
}

/** Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details. */
export declare type DiskEncryptionSetParameters = SubResource & {};

/** Interface representing a DiskEncryptionSets. */
export declare interface DiskEncryptionSets {
    /**
     * Lists all the disk encryption sets under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DiskEncryptionSetsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DiskEncryptionSet>;
    /**
     * Lists all the disk encryption sets under a subscription.
     * @param options The options parameters.
     */
    list(options?: DiskEncryptionSetsListOptionalParams): PagedAsyncIterableIterator<DiskEncryptionSet>;
    /**
     * Creates or updates a disk encryption set
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
     *                          set operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSet, options?: DiskEncryptionSetsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DiskEncryptionSetsCreateOrUpdateResponse>, DiskEncryptionSetsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a disk encryption set
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
     *                          set operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSet, options?: DiskEncryptionSetsCreateOrUpdateOptionalParams): Promise<DiskEncryptionSetsCreateOrUpdateResponse>;
    /**
     * Updates (patches) a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
     *                          encryption set operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSetUpdate, options?: DiskEncryptionSetsUpdateOptionalParams): Promise<PollerLike<PollOperationState<DiskEncryptionSetsUpdateResponse>, DiskEncryptionSetsUpdateResponse>>;
    /**
     * Updates (patches) a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
     *                          encryption set operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSetUpdate, options?: DiskEncryptionSetsUpdateOptionalParams): Promise<DiskEncryptionSetsUpdateResponse>;
    /**
     * Gets information about a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsGetOptionalParams): Promise<DiskEncryptionSetsGetResponse>;
    /**
     * Deletes a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DiskEncryptionSetsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DiskEncryptionSetsCreateOrUpdateResponse = DiskEncryptionSet;

/** Optional parameters. */
export declare interface DiskEncryptionSetsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DiskEncryptionSetsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DiskEncryptionSetsGetResponse = DiskEncryptionSet;

/** Optional parameters. */
export declare interface DiskEncryptionSetsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DiskEncryptionSetsListByResourceGroupNextResponse = DiskEncryptionSetList;

/** Optional parameters. */
export declare interface DiskEncryptionSetsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DiskEncryptionSetsListByResourceGroupResponse = DiskEncryptionSetList;

/** Optional parameters. */
export declare interface DiskEncryptionSetsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DiskEncryptionSetsListNextResponse = DiskEncryptionSetList;

/** Optional parameters. */
export declare interface DiskEncryptionSetsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DiskEncryptionSetsListResponse = DiskEncryptionSetList;

/** Optional parameters. */
export declare interface DiskEncryptionSetsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type DiskEncryptionSetsUpdateResponse = DiskEncryptionSet;

/** Describes a Encryption Settings for a Disk */
export declare interface DiskEncryptionSettings {
    /** Specifies the location of the disk encryption key, which is a Key Vault Secret. */
    diskEncryptionKey?: KeyVaultSecretReference;
    /** Specifies the location of the key encryption key in Key Vault. */
    keyEncryptionKey?: KeyVaultKeyReference;
    /** Specifies whether disk encryption should be enabled on the virtual machine. */
    enabled?: boolean;
}

/** disk encryption set update resource. */
export declare interface DiskEncryptionSetUpdate {
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
    activeKey?: KeyVaultAndKeyReference;
}

/** This is the disk image encryption base class. */
export declare interface DiskImageEncryption {
    /** A relative URI containing the resource ID of the disk encryption set. */
    diskEncryptionSetId?: string;
}

/** The instance view of the disk. */
export declare interface DiskInstanceView {
    /** The disk name. */
    name?: string;
    /** Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15 */
    encryptionSettings?: DiskEncryptionSettings[];
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
}

/** The List Disks operation response. */
export declare interface DiskList {
    /** A list of disks. */
    value: Disk[];
    /** The uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks. */
    nextLink?: string;
}

/** Interface representing a Disks. */
export declare interface Disks {
    /**
     * Lists all the disks under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DisksListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Disk>;
    /**
     * Lists all the disks under a subscription.
     * @param options The options parameters.
     */
    list(options?: DisksListOptionalParams): PagedAsyncIterableIterator<Disk>;
    /**
     * Creates or updates a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param disk Disk object supplied in the body of the Put disk operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Disk, options?: DisksCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DisksCreateOrUpdateResponse>, DisksCreateOrUpdateResponse>>;
    /**
     * Creates or updates a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param disk Disk object supplied in the body of the Put disk operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, diskName: string, disk: Disk, options?: DisksCreateOrUpdateOptionalParams): Promise<DisksCreateOrUpdateResponse>;
    /**
     * Updates (patches) a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param disk Disk object supplied in the body of the Patch disk operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, diskName: string, disk: DiskUpdate, options?: DisksUpdateOptionalParams): Promise<PollerLike<PollOperationState<DisksUpdateResponse>, DisksUpdateResponse>>;
    /**
     * Updates (patches) a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param disk Disk object supplied in the body of the Patch disk operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, diskName: string, disk: DiskUpdate, options?: DisksUpdateOptionalParams): Promise<DisksUpdateResponse>;
    /**
     * Gets information about a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, diskName: string, options?: DisksGetOptionalParams): Promise<DisksGetResponse>;
    /**
     * Deletes a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, diskName: string, options?: DisksDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, diskName: string, options?: DisksDeleteOptionalParams): Promise<void>;
    /**
     * Grants access to a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param grantAccessData Access data object supplied in the body of the get disk access operation.
     * @param options The options parameters.
     */
    beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: GrantAccessData, options?: DisksGrantAccessOptionalParams): Promise<PollerLike<PollOperationState<DisksGrantAccessResponse>, DisksGrantAccessResponse>>;
    /**
     * Grants access to a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param grantAccessData Access data object supplied in the body of the get disk access operation.
     * @param options The options parameters.
     */
    beginGrantAccessAndWait(resourceGroupName: string, diskName: string, grantAccessData: GrantAccessData, options?: DisksGrantAccessOptionalParams): Promise<DisksGrantAccessResponse>;
    /**
     * Revokes access to a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param options The options parameters.
     */
    beginRevokeAccess(resourceGroupName: string, diskName: string, options?: DisksRevokeAccessOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Revokes access to a disk.
     * @param resourceGroupName The name of the resource group.
     * @param diskName The name of the managed disk that is being created. The name can't be changed after
     *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
     *                 length is 80 characters.
     * @param options The options parameters.
     */
    beginRevokeAccessAndWait(resourceGroupName: string, diskName: string, options?: DisksRevokeAccessOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DisksCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DisksCreateOrUpdateResponse = Disk;

/** Optional parameters. */
export declare interface DisksDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DisksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DisksGetResponse = Disk;

/** Optional parameters. */
export declare interface DisksGrantAccessOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the grantAccess operation. */
export declare type DisksGrantAccessResponse = AccessUri;

/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
export declare interface DiskSku {
    /** The sku name. */
    name?: DiskStorageAccountTypes;
    /**
     * The sku tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: string;
}

/** Optional parameters. */
export declare interface DisksListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DisksListByResourceGroupNextResponse = DiskList;

/** Optional parameters. */
export declare interface DisksListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DisksListByResourceGroupResponse = DiskList;

/** Optional parameters. */
export declare interface DisksListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DisksListNextResponse = DiskList;

/** Optional parameters. */
export declare interface DisksListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DisksListResponse = DiskList;

/** Optional parameters. */
export declare interface DisksRevokeAccessOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for DiskState. \
 * {@link KnownDiskState} can be used interchangeably with DiskState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unattached**: The disk is not being used and can be attached to a VM. \
 * **Attached**: The disk is currently mounted to a running VM. \
 * **Reserved**: The disk is mounted to a stopped-deallocated VM \
 * **ActiveSAS**: The disk currently has an Active SAS Uri associated with it. \
 * **ReadyToUpload**: A disk is ready to be created by upload by requesting a write token. \
 * **ActiveUpload**: A disk is created for upload and a write token has been issued for uploading to it.
 */
export declare type DiskState = string;

/**
 * Defines values for DiskStorageAccountTypes. \
 * {@link KnownDiskStorageAccountTypes} can be used interchangeably with DiskStorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS**: Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access. \
 * **Premium_LRS**: Premium SSD locally redundant storage. Best for production and performance sensitive workloads. \
 * **StandardSSD_LRS**: Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev\/test. \
 * **UltraSSD_LRS**: Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads.
 */
export declare type DiskStorageAccountTypes = string;

/** Optional parameters. */
export declare interface DisksUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type DisksUpdateResponse = Disk;

/** Disk update resource. */
export declare interface DiskUpdate {
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
    sku?: DiskSku;
    /** the Operating System type. */
    osType?: OperatingSystemTypes;
    /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
    diskSizeGB?: number;
    /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
    encryptionSettingsCollection?: EncryptionSettingsCollection;
    /** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite?: number;
    /** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMBpsReadWrite?: number;
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly?: number;
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMBpsReadOnly?: number;
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares?: number;
    /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
    encryption?: Encryption;
}

/** Encryption at rest settings for disk or snapshot */
export declare interface Encryption {
    /** ResourceId of the disk encryption set to use for enabling encryption at rest. */
    diskEncryptionSetId?: string;
    /** The type of key used to encrypt the data of the disk. */
    type?: EncryptionType;
}

/** Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. */
export declare interface EncryptionImages {
    /** Contains encryption settings for an OS disk image. */
    osDiskImage?: OSDiskImageEncryption;
    /** A list of encryption specifications for data disk images. */
    dataDiskImages?: DataDiskImageEncryption[];
}

/** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
export declare interface EncryptionSetIdentity {
    /** The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported. */
    type?: DiskEncryptionSetIdentityType;
    /**
     * The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
}

/** Encryption settings for disk or snapshot */
export declare interface EncryptionSettingsCollection {
    /** Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. */
    enabled: boolean;
    /** A collection of encryption settings, one for each disk volume. */
    encryptionSettings?: EncryptionSettingsElement[];
    /** Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. */
    encryptionSettingsVersion?: string;
}

/** Encryption settings for one disk volume. */
export declare interface EncryptionSettingsElement {
    /** Key Vault Secret Url and vault id of the disk encryption key */
    diskEncryptionKey?: KeyVaultAndSecretReference;
    /** Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key. */
    keyEncryptionKey?: KeyVaultAndKeyReference;
}

/**
 * Defines values for EncryptionType. \
 * {@link KnownEncryptionType} can be used interchangeably with EncryptionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EncryptionAtRestWithPlatformKey**: Disk is encrypted with XStore managed key at rest. It is the default encryption type. \
 * **EncryptionAtRestWithCustomerKey**: Disk is encrypted with Customer managed key at rest.
 */
export declare type EncryptionType = string;

/** Interface representing a Galleries. */
export declare interface Galleries {
    /**
     * List galleries under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: GalleriesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Gallery>;
    /**
     * List galleries under a subscription.
     * @param options The options parameters.
     */
    list(options?: GalleriesListOptionalParams): PagedAsyncIterableIterator<Gallery>;
    /**
     * Create or update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, gallery: Gallery, options?: GalleriesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleriesCreateOrUpdateResponse>, GalleriesCreateOrUpdateResponse>>;
    /**
     * Create or update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, gallery: Gallery, options?: GalleriesCreateOrUpdateOptionalParams): Promise<GalleriesCreateOrUpdateResponse>;
    /**
     * Update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, gallery: GalleryUpdate, options?: GalleriesUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleriesUpdateResponse>, GalleriesUpdateResponse>>;
    /**
     * Update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, gallery: GalleryUpdate, options?: GalleriesUpdateOptionalParams): Promise<GalleriesUpdateResponse>;
    /**
     * Retrieves information about a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, options?: GalleriesGetOptionalParams): Promise<GalleriesGetResponse>;
    /**
     * Delete a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, options?: GalleriesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, options?: GalleriesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GalleriesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type GalleriesCreateOrUpdateResponse = Gallery;

/** Optional parameters. */
export declare interface GalleriesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GalleriesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type GalleriesGetResponse = Gallery;

/** Optional parameters. */
export declare interface GalleriesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type GalleriesListByResourceGroupNextResponse = GalleryList;

/** Optional parameters. */
export declare interface GalleriesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type GalleriesListByResourceGroupResponse = GalleryList;

/** Optional parameters. */
export declare interface GalleriesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type GalleriesListNextResponse = GalleryList;

/** Optional parameters. */
export declare interface GalleriesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type GalleriesListResponse = GalleryList;

/** Optional parameters. */
export declare interface GalleriesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type GalleriesUpdateResponse = Gallery;

/** Specifies information about the Shared Image Gallery that you want to create or update. */
export declare type Gallery = Resource & {
    /** The description of this Shared Image Gallery resource. This property is updatable. */
    description?: string;
    /** Describes the gallery unique name. */
    identifier?: GalleryIdentifier;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryPropertiesProvisioningState;
};

/** Specifies information about the gallery Application Definition that you want to create or update. */
export declare type GalleryApplication = Resource & {
    /** The description of this gallery Application Definition resource. This property is updatable. */
    description?: string;
    /** The Eula agreement for the gallery Application Definition. */
    eula?: string;
    /** The privacy statement uri. */
    privacyStatementUri?: string;
    /** The release note uri. */
    releaseNoteUri?: string;
    /** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
    endOfLifeDate?: Date;
    /** This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    supportedOSType?: OperatingSystemTypes;
};

/** The List Gallery Applications operation response. */
export declare interface GalleryApplicationList {
    /** A list of Gallery Applications. */
    value: GalleryApplication[];
    /** The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions. */
    nextLink?: string;
}

/** Interface representing a GalleryApplications. */
export declare interface GalleryApplications {
    /**
     * List gallery Application Definitions in a gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery from which Application Definitions are
     *                    to be listed.
     * @param options The options parameters.
     */
    listByGallery(resourceGroupName: string, galleryName: string, options?: GalleryApplicationsListByGalleryOptionalParams): PagedAsyncIterableIterator<GalleryApplication>;
    /**
     * Create or update a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be created.
     * @param galleryApplicationName The name of the gallery Application Definition to be created or
     *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
     *                               the middle. The maximum length is 80 characters.
     * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: GalleryApplication, options?: GalleryApplicationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryApplicationsCreateOrUpdateResponse>, GalleryApplicationsCreateOrUpdateResponse>>;
    /**
     * Create or update a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be created.
     * @param galleryApplicationName The name of the gallery Application Definition to be created or
     *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
     *                               the middle. The maximum length is 80 characters.
     * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: GalleryApplication, options?: GalleryApplicationsCreateOrUpdateOptionalParams): Promise<GalleryApplicationsCreateOrUpdateResponse>;
    /**
     * Update a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be updated.
     * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
     *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                               The maximum length is 80 characters.
     * @param galleryApplication Parameters supplied to the update gallery Application operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: GalleryApplicationUpdate, options?: GalleryApplicationsUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryApplicationsUpdateResponse>, GalleryApplicationsUpdateResponse>>;
    /**
     * Update a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be updated.
     * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
     *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                               The maximum length is 80 characters.
     * @param galleryApplication Parameters supplied to the update gallery Application operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: GalleryApplicationUpdate, options?: GalleryApplicationsUpdateOptionalParams): Promise<GalleryApplicationsUpdateResponse>;
    /**
     * Retrieves information about a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery from which the Application Definitions
     *                    are to be retrieved.
     * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: GalleryApplicationsGetOptionalParams): Promise<GalleryApplicationsGetResponse>;
    /**
     * Delete a gallery Application.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be deleted.
     * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: GalleryApplicationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a gallery Application.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
     *                    to be deleted.
     * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: GalleryApplicationsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GalleryApplicationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type GalleryApplicationsCreateOrUpdateResponse = GalleryApplication;

/** Optional parameters. */
export declare interface GalleryApplicationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GalleryApplicationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type GalleryApplicationsGetResponse = GalleryApplication;

/** Optional parameters. */
export declare interface GalleryApplicationsListByGalleryNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryNext operation. */
export declare type GalleryApplicationsListByGalleryNextResponse = GalleryApplicationList;

/** Optional parameters. */
export declare interface GalleryApplicationsListByGalleryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGallery operation. */
export declare type GalleryApplicationsListByGalleryResponse = GalleryApplicationList;

/** Optional parameters. */
export declare interface GalleryApplicationsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type GalleryApplicationsUpdateResponse = GalleryApplication;

/** Specifies information about the gallery Application Definition that you want to update. */
export declare type GalleryApplicationUpdate = UpdateResourceDefinition & {
    /** The description of this gallery Application Definition resource. This property is updatable. */
    description?: string;
    /** The Eula agreement for the gallery Application Definition. */
    eula?: string;
    /** The privacy statement uri. */
    privacyStatementUri?: string;
    /** The release note uri. */
    releaseNoteUri?: string;
    /** The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. */
    endOfLifeDate?: Date;
    /** This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    supportedOSType?: OperatingSystemTypes;
};

/** Specifies information about the gallery Application Version that you want to create or update. */
export declare type GalleryApplicationVersion = Resource & {
    /** The publishing profile of a gallery Image Version. */
    publishingProfile?: GalleryApplicationVersionPublishingProfile;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryApplicationVersionPropertiesProvisioningState;
    /**
     * This is the replication status of the gallery Image Version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationStatus?: ReplicationStatus;
};

/** The List Gallery Application version operation response. */
export declare interface GalleryApplicationVersionList {
    /** A list of gallery Application Versions. */
    value: GalleryApplicationVersion[];
    /** The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions. */
    nextLink?: string;
}

/**
 * Defines values for GalleryApplicationVersionPropertiesProvisioningState. \
 * {@link KnownGalleryApplicationVersionPropertiesProvisioningState} can be used interchangeably with GalleryApplicationVersionPropertiesProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export declare type GalleryApplicationVersionPropertiesProvisioningState = string;

/** The publishing profile of a gallery Image Version. */
export declare type GalleryApplicationVersionPublishingProfile = GalleryArtifactPublishingProfileBase & {
    /** The source image from which the Image Version is going to be created. */
    source: UserArtifactSource;
    /** Optional. May be used to help process this file. The type of file contained in the source, e.g. zip, json, etc. */
    contentType?: string;
    /** Optional. Whether or not this application reports health. */
    enableHealthCheck?: boolean;
};

/** Interface representing a GalleryApplicationVersions. */
export declare interface GalleryApplicationVersions {
    /**
     * List gallery Application Versions in a gallery Application Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
     *                               which the Application Versions are to be listed.
     * @param options The options parameters.
     */
    listByGalleryApplication(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams): PagedAsyncIterableIterator<GalleryApplicationVersion>;
    /**
     * Create or update a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version is to be created.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
     *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
     *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
     *                                  Version operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: GalleryApplicationVersion, options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryApplicationVersionsCreateOrUpdateResponse>, GalleryApplicationVersionsCreateOrUpdateResponse>>;
    /**
     * Create or update a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version is to be created.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
     *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
     *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
     *                                  Version operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: GalleryApplicationVersion, options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams): Promise<GalleryApplicationVersionsCreateOrUpdateResponse>;
    /**
     * Update a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version is to be updated.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
     *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
     *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
     *                                  operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: GalleryApplicationVersionUpdate, options?: GalleryApplicationVersionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryApplicationVersionsUpdateResponse>, GalleryApplicationVersionsUpdateResponse>>;
    /**
     * Update a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version is to be updated.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
     *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
     *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
     *                                  operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, galleryApplicationVersion: GalleryApplicationVersionUpdate, options?: GalleryApplicationVersionsUpdateOptionalParams): Promise<GalleryApplicationVersionsUpdateResponse>;
    /**
     * Retrieves information about a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version resides.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: GalleryApplicationVersionsGetOptionalParams): Promise<GalleryApplicationVersionsGetResponse>;
    /**
     * Delete a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version resides.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: GalleryApplicationVersionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a gallery Application Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Application Gallery in which the Application Definition
     *                    resides.
     * @param galleryApplicationName The name of the gallery Application Definition in which the
     *                               Application Version resides.
     * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplicationVersionName: string, options?: GalleryApplicationVersionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GalleryApplicationVersionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type GalleryApplicationVersionsCreateOrUpdateResponse = GalleryApplicationVersion;

/** Optional parameters. */
export declare interface GalleryApplicationVersionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GalleryApplicationVersionsGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: ReplicationStatusTypes;
}

/** Contains response data for the get operation. */
export declare type GalleryApplicationVersionsGetResponse = GalleryApplicationVersion;

/** Optional parameters. */
export declare interface GalleryApplicationVersionsListByGalleryApplicationNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryApplicationNext operation. */
export declare type GalleryApplicationVersionsListByGalleryApplicationNextResponse = GalleryApplicationVersionList;

/** Optional parameters. */
export declare interface GalleryApplicationVersionsListByGalleryApplicationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryApplication operation. */
export declare type GalleryApplicationVersionsListByGalleryApplicationResponse = GalleryApplicationVersionList;

/** Optional parameters. */
export declare interface GalleryApplicationVersionsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type GalleryApplicationVersionsUpdateResponse = GalleryApplicationVersion;

/** Specifies information about the gallery Application Version that you want to update. */
export declare type GalleryApplicationVersionUpdate = UpdateResourceDefinition & {
    /** The publishing profile of a gallery Image Version. */
    publishingProfile?: GalleryApplicationVersionPublishingProfile;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryApplicationVersionPropertiesProvisioningState;
    /**
     * This is the replication status of the gallery Image Version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationStatus?: ReplicationStatus;
};

/** Describes the basic gallery artifact publishing profile. */
export declare interface GalleryArtifactPublishingProfileBase {
    /** The target regions where the Image Version is going to be replicated to. This property is updatable. */
    targetRegions?: TargetRegion[];
    /** The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. */
    replicaCount?: number;
    /** If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. */
    excludeFromLatest?: boolean;
    /**
     * The timestamp for when the gallery Image Version is published.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publishedDate?: Date;
    /** The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable. */
    endOfLifeDate?: Date;
    /** Specifies the storage account type to be used to store the image. This property is not updatable. */
    storageAccountType?: StorageAccountType;
}

/** The source image from which the Image Version is going to be created. */
export declare interface GalleryArtifactSource {
    /** The managed artifact. */
    managedImage: ManagedArtifact;
}

/** The gallery artifact version source. */
export declare interface GalleryArtifactVersionSource {
    /** The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, or user image. */
    id?: string;
}

/** This is the data disk image. */
export declare type GalleryDataDiskImage = GalleryDiskImage & {
    /** This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. */
    lun: number;
};

/** This is the disk image base class. */
export declare interface GalleryDiskImage {
    /**
     * This property indicates the size of the VHD to be created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sizeInGB?: number;
    /** The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' */
    hostCaching?: HostCaching;
    /** The gallery artifact version source. */
    source?: GalleryArtifactVersionSource;
}

/** Describes the gallery unique name. */
export declare interface GalleryIdentifier {
    /**
     * The unique name of the Shared Image Gallery. This name is generated automatically by Azure.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uniqueName?: string;
}

/** Specifies information about the gallery Image Definition that you want to create or update. */
export declare type GalleryImage = Resource & {
    /** The description of this gallery Image Definition resource. This property is updatable. */
    description?: string;
    /** The Eula agreement for the gallery Image Definition. */
    eula?: string;
    /** The privacy statement uri. */
    privacyStatementUri?: string;
    /** The release note uri. */
    releaseNoteUri?: string;
    /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    osType?: OperatingSystemTypes;
    /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
    osState?: OperatingSystemStateTypes;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration?: HyperVGeneration;
    /** The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable. */
    endOfLifeDate?: Date;
    /** This is the gallery Image Definition identifier. */
    identifier?: GalleryImageIdentifier;
    /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
    recommended?: RecommendedMachineConfiguration;
    /** Describes the disallowed disk types. */
    disallowed?: Disallowed;
    /** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
    purchasePlan?: ImagePurchasePlan;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryImagePropertiesProvisioningState;
};

/** This is the gallery Image Definition identifier. */
export declare interface GalleryImageIdentifier {
    /** The name of the gallery Image Definition publisher. */
    publisher: string;
    /** The name of the gallery Image Definition offer. */
    offer: string;
    /** The name of the gallery Image Definition SKU. */
    sku: string;
}

/** The List Gallery Images operation response. */
export declare interface GalleryImageList {
    /** A list of Shared Image Gallery images. */
    value: GalleryImage[];
    /** The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery Image Definitions. */
    nextLink?: string;
}

/**
 * Defines values for GalleryImagePropertiesProvisioningState. \
 * {@link KnownGalleryImagePropertiesProvisioningState} can be used interchangeably with GalleryImagePropertiesProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export declare type GalleryImagePropertiesProvisioningState = string;

/** Interface representing a GalleryImages. */
export declare interface GalleryImages {
    /**
     * List gallery Image Definitions in a gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
     *                    listed.
     * @param options The options parameters.
     */
    listByGallery(resourceGroupName: string, galleryName: string, options?: GalleryImagesListByGalleryOptionalParams): PagedAsyncIterableIterator<GalleryImage>;
    /**
     * Create or update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    created.
     * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
     *                         allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                         The maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the create or update gallery image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImage, options?: GalleryImagesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImagesCreateOrUpdateResponse>, GalleryImagesCreateOrUpdateResponse>>;
    /**
     * Create or update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    created.
     * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
     *                         allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                         The maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the create or update gallery image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImage, options?: GalleryImagesCreateOrUpdateOptionalParams): Promise<GalleryImagesCreateOrUpdateResponse>;
    /**
     * Update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    updated.
     * @param galleryImageName The name of the gallery Image Definition to be updated. The allowed
     *                         characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The
     *                         maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the update gallery image operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImageUpdate, options?: GalleryImagesUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImagesUpdateResponse>, GalleryImagesUpdateResponse>>;
    /**
     * Update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    updated.
     * @param galleryImageName The name of the gallery Image Definition to be updated. The allowed
     *                         characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The
     *                         maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the update gallery image operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImageUpdate, options?: GalleryImagesUpdateOptionalParams): Promise<GalleryImagesUpdateResponse>;
    /**
     * Retrieves information about a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to be
     *                    retrieved.
     * @param galleryImageName The name of the gallery Image Definition to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesGetOptionalParams): Promise<GalleryImagesGetResponse>;
    /**
     * Delete a gallery image.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    deleted.
     * @param galleryImageName The name of the gallery Image Definition to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a gallery image.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    deleted.
     * @param galleryImageName The name of the gallery Image Definition to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GalleryImagesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type GalleryImagesCreateOrUpdateResponse = GalleryImage;

/** Optional parameters. */
export declare interface GalleryImagesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GalleryImagesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type GalleryImagesGetResponse = GalleryImage;

/** Optional parameters. */
export declare interface GalleryImagesListByGalleryNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryNext operation. */
export declare type GalleryImagesListByGalleryNextResponse = GalleryImageList;

/** Optional parameters. */
export declare interface GalleryImagesListByGalleryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGallery operation. */
export declare type GalleryImagesListByGalleryResponse = GalleryImageList;

/** Optional parameters. */
export declare interface GalleryImagesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type GalleryImagesUpdateResponse = GalleryImage;

/** Specifies information about the gallery Image Definition that you want to update. */
export declare type GalleryImageUpdate = UpdateResourceDefinition & {
    /** The description of this gallery Image Definition resource. This property is updatable. */
    description?: string;
    /** The Eula agreement for the gallery Image Definition. */
    eula?: string;
    /** The privacy statement uri. */
    privacyStatementUri?: string;
    /** The release note uri. */
    releaseNoteUri?: string;
    /** This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    osType?: OperatingSystemTypes;
    /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
    osState?: OperatingSystemStateTypes;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration?: HyperVGeneration;
    /** The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable. */
    endOfLifeDate?: Date;
    /** This is the gallery Image Definition identifier. */
    identifier?: GalleryImageIdentifier;
    /** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
    recommended?: RecommendedMachineConfiguration;
    /** Describes the disallowed disk types. */
    disallowed?: Disallowed;
    /** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
    purchasePlan?: ImagePurchasePlan;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryImagePropertiesProvisioningState;
};

/** Specifies information about the gallery Image Version that you want to create or update. */
export declare type GalleryImageVersion = Resource & {
    /** The publishing profile of a gallery Image Version. */
    publishingProfile?: GalleryImageVersionPublishingProfile;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryImageVersionPropertiesProvisioningState;
    /** This is the storage profile of a Gallery Image Version. */
    storageProfile?: GalleryImageVersionStorageProfile;
    /**
     * This is the replication status of the gallery Image Version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationStatus?: ReplicationStatus;
};

/** The List Gallery Image version operation response. */
export declare interface GalleryImageVersionList {
    /** A list of gallery Image Versions. */
    value: GalleryImageVersion[];
    /** The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions. */
    nextLink?: string;
}

/**
 * Defines values for GalleryImageVersionPropertiesProvisioningState. \
 * {@link KnownGalleryImageVersionPropertiesProvisioningState} can be used interchangeably with GalleryImageVersionPropertiesProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export declare type GalleryImageVersionPropertiesProvisioningState = string;

/** The publishing profile of a gallery Image Version. */
export declare type GalleryImageVersionPublishingProfile = GalleryArtifactPublishingProfileBase & {};

/** Interface representing a GalleryImageVersions. */
export declare interface GalleryImageVersions {
    /**
     * List gallery Image Versions in a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
     *                         Versions are to be listed.
     * @param options The options parameters.
     */
    listByGalleryImage(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImageVersionsListByGalleryImageOptionalParams): PagedAsyncIterableIterator<GalleryImageVersion>;
    /**
     * Create or update a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
     *                         created.
     * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to follow
     *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
     *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
     *                            operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: GalleryImageVersion, options?: GalleryImageVersionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImageVersionsCreateOrUpdateResponse>, GalleryImageVersionsCreateOrUpdateResponse>>;
    /**
     * Create or update a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
     *                         created.
     * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to follow
     *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
     *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
     *                            operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: GalleryImageVersion, options?: GalleryImageVersionsCreateOrUpdateOptionalParams): Promise<GalleryImageVersionsCreateOrUpdateResponse>;
    /**
     * Update a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
     *                         updated.
     * @param galleryImageVersionName The name of the gallery Image Version to be updated. Needs to follow
     *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
     *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryImageVersion Parameters supplied to the update gallery Image Version operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: GalleryImageVersionUpdate, options?: GalleryImageVersionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImageVersionsUpdateResponse>, GalleryImageVersionsUpdateResponse>>;
    /**
     * Update a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
     *                         updated.
     * @param galleryImageVersionName The name of the gallery Image Version to be updated. Needs to follow
     *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
     *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     * @param galleryImageVersion Parameters supplied to the update gallery Image Version operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: GalleryImageVersionUpdate, options?: GalleryImageVersionsUpdateOptionalParams): Promise<GalleryImageVersionsUpdateResponse>;
    /**
     * Retrieves information about a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
     * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: GalleryImageVersionsGetOptionalParams): Promise<GalleryImageVersionsGetResponse>;
    /**
     * Delete a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
     * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: GalleryImageVersionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a gallery Image Version.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
     * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
     * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: GalleryImageVersionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface GalleryImageVersionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type GalleryImageVersionsCreateOrUpdateResponse = GalleryImageVersion;

/** Optional parameters. */
export declare interface GalleryImageVersionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GalleryImageVersionsGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: ReplicationStatusTypes;
}

/** Contains response data for the get operation. */
export declare type GalleryImageVersionsGetResponse = GalleryImageVersion;

/** Optional parameters. */
export declare interface GalleryImageVersionsListByGalleryImageNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryImageNext operation. */
export declare type GalleryImageVersionsListByGalleryImageNextResponse = GalleryImageVersionList;

/** Optional parameters. */
export declare interface GalleryImageVersionsListByGalleryImageOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByGalleryImage operation. */
export declare type GalleryImageVersionsListByGalleryImageResponse = GalleryImageVersionList;

/** This is the storage profile of a Gallery Image Version. */
export declare interface GalleryImageVersionStorageProfile {
    /** The gallery artifact version source. */
    source?: GalleryArtifactVersionSource;
    /** This is the OS disk image. */
    osDiskImage?: GalleryOSDiskImage;
    /** A list of data disk images. */
    dataDiskImages?: GalleryDataDiskImage[];
}

/** Optional parameters. */
export declare interface GalleryImageVersionsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type GalleryImageVersionsUpdateResponse = GalleryImageVersion;

/** Specifies information about the gallery Image Version that you want to update. */
export declare type GalleryImageVersionUpdate = UpdateResourceDefinition & {
    /** The publishing profile of a gallery Image Version. */
    publishingProfile?: GalleryImageVersionPublishingProfile;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryImageVersionPropertiesProvisioningState;
    /** This is the storage profile of a Gallery Image Version. */
    storageProfile?: GalleryImageVersionStorageProfile;
    /**
     * This is the replication status of the gallery Image Version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationStatus?: ReplicationStatus;
};

/** The List Galleries operation response. */
export declare interface GalleryList {
    /** A list of galleries. */
    value: Gallery[];
    /** The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries. */
    nextLink?: string;
}

/** This is the OS disk image. */
export declare type GalleryOSDiskImage = GalleryDiskImage & {};

/**
 * Defines values for GalleryPropertiesProvisioningState. \
 * {@link KnownGalleryPropertiesProvisioningState} can be used interchangeably with GalleryPropertiesProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export declare type GalleryPropertiesProvisioningState = string;

/** Specifies information about the Shared Image Gallery that you want to update. */
export declare type GalleryUpdate = UpdateResourceDefinition & {
    /** The description of this Shared Image Gallery resource. This property is updatable. */
    description?: string;
    /** Describes the gallery unique name. */
    identifier?: GalleryIdentifier;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: GalleryPropertiesProvisioningState;
};

/** Data used for requesting a SAS. */
export declare interface GrantAccessData {
    access: AccessLevel;
    /** Time duration in seconds until the SAS access expires. */
    durationInSeconds: number;
}

/** Specifies the hardware settings for the virtual machine. */
export declare interface HardwareProfile {
    /** Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes) */
    vmSize?: VirtualMachineSizeTypes;
}

/** Defines values for HostCaching. */
export declare type HostCaching = "None" | "ReadOnly" | "ReadWrite";

/**
 * Defines values for HyperVGeneration. \
 * {@link KnownHyperVGeneration} can be used interchangeably with HyperVGeneration,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export declare type HyperVGeneration = string;

/**
 * Defines values for HyperVGenerationType. \
 * {@link KnownHyperVGenerationType} can be used interchangeably with HyperVGenerationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export declare type HyperVGenerationType = string;

/**
 * Defines values for HyperVGenerationTypes. \
 * {@link KnownHyperVGenerationTypes} can be used interchangeably with HyperVGenerationTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **V1** \
 * **V2**
 */
export declare type HyperVGenerationTypes = string;

/** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
declare type Image_2 = Resource & {
    /** The source virtual machine from which Image is created. */
    sourceVirtualMachine?: SubResource;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: ImageStorageProfile;
    /**
     * The provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Gets the HyperVGenerationType of the VirtualMachine created from the image */
    hyperVGeneration?: HyperVGenerationTypes;
};
export { Image_2 as Image }

/** Describes a data disk. */
export declare type ImageDataDisk = ImageDisk & {
    /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
    lun: number;
};

/** Describes a image disk. */
export declare interface ImageDisk {
    /** The snapshot. */
    snapshot?: SubResource;
    /** The managedDisk. */
    managedDisk?: SubResource;
    /** The Virtual Hard Disk. */
    blobUri?: string;
    /** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
    caching?: CachingTypes;
    /** Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
    storageAccountType?: StorageAccountTypes;
    /** Specifies the customer managed disk encryption set resource id for the managed image disk. */
    diskEncryptionSet?: DiskEncryptionSetParameters;
}

/** The source image used for creating the disk. */
export declare interface ImageDiskReference {
    /** A relative uri containing either a Platform Image Repository or user image reference. */
    id: string;
    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    lun?: number;
}

/** The List Image operation response. */
export declare interface ImageListResult {
    /** The list of Images. */
    value: Image_2[];
    /** The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images. */
    nextLink?: string;
}

/** Describes an Operating System disk. */
export declare type ImageOSDisk = ImageDisk & {
    /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    osType: OperatingSystemTypes;
    /** The OS State. */
    osState: OperatingSystemStateTypes;
};

/** Describes the gallery Image Definition purchase plan. This is used by marketplace images. */
export declare interface ImagePurchasePlan {
    /** The plan ID. */
    name?: string;
    /** The publisher ID. */
    publisher?: string;
    /** The product ID. */
    product?: string;
}

/** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set. */
export declare type ImageReference = SubResource & {
    /** The image publisher. */
    publisher?: string;
    /** Specifies the offer of the platform image or marketplace image used to create the virtual machine. */
    offer?: string;
    /** The image SKU. */
    sku?: string;
    /** Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. */
    version?: string;
    /**
     * Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly exactVersion?: string;
};

/** Interface representing a Images. */
export declare interface Images {
    /**
     * Gets the list of images under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ImagesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Image_2>;
    /**
     * Gets the list of Images in the subscription. Use nextLink property in the response to get the next
     * page of Images. Do this till nextLink is null to fetch all the Images.
     * @param options The options parameters.
     */
    list(options?: ImagesListOptionalParams): PagedAsyncIterableIterator<Image_2>;
    /**
     * Create or update an image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param parameters Parameters supplied to the Create Image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, imageName: string, parameters: Image_2, options?: ImagesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ImagesCreateOrUpdateResponse>, ImagesCreateOrUpdateResponse>>;
    /**
     * Create or update an image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param parameters Parameters supplied to the Create Image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, imageName: string, parameters: Image_2, options?: ImagesCreateOrUpdateOptionalParams): Promise<ImagesCreateOrUpdateResponse>;
    /**
     * Update an image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param parameters Parameters supplied to the Update Image operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, imageName: string, parameters: ImageUpdate, options?: ImagesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ImagesUpdateResponse>, ImagesUpdateResponse>>;
    /**
     * Update an image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param parameters Parameters supplied to the Update Image operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, imageName: string, parameters: ImageUpdate, options?: ImagesUpdateOptionalParams): Promise<ImagesUpdateResponse>;
    /**
     * Deletes an Image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, imageName: string, options?: ImagesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an Image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, imageName: string, options?: ImagesDeleteOptionalParams): Promise<void>;
    /**
     * Gets an image.
     * @param resourceGroupName The name of the resource group.
     * @param imageName The name of the image.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, imageName: string, options?: ImagesGetOptionalParams): Promise<ImagesGetResponse>;
}

/** Optional parameters. */
export declare interface ImagesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ImagesCreateOrUpdateResponse = Image_2;

/** Optional parameters. */
export declare interface ImagesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ImagesGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type ImagesGetResponse = Image_2;

/** Optional parameters. */
export declare interface ImagesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ImagesListByResourceGroupNextResponse = ImageListResult;

/** Optional parameters. */
export declare interface ImagesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ImagesListByResourceGroupResponse = ImageListResult;

/** Optional parameters. */
export declare interface ImagesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ImagesListNextResponse = ImageListResult;

/** Optional parameters. */
export declare interface ImagesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ImagesListResponse = ImageListResult;

/** Describes a storage profile. */
export declare interface ImageStorageProfile {
    /** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    osDisk?: ImageOSDisk;
    /** Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    dataDisks?: ImageDataDisk[];
    /** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). */
    zoneResilient?: boolean;
}

/** Optional parameters. */
export declare interface ImagesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ImagesUpdateResponse = Image_2;

/** The source user image virtual hard disk. Only tags may be updated. */
export declare type ImageUpdate = UpdateResource & {
    /** The source virtual machine from which Image is created. */
    sourceVirtualMachine?: SubResource;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: ImageStorageProfile;
    /**
     * The provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Gets the HyperVGenerationType of the VirtualMachine created from the image */
    hyperVGeneration?: HyperVGenerationTypes;
};

/** Inner error details. */
export declare interface InnerError {
    /** The exception type. */
    exceptiontype?: string;
    /** The internal error message or exception dump. */
    errordetail?: string;
}

/** Instance view status. */
export declare interface InstanceViewStatus {
    /** The status code. */
    code?: string;
    /** The level code. */
    level?: StatusLevelTypes;
    /** The short localizable label for the status. */
    displayStatus?: string;
    /** The detailed status message, including for alerts and error messages. */
    message?: string;
    /** The time of the status. */
    time?: Date;
}

/** Defines values for IntervalInMins. */
export declare type IntervalInMins = "ThreeMins" | "FiveMins" | "ThirtyMins" | "SixtyMins";

/**
 * Defines values for IPVersion. \
 * {@link KnownIPVersion} can be used interchangeably with IPVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPv4** \
 * **IPv6**
 */
export declare type IPVersion = string;

/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
export declare interface KeyVaultAndKeyReference {
    /** Resource id of the KeyVault containing the key or secret */
    sourceVault: SourceVault;
    /** Url pointing to a key or secret in KeyVault */
    keyUrl: string;
}

/** Key Vault Secret Url and vault id of the encryption key */
export declare interface KeyVaultAndSecretReference {
    /** Resource id of the KeyVault containing the key or secret */
    sourceVault: SourceVault;
    /** Url pointing to a key or secret in KeyVault */
    secretUrl: string;
}

/** Describes a reference to Key Vault Key */
export declare interface KeyVaultKeyReference {
    /** The URL referencing a key encryption key in Key Vault. */
    keyUrl: string;
    /** The relative URL of the Key Vault containing the key. */
    sourceVault: SubResource;
}

/** Describes a reference to Key Vault Secret */
export declare interface KeyVaultSecretReference {
    /** The URL referencing a secret in a Key Vault. */
    secretUrl: string;
    /** The relative URL of the Key Vault containing the secret. */
    sourceVault: SubResource;
}

/** Known values of {@link AccessLevel} that the service accepts. */
export declare enum KnownAccessLevel {
    None = "None",
    Read = "Read",
    Write = "Write"
}

/** Known values of {@link AggregatedReplicationState} that the service accepts. */
export declare enum KnownAggregatedReplicationState {
    Unknown = "Unknown",
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed"
}

/** Known values of {@link AvailabilitySetSkuTypes} that the service accepts. */
export declare enum KnownAvailabilitySetSkuTypes {
    Classic = "Classic",
    Aligned = "Aligned"
}

/** Known values of {@link ContainerServiceMasterProfileCount} that the service accepts. */
export declare enum KnownContainerServiceMasterProfileCount {
    One = 1,
    Three = 3,
    Five = 5
}

/** Known values of {@link ContainerServiceVMSizeTypes} that the service accepts. */
export declare enum KnownContainerServiceVMSizeTypes {
    StandardA0 = "Standard_A0",
    StandardA1 = "Standard_A1",
    StandardA2 = "Standard_A2",
    StandardA3 = "Standard_A3",
    StandardA4 = "Standard_A4",
    StandardA5 = "Standard_A5",
    StandardA6 = "Standard_A6",
    StandardA7 = "Standard_A7",
    StandardA8 = "Standard_A8",
    StandardA9 = "Standard_A9",
    StandardA10 = "Standard_A10",
    StandardA11 = "Standard_A11",
    StandardD1 = "Standard_D1",
    StandardD2 = "Standard_D2",
    StandardD3 = "Standard_D3",
    StandardD4 = "Standard_D4",
    StandardD11 = "Standard_D11",
    StandardD12 = "Standard_D12",
    StandardD13 = "Standard_D13",
    StandardD14 = "Standard_D14",
    StandardD1V2 = "Standard_D1_v2",
    StandardD2V2 = "Standard_D2_v2",
    StandardD3V2 = "Standard_D3_v2",
    StandardD4V2 = "Standard_D4_v2",
    StandardD5V2 = "Standard_D5_v2",
    StandardD11V2 = "Standard_D11_v2",
    StandardD12V2 = "Standard_D12_v2",
    StandardD13V2 = "Standard_D13_v2",
    StandardD14V2 = "Standard_D14_v2",
    StandardG1 = "Standard_G1",
    StandardG2 = "Standard_G2",
    StandardG3 = "Standard_G3",
    StandardG4 = "Standard_G4",
    StandardG5 = "Standard_G5",
    StandardDS1 = "Standard_DS1",
    StandardDS2 = "Standard_DS2",
    StandardDS3 = "Standard_DS3",
    StandardDS4 = "Standard_DS4",
    StandardDS11 = "Standard_DS11",
    StandardDS12 = "Standard_DS12",
    StandardDS13 = "Standard_DS13",
    StandardDS14 = "Standard_DS14",
    StandardGS1 = "Standard_GS1",
    StandardGS2 = "Standard_GS2",
    StandardGS3 = "Standard_GS3",
    StandardGS4 = "Standard_GS4",
    StandardGS5 = "Standard_GS5"
}

/** Known values of {@link DiffDiskOptions} that the service accepts. */
export declare enum KnownDiffDiskOptions {
    Local = "Local"
}

/** Known values of {@link DiffDiskPlacement} that the service accepts. */
export declare enum KnownDiffDiskPlacement {
    CacheDisk = "CacheDisk",
    ResourceDisk = "ResourceDisk"
}

/** Known values of {@link DiskCreateOption} that the service accepts. */
export declare enum KnownDiskCreateOption {
    /** Create an empty data disk of a size given by diskSizeGB. */
    Empty = "Empty",
    /** Disk will be attached to a VM. */
    Attach = "Attach",
    /** Create a new disk from a platform image specified by the given imageReference or galleryImageReference. */
    FromImage = "FromImage",
    /** Create a disk by importing from a blob specified by a sourceUri in a storage account specified by storageAccountId. */
    Import = "Import",
    /** Create a new disk or snapshot by copying from a disk or snapshot specified by the given sourceResourceId. */
    Copy = "Copy",
    /** Create a new disk by copying from a backup recovery point. */
    Restore = "Restore",
    /** Create a new disk by obtaining a write token and using it to directly upload the contents of the disk. */
    Upload = "Upload"
}

/** Known values of {@link DiskCreateOptionTypes} that the service accepts. */
export declare enum KnownDiskCreateOptionTypes {
    FromImage = "FromImage",
    Empty = "Empty",
    Attach = "Attach"
}

/** Known values of {@link DiskEncryptionSetIdentityType} that the service accepts. */
export declare enum KnownDiskEncryptionSetIdentityType {
    SystemAssigned = "SystemAssigned"
}

/** Known values of {@link DiskState} that the service accepts. */
export declare enum KnownDiskState {
    /** The disk is not being used and can be attached to a VM. */
    Unattached = "Unattached",
    /** The disk is currently mounted to a running VM. */
    Attached = "Attached",
    /** The disk is mounted to a stopped-deallocated VM */
    Reserved = "Reserved",
    /** The disk currently has an Active SAS Uri associated with it. */
    ActiveSAS = "ActiveSAS",
    /** A disk is ready to be created by upload by requesting a write token. */
    ReadyToUpload = "ReadyToUpload",
    /** A disk is created for upload and a write token has been issued for uploading to it. */
    ActiveUpload = "ActiveUpload"
}

/** Known values of {@link DiskStorageAccountTypes} that the service accepts. */
export declare enum KnownDiskStorageAccountTypes {
    /** Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access. */
    StandardLRS = "Standard_LRS",
    /** Premium SSD locally redundant storage. Best for production and performance sensitive workloads. */
    PremiumLRS = "Premium_LRS",
    /** Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test. */
    StandardSSDLRS = "StandardSSD_LRS",
    /** Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads. */
    UltraSSDLRS = "UltraSSD_LRS"
}

/** Known values of {@link EncryptionType} that the service accepts. */
export declare enum KnownEncryptionType {
    /** Disk is encrypted with XStore managed key at rest. It is the default encryption type. */
    EncryptionAtRestWithPlatformKey = "EncryptionAtRestWithPlatformKey",
    /** Disk is encrypted with Customer managed key at rest. */
    EncryptionAtRestWithCustomerKey = "EncryptionAtRestWithCustomerKey"
}

/** Known values of {@link GalleryApplicationVersionPropertiesProvisioningState} that the service accepts. */
export declare enum KnownGalleryApplicationVersionPropertiesProvisioningState {
    Creating = "Creating",
    Updating = "Updating",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Deleting = "Deleting",
    Migrating = "Migrating"
}

/** Known values of {@link GalleryImagePropertiesProvisioningState} that the service accepts. */
export declare enum KnownGalleryImagePropertiesProvisioningState {
    Creating = "Creating",
    Updating = "Updating",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Deleting = "Deleting",
    Migrating = "Migrating"
}

/** Known values of {@link GalleryImageVersionPropertiesProvisioningState} that the service accepts. */
export declare enum KnownGalleryImageVersionPropertiesProvisioningState {
    Creating = "Creating",
    Updating = "Updating",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Deleting = "Deleting",
    Migrating = "Migrating"
}

/** Known values of {@link GalleryPropertiesProvisioningState} that the service accepts. */
export declare enum KnownGalleryPropertiesProvisioningState {
    Creating = "Creating",
    Updating = "Updating",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Deleting = "Deleting",
    Migrating = "Migrating"
}

/** Known values of {@link HyperVGeneration} that the service accepts. */
export declare enum KnownHyperVGeneration {
    V1 = "V1",
    V2 = "V2"
}

/** Known values of {@link HyperVGenerationType} that the service accepts. */
export declare enum KnownHyperVGenerationType {
    V1 = "V1",
    V2 = "V2"
}

/** Known values of {@link HyperVGenerationTypes} that the service accepts. */
export declare enum KnownHyperVGenerationTypes {
    V1 = "V1",
    V2 = "V2"
}

/** Known values of {@link IPVersion} that the service accepts. */
export declare enum KnownIPVersion {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}

/** Known values of {@link OrchestrationServiceNames} that the service accepts. */
export declare enum KnownOrchestrationServiceNames {
    AutomaticRepairs = "AutomaticRepairs",
    DummyOrchestrationServiceName = "DummyOrchestrationServiceName"
}

/** Known values of {@link OrchestrationServiceState} that the service accepts. */
export declare enum KnownOrchestrationServiceState {
    NotRunning = "NotRunning",
    Running = "Running",
    Suspended = "Suspended"
}

/** Known values of {@link OrchestrationServiceStateAction} that the service accepts. */
export declare enum KnownOrchestrationServiceStateAction {
    Resume = "Resume",
    Suspend = "Suspend"
}

/** Known values of {@link ProximityPlacementGroupType} that the service accepts. */
export declare enum KnownProximityPlacementGroupType {
    Standard = "Standard",
    Ultra = "Ultra"
}

/** Known values of {@link ReplicationState} that the service accepts. */
export declare enum KnownReplicationState {
    Unknown = "Unknown",
    Replicating = "Replicating",
    Completed = "Completed",
    Failed = "Failed"
}

/** Known values of {@link ReplicationStatusTypes} that the service accepts. */
export declare enum KnownReplicationStatusTypes {
    ReplicationStatus = "ReplicationStatus"
}

/** Known values of {@link SnapshotStorageAccountTypes} that the service accepts. */
export declare enum KnownSnapshotStorageAccountTypes {
    /** Standard HDD locally redundant storage */
    StandardLRS = "Standard_LRS",
    /** Premium SSD locally redundant storage */
    PremiumLRS = "Premium_LRS",
    /** Standard zone redundant storage */
    StandardZRS = "Standard_ZRS"
}

/** Known values of {@link StorageAccountType} that the service accepts. */
export declare enum KnownStorageAccountType {
    StandardLRS = "Standard_LRS",
    StandardZRS = "Standard_ZRS",
    PremiumLRS = "Premium_LRS"
}

/** Known values of {@link StorageAccountTypes} that the service accepts. */
export declare enum KnownStorageAccountTypes {
    StandardLRS = "Standard_LRS",
    PremiumLRS = "Premium_LRS",
    StandardSSDLRS = "StandardSSD_LRS",
    UltraSSDLRS = "UltraSSD_LRS"
}

/** Known values of {@link VirtualMachineEvictionPolicyTypes} that the service accepts. */
export declare enum KnownVirtualMachineEvictionPolicyTypes {
    Deallocate = "Deallocate",
    Delete = "Delete"
}

/** Known values of {@link VirtualMachinePriorityTypes} that the service accepts. */
export declare enum KnownVirtualMachinePriorityTypes {
    Regular = "Regular",
    Low = "Low",
    Spot = "Spot"
}

/** Known values of {@link VirtualMachineScaleSetScaleInRules} that the service accepts. */
export declare enum KnownVirtualMachineScaleSetScaleInRules {
    Default = "Default",
    OldestVM = "OldestVM",
    NewestVM = "NewestVM"
}

/** Known values of {@link VirtualMachineSizeTypes} that the service accepts. */
export declare enum KnownVirtualMachineSizeTypes {
    BasicA0 = "Basic_A0",
    BasicA1 = "Basic_A1",
    BasicA2 = "Basic_A2",
    BasicA3 = "Basic_A3",
    BasicA4 = "Basic_A4",
    StandardA0 = "Standard_A0",
    StandardA1 = "Standard_A1",
    StandardA2 = "Standard_A2",
    StandardA3 = "Standard_A3",
    StandardA4 = "Standard_A4",
    StandardA5 = "Standard_A5",
    StandardA6 = "Standard_A6",
    StandardA7 = "Standard_A7",
    StandardA8 = "Standard_A8",
    StandardA9 = "Standard_A9",
    StandardA10 = "Standard_A10",
    StandardA11 = "Standard_A11",
    StandardA1V2 = "Standard_A1_v2",
    StandardA2V2 = "Standard_A2_v2",
    StandardA4V2 = "Standard_A4_v2",
    StandardA8V2 = "Standard_A8_v2",
    StandardA2MV2 = "Standard_A2m_v2",
    StandardA4MV2 = "Standard_A4m_v2",
    StandardA8MV2 = "Standard_A8m_v2",
    StandardB1S = "Standard_B1s",
    StandardB1Ms = "Standard_B1ms",
    StandardB2S = "Standard_B2s",
    StandardB2Ms = "Standard_B2ms",
    StandardB4Ms = "Standard_B4ms",
    StandardB8Ms = "Standard_B8ms",
    StandardD1 = "Standard_D1",
    StandardD2 = "Standard_D2",
    StandardD3 = "Standard_D3",
    StandardD4 = "Standard_D4",
    StandardD11 = "Standard_D11",
    StandardD12 = "Standard_D12",
    StandardD13 = "Standard_D13",
    StandardD14 = "Standard_D14",
    StandardD1V2 = "Standard_D1_v2",
    StandardD2V2 = "Standard_D2_v2",
    StandardD3V2 = "Standard_D3_v2",
    StandardD4V2 = "Standard_D4_v2",
    StandardD5V2 = "Standard_D5_v2",
    StandardD2V3 = "Standard_D2_v3",
    StandardD4V3 = "Standard_D4_v3",
    StandardD8V3 = "Standard_D8_v3",
    StandardD16V3 = "Standard_D16_v3",
    StandardD32V3 = "Standard_D32_v3",
    StandardD64V3 = "Standard_D64_v3",
    StandardD2SV3 = "Standard_D2s_v3",
    StandardD4SV3 = "Standard_D4s_v3",
    StandardD8SV3 = "Standard_D8s_v3",
    StandardD16SV3 = "Standard_D16s_v3",
    StandardD32SV3 = "Standard_D32s_v3",
    StandardD64SV3 = "Standard_D64s_v3",
    StandardD11V2 = "Standard_D11_v2",
    StandardD12V2 = "Standard_D12_v2",
    StandardD13V2 = "Standard_D13_v2",
    StandardD14V2 = "Standard_D14_v2",
    StandardD15V2 = "Standard_D15_v2",
    StandardDS1 = "Standard_DS1",
    StandardDS2 = "Standard_DS2",
    StandardDS3 = "Standard_DS3",
    StandardDS4 = "Standard_DS4",
    StandardDS11 = "Standard_DS11",
    StandardDS12 = "Standard_DS12",
    StandardDS13 = "Standard_DS13",
    StandardDS14 = "Standard_DS14",
    StandardDS1V2 = "Standard_DS1_v2",
    StandardDS2V2 = "Standard_DS2_v2",
    StandardDS3V2 = "Standard_DS3_v2",
    StandardDS4V2 = "Standard_DS4_v2",
    StandardDS5V2 = "Standard_DS5_v2",
    StandardDS11V2 = "Standard_DS11_v2",
    StandardDS12V2 = "Standard_DS12_v2",
    StandardDS13V2 = "Standard_DS13_v2",
    StandardDS14V2 = "Standard_DS14_v2",
    StandardDS15V2 = "Standard_DS15_v2",
    StandardDS134V2 = "Standard_DS13-4_v2",
    StandardDS132V2 = "Standard_DS13-2_v2",
    StandardDS148V2 = "Standard_DS14-8_v2",
    StandardDS144V2 = "Standard_DS14-4_v2",
    StandardE2V3 = "Standard_E2_v3",
    StandardE4V3 = "Standard_E4_v3",
    StandardE8V3 = "Standard_E8_v3",
    StandardE16V3 = "Standard_E16_v3",
    StandardE32V3 = "Standard_E32_v3",
    StandardE64V3 = "Standard_E64_v3",
    StandardE2SV3 = "Standard_E2s_v3",
    StandardE4SV3 = "Standard_E4s_v3",
    StandardE8SV3 = "Standard_E8s_v3",
    StandardE16SV3 = "Standard_E16s_v3",
    StandardE32SV3 = "Standard_E32s_v3",
    StandardE64SV3 = "Standard_E64s_v3",
    StandardE3216V3 = "Standard_E32-16_v3",
    StandardE328SV3 = "Standard_E32-8s_v3",
    StandardE6432SV3 = "Standard_E64-32s_v3",
    StandardE6416SV3 = "Standard_E64-16s_v3",
    StandardF1 = "Standard_F1",
    StandardF2 = "Standard_F2",
    StandardF4 = "Standard_F4",
    StandardF8 = "Standard_F8",
    StandardF16 = "Standard_F16",
    StandardF1S = "Standard_F1s",
    StandardF2S = "Standard_F2s",
    StandardF4S = "Standard_F4s",
    StandardF8S = "Standard_F8s",
    StandardF16S = "Standard_F16s",
    StandardF2SV2 = "Standard_F2s_v2",
    StandardF4SV2 = "Standard_F4s_v2",
    StandardF8SV2 = "Standard_F8s_v2",
    StandardF16SV2 = "Standard_F16s_v2",
    StandardF32SV2 = "Standard_F32s_v2",
    StandardF64SV2 = "Standard_F64s_v2",
    StandardF72SV2 = "Standard_F72s_v2",
    StandardG1 = "Standard_G1",
    StandardG2 = "Standard_G2",
    StandardG3 = "Standard_G3",
    StandardG4 = "Standard_G4",
    StandardG5 = "Standard_G5",
    StandardGS1 = "Standard_GS1",
    StandardGS2 = "Standard_GS2",
    StandardGS3 = "Standard_GS3",
    StandardGS4 = "Standard_GS4",
    StandardGS5 = "Standard_GS5",
    StandardGS48 = "Standard_GS4-8",
    StandardGS44 = "Standard_GS4-4",
    StandardGS516 = "Standard_GS5-16",
    StandardGS58 = "Standard_GS5-8",
    StandardH8 = "Standard_H8",
    StandardH16 = "Standard_H16",
    StandardH8M = "Standard_H8m",
    StandardH16M = "Standard_H16m",
    StandardH16R = "Standard_H16r",
    StandardH16Mr = "Standard_H16mr",
    StandardL4S = "Standard_L4s",
    StandardL8S = "Standard_L8s",
    StandardL16S = "Standard_L16s",
    StandardL32S = "Standard_L32s",
    StandardM64S = "Standard_M64s",
    StandardM64Ms = "Standard_M64ms",
    StandardM128S = "Standard_M128s",
    StandardM128Ms = "Standard_M128ms",
    StandardM6432Ms = "Standard_M64-32ms",
    StandardM6416Ms = "Standard_M64-16ms",
    StandardM12864Ms = "Standard_M128-64ms",
    StandardM12832Ms = "Standard_M128-32ms",
    StandardNC6 = "Standard_NC6",
    StandardNC12 = "Standard_NC12",
    StandardNC24 = "Standard_NC24",
    StandardNC24R = "Standard_NC24r",
    StandardNC6SV2 = "Standard_NC6s_v2",
    StandardNC12SV2 = "Standard_NC12s_v2",
    StandardNC24SV2 = "Standard_NC24s_v2",
    StandardNC24RsV2 = "Standard_NC24rs_v2",
    StandardNC6SV3 = "Standard_NC6s_v3",
    StandardNC12SV3 = "Standard_NC12s_v3",
    StandardNC24SV3 = "Standard_NC24s_v3",
    StandardNC24RsV3 = "Standard_NC24rs_v3",
    StandardND6S = "Standard_ND6s",
    StandardND12S = "Standard_ND12s",
    StandardND24S = "Standard_ND24s",
    StandardND24Rs = "Standard_ND24rs",
    StandardNV6 = "Standard_NV6",
    StandardNV12 = "Standard_NV12",
    StandardNV24 = "Standard_NV24"
}

/** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
export declare interface LinuxConfiguration {
    /** Specifies whether password authentication should be disabled. */
    disablePasswordAuthentication?: boolean;
    /** Specifies the ssh key configuration for a Linux OS. */
    ssh?: SshConfiguration;
    /** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
    provisionVMAgent?: boolean;
}

/** The List Usages operation response. */
export declare interface ListUsagesResult {
    /** The list of compute resource usages. */
    value: Usage[];
    /** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
    nextLink?: string;
}

/** Interface representing a LogAnalytics. */
export declare interface LogAnalytics {
    /**
     * Export logs that show Api requests made by this subscription in the given time window to show
     * throttling activities.
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
     * @param options The options parameters.
     */
    beginExportRequestRateByInterval(location: string, parameters: RequestRateByIntervalInput, options?: LogAnalyticsExportRequestRateByIntervalOptionalParams): Promise<PollerLike<PollOperationState<LogAnalyticsExportRequestRateByIntervalResponse>, LogAnalyticsExportRequestRateByIntervalResponse>>;
    /**
     * Export logs that show Api requests made by this subscription in the given time window to show
     * throttling activities.
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
     * @param options The options parameters.
     */
    beginExportRequestRateByIntervalAndWait(location: string, parameters: RequestRateByIntervalInput, options?: LogAnalyticsExportRequestRateByIntervalOptionalParams): Promise<LogAnalyticsExportRequestRateByIntervalResponse>;
    /**
     * Export logs that show total throttled Api requests for this subscription in the given time window.
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
     * @param options The options parameters.
     */
    beginExportThrottledRequests(location: string, parameters: ThrottledRequestsInput, options?: LogAnalyticsExportThrottledRequestsOptionalParams): Promise<PollerLike<PollOperationState<LogAnalyticsExportThrottledRequestsResponse>, LogAnalyticsExportThrottledRequestsResponse>>;
    /**
     * Export logs that show total throttled Api requests for this subscription in the given time window.
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
     * @param options The options parameters.
     */
    beginExportThrottledRequestsAndWait(location: string, parameters: ThrottledRequestsInput, options?: LogAnalyticsExportThrottledRequestsOptionalParams): Promise<LogAnalyticsExportThrottledRequestsResponse>;
}

/** Optional parameters. */
export declare interface LogAnalyticsExportRequestRateByIntervalOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the exportRequestRateByInterval operation. */
export declare type LogAnalyticsExportRequestRateByIntervalResponse = LogAnalyticsOperationResult;

/** Optional parameters. */
export declare interface LogAnalyticsExportThrottledRequestsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the exportThrottledRequests operation. */
export declare type LogAnalyticsExportThrottledRequestsResponse = LogAnalyticsOperationResult;

/** Api input base class for LogAnalytics Api. */
export declare interface LogAnalyticsInputBase {
    /** SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to. */
    blobContainerSasUri: string;
    /** From time of the query */
    fromTime: Date;
    /** To time of the query */
    toTime: Date;
    /** Group query result by Throttle Policy applied. */
    groupByThrottlePolicy?: boolean;
    /** Group query result by Operation Name. */
    groupByOperationName?: boolean;
    /** Group query result by Resource Name. */
    groupByResourceName?: boolean;
}

/** LogAnalytics operation status response */
export declare interface LogAnalyticsOperationResult {
    /**
     * LogAnalyticsOutput
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: LogAnalyticsOutput;
}

/** LogAnalytics output properties */
export declare interface LogAnalyticsOutput {
    /**
     * Output file Uri path to blob container.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly output?: string;
}

/** Defines values for MaintenanceOperationResultCodeTypes. */
export declare type MaintenanceOperationResultCodeTypes = "None" | "RetryLater" | "MaintenanceAborted" | "MaintenanceCompleted";

/** Maintenance Operation Status. */
export declare interface MaintenanceRedeployStatus {
    /** True, if customer is allowed to perform Maintenance. */
    isCustomerInitiatedMaintenanceAllowed?: boolean;
    /** Start Time for the Pre Maintenance Window. */
    preMaintenanceWindowStartTime?: Date;
    /** End Time for the Pre Maintenance Window. */
    preMaintenanceWindowEndTime?: Date;
    /** Start Time for the Maintenance Window. */
    maintenanceWindowStartTime?: Date;
    /** End Time for the Maintenance Window. */
    maintenanceWindowEndTime?: Date;
    /** The Last Maintenance Operation Result Code. */
    lastOperationResultCode?: MaintenanceOperationResultCodeTypes;
    /** Message returned for the last Maintenance Operation. */
    lastOperationMessage?: string;
}

/** The managed artifact. */
export declare interface ManagedArtifact {
    /** The managed artifact id. */
    id: string;
}

/** The parameters of a managed disk. */
export declare type ManagedDiskParameters = SubResource & {
    /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
    storageAccountType?: StorageAccountTypes;
    /** Specifies the customer managed disk encryption set resource id for the managed disk. */
    diskEncryptionSet?: DiskEncryptionSetParameters;
};

/** Describes a network interface reference. */
export declare type NetworkInterfaceReference = SubResource & {
    /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
    primary?: boolean;
};

/** Specifies the network interfaces of the virtual machine. */
export declare interface NetworkProfile {
    /** Specifies the list of resource Ids for the network interfaces associated with the virtual machine. */
    networkInterfaces?: NetworkInterfaceReference[];
}

/** Defines values for OperatingSystemStateTypes. */
export declare type OperatingSystemStateTypes = "Generalized" | "Specialized";

/** Defines values for OperatingSystemTypes. */
export declare type OperatingSystemTypes = "Windows" | "Linux";

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Gets a list of compute operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<ComputeOperationValue>;
}

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = ComputeOperationListResult;

/**
 * Defines values for OrchestrationServiceNames. \
 * {@link KnownOrchestrationServiceNames} can be used interchangeably with OrchestrationServiceNames,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AutomaticRepairs** \
 * **DummyOrchestrationServiceName**
 */
export declare type OrchestrationServiceNames = string;

/**
 * Defines values for OrchestrationServiceState. \
 * {@link KnownOrchestrationServiceState} can be used interchangeably with OrchestrationServiceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotRunning** \
 * **Running** \
 * **Suspended**
 */
export declare type OrchestrationServiceState = string;

/**
 * Defines values for OrchestrationServiceStateAction. \
 * {@link KnownOrchestrationServiceStateAction} can be used interchangeably with OrchestrationServiceStateAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Resume** \
 * **Suspend**
 */
export declare type OrchestrationServiceStateAction = string;

/** The input for OrchestrationServiceState */
export declare interface OrchestrationServiceStateInput {
    /** The name of the service. */
    serviceName: OrchestrationServiceNames;
    /** The action to be performed. */
    action: OrchestrationServiceStateAction;
}

/** Summary for an orchestration service of a virtual machine scale set. */
export declare interface OrchestrationServiceSummary {
    /**
     * The name of the service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceName?: OrchestrationServiceNames;
    /**
     * The current state of the service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceState?: OrchestrationServiceState;
}

/** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
export declare interface OSDisk {
    /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    osType?: OperatingSystemTypes;
    /** Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15 */
    encryptionSettings?: DiskEncryptionSettings;
    /** The disk name. */
    name?: string;
    /** The virtual hard disk. */
    vhd?: VirtualHardDisk;
    /** The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist. */
    image?: VirtualHardDisk;
    /** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None** for Standard storage. **ReadOnly** for Premium storage. */
    caching?: CachingTypes;
    /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
    writeAcceleratorEnabled?: boolean;
    /** Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine. */
    diffDiskSettings?: DiffDiskSettings;
    /** Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. */
    createOption: DiskCreateOptionTypes;
    /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** The managed disk parameters. */
    managedDisk?: ManagedDiskParameters;
}

/** Contains the os disk image information. */
export declare interface OSDiskImage {
    /** The operating system of the osDiskImage. */
    operatingSystem: OperatingSystemTypes;
}

/** Contains encryption settings for an OS disk image. */
export declare type OSDiskImageEncryption = DiskImageEncryption & {};

/** Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
export declare interface OSProfile {
    /** Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions). */
    computerName?: string;
    /** Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
    adminUsername?: string;
    /** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
    adminPassword?: string;
    /** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
    customData?: string;
    /** Specifies Windows operating system settings on the virtual machine. */
    windowsConfiguration?: WindowsConfiguration;
    /** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
    linuxConfiguration?: LinuxConfiguration;
    /** Specifies set of certificates that should be installed onto the virtual machine. */
    secrets?: VaultSecretGroup[];
    /** Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine. */
    allowExtensionOperations?: boolean;
    /** Specifies whether the guest provision signal is required to infer provision success of the virtual machine. */
    requireGuestProvisionSignal?: boolean;
}

/** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
export declare interface Plan {
    /** The plan ID. */
    name?: string;
    /** The publisher ID. */
    publisher?: string;
    /** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
    product?: string;
    /** The promotion code. */
    promotionCode?: string;
}

/** Defines values for ProtocolTypes. */
export declare type ProtocolTypes = "Http" | "Https";

/** Specifies information about the proximity placement group. */
export declare type ProximityPlacementGroup = Resource & {
    /** Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use. */
    proximityPlacementGroupType?: ProximityPlacementGroupType;
    /**
     * A list of references to all virtual machines in the proximity placement group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachines?: SubResourceWithColocationStatus[];
    /**
     * A list of references to all virtual machine scale sets in the proximity placement group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachineScaleSets?: SubResourceWithColocationStatus[];
    /**
     * A list of references to all availability sets in the proximity placement group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly availabilitySets?: SubResourceWithColocationStatus[];
    /** Describes colocation status of the Proximity Placement Group. */
    colocationStatus?: InstanceViewStatus;
};

/** The List Proximity Placement Group operation response. */
export declare interface ProximityPlacementGroupListResult {
    /** The list of proximity placement groups */
    value: ProximityPlacementGroup[];
    /** The URI to fetch the next page of proximity placement groups. */
    nextLink?: string;
}

/** Interface representing a ProximityPlacementGroups. */
export declare interface ProximityPlacementGroups {
    /**
     * Lists all proximity placement groups in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: ProximityPlacementGroupsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ProximityPlacementGroup>;
    /**
     * Lists all proximity placement groups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ProximityPlacementGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ProximityPlacementGroup>;
    /**
     * Create or update a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param parameters Parameters supplied to the Create Proximity Placement Group operation.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, proximityPlacementGroupName: string, parameters: ProximityPlacementGroup, options?: ProximityPlacementGroupsCreateOrUpdateOptionalParams): Promise<ProximityPlacementGroupsCreateOrUpdateResponse>;
    /**
     * Update a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param parameters Parameters supplied to the Update Proximity Placement Group operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, proximityPlacementGroupName: string, parameters: ProximityPlacementGroupUpdate, options?: ProximityPlacementGroupsUpdateOptionalParams): Promise<ProximityPlacementGroupsUpdateResponse>;
    /**
     * Delete a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, proximityPlacementGroupName: string, options?: ProximityPlacementGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about a proximity placement group .
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, proximityPlacementGroupName: string, options?: ProximityPlacementGroupsGetOptionalParams): Promise<ProximityPlacementGroupsGetResponse>;
}

/** Optional parameters. */
export declare interface ProximityPlacementGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ProximityPlacementGroupsCreateOrUpdateResponse = ProximityPlacementGroup;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ProximityPlacementGroupsGetOptionalParams extends coreClient.OperationOptions {
    /** includeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group. */
    includeColocationStatus?: string;
}

/** Contains response data for the get operation. */
export declare type ProximityPlacementGroupsGetResponse = ProximityPlacementGroup;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ProximityPlacementGroupsListByResourceGroupNextResponse = ProximityPlacementGroupListResult;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ProximityPlacementGroupsListByResourceGroupResponse = ProximityPlacementGroupListResult;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type ProximityPlacementGroupsListBySubscriptionNextResponse = ProximityPlacementGroupListResult;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type ProximityPlacementGroupsListBySubscriptionResponse = ProximityPlacementGroupListResult;

/** Optional parameters. */
export declare interface ProximityPlacementGroupsUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type ProximityPlacementGroupsUpdateResponse = ProximityPlacementGroup;

/**
 * Defines values for ProximityPlacementGroupType. \
 * {@link KnownProximityPlacementGroupType} can be used interchangeably with ProximityPlacementGroupType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Ultra**
 */
export declare type ProximityPlacementGroupType = string;

/** Specifies information about the proximity placement group. */
export declare type ProximityPlacementGroupUpdate = UpdateResource & {};

/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
export declare interface PurchasePlan {
    /** The publisher ID. */
    publisher: string;
    /** The plan ID. */
    name: string;
    /** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
    product: string;
}

/** The properties describe the recommended machine configuration for this Image Definition. These properties are updatable. */
export declare interface RecommendedMachineConfiguration {
    /** Describes the resource range. */
    vCPUs?: ResourceRange;
    /** Describes the resource range. */
    memory?: ResourceRange;
}

/** Response after calling a manual recovery walk */
export declare interface RecoveryWalkResponse {
    /**
     * Whether the recovery walk was performed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly walkPerformed?: boolean;
    /**
     * The next update domain that needs to be walked. Null means walk spanning all update domains has been completed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextPlatformUpdateDomain?: number;
}

/** This is the regional replication status. */
export declare interface RegionalReplicationStatus {
    /**
     * The region to which the gallery Image Version is being replicated to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly region?: string;
    /**
     * This is the regional replication state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ReplicationState;
    /**
     * The details of the replication status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly details?: string;
    /**
     * It indicates progress of the replication job.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly progress?: number;
}

/**
 * Defines values for ReplicationState. \
 * {@link KnownReplicationState} can be used interchangeably with ReplicationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Replicating** \
 * **Completed** \
 * **Failed**
 */
export declare type ReplicationState = string;

/** This is the replication status of the gallery Image Version. */
export declare interface ReplicationStatus {
    /**
     * This is the aggregated replication status based on all the regional replication status flags.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly aggregatedState?: AggregatedReplicationState;
    /**
     * This is a summary of replication status for each region.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly summary?: RegionalReplicationStatus[];
}

/**
 * Defines values for ReplicationStatusTypes. \
 * {@link KnownReplicationStatusTypes} can be used interchangeably with ReplicationStatusTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ReplicationStatus**
 */
export declare type ReplicationStatusTypes = string;

/** Api request input for LogAnalytics getRequestRateByInterval Api. */
export declare type RequestRateByIntervalInput = LogAnalyticsInputBase & {
    /** Interval value in minutes used to create LogAnalytics call rate logs. */
    intervalLength: IntervalInMins;
};

/** The Resource model definition. */
export declare interface Resource {
    /**
     * Resource Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource location */
    location: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Defines values for ResourceIdentityType. */
export declare type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "SystemAssigned, UserAssigned" | "None";

/** Describes the resource range. */
export declare interface ResourceRange {
    /** The minimum number of the resource. */
    min?: number;
    /** The maximum number of the resource. */
    max?: number;
}

/** Describes an available Compute SKU. */
export declare interface ResourceSku {
    /**
     * The type of resource the SKU applies to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceType?: string;
    /**
     * The name of SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: string;
    /**
     * The Size of the SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly size?: string;
    /**
     * The Family of this particular SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly family?: string;
    /**
     * The Kind of resources that are supported in this SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Specifies the number of virtual machines in the scale set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capacity?: ResourceSkuCapacity;
    /**
     * The set of locations that the SKU is available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locations?: string[];
    /**
     * A list of locations and availability zones in those locations where the SKU is available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locationInfo?: ResourceSkuLocationInfo[];
    /**
     * The api versions that support this SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly apiVersions?: string[];
    /**
     * Metadata for retrieving price info.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly costs?: ResourceSkuCosts[];
    /**
     * A name value pair to describe the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capabilities?: ResourceSkuCapabilities[];
    /**
     * The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restrictions?: ResourceSkuRestrictions[];
}

/** Describes The SKU capabilities object. */
export declare interface ResourceSkuCapabilities {
    /**
     * An invariant to describe the feature.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * An invariant if the feature is measured by quantity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
}

/** Describes scaling information of a SKU. */
export declare interface ResourceSkuCapacity {
    /**
     * The minimum capacity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minimum?: number;
    /**
     * The maximum capacity that can be set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximum?: number;
    /**
     * The default capacity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly default?: number;
    /**
     * The scale type applicable to the sku.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scaleType?: ResourceSkuCapacityScaleType;
}

/** Defines values for ResourceSkuCapacityScaleType. */
export declare type ResourceSkuCapacityScaleType = "Automatic" | "Manual" | "None";

/** Describes metadata for retrieving price info. */
export declare interface ResourceSkuCosts {
    /**
     * Used for querying price from commerce.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly meterID?: string;
    /**
     * The multiplier is needed to extend the base metered cost.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly quantity?: number;
    /**
     * An invariant to show the extended unit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly extendedUnit?: string;
}

export declare interface ResourceSkuLocationInfo {
    /**
     * Location of the SKU
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * List of availability zones where the SKU is supported.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zones?: string[];
    /**
     * Details of capabilities available to a SKU in specific zones.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zoneDetails?: ResourceSkuZoneDetails[];
}

export declare interface ResourceSkuRestrictionInfo {
    /**
     * Locations where the SKU is restricted
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locations?: string[];
    /**
     * List of availability zones where the SKU is restricted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zones?: string[];
}

/** Describes scaling information of a SKU. */
export declare interface ResourceSkuRestrictions {
    /**
     * The type of restrictions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: ResourceSkuRestrictionsType;
    /**
     * The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly values?: string[];
    /**
     * The information about the restriction where the SKU cannot be used.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restrictionInfo?: ResourceSkuRestrictionInfo;
    /**
     * The reason for restriction.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reasonCode?: ResourceSkuRestrictionsReasonCode;
}

/** Defines values for ResourceSkuRestrictionsReasonCode. */
export declare type ResourceSkuRestrictionsReasonCode = "QuotaId" | "NotAvailableForSubscription";

/** Defines values for ResourceSkuRestrictionsType. */
export declare type ResourceSkuRestrictionsType = "Location" | "Zone";

/** Interface representing a ResourceSkus. */
export declare interface ResourceSkus {
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
     * @param options The options parameters.
     */
    list(options?: ResourceSkusListOptionalParams): PagedAsyncIterableIterator<ResourceSku>;
}

/** Optional parameters. */
export declare interface ResourceSkusListNextOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the listNext operation. */
export declare type ResourceSkusListNextResponse = ResourceSkusResult;

/** Optional parameters. */
export declare interface ResourceSkusListOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
}

/** Contains response data for the list operation. */
export declare type ResourceSkusListResponse = ResourceSkusResult;

/** The List Resource Skus operation response. */
export declare interface ResourceSkusResult {
    /** The list of skus available for the subscription. */
    value: ResourceSku[];
    /** The URI to fetch the next page of Resource Skus. Call ListNext() with this URI to fetch the next page of Resource Skus */
    nextLink?: string;
}

/** Describes The zonal capabilities of a SKU. */
export declare interface ResourceSkuZoneDetails {
    /**
     * The set of zones that the SKU is available in with the specified capabilities.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string[];
    /**
     * A list of capabilities that are available for the SKU in the specified list of zones.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capabilities?: ResourceSkuCapabilities[];
}

/** Information about rollback on failed VM instances after a OS Upgrade operation. */
export declare interface RollbackStatusInfo {
    /**
     * The number of instances which have been successfully rolled back.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly successfullyRolledbackInstanceCount?: number;
    /**
     * The number of instances which failed to rollback.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failedRolledbackInstanceCount?: number;
    /**
     * Error details if OS rollback failed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rollbackError?: ApiError;
}

/** Defines values for RollingUpgradeActionType. */
export declare type RollingUpgradeActionType = "Start" | "Cancel";

/** The configuration parameters used while performing a rolling upgrade. */
export declare interface RollingUpgradePolicy {
    /** The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%. */
    maxBatchInstancePercent?: number;
    /** The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%. */
    maxUnhealthyInstancePercent?: number;
    /** The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%. */
    maxUnhealthyUpgradedInstancePercent?: number;
    /** The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). */
    pauseTimeBetweenBatches?: string;
}

/** Information about the number of virtual machine instances in each upgrade state. */
export declare interface RollingUpgradeProgressInfo {
    /**
     * The number of instances that have been successfully upgraded.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly successfulInstanceCount?: number;
    /**
     * The number of instances that have failed to be upgraded successfully.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failedInstanceCount?: number;
    /**
     * The number of instances that are currently being upgraded.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inProgressInstanceCount?: number;
    /**
     * The number of instances that have not yet begun to be upgraded.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly pendingInstanceCount?: number;
}

/** Information about the current running state of the overall upgrade. */
export declare interface RollingUpgradeRunningStatus {
    /**
     * Code indicating the current status of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: RollingUpgradeStatusCode;
    /**
     * Start time of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The last action performed on the rolling upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAction?: RollingUpgradeActionType;
    /**
     * Last action time of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastActionTime?: Date;
}

/** Defines values for RollingUpgradeStatusCode. */
export declare type RollingUpgradeStatusCode = "RollingForward" | "Cancelled" | "Completed" | "Faulted";

/** The status of the latest virtual machine scale set rolling upgrade. */
export declare type RollingUpgradeStatusInfo = Resource & {
    /**
     * The rolling upgrade policies applied for this upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly policy?: RollingUpgradePolicy;
    /**
     * Information about the current running state of the overall upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly runningStatus?: RollingUpgradeRunningStatus;
    /**
     * Information about the number of virtual machine instances in each upgrade state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly progress?: RollingUpgradeProgressInfo;
    /**
     * Error details for this upgrade, if there are any.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly error?: ApiError;
};

/** Describes the properties of a Run Command. */
export declare type RunCommandDocument = RunCommandDocumentBase & {
    /** The script to be executed. */
    script: string[];
    /** The parameters used by the script. */
    parameters?: RunCommandParameterDefinition[];
};

/** Describes the properties of a Run Command metadata. */
export declare interface RunCommandDocumentBase {
    /** The VM run command schema. */
    schema: string;
    /** The VM run command id. */
    id: string;
    /** The Operating System type. */
    osType: OperatingSystemTypes;
    /** The VM run command label. */
    label: string;
    /** The VM run command description. */
    description: string;
}

/** Capture Virtual Machine parameters. */
export declare interface RunCommandInput {
    /** The run command id. */
    commandId: string;
    /** Optional. The script to be executed.  When this value is given, the given script will override the default script of the command. */
    script?: string[];
    /** The run command parameters. */
    parameters?: RunCommandInputParameter[];
}

/** Describes the properties of a run command parameter. */
export declare interface RunCommandInputParameter {
    /** The run command parameter name. */
    name: string;
    /** The run command parameter value. */
    value: string;
}

/** The List Virtual Machine operation response. */
export declare interface RunCommandListResult {
    /** The list of virtual machine run commands. */
    value: RunCommandDocumentBase[];
    /** The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands. */
    nextLink?: string;
}

/** Describes the properties of a run command parameter. */
export declare interface RunCommandParameterDefinition {
    /** The run command parameter name. */
    name: string;
    /** The run command parameter type. */
    type: string;
    /** The run command parameter default value. */
    defaultValue?: string;
    /** The run command parameter required. */
    required?: boolean;
}

export declare interface RunCommandResult {
    /** Run command operation response. */
    value?: InstanceViewStatus[];
}

/** Describes a scale-in policy for a virtual machine scale set. */
export declare interface ScaleInPolicy {
    /** The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br> */
    rules?: VirtualMachineScaleSetScaleInRules[];
}

export declare interface ScheduledEventsProfile {
    /** Specifies Terminate Scheduled Event related configurations. */
    terminateNotificationProfile?: TerminateNotificationProfile;
}

/** Defines values for SettingNames. */
export declare type SettingNames = "AutoLogon" | "FirstLogonCommands";

export declare interface ShareInfoElement {
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vmUri?: string;
}

/** Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name. */
export declare interface Sku {
    /** The sku name. */
    name?: string;
    /** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
    tier?: string;
    /** Specifies the number of virtual machines in the scale set. */
    capacity?: number;
}

/** Snapshot resource. */
export declare type Snapshot = Resource & {
    /**
     * Unused. Always Null.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedBy?: string;
    /** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
    sku?: SnapshotSku;
    /**
     * The time when the disk was created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeCreated?: Date;
    /** The Operating System type. */
    osType?: OperatingSystemTypes;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration?: HyperVGeneration;
    /** Disk source information. CreationData information cannot be changed after the disk has been created. */
    creationData?: CreationData;
    /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
    diskSizeGB?: number;
    /**
     * The size of the disk in bytes. This field is read only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly diskSizeBytes?: number;
    /**
     * Unique Guid identifying the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uniqueId?: string;
    /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
    encryptionSettingsCollection?: EncryptionSettingsCollection;
    /**
     * The disk provisioning state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
    incremental?: boolean;
    /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
    encryption?: Encryption;
};

/** The List Snapshots operation response. */
export declare interface SnapshotList {
    /** A list of snapshots. */
    value: Snapshot[];
    /** The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots. */
    nextLink?: string;
}

/** Interface representing a Snapshots. */
export declare interface Snapshots {
    /**
     * Lists snapshots under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: SnapshotsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Lists snapshots under a subscription.
     * @param options The options parameters.
     */
    list(options?: SnapshotsListOptionalParams): PagedAsyncIterableIterator<Snapshot>;
    /**
     * Creates or updates a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param snapshot Snapshot object supplied in the body of the Put disk operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Snapshot, options?: SnapshotsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SnapshotsCreateOrUpdateResponse>, SnapshotsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param snapshot Snapshot object supplied in the body of the Put disk operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, snapshotName: string, snapshot: Snapshot, options?: SnapshotsCreateOrUpdateOptionalParams): Promise<SnapshotsCreateOrUpdateResponse>;
    /**
     * Updates (patches) a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: SnapshotUpdate, options?: SnapshotsUpdateOptionalParams): Promise<PollerLike<PollOperationState<SnapshotsUpdateResponse>, SnapshotsUpdateResponse>>;
    /**
     * Updates (patches) a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, snapshotName: string, snapshot: SnapshotUpdate, options?: SnapshotsUpdateOptionalParams): Promise<SnapshotsUpdateResponse>;
    /**
     * Gets information about a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, snapshotName: string, options?: SnapshotsGetOptionalParams): Promise<SnapshotsGetResponse>;
    /**
     * Deletes a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, snapshotName: string, options?: SnapshotsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, snapshotName: string, options?: SnapshotsDeleteOptionalParams): Promise<void>;
    /**
     * Grants access to a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
     * @param options The options parameters.
     */
    beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: GrantAccessData, options?: SnapshotsGrantAccessOptionalParams): Promise<PollerLike<PollOperationState<SnapshotsGrantAccessResponse>, SnapshotsGrantAccessResponse>>;
    /**
     * Grants access to a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
     * @param options The options parameters.
     */
    beginGrantAccessAndWait(resourceGroupName: string, snapshotName: string, grantAccessData: GrantAccessData, options?: SnapshotsGrantAccessOptionalParams): Promise<SnapshotsGrantAccessResponse>;
    /**
     * Revokes access to a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param options The options parameters.
     */
    beginRevokeAccess(resourceGroupName: string, snapshotName: string, options?: SnapshotsRevokeAccessOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Revokes access to a snapshot.
     * @param resourceGroupName The name of the resource group.
     * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
     *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
     *                     length is 80 characters.
     * @param options The options parameters.
     */
    beginRevokeAccessAndWait(resourceGroupName: string, snapshotName: string, options?: SnapshotsRevokeAccessOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface SnapshotsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SnapshotsCreateOrUpdateResponse = Snapshot;

/** Optional parameters. */
export declare interface SnapshotsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SnapshotsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SnapshotsGetResponse = Snapshot;

/** Optional parameters. */
export declare interface SnapshotsGrantAccessOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the grantAccess operation. */
export declare type SnapshotsGrantAccessResponse = AccessUri;

/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
export declare interface SnapshotSku {
    /** The sku name. */
    name?: SnapshotStorageAccountTypes;
    /**
     * The sku tier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tier?: string;
}

/** Optional parameters. */
export declare interface SnapshotsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type SnapshotsListByResourceGroupNextResponse = SnapshotList;

/** Optional parameters. */
export declare interface SnapshotsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type SnapshotsListByResourceGroupResponse = SnapshotList;

/** Optional parameters. */
export declare interface SnapshotsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type SnapshotsListNextResponse = SnapshotList;

/** Optional parameters. */
export declare interface SnapshotsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SnapshotsListResponse = SnapshotList;

/** Optional parameters. */
export declare interface SnapshotsRevokeAccessOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for SnapshotStorageAccountTypes. \
 * {@link KnownSnapshotStorageAccountTypes} can be used interchangeably with SnapshotStorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS**: Standard HDD locally redundant storage \
 * **Premium_LRS**: Premium SSD locally redundant storage \
 * **Standard_ZRS**: Standard zone redundant storage
 */
export declare type SnapshotStorageAccountTypes = string;

/** Optional parameters. */
export declare interface SnapshotsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type SnapshotsUpdateResponse = Snapshot;

/** Snapshot update resource. */
export declare interface SnapshotUpdate {
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
    /** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
    sku?: SnapshotSku;
    /** the Operating System type. */
    osType?: OperatingSystemTypes;
    /** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
    diskSizeGB?: number;
    /** Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. */
    encryptionSettingsCollection?: EncryptionSettingsCollection;
    /** Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. */
    encryption?: Encryption;
}

/** The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} */
export declare interface SourceVault {
    /** Resource Id */
    id?: string;
}

/** SSH configuration for Linux based VMs running on Azure */
export declare interface SshConfiguration {
    /** The list of SSH public keys used to authenticate with linux based VMs. */
    publicKeys?: SshPublicKey[];
}

/** Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed. */
export declare interface SshPublicKey {
    /** Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys */
    path?: string;
    /** SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
    keyData?: string;
}

/** Response from generation of an SSH key pair. */
export declare interface SshPublicKeyGenerateKeyPairResult {
    /** Private key portion of the key pair used to authenticate to a virtual machine through ssh. The private key is returned in RFC3447 format and should be treated as a secret. */
    privateKey: string;
    /** Public key portion of the key pair used to authenticate to a virtual machine through ssh. The public key is in ssh-rsa format. */
    publicKey: string;
    /** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{SshPublicKeyName} */
    id: string;
}

/** Specifies information about the SSH public key. */
export declare type SshPublicKeyResource = Resource & {
    /** SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. */
    publicKey?: string;
};

/** Interface representing a SshPublicKeys. */
export declare interface SshPublicKeys {
    /**
     * Lists all of the SSH public keys in the subscription. Use the nextLink property in the response to
     * get the next page of SSH public keys.
     * @param options The options parameters.
     */
    listBySubscription(options?: SshPublicKeysListBySubscriptionOptionalParams): PagedAsyncIterableIterator<SshPublicKeyResource>;
    /**
     * Lists all of the SSH public keys in the specified resource group. Use the nextLink property in the
     * response to get the next page of SSH public keys.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: SshPublicKeysListByResourceGroupOptionalParams): PagedAsyncIterableIterator<SshPublicKeyResource>;
    /**
     * Creates a new SSH public key resource.
     * @param resourceGroupName The name of the resource group.
     * @param sshPublicKeyName The name of the SSH public key.
     * @param parameters Parameters supplied to create the SSH public key.
     * @param options The options parameters.
     */
    create(resourceGroupName: string, sshPublicKeyName: string, parameters: SshPublicKeyResource, options?: SshPublicKeysCreateOptionalParams): Promise<SshPublicKeysCreateResponse>;
    /**
     * Updates a new SSH public key resource.
     * @param resourceGroupName The name of the resource group.
     * @param sshPublicKeyName The name of the SSH public key.
     * @param parameters Parameters supplied to update the SSH public key.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, sshPublicKeyName: string, parameters: SshPublicKeyUpdateResource, options?: SshPublicKeysUpdateOptionalParams): Promise<SshPublicKeysUpdateResponse>;
    /**
     * Delete an SSH public key.
     * @param resourceGroupName The name of the resource group.
     * @param sshPublicKeyName The name of the SSH public key.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, sshPublicKeyName: string, options?: SshPublicKeysDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about an SSH public key.
     * @param resourceGroupName The name of the resource group.
     * @param sshPublicKeyName The name of the SSH public key.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, sshPublicKeyName: string, options?: SshPublicKeysGetOptionalParams): Promise<SshPublicKeysGetResponse>;
    /**
     * Generates and returns a public/private key pair and populates the SSH public key resource with the
     * public key. The length of the key will be 3072 bits. This operation can only be performed once per
     * SSH public key resource.
     * @param resourceGroupName The name of the resource group.
     * @param sshPublicKeyName The name of the SSH public key.
     * @param options The options parameters.
     */
    generateKeyPair(resourceGroupName: string, sshPublicKeyName: string, options?: SshPublicKeysGenerateKeyPairOptionalParams): Promise<SshPublicKeysGenerateKeyPairResponse>;
}

/** Optional parameters. */
export declare interface SshPublicKeysCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the create operation. */
export declare type SshPublicKeysCreateResponse = SshPublicKeyResource;

/** Optional parameters. */
export declare interface SshPublicKeysDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface SshPublicKeysGenerateKeyPairOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateKeyPair operation. */
export declare type SshPublicKeysGenerateKeyPairResponse = SshPublicKeyGenerateKeyPairResult;

/** Optional parameters. */
export declare interface SshPublicKeysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SshPublicKeysGetResponse = SshPublicKeyResource;

/** The list SSH public keys operation response. */
export declare interface SshPublicKeysGroupListResult {
    /** The list of SSH public keys */
    value: SshPublicKeyResource[];
    /** The URI to fetch the next page of SSH public keys. Call ListNext() with this URI to fetch the next page of SSH public keys. */
    nextLink?: string;
}

/** Optional parameters. */
export declare interface SshPublicKeysListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type SshPublicKeysListByResourceGroupNextResponse = SshPublicKeysGroupListResult;

/** Optional parameters. */
export declare interface SshPublicKeysListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type SshPublicKeysListByResourceGroupResponse = SshPublicKeysGroupListResult;

/** Optional parameters. */
export declare interface SshPublicKeysListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type SshPublicKeysListBySubscriptionNextResponse = SshPublicKeysGroupListResult;

/** Optional parameters. */
export declare interface SshPublicKeysListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type SshPublicKeysListBySubscriptionResponse = SshPublicKeysGroupListResult;

/** Optional parameters. */
export declare interface SshPublicKeysUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type SshPublicKeysUpdateResponse = SshPublicKeyResource;

/** Specifies information about the SSH public key. */
export declare type SshPublicKeyUpdateResource = UpdateResource & {
    /** SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. */
    publicKey?: string;
};

/** Defines values for StatusLevelTypes. */
export declare type StatusLevelTypes = "Info" | "Warning" | "Error";

/**
 * Defines values for StorageAccountType. \
 * {@link KnownStorageAccountType} can be used interchangeably with StorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Standard_ZRS** \
 * **Premium_LRS**
 */
export declare type StorageAccountType = string;

/**
 * Defines values for StorageAccountTypes. \
 * {@link KnownStorageAccountTypes} can be used interchangeably with StorageAccountTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_LRS** \
 * **Premium_LRS** \
 * **StandardSSD_LRS** \
 * **UltraSSD_LRS**
 */
export declare type StorageAccountTypes = string;

/** Specifies the storage settings for the virtual machine disks. */
export declare interface StorageProfile {
    /** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
    imageReference?: ImageReference;
    /** Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    osDisk?: OSDisk;
    /** Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    dataDisks?: DataDisk[];
}

export declare interface SubResource {
    /** Resource Id */
    id?: string;
}

export declare interface SubResourceReadOnly {
    /**
     * Resource Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

export declare type SubResourceWithColocationStatus = SubResource & {
    /** Describes colocation status of a resource in the Proximity Placement Group. */
    colocationStatus?: InstanceViewStatus;
};

/** Describes the target region information. */
export declare interface TargetRegion {
    /** The name of the region. */
    name: string;
    /** The number of replicas of the Image Version to be created per region. This property is updatable. */
    regionalReplicaCount?: number;
    /** Specifies the storage account type to be used to store the image. This property is not updatable. */
    storageAccountType?: StorageAccountType;
    /** Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. */
    encryption?: EncryptionImages;
}

export declare interface TerminateNotificationProfile {
    /** Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) */
    notBeforeTimeout?: string;
    /** Specifies whether the Terminate Scheduled event is enabled or disabled. */
    enable?: boolean;
}

/** Api request input for LogAnalytics getThrottledRequests Api. */
export declare type ThrottledRequestsInput = LogAnalyticsInputBase & {};

/** The Update Resource model definition. */
export declare interface UpdateResource {
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** The Update Resource model definition. */
export declare interface UpdateResourceDefinition {
    /**
     * Resource Id
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource tags */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Defines values for UpgradeMode. */
export declare type UpgradeMode = "Automatic" | "Manual" | "Rolling";

/** Virtual Machine Scale Set OS Upgrade History operation response. */
export declare interface UpgradeOperationHistoricalStatusInfo {
    /**
     * Information about the properties of the upgrade operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: UpgradeOperationHistoricalStatusInfoProperties;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * Resource location
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
}

/** Describes each OS upgrade on the Virtual Machine Scale Set. */
export declare interface UpgradeOperationHistoricalStatusInfoProperties {
    /**
     * Information about the overall status of the upgrade operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly runningStatus?: UpgradeOperationHistoryStatus;
    /**
     * Counts of the VMs in each state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly progress?: RollingUpgradeProgressInfo;
    /**
     * Error Details for this upgrade if there are any.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly error?: ApiError;
    /**
     * Invoker of the Upgrade Operation
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startedBy?: UpgradeOperationInvoker;
    /**
     * Image Reference details
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetImageReference?: ImageReference;
    /**
     * Information about OS rollback if performed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rollbackInfo?: RollbackStatusInfo;
}

/** Information about the current running state of the overall upgrade. */
export declare interface UpgradeOperationHistoryStatus {
    /**
     * Code indicating the current status of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: UpgradeState;
    /**
     * Start time of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * End time of the upgrade.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
}

/** Defines values for UpgradeOperationInvoker. */
export declare type UpgradeOperationInvoker = "Unknown" | "User" | "Platform";

/** Describes an upgrade policy - automatic, manual, or rolling. */
export declare interface UpgradePolicy {
    /** Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. */
    mode?: UpgradeMode;
    /** The configuration parameters used while performing a rolling upgrade. */
    rollingUpgradePolicy?: RollingUpgradePolicy;
    /** Configuration parameters used for performing automatic OS Upgrade. */
    automaticOSUpgradePolicy?: AutomaticOSUpgradePolicy;
}

/** Defines values for UpgradeState. */
export declare type UpgradeState = "RollingForward" | "Cancelled" | "Completed" | "Faulted";

/** Describes Compute Resource Usage. */
export declare interface Usage {
    /** An enum describing the unit of usage measurement. */
    unit: "Count";
    /** The current usage of the resource. */
    currentValue: number;
    /** The maximum permitted usage of the resource. */
    limit: number;
    /** The name of the type of usage. */
    name: UsageName;
}

/** Optional parameters. */
export declare interface UsageListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type UsageListNextResponse = ListUsagesResult;

/** Optional parameters. */
export declare interface UsageListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type UsageListResponse = ListUsagesResult;

/** The Usage Names. */
export declare interface UsageName {
    /** The name of the resource. */
    value?: string;
    /** The localized name of the resource. */
    localizedValue?: string;
}

/** Interface representing a UsageOperations. */
export declare interface UsageOperations {
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     * @param location The location for which resource usage is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: UsageListOptionalParams): PagedAsyncIterableIterator<Usage>;
}

/** The source image from which the Image Version is going to be created. */
export declare interface UserArtifactSource {
    /** Required. The fileName of the artifact. */
    fileName: string;
    /** Required. The mediaLink of the artifact, must be a readable storage blob. */
    mediaLink: string;
}

/** Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM. */
export declare interface VaultCertificate {
    /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
    certificateUrl?: string;
    /** For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted. */
    certificateStore?: string;
}

/** Describes a set of certificates which are all in the same Key Vault. */
export declare interface VaultSecretGroup {
    /** The relative URL of the Key Vault containing all of the certificates in VaultCertificates. */
    sourceVault?: SubResource;
    /** The list of key vault references in SourceVault which contain certificates. */
    vaultCertificates?: VaultCertificate[];
}

/** Describes the uri of a disk. */
export declare interface VirtualHardDisk {
    /** Specifies the virtual hard disk's uri. */
    uri?: string;
}

/** Describes a Virtual Machine. */
export declare type VirtualMachine = Resource & {
    /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
    plan?: Plan;
    /**
     * The virtual machine child extension resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resources?: VirtualMachineExtension[];
    /** The identity of the virtual machine, if configured. */
    identity?: VirtualMachineIdentity;
    /** The virtual machine zones. */
    zones?: string[];
    /** Specifies the hardware settings for the virtual machine. */
    hardwareProfile?: HardwareProfile;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: StorageProfile;
    /** Specifies additional capabilities enabled or disabled on the virtual machine. */
    additionalCapabilities?: AdditionalCapabilities;
    /** Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
    osProfile?: OSProfile;
    /** Specifies the network interfaces of the virtual machine. */
    networkProfile?: NetworkProfile;
    /** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
    diagnosticsProfile?: DiagnosticsProfile;
    /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. <br><br>This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. */
    availabilitySet?: SubResource;
    /** Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01 */
    virtualMachineScaleSet?: SubResource;
    /** Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
    /** Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01 */
    priority?: VirtualMachinePriorityTypes;
    /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. <br><br>For Azure Spot virtual machines, the only supported value is 'Deallocate' and the minimum api-version is 2019-03-01. <br><br>For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
    evictionPolicy?: VirtualMachineEvictionPolicyTypes;
    /** Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01. */
    billingProfile?: BillingProfile;
    /** Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01. */
    host?: SubResource;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The virtual machine instance view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceView?: VirtualMachineInstanceView;
    /** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
    licenseType?: string;
    /**
     * Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vmId?: string;
};

/** The instance view of the VM Agent running on the virtual machine. */
export declare interface VirtualMachineAgentInstanceView {
    /** The VM Agent full version. */
    vmAgentVersion?: string;
    /** The virtual machine extension handler instance view. */
    extensionHandlers?: VirtualMachineExtensionHandlerInstanceView[];
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
}

/** Capture Virtual Machine parameters. */
export declare interface VirtualMachineCaptureParameters {
    /** The captured virtual hard disk's name prefix. */
    vhdPrefix: string;
    /** The destination container name. */
    destinationContainerName: string;
    /** Specifies whether to overwrite the destination virtual hard disk, in case of conflict. */
    overwriteVhds: boolean;
}

/** Output of virtual machine capture operation. */
export declare type VirtualMachineCaptureResult = SubResource & {
    /**
     * the schema of the captured virtual machine
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly schema?: string;
    /**
     * the version of the content
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly contentVersion?: string;
    /**
     * parameters of the captured virtual machine
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly parameters?: Record<string, unknown>;
    /**
     * a list of resource items of the captured virtual machine
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resources?: Record<string, unknown>[];
};

/**
 * Defines values for VirtualMachineEvictionPolicyTypes. \
 * {@link KnownVirtualMachineEvictionPolicyTypes} can be used interchangeably with VirtualMachineEvictionPolicyTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Deallocate** \
 * **Delete**
 */
export declare type VirtualMachineEvictionPolicyTypes = string;

/** Describes a Virtual Machine Extension. */
export declare type VirtualMachineExtension = Resource & {
    /** How the extension handler should be forced to update even if the extension configuration has not changed. */
    forceUpdateTag?: string;
    /** The name of the extension handler publisher. */
    publisher?: string;
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    typePropertiesType?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    autoUpgradeMinorVersion?: boolean;
    /** Json formatted public settings for the extension. */
    settings?: Record<string, unknown>;
    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    protectedSettings?: Record<string, unknown>;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** The virtual machine extension instance view. */
    instanceView?: VirtualMachineExtensionInstanceView;
};

/** The instance view of a virtual machine extension handler. */
export declare interface VirtualMachineExtensionHandlerInstanceView {
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    type?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** The extension handler status. */
    status?: InstanceViewStatus;
}

/** Describes a Virtual Machine Extension Image. */
export declare type VirtualMachineExtensionImage = Resource & {
    /** The operating system this extension supports. */
    operatingSystem?: string;
    /** The type of role (IaaS or PaaS) this extension supports. */
    computeRole?: string;
    /** The schema defined by publisher, where extension consumers should provide settings in a matching schema. */
    handlerSchema?: string;
    /** Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. */
    vmScaleSetEnabled?: boolean;
    /** Whether the handler can support multiple extensions. */
    supportsMultipleExtensions?: boolean;
};

/** Interface representing a VirtualMachineExtensionImages. */
export declare interface VirtualMachineExtensionImages {
    /**
     * Gets a virtual machine extension image.
     * @param location The name of a supported Azure region.
     * @param publisherName
     * @param version
     * @param typeParam
     * @param options The options parameters.
     */
    get(location: string, publisherName: string, version: string, typeParam: string, options?: VirtualMachineExtensionImagesGetOptionalParams): Promise<VirtualMachineExtensionImagesGetResponse>;
    /**
     * Gets a list of virtual machine extension image types.
     * @param location The name of a supported Azure region.
     * @param publisherName
     * @param options The options parameters.
     */
    listTypes(location: string, publisherName: string, options?: VirtualMachineExtensionImagesListTypesOptionalParams): Promise<VirtualMachineExtensionImagesListTypesResponse>;
    /**
     * Gets a list of virtual machine extension image versions.
     * @param location The name of a supported Azure region.
     * @param publisherName
     * @param typeParam
     * @param options The options parameters.
     */
    listVersions(location: string, publisherName: string, typeParam: string, options?: VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<VirtualMachineExtensionImagesListVersionsResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineExtensionImagesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualMachineExtensionImagesGetResponse = VirtualMachineExtensionImage;

/** Optional parameters. */
export declare interface VirtualMachineExtensionImagesListTypesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTypes operation. */
export declare type VirtualMachineExtensionImagesListTypesResponse = VirtualMachineExtensionImage[];

/** Optional parameters. */
export declare interface VirtualMachineExtensionImagesListVersionsOptionalParams extends coreClient.OperationOptions {
    /** The filter to apply on the operation. */
    filter?: string;
    top?: number;
    orderby?: string;
}

/** Contains response data for the listVersions operation. */
export declare type VirtualMachineExtensionImagesListVersionsResponse = VirtualMachineExtensionImage[];

/** The instance view of a virtual machine extension. */
export declare interface VirtualMachineExtensionInstanceView {
    /** The virtual machine extension name. */
    name?: string;
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    type?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** The resource status information. */
    substatuses?: InstanceViewStatus[];
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
}

/** Interface representing a VirtualMachineExtensions. */
export declare interface VirtualMachineExtensions {
    /**
     * The operation to create or update the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be created or updated.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: VirtualMachineExtension, options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineExtensionsCreateOrUpdateResponse>, VirtualMachineExtensionsCreateOrUpdateResponse>>;
    /**
     * The operation to create or update the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be created or updated.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: VirtualMachineExtension, options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams): Promise<VirtualMachineExtensionsCreateOrUpdateResponse>;
    /**
     * The operation to update the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be updated.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: VirtualMachineExtensionUpdate, options?: VirtualMachineExtensionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineExtensionsUpdateResponse>, VirtualMachineExtensionsUpdateResponse>>;
    /**
     * The operation to update the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be updated.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: VirtualMachineExtensionUpdate, options?: VirtualMachineExtensionsUpdateOptionalParams): Promise<VirtualMachineExtensionsUpdateResponse>;
    /**
     * The operation to delete the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be deleted.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: VirtualMachineExtensionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to delete the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine where the extension should be deleted.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: VirtualMachineExtensionsDeleteOptionalParams): Promise<void>;
    /**
     * The operation to get the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine containing the extension.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: VirtualMachineExtensionsGetOptionalParams): Promise<VirtualMachineExtensionsGetResponse>;
    /**
     * The operation to get all extensions of a Virtual Machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine containing the extension.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, vmName: string, options?: VirtualMachineExtensionsListOptionalParams): Promise<VirtualMachineExtensionsListResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineExtensionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualMachineExtensionsCreateOrUpdateResponse = VirtualMachineExtension;

/** Optional parameters. */
export declare interface VirtualMachineExtensionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineExtensionsGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type VirtualMachineExtensionsGetResponse = VirtualMachineExtension;

/** Optional parameters. */
export declare interface VirtualMachineExtensionsListOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type VirtualMachineExtensionsListResponse = VirtualMachineExtensionsListResult;

/** The List Extension operation response */
export declare interface VirtualMachineExtensionsListResult {
    /** The list of extensions */
    value?: VirtualMachineExtension[];
}

/** Optional parameters. */
export declare interface VirtualMachineExtensionsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachineExtensionsUpdateResponse = VirtualMachineExtension;

/** Describes a Virtual Machine Extension. */
export declare type VirtualMachineExtensionUpdate = UpdateResource & {
    /** How the extension handler should be forced to update even if the extension configuration has not changed. */
    forceUpdateTag?: string;
    /** The name of the extension handler publisher. */
    publisher?: string;
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    type?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    autoUpgradeMinorVersion?: boolean;
    /** Json formatted public settings for the extension. */
    settings?: Record<string, unknown>;
    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    protectedSettings?: Record<string, unknown>;
};

/** The health status of the VM. */
export declare interface VirtualMachineHealthStatus {
    /**
     * The health status information for the VM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: InstanceViewStatus;
}

/** Identity for the virtual machine. */
export declare interface VirtualMachineIdentity {
    /**
     * The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
    type?: ResourceIdentityType;
    /** The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
    userAssignedIdentities?: {
        [propertyName: string]: Components1H8M3EpSchemasVirtualmachineidentityPropertiesUserassignedidentitiesAdditionalproperties;
    };
}

/** Describes a Virtual Machine Image. */
export declare type VirtualMachineImage = VirtualMachineImageResource & {
    /** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
    plan?: PurchasePlan;
    /** Contains the os disk image information. */
    osDiskImage?: OSDiskImage;
    dataDiskImages?: DataDiskImage[];
    /** Describes automatic OS upgrade properties on the image. */
    automaticOSUpgradeProperties?: AutomaticOSUpgradeProperties;
    /** Specifies the HyperVGeneration Type */
    hyperVGeneration?: HyperVGenerationTypes;
};

/** Virtual machine image resource information. */
export declare type VirtualMachineImageResource = SubResource & {
    /** The name of the resource. */
    name: string;
    /** The supported Azure location of the resource. */
    location: string;
    /** Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md). */
    tags?: {
        [propertyName: string]: string;
    };
};

/** Interface representing a VirtualMachineImages. */
export declare interface VirtualMachineImages {
    /**
     * Gets a virtual machine image.
     * @param location The name of a supported Azure region.
     * @param publisherName A valid image publisher.
     * @param offer A valid image publisher offer.
     * @param skus A valid image SKU.
     * @param version A valid image SKU version.
     * @param options The options parameters.
     */
    get(location: string, publisherName: string, offer: string, skus: string, version: string, options?: VirtualMachineImagesGetOptionalParams): Promise<VirtualMachineImagesGetResponse>;
    /**
     * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and
     * SKU.
     * @param location The name of a supported Azure region.
     * @param publisherName A valid image publisher.
     * @param offer A valid image publisher offer.
     * @param skus A valid image SKU.
     * @param options The options parameters.
     */
    list(location: string, publisherName: string, offer: string, skus: string, options?: VirtualMachineImagesListOptionalParams): Promise<VirtualMachineImagesListResponse>;
    /**
     * Gets a list of virtual machine image offers for the specified location and publisher.
     * @param location The name of a supported Azure region.
     * @param publisherName A valid image publisher.
     * @param options The options parameters.
     */
    listOffers(location: string, publisherName: string, options?: VirtualMachineImagesListOffersOptionalParams): Promise<VirtualMachineImagesListOffersResponse>;
    /**
     * Gets a list of virtual machine image publishers for the specified Azure location.
     * @param location The name of a supported Azure region.
     * @param options The options parameters.
     */
    listPublishers(location: string, options?: VirtualMachineImagesListPublishersOptionalParams): Promise<VirtualMachineImagesListPublishersResponse>;
    /**
     * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
     * @param location The name of a supported Azure region.
     * @param publisherName A valid image publisher.
     * @param offer A valid image publisher offer.
     * @param options The options parameters.
     */
    listSkus(location: string, publisherName: string, offer: string, options?: VirtualMachineImagesListSkusOptionalParams): Promise<VirtualMachineImagesListSkusResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineImagesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualMachineImagesGetResponse = VirtualMachineImage;

/** Optional parameters. */
export declare interface VirtualMachineImagesListOffersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOffers operation. */
export declare type VirtualMachineImagesListOffersResponse = VirtualMachineImageResource[];

/** Optional parameters. */
export declare interface VirtualMachineImagesListOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
    top?: number;
    orderby?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineImagesListPublishersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPublishers operation. */
export declare type VirtualMachineImagesListPublishersResponse = VirtualMachineImageResource[];

/** Contains response data for the list operation. */
export declare type VirtualMachineImagesListResponse = VirtualMachineImageResource[];

/** Optional parameters. */
export declare interface VirtualMachineImagesListSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSkus operation. */
export declare type VirtualMachineImagesListSkusResponse = VirtualMachineImageResource[];

/** The instance view of a virtual machine. */
export declare interface VirtualMachineInstanceView {
    /** Specifies the update domain of the virtual machine. */
    platformUpdateDomain?: number;
    /** Specifies the fault domain of the virtual machine. */
    platformFaultDomain?: number;
    /** The computer name assigned to the virtual machine. */
    computerName?: string;
    /** The Operating System running on the virtual machine. */
    osName?: string;
    /** The version of Operating System running on the virtual machine. */
    osVersion?: string;
    /** Specifies the HyperVGeneration Type associated with a resource */
    hyperVGeneration?: HyperVGenerationType;
    /** The Remote desktop certificate thumbprint. */
    rdpThumbPrint?: string;
    /** The VM Agent running on the virtual machine. */
    vmAgent?: VirtualMachineAgentInstanceView;
    /** The Maintenance Operation status on the virtual machine. */
    maintenanceRedeployStatus?: MaintenanceRedeployStatus;
    /** The virtual machine disk information. */
    disks?: DiskInstanceView[];
    /** The extensions information. */
    extensions?: VirtualMachineExtensionInstanceView[];
    /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
    bootDiagnostics?: BootDiagnosticsInstanceView;
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
}

/** The List Virtual Machine operation response. */
export declare interface VirtualMachineListResult {
    /** The list of virtual machines. */
    value: VirtualMachine[];
    /** The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines. */
    nextLink?: string;
}

/**
 * Defines values for VirtualMachinePriorityTypes. \
 * {@link KnownVirtualMachinePriorityTypes} can be used interchangeably with VirtualMachinePriorityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Regular** \
 * **Low** \
 * **Spot**
 */
export declare type VirtualMachinePriorityTypes = string;

/** Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged */
export declare interface VirtualMachineReimageParameters {
    /** Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. */
    tempDisk?: boolean;
}

/** Interface representing a VirtualMachineRunCommands. */
export declare interface VirtualMachineRunCommands {
    /**
     * Lists all available run commands for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: VirtualMachineRunCommandsListOptionalParams): PagedAsyncIterableIterator<RunCommandDocumentBase>;
    /**
     * Gets specific run command for a subscription in a location.
     * @param location The location upon which run commands is queried.
     * @param commandId The command id.
     * @param options The options parameters.
     */
    get(location: string, commandId: string, options?: VirtualMachineRunCommandsGetOptionalParams): Promise<VirtualMachineRunCommandsGetResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineRunCommandsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualMachineRunCommandsGetResponse = RunCommandDocument;

/** Optional parameters. */
export declare interface VirtualMachineRunCommandsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualMachineRunCommandsListNextResponse = RunCommandListResult;

/** Optional parameters. */
export declare interface VirtualMachineRunCommandsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualMachineRunCommandsListResponse = RunCommandListResult;

/** Interface representing a VirtualMachines. */
export declare interface VirtualMachines {
    /**
     * Gets all the virtual machines under the specified subscription for the specified location.
     * @param location The location for which virtual machines under the subscription are queried.
     * @param options The options parameters.
     */
    listByLocation(location: string, options?: VirtualMachinesListByLocationOptionalParams): PagedAsyncIterableIterator<VirtualMachine>;
    /**
     * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the
     * response to get the next page of virtual machines.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: VirtualMachinesListOptionalParams): PagedAsyncIterableIterator<VirtualMachine>;
    /**
     * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the
     * response to get the next page of virtual machines.
     * @param options The options parameters.
     */
    listAll(options?: VirtualMachinesListAllOptionalParams): PagedAsyncIterableIterator<VirtualMachine>;
    /**
     * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    listAvailableSizes(resourceGroupName: string, vmName: string, options?: VirtualMachinesListAvailableSizesOptionalParams): PagedAsyncIterableIterator<VirtualMachineSize>;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
     * create similar VMs.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Capture Virtual Machine operation.
     * @param options The options parameters.
     */
    beginCapture(resourceGroupName: string, vmName: string, parameters: VirtualMachineCaptureParameters, options?: VirtualMachinesCaptureOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachinesCaptureResponse>, VirtualMachinesCaptureResponse>>;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
     * create similar VMs.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Capture Virtual Machine operation.
     * @param options The options parameters.
     */
    beginCaptureAndWait(resourceGroupName: string, vmName: string, parameters: VirtualMachineCaptureParameters, options?: VirtualMachinesCaptureOptionalParams): Promise<VirtualMachinesCaptureResponse>;
    /**
     * The operation to create or update a virtual machine. Please note some properties can be set only
     * during virtual machine creation.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Create Virtual Machine operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, parameters: VirtualMachine, options?: VirtualMachinesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachinesCreateOrUpdateResponse>, VirtualMachinesCreateOrUpdateResponse>>;
    /**
     * The operation to create or update a virtual machine. Please note some properties can be set only
     * during virtual machine creation.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Create Virtual Machine operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vmName: string, parameters: VirtualMachine, options?: VirtualMachinesCreateOrUpdateOptionalParams): Promise<VirtualMachinesCreateOrUpdateResponse>;
    /**
     * The operation to update a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Update Virtual Machine operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmName: string, parameters: VirtualMachineUpdate, options?: VirtualMachinesUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachinesUpdateResponse>, VirtualMachinesUpdateResponse>>;
    /**
     * The operation to update a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Update Virtual Machine operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmName: string, parameters: VirtualMachineUpdate, options?: VirtualMachinesUpdateOptionalParams): Promise<VirtualMachinesUpdateResponse>;
    /**
     * The operation to delete a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmName: string, options?: VirtualMachinesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to delete a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about the model view or the instance view of a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmName: string, options?: VirtualMachinesGetOptionalParams): Promise<VirtualMachinesGetResponse>;
    /**
     * Retrieves information about the run-time state of a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    instanceView(resourceGroupName: string, vmName: string, options?: VirtualMachinesInstanceViewOptionalParams): Promise<VirtualMachinesInstanceViewResponse>;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginConvertToManagedDisks(resourceGroupName: string, vmName: string, options?: VirtualMachinesConvertToManagedDisksOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginConvertToManagedDisksAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesConvertToManagedDisksOptionalParams): Promise<void>;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginDeallocate(resourceGroupName: string, vmName: string, options?: VirtualMachinesDeallocateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginDeallocateAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesDeallocateOptionalParams): Promise<void>;
    /**
     * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual
     * machine before performing this operation. <br>For Windows, please refer to [Create a managed image
     * of a generalized VM in
     * Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/capture-image-resource).<br>For
     * Linux, please refer to [How to create an image of a virtual machine or
     * VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image).
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    generalize(resourceGroupName: string, vmName: string, options?: VirtualMachinesGeneralizeOptionalParams): Promise<void>;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
     * same provisioned resources. You are still charged for this virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginPowerOff(resourceGroupName: string, vmName: string, options?: VirtualMachinesPowerOffOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
     * same provisioned resources. You are still charged for this virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginPowerOffAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesPowerOffOptionalParams): Promise<void>;
    /**
     * The operation to reapply a virtual machine's state.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginReapply(resourceGroupName: string, vmName: string, options?: VirtualMachinesReapplyOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to reapply a virtual machine's state.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginReapplyAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesReapplyOptionalParams): Promise<void>;
    /**
     * The operation to restart a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginRestart(resourceGroupName: string, vmName: string, options?: VirtualMachinesRestartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to restart a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginRestartAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesRestartOptionalParams): Promise<void>;
    /**
     * The operation to start a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, vmName: string, options?: VirtualMachinesStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to start a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesStartOptionalParams): Promise<void>;
    /**
     * Shuts down the virtual machine, moves it to a new node, and powers it back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginRedeploy(resourceGroupName: string, vmName: string, options?: VirtualMachinesRedeployOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Shuts down the virtual machine, moves it to a new node, and powers it back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginRedeployAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesRedeployOptionalParams): Promise<void>;
    /**
     * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginReimage(resourceGroupName: string, vmName: string, options?: VirtualMachinesReimageOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginReimageAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesReimageOptionalParams): Promise<void>;
    /**
     * The operation to perform maintenance on a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginPerformMaintenance(resourceGroupName: string, vmName: string, options?: VirtualMachinesPerformMaintenanceOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to perform maintenance on a virtual machine.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    beginPerformMaintenanceAndWait(resourceGroupName: string, vmName: string, options?: VirtualMachinesPerformMaintenanceOptionalParams): Promise<void>;
    /**
     * The operation to simulate the eviction of spot virtual machine. The eviction will occur within 30
     * minutes of calling the API
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param options The options parameters.
     */
    simulateEviction(resourceGroupName: string, vmName: string, options?: VirtualMachinesSimulateEvictionOptionalParams): Promise<void>;
    /**
     * Run command on the VM.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Run command operation.
     * @param options The options parameters.
     */
    beginRunCommand(resourceGroupName: string, vmName: string, parameters: RunCommandInput, options?: VirtualMachinesRunCommandOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachinesRunCommandResponse>, VirtualMachinesRunCommandResponse>>;
    /**
     * Run command on the VM.
     * @param resourceGroupName The name of the resource group.
     * @param vmName The name of the virtual machine.
     * @param parameters Parameters supplied to the Run command operation.
     * @param options The options parameters.
     */
    beginRunCommandAndWait(resourceGroupName: string, vmName: string, parameters: RunCommandInput, options?: VirtualMachinesRunCommandOptionalParams): Promise<VirtualMachinesRunCommandResponse>;
}

/** Describes a Virtual Machine Scale Set. */
export declare type VirtualMachineScaleSet = Resource & {
    /** The virtual machine scale set sku. */
    sku?: Sku;
    /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
    plan?: Plan;
    /** The identity of the virtual machine scale set, if configured. */
    identity?: VirtualMachineScaleSetIdentity;
    /** The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set */
    zones?: string[];
    /** The upgrade policy. */
    upgradePolicy?: UpgradePolicy;
    /** Policy for automatic repairs. */
    automaticRepairsPolicy?: AutomaticRepairsPolicy;
    /** The virtual machine profile. */
    virtualMachineProfile?: VirtualMachineScaleSetVMProfile;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
    overprovision?: boolean;
    /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
    doNotRunExtensionsOnOverprovisionedVMs?: boolean;
    /**
     * Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uniqueId?: string;
    /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
    singlePlacementGroup?: boolean;
    /** Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. */
    zoneBalance?: boolean;
    /** Fault Domain count for each placement group. */
    platformFaultDomainCount?: number;
    /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
    /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
    additionalCapabilities?: AdditionalCapabilities;
    /** Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy?: ScaleInPolicy;
};

/** Describes a virtual machine scale set data disk. */
export declare interface VirtualMachineScaleSetDataDisk {
    /** The disk name. */
    name?: string;
    /** Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. */
    lun: number;
    /** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
    caching?: CachingTypes;
    /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
    writeAcceleratorEnabled?: boolean;
    /** The create option. */
    createOption: DiskCreateOptionTypes;
    /** Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** The managed disk parameters. */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
    /** Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    diskIopsReadWrite?: number;
    /** Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB. */
    diskMBpsReadWrite?: number;
}

/** Describes a Virtual Machine Scale Set Extension. */
export declare type VirtualMachineScaleSetExtension = SubResourceReadOnly & {
    /** The name of the extension. */
    name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
    forceUpdateTag?: string;
    /** The name of the extension handler publisher. */
    publisher?: string;
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    typePropertiesType?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    autoUpgradeMinorVersion?: boolean;
    /** Json formatted public settings for the extension. */
    settings?: Record<string, unknown>;
    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    protectedSettings?: Record<string, unknown>;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Collection of extension names after which this extension needs to be provisioned. */
    provisionAfterExtensions?: string[];
};

/** The List VM scale set extension operation response. */
export declare interface VirtualMachineScaleSetExtensionListResult {
    /** The list of VM scale set extensions. */
    value: VirtualMachineScaleSetExtension[];
    /** The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions. */
    nextLink?: string;
}

/** Describes a virtual machine scale set extension profile. */
export declare interface VirtualMachineScaleSetExtensionProfile {
    /** The virtual machine scale set child extension resources. */
    extensions?: VirtualMachineScaleSetExtension[];
}

/** Interface representing a VirtualMachineScaleSetExtensions. */
export declare interface VirtualMachineScaleSetExtensions {
    /**
     * Gets a list of all extensions in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set containing the extension.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetExtensionsListOptionalParams): PagedAsyncIterableIterator<VirtualMachineScaleSetExtension>;
    /**
     * The operation to create or update an extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: VirtualMachineScaleSetExtension, options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>, VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>>;
    /**
     * The operation to create or update an extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: VirtualMachineScaleSetExtension, options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams): Promise<VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>;
    /**
     * The operation to update an extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: VirtualMachineScaleSetExtensionUpdate, options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetExtensionsUpdateResponse>, VirtualMachineScaleSetExtensionsUpdateResponse>>;
    /**
     * The operation to update an extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: VirtualMachineScaleSetExtensionUpdate, options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams): Promise<VirtualMachineScaleSetExtensionsUpdateResponse>;
    /**
     * The operation to delete the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to delete the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams): Promise<void>;
    /**
     * The operation to get the extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set containing the extension.
     * @param vmssExtensionName The name of the VM scale set extension.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: VirtualMachineScaleSetExtensionsGetOptionalParams): Promise<VirtualMachineScaleSetExtensionsGetResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualMachineScaleSetExtensionsCreateOrUpdateResponse = VirtualMachineScaleSetExtension;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type VirtualMachineScaleSetExtensionsGetResponse = VirtualMachineScaleSetExtension;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualMachineScaleSetExtensionsListNextResponse = VirtualMachineScaleSetExtensionListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualMachineScaleSetExtensionsListResponse = VirtualMachineScaleSetExtensionListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetExtensionsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachineScaleSetExtensionsUpdateResponse = VirtualMachineScaleSetExtension;

/** Describes a Virtual Machine Scale Set Extension. */
export declare type VirtualMachineScaleSetExtensionUpdate = SubResourceReadOnly & {
    /**
     * The name of the extension.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. */
    forceUpdateTag?: string;
    /** The name of the extension handler publisher. */
    publisher?: string;
    /** Specifies the type of the extension; an example is "CustomScriptExtension". */
    typePropertiesType?: string;
    /** Specifies the version of the script handler. */
    typeHandlerVersion?: string;
    /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
    autoUpgradeMinorVersion?: boolean;
    /** Json formatted public settings for the extension. */
    settings?: Record<string, unknown>;
    /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
    protectedSettings?: Record<string, unknown>;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Collection of extension names after which this extension needs to be provisioned. */
    provisionAfterExtensions?: string[];
};

/** Identity for the virtual machine scale set. */
export declare interface VirtualMachineScaleSetIdentity {
    /**
     * The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set. */
    type?: ResourceIdentityType;
    /** The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
    userAssignedIdentities?: {
        [propertyName: string]: ComponentsNj115SSchemasVirtualmachinescalesetidentityPropertiesUserassignedidentitiesAdditionalproperties;
    };
}

/** The instance view of a virtual machine scale set. */
export declare interface VirtualMachineScaleSetInstanceView {
    /**
     * The instance view status summary for the virtual machine scale set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachine?: VirtualMachineScaleSetInstanceViewStatusesSummary;
    /**
     * The extensions information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly extensions?: VirtualMachineScaleSetVMExtensionsSummary[];
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
    /**
     * The orchestration services information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly orchestrationServices?: OrchestrationServiceSummary[];
}

/** Instance view statuses summary for virtual machines of a virtual machine scale set. */
export declare interface VirtualMachineScaleSetInstanceViewStatusesSummary {
    /**
     * The extensions information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusesSummary?: VirtualMachineStatusCodeCount[];
}

/** Describes a virtual machine scale set network profile's IP configuration. */
export declare type VirtualMachineScaleSetIPConfiguration = SubResource & {
    /** The IP configuration name. */
    name: string;
    /** Specifies the identifier of the subnet. */
    subnet?: ApiEntityReference;
    /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
    primary?: boolean;
    /** The publicIPAddressConfiguration. */
    publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;
    /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
    privateIPAddressVersion?: IPVersion;
    /** Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway. */
    applicationGatewayBackendAddressPools?: SubResource[];
    /** Specifies an array of references to application security group. */
    applicationSecurityGroups?: SubResource[];
    /** Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer. */
    loadBalancerBackendAddressPools?: SubResource[];
    /** Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer */
    loadBalancerInboundNatPools?: SubResource[];
};

/** Contains the IP tag associated with the public IP address. */
export declare interface VirtualMachineScaleSetIpTag {
    /** IP tag type. Example: FirstPartyUsage. */
    ipTagType?: string;
    /** IP tag associated with the public IP. Example: SQL, Storage etc. */
    tag?: string;
}

/** List of Virtual Machine Scale Set OS Upgrade History operation response. */
export declare interface VirtualMachineScaleSetListOSUpgradeHistory {
    /** The list of OS upgrades performed on the virtual machine scale set. */
    value: UpgradeOperationHistoricalStatusInfo[];
    /** The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades. */
    nextLink?: string;
}

/** The List Virtual Machine operation response. */
export declare interface VirtualMachineScaleSetListResult {
    /** The list of virtual machine scale sets. */
    value: VirtualMachineScaleSet[];
    /** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS. */
    nextLink?: string;
}

/** The Virtual Machine Scale Set List Skus operation response. */
export declare interface VirtualMachineScaleSetListSkusResult {
    /** The list of skus available for the virtual machine scale set. */
    value: VirtualMachineScaleSetSku[];
    /** The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus. */
    nextLink?: string;
}

/** The List Virtual Machine operation response. */
export declare interface VirtualMachineScaleSetListWithLinkResult {
    /** The list of virtual machine scale sets. */
    value: VirtualMachineScaleSet[];
    /** The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets. */
    nextLink?: string;
}

/** Describes the parameters of a ScaleSet managed disk. */
export declare interface VirtualMachineScaleSetManagedDiskParameters {
    /** Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. */
    storageAccountType?: StorageAccountTypes;
    /** Specifies the customer managed disk encryption set resource id for the managed disk. */
    diskEncryptionSet?: DiskEncryptionSetParameters;
}

/** Describes a virtual machine scale set network profile's network configurations. */
export declare type VirtualMachineScaleSetNetworkConfiguration = SubResource & {
    /** The network configuration name. */
    name: string;
    /** Specifies the primary network interface in case the virtual machine has more than 1 network interface. */
    primary?: boolean;
    /** Specifies whether the network interface is accelerated networking-enabled. */
    enableAcceleratedNetworking?: boolean;
    /** The network security group. */
    networkSecurityGroup?: SubResource;
    /** The dns settings to be applied on the network interfaces. */
    dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /** Specifies the IP configurations of the network interface. */
    ipConfigurations?: VirtualMachineScaleSetIPConfiguration[];
    /** Whether IP forwarding enabled on this NIC. */
    enableIPForwarding?: boolean;
};

/** Describes a virtual machines scale sets network configuration's DNS settings. */
export declare interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
    /** List of DNS servers IP addresses */
    dnsServers?: string[];
}

/** Describes a virtual machine scale set network profile. */
export declare interface VirtualMachineScaleSetNetworkProfile {
    /** A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'. */
    healthProbe?: ApiEntityReference;
    /** The list of network configurations. */
    networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}

/** Describes a virtual machine scale set operating system disk. */
export declare interface VirtualMachineScaleSetOSDisk {
    /** The disk name. */
    name?: string;
    /** Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage** */
    caching?: CachingTypes;
    /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
    writeAcceleratorEnabled?: boolean;
    /** Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described. */
    createOption: DiskCreateOptionTypes;
    /** Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set. */
    diffDiskSettings?: DiffDiskSettings;
    /** Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux** */
    osType?: OperatingSystemTypes;
    /** Specifies information about the unmanaged user image to base the scale set on. */
    image?: VirtualHardDisk;
    /** Specifies the container urls that are used to store operating system disks for the scale set. */
    vhdContainers?: string[];
    /** The managed disk parameters. */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
}

/** Describes a virtual machine scale set OS profile. */
export declare interface VirtualMachineScaleSetOSProfile {
    /** Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long. */
    computerNamePrefix?: string;
    /** Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
    adminUsername?: string;
    /** Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password) */
    adminPassword?: string;
    /** Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) */
    customData?: string;
    /** Specifies Windows operating system settings on the virtual machine. */
    windowsConfiguration?: WindowsConfiguration;
    /** Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json). */
    linuxConfiguration?: LinuxConfiguration;
    /** Specifies set of certificates that should be installed onto the virtual machines in the scale set. */
    secrets?: VaultSecretGroup[];
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export declare interface VirtualMachineScaleSetPublicIPAddressConfiguration {
    /** The publicIP address configuration name. */
    name: string;
    /** The idle timeout of the public IP address. */
    idleTimeoutInMinutes?: number;
    /** The dns settings to be applied on the publicIP addresses . */
    dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
    /** The list of IP tags associated with the public IP address. */
    ipTags?: VirtualMachineScaleSetIpTag[];
    /** The PublicIPPrefix from which to allocate publicIP addresses. */
    publicIPPrefix?: SubResource;
    /** Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'. */
    publicIPAddressVersion?: IPVersion;
}

/** Describes a virtual machines scale sets network configuration's DNS settings. */
export declare interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
    /** The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created */
    domainNameLabel: string;
}

/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
export declare type VirtualMachineScaleSetReimageParameters = VirtualMachineScaleSetVMReimageParameters & {
    /** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
    instanceIds?: string[];
};

/** Interface representing a VirtualMachineScaleSetRollingUpgrades. */
export declare interface VirtualMachineScaleSetRollingUpgrades {
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginCancel(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginCancelAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams): Promise<void>;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version are
     * not affected.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version are
     * not affected.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStartOSUpgradeAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams): Promise<void>;
    /**
     * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the
     * latest available extension version. Instances which are already running the latest extension
     * versions are not affected.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStartExtensionUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the
     * latest available extension version. Instances which are already running the latest extension
     * versions are not affected.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStartExtensionUpgradeAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams): Promise<void>;
    /**
     * Gets the status of the latest virtual machine scale set rolling upgrade.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    getLatest(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams): Promise<VirtualMachineScaleSetRollingUpgradesGetLatestResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetRollingUpgradesCancelOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getLatest operation. */
export declare type VirtualMachineScaleSetRollingUpgradesGetLatestResponse = RollingUpgradeStatusInfo;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Interface representing a VirtualMachineScaleSets. */
export declare interface VirtualMachineScaleSets {
    /**
     * Gets a list of all VM scale sets under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: VirtualMachineScaleSetsListOptionalParams): PagedAsyncIterableIterator<VirtualMachineScaleSet>;
    /**
     * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group.
     * Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink
     * is null to fetch all the VM Scale Sets.
     * @param options The options parameters.
     */
    listAll(options?: VirtualMachineScaleSetsListAllOptionalParams): PagedAsyncIterableIterator<VirtualMachineScaleSet>;
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances
     * allowed for each SKU.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    listSkus(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsListSkusOptionalParams): PagedAsyncIterableIterator<VirtualMachineScaleSetSku>;
    /**
     * Gets list of OS upgrades on a VM scale set instance.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    listOSUpgradeHistory(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams): PagedAsyncIterableIterator<UpgradeOperationHistoricalStatusInfo>;
    /**
     * Create or update a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set to create or update.
     * @param parameters The scale set object.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: VirtualMachineScaleSet, options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetsCreateOrUpdateResponse>, VirtualMachineScaleSetsCreateOrUpdateResponse>>;
    /**
     * Create or update a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set to create or update.
     * @param parameters The scale set object.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, parameters: VirtualMachineScaleSet, options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams): Promise<VirtualMachineScaleSetsCreateOrUpdateResponse>;
    /**
     * Update a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set to create or update.
     * @param parameters The scale set object.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: VirtualMachineScaleSetUpdate, options?: VirtualMachineScaleSetsUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetsUpdateResponse>, VirtualMachineScaleSetsUpdateResponse>>;
    /**
     * Update a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set to create or update.
     * @param parameters The scale set object.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, parameters: VirtualMachineScaleSetUpdate, options?: VirtualMachineScaleSetsUpdateOptionalParams): Promise<VirtualMachineScaleSetsUpdateResponse>;
    /**
     * Deletes a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsDeleteOptionalParams): Promise<void>;
    /**
     * Display information about a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsGetOptionalParams): Promise<VirtualMachineScaleSetsGetResponse>;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsDeallocateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginDeallocateAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsDeallocateOptionalParams): Promise<void>;
    /**
     * Deletes virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
     * @param options The options parameters.
     */
    beginDeleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs, options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
     * @param options The options parameters.
     */
    beginDeleteInstancesAndWait(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs, options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams): Promise<void>;
    /**
     * Gets the status of a VM scale set instance.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsGetInstanceViewOptionalParams): Promise<VirtualMachineScaleSetsGetInstanceViewResponse>;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release resources
     * and avoid charges.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsPowerOffOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release resources
     * and avoid charges.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginPowerOffAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsPowerOffOptionalParams): Promise<void>;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginRestart(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsRestartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginRestartAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsRestartOptionalParams): Promise<void>;
    /**
     * Starts one or more virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts one or more virtual machines in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsStartOptionalParams): Promise<void>;
    /**
     * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and
     * powers them back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginRedeploy(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsRedeployOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and
     * powers them back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginRedeployAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsRedeployOptionalParams): Promise<void>;
    /**
     * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which
     * are not eligible for perform maintenance will be failed. Please refer to best practices for more
     * details:
     * https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginPerformMaintenance(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which
     * are not eligible for perform maintenance will be failed. Please refer to best practices for more
     * details:
     * https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginPerformMaintenanceAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams): Promise<void>;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
     * @param options The options parameters.
     */
    beginUpdateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs, options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
     * @param options The options parameters.
     */
    beginUpdateInstancesAndWait(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs, options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams): Promise<void>;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't
     * have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is
     * reset to initial state.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginReimage(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsReimageOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't
     * have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is
     * reset to initial state.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginReimageAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsReimageOptionalParams): Promise<void>;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsReimageAllOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    beginReimageAllAndWait(resourceGroupName: string, vmScaleSetName: string, options?: VirtualMachineScaleSetsReimageAllOptionalParams): Promise<void>;
    /**
     * Manual platform update domain walk to update virtual machines in a service fabric virtual machine
     * scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param platformUpdateDomain The platform update domain for which a manual recovery walk is requested
     * @param options The options parameters.
     */
    forceRecoveryServiceFabricPlatformUpdateDomainWalk(resourceGroupName: string, vmScaleSetName: string, platformUpdateDomain: number, options?: VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams): Promise<VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse>;
    /**
     * Converts SinglePlacementGroup property to false for a existing virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the virtual machine scale set to create or update.
     * @param parameters The input object for ConvertToSinglePlacementGroup API.
     * @param options The options parameters.
     */
    convertToSinglePlacementGroup(resourceGroupName: string, vmScaleSetName: string, parameters: VMScaleSetConvertToSinglePlacementGroupInput, options?: VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams): Promise<void>;
    /**
     * Changes ServiceState property for a given service
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the virtual machine scale set to create or update.
     * @param parameters The input object for SetOrchestrationServiceState API.
     * @param options The options parameters.
     */
    beginSetOrchestrationServiceState(resourceGroupName: string, vmScaleSetName: string, parameters: OrchestrationServiceStateInput, options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Changes ServiceState property for a given service
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the virtual machine scale set to create or update.
     * @param parameters The input object for SetOrchestrationServiceState API.
     * @param options The options parameters.
     */
    beginSetOrchestrationServiceStateAndWait(resourceGroupName: string, vmScaleSetName: string, parameters: OrchestrationServiceStateInput, options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams): Promise<void>;
}

/**
 * Defines values for VirtualMachineScaleSetScaleInRules. \
 * {@link KnownVirtualMachineScaleSetScaleInRules} can be used interchangeably with VirtualMachineScaleSetScaleInRules,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **OldestVM** \
 * **NewestVM**
 */
export declare type VirtualMachineScaleSetScaleInRules = string;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualMachineScaleSetsCreateOrUpdateResponse = VirtualMachineScaleSet;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsDeallocateOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsDeleteInstancesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the forceRecoveryServiceFabricPlatformUpdateDomainWalk operation. */
export declare type VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse = RecoveryWalkResponse;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsGetInstanceViewOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceView operation. */
export declare type VirtualMachineScaleSetsGetInstanceViewResponse = VirtualMachineScaleSetInstanceView;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsGetOSUpgradeHistoryNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOSUpgradeHistoryNext operation. */
export declare type VirtualMachineScaleSetsGetOSUpgradeHistoryNextResponse = VirtualMachineScaleSetListOSUpgradeHistory;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getOSUpgradeHistory operation. */
export declare type VirtualMachineScaleSetsGetOSUpgradeHistoryResponse = VirtualMachineScaleSetListOSUpgradeHistory;

/** Contains response data for the get operation. */
export declare type VirtualMachineScaleSetsGetResponse = VirtualMachineScaleSet;

/** Describes an available virtual machine scale set sku. */
export declare interface VirtualMachineScaleSetSku {
    /**
     * The type of resource the sku applies to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceType?: string;
    /**
     * The Sku.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /**
     * Specifies the number of virtual machines in the scale set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capacity?: VirtualMachineScaleSetSkuCapacity;
}

/** Describes scaling information of a sku. */
export declare interface VirtualMachineScaleSetSkuCapacity {
    /**
     * The minimum capacity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minimum?: number;
    /**
     * The maximum capacity that can be set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximum?: number;
    /**
     * The default capacity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultCapacity?: number;
    /**
     * The scale type applicable to the sku.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scaleType?: VirtualMachineScaleSetSkuScaleType;
}

/** Defines values for VirtualMachineScaleSetSkuScaleType. */
export declare type VirtualMachineScaleSetSkuScaleType = "Automatic" | "None";

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type VirtualMachineScaleSetsListAllNextResponse = VirtualMachineScaleSetListWithLinkResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type VirtualMachineScaleSetsListAllResponse = VirtualMachineScaleSetListWithLinkResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualMachineScaleSetsListNextResponse = VirtualMachineScaleSetListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualMachineScaleSetsListResponse = VirtualMachineScaleSetListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListSkusNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSkusNext operation. */
export declare type VirtualMachineScaleSetsListSkusNextResponse = VirtualMachineScaleSetListSkusResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsListSkusOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSkus operation. */
export declare type VirtualMachineScaleSetsListSkusResponse = VirtualMachineScaleSetListSkusResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsPerformMaintenanceOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsPowerOffOptionalParams extends coreClient.OperationOptions {
    /** The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified */
    skipShutdown?: boolean;
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsRedeployOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsReimageAllOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsReimageOptionalParams extends coreClient.OperationOptions {
    /** Parameters for Reimaging VM ScaleSet. */
    vmScaleSetReimageInput?: VirtualMachineScaleSetReimageParameters;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsRestartOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsStartOptionalParams extends coreClient.OperationOptions {
    /** A list of virtual machine instance IDs from the VM scale set. */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Describes a virtual machine scale set storage profile. */
export declare interface VirtualMachineScaleSetStorageProfile {
    /** Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. */
    imageReference?: ImageReference;
    /** Specifies information about the operating system disk used by the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    osDisk?: VirtualMachineScaleSetOSDisk;
    /** Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). */
    dataDisks?: VirtualMachineScaleSetDataDisk[];
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsUpdateInstancesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachineScaleSetsUpdateResponse = VirtualMachineScaleSet;

/** Describes a Virtual Machine Scale Set. */
export declare type VirtualMachineScaleSetUpdate = UpdateResource & {
    /** The virtual machine scale set sku. */
    sku?: Sku;
    /** The purchase plan when deploying a virtual machine scale set from VM Marketplace images. */
    plan?: Plan;
    /** The identity of the virtual machine scale set, if configured. */
    identity?: VirtualMachineScaleSetIdentity;
    /** The upgrade policy. */
    upgradePolicy?: UpgradePolicy;
    /** Policy for automatic repairs. */
    automaticRepairsPolicy?: AutomaticRepairsPolicy;
    /** The virtual machine profile. */
    virtualMachineProfile?: VirtualMachineScaleSetUpdateVMProfile;
    /** Specifies whether the Virtual Machine Scale Set should be overprovisioned. */
    overprovision?: boolean;
    /** When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs. */
    doNotRunExtensionsOnOverprovisionedVMs?: boolean;
    /** When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true. */
    singlePlacementGroup?: boolean;
    /** Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
    additionalCapabilities?: AdditionalCapabilities;
    /** Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in. */
    scaleInPolicy?: ScaleInPolicy;
    /** Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
};

/** Describes a virtual machine scale set network profile's IP configuration. NOTE: The subnet of a scale set may be modified as long as the original subnet and the new subnet are in the same virtual network */
export declare type VirtualMachineScaleSetUpdateIPConfiguration = SubResource & {
    /** The IP configuration name. */
    name?: string;
    /** The subnet. */
    subnet?: ApiEntityReference;
    /** Specifies the primary IP Configuration in case the network interface has more than one IP Configuration. */
    primary?: boolean;
    /** The publicIPAddressConfiguration. */
    publicIPAddressConfiguration?: VirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
    /** Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'. */
    privateIPAddressVersion?: IPVersion;
    /** The application gateway backend address pools. */
    applicationGatewayBackendAddressPools?: SubResource[];
    /** Specifies an array of references to application security group. */
    applicationSecurityGroups?: SubResource[];
    /** The load balancer backend address pools. */
    loadBalancerBackendAddressPools?: SubResource[];
    /** The load balancer inbound nat pools. */
    loadBalancerInboundNatPools?: SubResource[];
};

/** Describes a virtual machine scale set network profile's network configurations. */
export declare type VirtualMachineScaleSetUpdateNetworkConfiguration = SubResource & {
    /** The network configuration name. */
    name?: string;
    /** Whether this is a primary NIC on a virtual machine. */
    primary?: boolean;
    /** Specifies whether the network interface is accelerated networking-enabled. */
    enableAcceleratedNetworking?: boolean;
    /** The network security group. */
    networkSecurityGroup?: SubResource;
    /** The dns settings to be applied on the network interfaces. */
    dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /** The virtual machine scale set IP Configuration. */
    ipConfigurations?: VirtualMachineScaleSetUpdateIPConfiguration[];
    /** Whether IP forwarding enabled on this NIC. */
    enableIPForwarding?: boolean;
};

/** Describes a virtual machine scale set network profile. */
export declare interface VirtualMachineScaleSetUpdateNetworkProfile {
    /** A reference to a load balancer probe used to determine the health of an instance in the virtual machine scale set. The reference will be in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'. */
    healthProbe?: ApiEntityReference;
    /** The list of network configurations. */
    networkInterfaceConfigurations?: VirtualMachineScaleSetUpdateNetworkConfiguration[];
}

/** Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk. */
export declare interface VirtualMachineScaleSetUpdateOSDisk {
    /** The caching type. */
    caching?: CachingTypes;
    /** Specifies whether writeAccelerator should be enabled or disabled on the disk. */
    writeAcceleratorEnabled?: boolean;
    /** Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB */
    diskSizeGB?: number;
    /** The Source User Image VirtualHardDisk. This VirtualHardDisk will be copied before using it to attach to the Virtual Machine. If SourceImage is provided, the destination VirtualHardDisk should not exist. */
    image?: VirtualHardDisk;
    /** The list of virtual hard disk container uris. */
    vhdContainers?: string[];
    /** The managed disk parameters. */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
}

/** Describes a virtual machine scale set OS profile. */
export declare interface VirtualMachineScaleSetUpdateOSProfile {
    /** A base-64 encoded string of custom data. */
    customData?: string;
    /** The Windows Configuration of the OS profile. */
    windowsConfiguration?: WindowsConfiguration;
    /** The Linux Configuration of the OS profile. */
    linuxConfiguration?: LinuxConfiguration;
    /** The List of certificates for addition to the VM. */
    secrets?: VaultSecretGroup[];
}

/** Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration */
export declare interface VirtualMachineScaleSetUpdatePublicIPAddressConfiguration {
    /** The publicIP address configuration name. */
    name?: string;
    /** The idle timeout of the public IP address. */
    idleTimeoutInMinutes?: number;
    /** The dns settings to be applied on the publicIP addresses . */
    dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
}

/** Describes a virtual machine scale set storage profile. */
export declare interface VirtualMachineScaleSetUpdateStorageProfile {
    /** The image reference. */
    imageReference?: ImageReference;
    /** The OS disk. */
    osDisk?: VirtualMachineScaleSetUpdateOSDisk;
    /** The data disks. */
    dataDisks?: VirtualMachineScaleSetDataDisk[];
}

/** Describes a virtual machine scale set virtual machine profile. */
export declare interface VirtualMachineScaleSetUpdateVMProfile {
    /** The virtual machine scale set OS profile. */
    osProfile?: VirtualMachineScaleSetUpdateOSProfile;
    /** The virtual machine scale set storage profile. */
    storageProfile?: VirtualMachineScaleSetUpdateStorageProfile;
    /** The virtual machine scale set network profile. */
    networkProfile?: VirtualMachineScaleSetUpdateNetworkProfile;
    /** The virtual machine scale set diagnostics profile. */
    diagnosticsProfile?: DiagnosticsProfile;
    /** The virtual machine scale set extension profile. */
    extensionProfile?: VirtualMachineScaleSetExtensionProfile;
    /** The license type, which is for bring your own license scenario. */
    licenseType?: string;
    /** Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01. */
    billingProfile?: BillingProfile;
    /** Specifies Scheduled Event related configurations. */
    scheduledEventsProfile?: ScheduledEventsProfile;
}

/** Describes a virtual machine scale set virtual machine. */
export declare type VirtualMachineScaleSetVM = Resource & {
    /**
     * The virtual machine instance ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceId?: string;
    /**
     * The virtual machine SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
    plan?: Plan;
    /**
     * The virtual machine child extension resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resources?: VirtualMachineExtension[];
    /**
     * The virtual machine zones.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zones?: string[];
    /**
     * Specifies whether the latest model has been applied to the virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly latestModelApplied?: boolean;
    /**
     * Azure VM unique ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vmId?: string;
    /**
     * The virtual machine instance view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceView?: VirtualMachineScaleSetVMInstanceView;
    /** Specifies the hardware settings for the virtual machine. */
    hardwareProfile?: HardwareProfile;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: StorageProfile;
    /** Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type. */
    additionalCapabilities?: AdditionalCapabilities;
    /** Specifies the operating system settings for the virtual machine. */
    osProfile?: OSProfile;
    /** Specifies the network interfaces of the virtual machine. */
    networkProfile?: NetworkProfile;
    /** Specifies the network profile configuration of the virtual machine. */
    networkProfileConfiguration?: VirtualMachineScaleSetVMNetworkProfileConfiguration;
    /** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
    diagnosticsProfile?: DiagnosticsProfile;
    /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. */
    availabilitySet?: SubResource;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
    licenseType?: string;
    /**
     * Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly modelDefinitionApplied?: string;
    /** Specifies the protection policy of the virtual machine. */
    protectionPolicy?: VirtualMachineScaleSetVMProtectionPolicy;
};

/** Interface representing a VirtualMachineScaleSetVMExtensions. */
export declare interface VirtualMachineScaleSetVMExtensions {
    /**
     * The operation to create or update the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, extensionParameters: VirtualMachineExtension, options?: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse>, VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse>>;
    /**
     * The operation to create or update the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, extensionParameters: VirtualMachineExtension, options?: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams): Promise<VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse>;
    /**
     * The operation to update the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, extensionParameters: VirtualMachineExtensionUpdate, options?: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetVMExtensionsUpdateResponse>, VirtualMachineScaleSetVMExtensionsUpdateResponse>>;
    /**
     * The operation to update the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, extensionParameters: VirtualMachineExtensionUpdate, options?: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams): Promise<VirtualMachineScaleSetVMExtensionsUpdateResponse>;
    /**
     * The operation to delete the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, options?: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * The operation to delete the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, options?: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams): Promise<void>;
    /**
     * The operation to get the VMSS VM extension.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param vmExtensionName The name of the virtual machine extension.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, vmExtensionName: string, options?: VirtualMachineScaleSetVMExtensionsGetOptionalParams): Promise<VirtualMachineScaleSetVMExtensionsGetResponse>;
    /**
     * The operation to get all extensions of an instance in Virtual Machine Scaleset.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMExtensionsListOptionalParams): Promise<VirtualMachineScaleSetVMExtensionsListResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse = VirtualMachineExtension;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMExtensionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMExtensionsGetOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type VirtualMachineScaleSetVMExtensionsGetResponse = VirtualMachineExtension;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMExtensionsListOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply on the operation. */
    expand?: string;
}

/** Contains response data for the list operation. */
export declare type VirtualMachineScaleSetVMExtensionsListResponse = VirtualMachineExtensionsListResult;

/** Extensions summary for virtual machines of a virtual machine scale set. */
export declare interface VirtualMachineScaleSetVMExtensionsSummary {
    /**
     * The extension name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The extensions information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly statusesSummary?: VirtualMachineStatusCodeCount[];
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMExtensionsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachineScaleSetVMExtensionsUpdateResponse = VirtualMachineExtension;

/** Specifies a list of virtual machine instance IDs from the VM scale set. */
export declare interface VirtualMachineScaleSetVMInstanceIDs {
    /** The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. */
    instanceIds?: string[];
}

/** Specifies a list of virtual machine instance IDs from the VM scale set. */
export declare interface VirtualMachineScaleSetVMInstanceRequiredIDs {
    /** The virtual machine scale set instance ids. */
    instanceIds: string[];
}

/** The instance view of a virtual machine scale set VM. */
export declare interface VirtualMachineScaleSetVMInstanceView {
    /** The Update Domain count. */
    platformUpdateDomain?: number;
    /** The Fault Domain count. */
    platformFaultDomain?: number;
    /** The Remote desktop certificate thumbprint. */
    rdpThumbPrint?: string;
    /** The VM Agent running on the virtual machine. */
    vmAgent?: VirtualMachineAgentInstanceView;
    /** The Maintenance Operation status on the virtual machine. */
    maintenanceRedeployStatus?: MaintenanceRedeployStatus;
    /** The disks information. */
    disks?: DiskInstanceView[];
    /** The extensions information. */
    extensions?: VirtualMachineExtensionInstanceView[];
    /**
     * The health status for the VM.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vmHealth?: VirtualMachineHealthStatus;
    /** Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor. */
    bootDiagnostics?: BootDiagnosticsInstanceView;
    /** The resource status information. */
    statuses?: InstanceViewStatus[];
    /** The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId. */
    placementGroupId?: string;
}

/** The List Virtual Machine Scale Set VMs operation response. */
export declare interface VirtualMachineScaleSetVMListResult {
    /** The list of virtual machine scale sets VMs. */
    value: VirtualMachineScaleSetVM[];
    /** The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs */
    nextLink?: string;
}

/** Describes a virtual machine scale set VM network profile. */
export declare interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
    /** The list of network configurations. */
    networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}

/** Describes a virtual machine scale set virtual machine profile. */
export declare interface VirtualMachineScaleSetVMProfile {
    /** Specifies the operating system settings for the virtual machines in the scale set. */
    osProfile?: VirtualMachineScaleSetOSProfile;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: VirtualMachineScaleSetStorageProfile;
    /** Specifies properties of the network interfaces of the virtual machines in the scale set. */
    networkProfile?: VirtualMachineScaleSetNetworkProfile;
    /** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
    diagnosticsProfile?: DiagnosticsProfile;
    /** Specifies a collection of settings for extensions installed on virtual machines in the scale set. */
    extensionProfile?: VirtualMachineScaleSetExtensionProfile;
    /** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
    licenseType?: string;
    /** Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview */
    priority?: VirtualMachinePriorityTypes;
    /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. <br><br>For Azure Spot virtual machines, the only supported value is 'Deallocate' and the minimum api-version is 2019-03-01. <br><br>For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
    evictionPolicy?: VirtualMachineEvictionPolicyTypes;
    /** Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01. */
    billingProfile?: BillingProfile;
    /** Specifies Scheduled Event related configurations. */
    scheduledEventsProfile?: ScheduledEventsProfile;
}

/** The protection policy of a virtual machine scale set VM. */
export declare interface VirtualMachineScaleSetVMProtectionPolicy {
    /** Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation. */
    protectFromScaleIn?: boolean;
    /** Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. */
    protectFromScaleSetActions?: boolean;
}

/** Describes a Virtual Machine Scale Set VM Reimage Parameters. */
export declare type VirtualMachineScaleSetVMReimageParameters = VirtualMachineReimageParameters & {};

/** Interface representing a VirtualMachineScaleSetVMs. */
export declare interface VirtualMachineScaleSetVMs {
    /**
     * Gets a list of all virtual machines in a VM scale sets.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the VM scale set.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualMachineScaleSetName: string, options?: VirtualMachineScaleSetVMsListOptionalParams): PagedAsyncIterableIterator<VirtualMachineScaleSetVM>;
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsReimageOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginReimageAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsReimageOptionalParams): Promise<void>;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
     * operation is only supported for managed disks.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsReimageAllOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
     * operation is only supported for managed disks.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginReimageAllAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsReimageAllOptionalParams): Promise<void>;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this virtual
     * machine once it is deallocated.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsDeallocateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this virtual
     * machine once it is deallocated.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginDeallocateAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsDeallocateOptionalParams): Promise<void>;
    /**
     * Updates a virtual machine of a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
     * @param instanceId The instance ID of the virtual machine.
     * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: VirtualMachineScaleSetVM, options?: VirtualMachineScaleSetVMsUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetVMsUpdateResponse>, VirtualMachineScaleSetVMsUpdateResponse>>;
    /**
     * Updates a virtual machine of a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
     * @param instanceId The instance ID of the virtual machine.
     * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: VirtualMachineScaleSetVM, options?: VirtualMachineScaleSetVMsUpdateOptionalParams): Promise<VirtualMachineScaleSetVMsUpdateResponse>;
    /**
     * Deletes a virtual machine from a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a virtual machine from a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsDeleteOptionalParams): Promise<void>;
    /**
     * Gets a virtual machine from a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsGetOptionalParams): Promise<VirtualMachineScaleSetVMsGetResponse>;
    /**
     * Gets the status of a virtual machine from a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsGetInstanceViewOptionalParams): Promise<VirtualMachineScaleSetVMsGetInstanceViewResponse>;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
     * are getting charged for the resources. Instead, use deallocate to release resources and avoid
     * charges.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsPowerOffOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
     * are getting charged for the resources. Instead, use deallocate to release resources and avoid
     * charges.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginPowerOffAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsPowerOffOptionalParams): Promise<void>;
    /**
     * Restarts a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsRestartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Restarts a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginRestartAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsRestartOptionalParams): Promise<void>;
    /**
     * Starts a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsStartOptionalParams): Promise<void>;
    /**
     * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
     * it back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginRedeploy(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsRedeployOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
     * it back on.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginRedeployAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsRedeployOptionalParams): Promise<void>;
    /**
     * Performs maintenance on a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginPerformMaintenance(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Performs maintenance on a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    beginPerformMaintenanceAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams): Promise<void>;
    /**
     * The operation to simulate the eviction of spot virtual machine in a VM scale set. The eviction will
     * occur within 30 minutes of calling the API
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param options The options parameters.
     */
    simulateEviction(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: VirtualMachineScaleSetVMsSimulateEvictionOptionalParams): Promise<void>;
    /**
     * Run command on a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param parameters Parameters supplied to the Run command operation.
     * @param options The options parameters.
     */
    beginRunCommand(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: RunCommandInput, options?: VirtualMachineScaleSetVMsRunCommandOptionalParams): Promise<PollerLike<PollOperationState<VirtualMachineScaleSetVMsRunCommandResponse>, VirtualMachineScaleSetVMsRunCommandResponse>>;
    /**
     * Run command on a virtual machine in a VM scale set.
     * @param resourceGroupName The name of the resource group.
     * @param vmScaleSetName The name of the VM scale set.
     * @param instanceId The instance ID of the virtual machine.
     * @param parameters Parameters supplied to the Run command operation.
     * @param options The options parameters.
     */
    beginRunCommandAndWait(resourceGroupName: string, vmScaleSetName: string, instanceId: string, parameters: RunCommandInput, options?: VirtualMachineScaleSetVMsRunCommandOptionalParams): Promise<VirtualMachineScaleSetVMsRunCommandResponse>;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsDeallocateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsGetInstanceViewOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getInstanceView operation. */
export declare type VirtualMachineScaleSetVMsGetInstanceViewResponse = VirtualMachineScaleSetVMInstanceView;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualMachineScaleSetVMsGetResponse = VirtualMachineScaleSetVM;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsListNextOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply to the operation. */
    expand?: string;
    /** The filter to apply to the operation. */
    filter?: string;
    /** The list parameters. */
    select?: string;
}

/** Contains response data for the listNext operation. */
export declare type VirtualMachineScaleSetVMsListNextResponse = VirtualMachineScaleSetVMListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsListOptionalParams extends coreClient.OperationOptions {
    /** The expand expression to apply to the operation. */
    expand?: string;
    /** The filter to apply to the operation. */
    filter?: string;
    /** The list parameters. */
    select?: string;
}

/** Contains response data for the list operation. */
export declare type VirtualMachineScaleSetVMsListResponse = VirtualMachineScaleSetVMListResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsPowerOffOptionalParams extends coreClient.OperationOptions {
    /** The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified */
    skipShutdown?: boolean;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsRedeployOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsReimageAllOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsReimageOptionalParams extends coreClient.OperationOptions {
    /** Parameters for the Reimaging Virtual machine in ScaleSet. */
    vmScaleSetVMReimageInput?: VirtualMachineScaleSetVMReimageParameters;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsRestartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsRunCommandOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the runCommand operation. */
export declare type VirtualMachineScaleSetVMsRunCommandResponse = RunCommandResult;

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsSimulateEvictionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsStartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachineScaleSetVMsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachineScaleSetVMsUpdateResponse = VirtualMachineScaleSetVM;

/** Optional parameters. */
export declare interface VirtualMachinesCaptureOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the capture operation. */
export declare type VirtualMachinesCaptureResponse = VirtualMachineCaptureResult;

/** Optional parameters. */
export declare interface VirtualMachinesConvertToManagedDisksOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualMachinesCreateOrUpdateResponse = VirtualMachine;

/** Optional parameters. */
export declare interface VirtualMachinesDeallocateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesGeneralizeOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VirtualMachinesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualMachinesGetResponse = VirtualMachine;

/** Optional parameters. */
export declare interface VirtualMachinesInstanceViewOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the instanceView operation. */
export declare type VirtualMachinesInstanceViewResponse = VirtualMachineInstanceView;

/** Describes the properties of a VM size. */
export declare interface VirtualMachineSize {
    /** The name of the virtual machine size. */
    name?: string;
    /** The number of cores supported by the virtual machine size. */
    numberOfCores?: number;
    /** The OS disk size, in MB, allowed by the virtual machine size. */
    osDiskSizeInMB?: number;
    /** The resource disk size, in MB, allowed by the virtual machine size. */
    resourceDiskSizeInMB?: number;
    /** The amount of memory, in MB, supported by the virtual machine size. */
    memoryInMB?: number;
    /** The maximum number of data disks that can be attached to the virtual machine size. */
    maxDataDiskCount?: number;
}

/** The List Virtual Machine operation response. */
export declare interface VirtualMachineSizeListResult {
    /** The list of virtual machine sizes. */
    value?: VirtualMachineSize[];
}

/** Interface representing a VirtualMachineSizes. */
export declare interface VirtualMachineSizes {
    /**
     * This API is deprecated. Use [Resources
     * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
     * @param location The location upon which virtual-machine-sizes is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: VirtualMachineSizesListOptionalParams): PagedAsyncIterableIterator<VirtualMachineSize>;
}

/** Optional parameters. */
export declare interface VirtualMachineSizesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualMachineSizesListResponse = VirtualMachineSizeListResult;

/**
 * Defines values for VirtualMachineSizeTypes. \
 * {@link KnownVirtualMachineSizeTypes} can be used interchangeably with VirtualMachineSizeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic_A0** \
 * **Basic_A1** \
 * **Basic_A2** \
 * **Basic_A3** \
 * **Basic_A4** \
 * **Standard_A0** \
 * **Standard_A1** \
 * **Standard_A2** \
 * **Standard_A3** \
 * **Standard_A4** \
 * **Standard_A5** \
 * **Standard_A6** \
 * **Standard_A7** \
 * **Standard_A8** \
 * **Standard_A9** \
 * **Standard_A10** \
 * **Standard_A11** \
 * **Standard_A1_v2** \
 * **Standard_A2_v2** \
 * **Standard_A4_v2** \
 * **Standard_A8_v2** \
 * **Standard_A2m_v2** \
 * **Standard_A4m_v2** \
 * **Standard_A8m_v2** \
 * **Standard_B1s** \
 * **Standard_B1ms** \
 * **Standard_B2s** \
 * **Standard_B2ms** \
 * **Standard_B4ms** \
 * **Standard_B8ms** \
 * **Standard_D1** \
 * **Standard_D2** \
 * **Standard_D3** \
 * **Standard_D4** \
 * **Standard_D11** \
 * **Standard_D12** \
 * **Standard_D13** \
 * **Standard_D14** \
 * **Standard_D1_v2** \
 * **Standard_D2_v2** \
 * **Standard_D3_v2** \
 * **Standard_D4_v2** \
 * **Standard_D5_v2** \
 * **Standard_D2_v3** \
 * **Standard_D4_v3** \
 * **Standard_D8_v3** \
 * **Standard_D16_v3** \
 * **Standard_D32_v3** \
 * **Standard_D64_v3** \
 * **Standard_D2s_v3** \
 * **Standard_D4s_v3** \
 * **Standard_D8s_v3** \
 * **Standard_D16s_v3** \
 * **Standard_D32s_v3** \
 * **Standard_D64s_v3** \
 * **Standard_D11_v2** \
 * **Standard_D12_v2** \
 * **Standard_D13_v2** \
 * **Standard_D14_v2** \
 * **Standard_D15_v2** \
 * **Standard_DS1** \
 * **Standard_DS2** \
 * **Standard_DS3** \
 * **Standard_DS4** \
 * **Standard_DS11** \
 * **Standard_DS12** \
 * **Standard_DS13** \
 * **Standard_DS14** \
 * **Standard_DS1_v2** \
 * **Standard_DS2_v2** \
 * **Standard_DS3_v2** \
 * **Standard_DS4_v2** \
 * **Standard_DS5_v2** \
 * **Standard_DS11_v2** \
 * **Standard_DS12_v2** \
 * **Standard_DS13_v2** \
 * **Standard_DS14_v2** \
 * **Standard_DS15_v2** \
 * **Standard_DS13-4_v2** \
 * **Standard_DS13-2_v2** \
 * **Standard_DS14-8_v2** \
 * **Standard_DS14-4_v2** \
 * **Standard_E2_v3** \
 * **Standard_E4_v3** \
 * **Standard_E8_v3** \
 * **Standard_E16_v3** \
 * **Standard_E32_v3** \
 * **Standard_E64_v3** \
 * **Standard_E2s_v3** \
 * **Standard_E4s_v3** \
 * **Standard_E8s_v3** \
 * **Standard_E16s_v3** \
 * **Standard_E32s_v3** \
 * **Standard_E64s_v3** \
 * **Standard_E32-16_v3** \
 * **Standard_E32-8s_v3** \
 * **Standard_E64-32s_v3** \
 * **Standard_E64-16s_v3** \
 * **Standard_F1** \
 * **Standard_F2** \
 * **Standard_F4** \
 * **Standard_F8** \
 * **Standard_F16** \
 * **Standard_F1s** \
 * **Standard_F2s** \
 * **Standard_F4s** \
 * **Standard_F8s** \
 * **Standard_F16s** \
 * **Standard_F2s_v2** \
 * **Standard_F4s_v2** \
 * **Standard_F8s_v2** \
 * **Standard_F16s_v2** \
 * **Standard_F32s_v2** \
 * **Standard_F64s_v2** \
 * **Standard_F72s_v2** \
 * **Standard_G1** \
 * **Standard_G2** \
 * **Standard_G3** \
 * **Standard_G4** \
 * **Standard_G5** \
 * **Standard_GS1** \
 * **Standard_GS2** \
 * **Standard_GS3** \
 * **Standard_GS4** \
 * **Standard_GS5** \
 * **Standard_GS4-8** \
 * **Standard_GS4-4** \
 * **Standard_GS5-16** \
 * **Standard_GS5-8** \
 * **Standard_H8** \
 * **Standard_H16** \
 * **Standard_H8m** \
 * **Standard_H16m** \
 * **Standard_H16r** \
 * **Standard_H16mr** \
 * **Standard_L4s** \
 * **Standard_L8s** \
 * **Standard_L16s** \
 * **Standard_L32s** \
 * **Standard_M64s** \
 * **Standard_M64ms** \
 * **Standard_M128s** \
 * **Standard_M128ms** \
 * **Standard_M64-32ms** \
 * **Standard_M64-16ms** \
 * **Standard_M128-64ms** \
 * **Standard_M128-32ms** \
 * **Standard_NC6** \
 * **Standard_NC12** \
 * **Standard_NC24** \
 * **Standard_NC24r** \
 * **Standard_NC6s_v2** \
 * **Standard_NC12s_v2** \
 * **Standard_NC24s_v2** \
 * **Standard_NC24rs_v2** \
 * **Standard_NC6s_v3** \
 * **Standard_NC12s_v3** \
 * **Standard_NC24s_v3** \
 * **Standard_NC24rs_v3** \
 * **Standard_ND6s** \
 * **Standard_ND12s** \
 * **Standard_ND24s** \
 * **Standard_ND24rs** \
 * **Standard_NV6** \
 * **Standard_NV12** \
 * **Standard_NV24**
 */
export declare type VirtualMachineSizeTypes = string;

/** Optional parameters. */
export declare interface VirtualMachinesListAllNextOptionalParams extends coreClient.OperationOptions {
    /** statusOnly=true enables fetching run time status of all Virtual Machines in the subscription. */
    statusOnly?: string;
}

/** Contains response data for the listAllNext operation. */
export declare type VirtualMachinesListAllNextResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListAllOptionalParams extends coreClient.OperationOptions {
    /** statusOnly=true enables fetching run time status of all Virtual Machines in the subscription. */
    statusOnly?: string;
}

/** Contains response data for the listAll operation. */
export declare type VirtualMachinesListAllResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListAvailableSizesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableSizes operation. */
export declare type VirtualMachinesListAvailableSizesResponse = VirtualMachineSizeListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListByLocationNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocationNext operation. */
export declare type VirtualMachinesListByLocationNextResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocation operation. */
export declare type VirtualMachinesListByLocationResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualMachinesListNextResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualMachinesListResponse = VirtualMachineListResult;

/** Optional parameters. */
export declare interface VirtualMachinesPerformMaintenanceOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesPowerOffOptionalParams extends coreClient.OperationOptions {
    /** The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified */
    skipShutdown?: boolean;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesReapplyOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesRedeployOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesReimageOptionalParams extends coreClient.OperationOptions {
    /** Parameters supplied to the Reimage Virtual Machine operation. */
    parameters?: VirtualMachineReimageParameters;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesRestartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualMachinesRunCommandOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the runCommand operation. */
export declare type VirtualMachinesRunCommandResponse = RunCommandResult;

/** Optional parameters. */
export declare interface VirtualMachinesSimulateEvictionOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface VirtualMachinesStartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** The status code and count of the virtual machine scale set instance view status summary. */
export declare interface VirtualMachineStatusCodeCount {
    /**
     * The instance view status code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * The number of instances having a particular status code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly count?: number;
}

/** Optional parameters. */
export declare interface VirtualMachinesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualMachinesUpdateResponse = VirtualMachine;

/** Describes a Virtual Machine Update. */
export declare type VirtualMachineUpdate = UpdateResource & {
    /** Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**. */
    plan?: Plan;
    /** The identity of the virtual machine, if configured. */
    identity?: VirtualMachineIdentity;
    /** The virtual machine zones. */
    zones?: string[];
    /** Specifies the hardware settings for the virtual machine. */
    hardwareProfile?: HardwareProfile;
    /** Specifies the storage settings for the virtual machine disks. */
    storageProfile?: StorageProfile;
    /** Specifies additional capabilities enabled or disabled on the virtual machine. */
    additionalCapabilities?: AdditionalCapabilities;
    /** Specifies the operating system settings used while creating the virtual machine. Some of the settings cannot be changed once VM is provisioned. */
    osProfile?: OSProfile;
    /** Specifies the network interfaces of the virtual machine. */
    networkProfile?: NetworkProfile;
    /** Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15. */
    diagnosticsProfile?: DiagnosticsProfile;
    /** Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. The availability set to which the VM is being added should be under the same resource group as the availability set resource. An existing VM cannot be added to an availability set. <br><br>This property cannot exist along with a non-null properties.virtualMachineScaleSet reference. */
    availabilitySet?: SubResource;
    /** Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01 */
    virtualMachineScaleSet?: SubResource;
    /** Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01. */
    proximityPlacementGroup?: SubResource;
    /** Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01 */
    priority?: VirtualMachinePriorityTypes;
    /** Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. <br><br>For Azure Spot virtual machines, the only supported value is 'Deallocate' and the minimum api-version is 2019-03-01. <br><br>For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview. */
    evictionPolicy?: VirtualMachineEvictionPolicyTypes;
    /** Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01. */
    billingProfile?: BillingProfile;
    /** Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01. */
    host?: SubResource;
    /**
     * The provisioning state, which only appears in the response.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The virtual machine instance view.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instanceView?: VirtualMachineInstanceView;
    /** Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15 */
    licenseType?: string;
    /**
     * Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vmId?: string;
};

export declare interface VMScaleSetConvertToSinglePlacementGroupInput {
    /** Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances. */
    activePlacementGroupId?: string;
}

/** Specifies Windows operating system settings on the virtual machine. */
export declare interface WindowsConfiguration {
    /** Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
    provisionVMAgent?: boolean;
    /** Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. */
    enableAutomaticUpdates?: boolean;
    /** Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". <br><br> Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.getsystemtimezones). */
    timeZone?: string;
    /** Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. */
    additionalUnattendContent?: AdditionalUnattendContent[];
    /** Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell. */
    winRM?: WinRMConfiguration;
}

/** Describes Windows Remote Management configuration of the VM */
export declare interface WinRMConfiguration {
    /** The list of Windows Remote Management listeners */
    listeners?: WinRMListener[];
}

/** Describes Protocol and thumbprint of Windows Remote Management listener */
export declare interface WinRMListener {
    /** Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https** */
    protocol?: ProtocolTypes;
    /** This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} */
    certificateUrl?: string;
}

export { }
