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
@armProviderNamespace("Microsoft.Compute")
@service(#{ title: "Azure Compute resource management API." })
@versioned(Versions)
namespace ComputeDisk;

/**
 * The available API versions.
 */
enum Versions {
    /**
     * The 2024-03-02 API version.
     */
    @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
    v2024_03_02: "2024-03-02",

    /**
     * The 2025-01-02 API version.
     */
    @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
    v2025_01_02: "2025-01-02",
}

/**
 * Disk resource.
 */
model Disk is Azure.ResourceManager.TrackedResource<DiskProperties> {
    ...ResourceNameParameter<
        Resource = Disk,
        KeyName = "diskName",
        SegmentName = "disks",
        NamePattern = ""
    >;
}

/**
 * Disk resource properties.
 */
model DiskProperties {
    @visibility(Lifecycle.Read)
    provisioningState?: ResourceProvisioningState;
}

@armResourceOperations
interface Disks {
    /**
     * Gets information about a disk.
     */
    get is ArmResourceRead<Disk>;

    /**
     * Creates or updates a disk.
     */
    createOrUpdate is ArmResourceCreateOrUpdateAsync<Disk>;
}

model DiskAccess
    is Azure.ResourceManager.TrackedResource<DiskAccessProperties> {
    ...ResourceNameParameter<
        Resource = DiskAccess,
        KeyName = "diskAccessName",
        SegmentName = "diskAccesses",
        NamePattern = ""
    >;
}

#suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
model DiskAccessProperties {
    /**
     * A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
     */
    @visibility(Lifecycle.Read)
    privateEndpointConnections?: PrivateEndpointConnection[];

    /**
     * The disk access resource provisioning state.
     */
    #suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-provisioning-state" "For backward compatibility"
    @visibility(Lifecycle.Read)
    provisioningState?: string;

    /**
     * The time when the disk access was created.
     */
    @visibility(Lifecycle.Read)
    timeCreated?: utcDateTime;
}

@armResourceOperations
interface DiskAccesses {
    /**
     * Gets information about a disk access resource.
     */
    get is ArmResourceRead<DiskAccess>;

    /**
     * Creates or updates a disk access resource
     */
    #suppress "@azure-tools/typespec-azure-resource-manager/arm-put-operation-response-codes" "For backward compatibility"
    #suppress "@azure-tools/typespec-azure-resource-manager/no-response-body" "For backward compatibility"
    createOrUpdate is ArmResourceCreateOrUpdateAsync<
        DiskAccess,
        Response = ArmResourceUpdatedResponse<DiskAccess> | (ArmAcceptedLroResponse<LroHeaders = ArmLroLocationHeader<FinalResult = DiskAccess> &
            Azure.Core.Foundations.RetryAfterHeader> & {
            @bodyRoot _: DiskAccess;
        })
    >;
}

model ActionGroup
    is Azure.ResourceManager.TrackedResource<ActionGroupsProperties> {
    ...ResourceNameParameter<
        Resource = ActionGroup,
        KeyName = "actionGroupName",
        SegmentName = "actionGroups",
        NamePattern = ""
    >;
}

model ActionGroupsProperties {
    #suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-provisioning-state" "For backward compatibility"
    @visibility(Lifecycle.Read)
    provisioningState?: string;
}

@armResourceOperations
interface ActionGroups {
    list is ArmListBySubscription<ActionGroup>;
}
