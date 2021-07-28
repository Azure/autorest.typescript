import * as coreAuth from "@azure/core-auth";
import { Operations, AvailabilitySets, ProximityPlacementGroups, DedicatedHostGroups, DedicatedHosts, SshPublicKeys, VirtualMachineExtensionImages, VirtualMachineExtensions, VirtualMachineImages, Usage, VirtualMachines, VirtualMachineSizes, Images, VirtualMachineScaleSets, VirtualMachineScaleSetExtensions, VirtualMachineScaleSetRollingUpgrades, VirtualMachineScaleSetVMExtensions, VirtualMachineScaleSetVMs, LogAnalytics, VirtualMachineRunCommands, ResourceSkus, Disks, Snapshots, DiskEncryptionSets, Galleries, GalleryImages, GalleryImageVersions, GalleryApplications, GalleryApplicationVersions, ContainerServices } from "./operationsInterfaces";
import { ComputeManagementClientContext } from "./computeManagementClientContext";
import { ComputeManagementClientOptionalParams } from "./models";
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
    usage: Usage;
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
//# sourceMappingURL=computeManagementClient.d.ts.map