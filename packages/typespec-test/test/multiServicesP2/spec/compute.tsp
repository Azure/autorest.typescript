import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Rest;
using TypeSpec.Http;
using Azure.Core;
using Azure.ResourceManager;
using TypeSpec.Versioning;

/**
 * Compute Client
 */
@armProviderNamespace
@service(#{ title: "Azure Compute resource management API." })
@versioned(Versions)
namespace Microsoft.Compute;

/**
 * The available API versions.
 */
enum Versions {
    /**
     * The 2024-11-01 API version.
     */
    @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
    v2024_11_01: "2024-11-01",

    /**
     * The 2025-04-01 API version.
     */
    @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
    v2025_04_01: "2025-04-01",
}

/**
 * Describes a Virtual Machine.
 */
model VirtualMachine
    is Azure.ResourceManager.TrackedResource<VirtualMachineProperties> {
    ...ResourceNameParameter<
        Resource = VirtualMachine,
        KeyName = "vmName",
        SegmentName = "virtualMachines",
        NamePattern = ""
    >;
}

model VirtualMachineProperties {
    @visibility(Lifecycle.Read)
    provisioningState?: ResourceProvisioningState;
}

@armResourceOperations
interface VirtualMachines {
    /**
     * Retrieves information about the model view or the instance view of a virtual machine.
     */
    get is ArmResourceRead<VirtualMachine>;

    /**
     * The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
     */
    createOrUpdate is ArmResourceCreateOrUpdateAsync<VirtualMachine>;
}

/**
 * Create or update Restore Point collection parameters.
 */
model RestorePointCollection
    is Azure.ResourceManager.TrackedResource<RestorePointCollectionProperties> {
    ...ResourceNameParameter<
        Resource = RestorePointCollection,
        KeyName = "restorePointCollectionName",
        SegmentName = "restorePointCollections",
        NamePattern = ""
    >;
}

/**
 * The restore point collection properties.
 */
model RestorePointCollectionProperties {
    /**
     * The provisioning state of the restore point collection.
     */
    #suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-provisioning-state" "For backward compatibility"
    @visibility(Lifecycle.Read)
    provisioningState?: string;

    /**
     * This property determines whether instant access snapshot is enabled for restore points created under this restore point collection for Premium SSD v2 or Ultra disk. Instant access snapshot for Premium SSD v2 or Ultra disk is instantaneously available for restoring disk with fast restore performance.
     */
    @added(Versions.v2025_04_01)
    instantAccess?: boolean;
}

@armResourceOperations
interface RestorePointCollections {
    /**
     * The operation to get the restore point collection.
     */
    get is ArmResourceRead<RestorePointCollection>;

    /**
     * The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified.
     */
    createOrUpdate is ArmResourceCreateOrReplaceSync<RestorePointCollection>;
}
