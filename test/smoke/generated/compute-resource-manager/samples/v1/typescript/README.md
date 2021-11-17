# A generated TypeScript SDK samples for @msinternal/compute-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/compute-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [createAnAvailabilitySet.ts][createAnAvailabilitySet] | Create or update an availability set. |  
| [listAvailabilitySetsInASubscription.ts][listAvailabilitySetsInASubscription] | Lists all availability sets in a subscription. |  
| [createOrUpdateAProximityPlacementGroup.ts][createOrUpdateAProximityPlacementGroup] | Create or update a proximity placement group. |  
| [createAProximityPlacementGroup.ts][createAProximityPlacementGroup] | Update a proximity placement group. |  
| [createAProximityPlacementGroup.ts][createAProximityPlacementGroup] | Delete a proximity placement group. |  
| [createAProximityPlacementGroup.ts][createAProximityPlacementGroup] | Retrieves information about a proximity placement group . |  
| [createAProximityPlacementGroup.ts][createAProximityPlacementGroup] | Lists all proximity placement groups in a subscription. |  
| [createAProximityPlacementGroup.ts][createAProximityPlacementGroup] | Lists all proximity placement groups in a resource group. |  
| [createOrUpdateADedicatedHostGroup.ts][createOrUpdateADedicatedHostGroup] | Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596) |  
| [createADedicatedHostGroup.ts][createADedicatedHostGroup] | Retrieves information about a dedicated host group. |  
| [createOrUpdateADedicatedHost.ts][createOrUpdateADedicatedHost] | Create or update a dedicated host . |  
| [getADedicatedHost.ts][getADedicatedHost] | Retrieves information about a dedicated host. |  
| [createANewSshPublicKeyResource.ts][createANewSshPublicKeyResource] | Creates a new SSH public key resource. |  
| [getAnSshPublicKey.ts][getAnSshPublicKey] | Retrieves information about an SSH public key. |  
| [generateAnSshKeyPair.ts][generateAnSshKeyPair] | Generates and returns a public/private key pair and populates the SSH public key resource with the public key. The length of the key will be 3072 bits. This operation can only be performed once per SSH public key resource. |  
| [listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation.ts][listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation] | Gets all the virtual machines under the specified subscription for the specified location. |  
| [createACustomImageVmFromAnUnmanagedGeneralizedOsImage.ts][createACustomImageVmFromAnUnmanagedGeneralizedOsImage] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAPlatformImageVmWithUnmanagedOsAndDataDisks.ts][createAPlatformImageVmWithUnmanagedOsAndDataDisks] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmFromACustomImage.ts][createAVmFromACustomImage] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmInAnAvailabilitySet.ts][createAVmInAnAvailabilitySet] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithDiskEncryptionSetResourceIdInTheOsDiskAndDataDisk.ts][createAVmWithDiskEncryptionSetResourceIdInTheOsDiskAndDataDisk] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithAMarketplaceImagePlan.ts][createAVmWithAMarketplaceImagePlan] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithBootDiagnostics.ts][createAVmWithBootDiagnostics] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithEmptyDataDisks.ts][createAVmWithEmptyDataDisks] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithEphemeralOsDiskProvisioningInCacheDiskUsingPlacementProperty.ts][createAVmWithEphemeralOsDiskProvisioningInCacheDiskUsingPlacementProperty] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithEphemeralOsDiskProvisioningInResourceDiskUsingPlacementProperty.ts][createAVmWithEphemeralOsDiskProvisioningInResourceDiskUsingPlacementProperty] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithEphemeralOsDisk.ts][createAVmWithEphemeralOsDisk] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithPasswordAuthentication.ts][createAVmWithPasswordAuthentication] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithPremiumStorage.ts][createAVmWithPremiumStorage] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [createAVmWithSshAuthentication.ts][createAVmWithSshAuthentication] | The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. |  
| [updateAVmByDetachingDataDisk.ts][updateAVmByDetachingDataDisk] | The operation to update a virtual machine. |  
| [getAVirtualMachine.ts][getAVirtualMachine] | Retrieves information about the model view or the instance view of a virtual machine. |  
| [getVirtualMachineInstanceView.ts][getVirtualMachineInstanceView] | Retrieves information about the run-time state of a virtual machine. |  
| [generalizeAVirtualMachine.ts][generalizeAVirtualMachine] | Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual machine before performing this operation. <br>For Windows, please refer to [Create a managed image of a generalized VM in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/capture-image-resource).<br>For Linux, please refer to [How to create an image of a virtual machine or VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image). |  
| [listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized.ts][listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized] | Lists all available virtual machine sizes to which the specified virtual machine can be resized. |  
| [reapplyTheStateOfAVirtualMachine.ts][reapplyTheStateOfAVirtualMachine] | The operation to reapply a virtual machine's state. |  
| [reimageAVirtualMachine.ts][reimageAVirtualMachine] | Reimages the virtual machine which has an ephemeral OS disk back to its initial state. |  
| [simulateEvictionAVirtualMachine.ts][simulateEvictionAVirtualMachine] | The operation to simulate the eviction of spot virtual machine. The eviction will occur within 30 minutes of calling the API |  
| [virtualMachineRunCommand.ts][virtualMachineRunCommand] | Run command on the VM. |  
| [createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource.ts][createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource] | Create or update an image. |  
| [createAVirtualMachineImageFromABlob.ts][createAVirtualMachineImageFromABlob] | Create or update an image. |  
| [createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource.ts][createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource] | Create or update an image. |  
| [createAVirtualMachineImageFromAManagedDisk.ts][createAVirtualMachineImageFromAManagedDisk] | Create or update an image. |  
| [createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource.ts][createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource] | Create or update an image. |  
| [createAVirtualMachineImageFromASnapshot.ts][createAVirtualMachineImageFromASnapshot] | Create or update an image. |  
| [createAVirtualMachineImageFromAnExistingVirtualMachine.ts][createAVirtualMachineImageFromAnExistingVirtualMachine] | Create or update an image. |  
| [createAVirtualMachineImageThatIncludesADataDiskFromABlob.ts][createAVirtualMachineImageThatIncludesADataDiskFromABlob] | Create or update an image. |  
| [createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk.ts][createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk] | Create or update an image. |  
| [createAVirtualMachineImageThatIncludesADataDiskFromASnapshot.ts][createAVirtualMachineImageThatIncludesADataDiskFromASnapshot] | Create or update an image. |  
| [updatesTagsOfAnImage.ts][updatesTagsOfAnImage] | Update an image. |  
| [getInformationAboutAVirtualMachineImage.ts][getInformationAboutAVirtualMachineImage] | Gets an image. |  
| [listAllVirtualMachineImagesInAResourceGroup.ts][listAllVirtualMachineImagesInAResourceGroup] | Gets the list of images under a resource group. |  
| [listAllVirtualMachineImagesInASubscription.ts][listAllVirtualMachineImagesInASubscription] | Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images. |  
| [createACustomImageScaleSetFromAnUnmanagedGeneralizedOsImage.ts][createACustomImageScaleSetFromAnUnmanagedGeneralizedOsImage] | Create or update a VM scale set. |  
| [createAPlatformImageScaleSetWithUnmanagedOsDisks.ts][createAPlatformImageScaleSetWithUnmanagedOsDisks] | Create or update a VM scale set. |  
| [createAScaleSetFromACustomImage.ts][createAScaleSetFromACustomImage] | Create or update a VM scale set. |  
| [createAScaleSetWithDiskEncryptionSetResourceInOsDiskAndDataDisk.ts][createAScaleSetWithDiskEncryptionSetResourceInOsDiskAndDataDisk] | Create or update a VM scale set. |  
| [createAScaleSetWithAMarketplaceImagePlan.ts][createAScaleSetWithAMarketplaceImagePlan] | Create or update a VM scale set. |  
| [createAScaleSetWithAnAzureApplicationGateway.ts][createAScaleSetWithAnAzureApplicationGateway] | Create or update a VM scale set. |  
| [createAScaleSetWithAnAzureLoadBalancer.ts][createAScaleSetWithAnAzureLoadBalancer] | Create or update a VM scale set. |  
| [createAScaleSetWithAutomaticRepairsEnabled.ts][createAScaleSetWithAutomaticRepairsEnabled] | Create or update a VM scale set. |  
| [createAScaleSetWithBootDiagnostics.ts][createAScaleSetWithBootDiagnostics] | Create or update a VM scale set. |  
| [createAScaleSetWithEmptyDataDisksOnEachVm.ts][createAScaleSetWithEmptyDataDisksOnEachVm] | Create or update a VM scale set. |  
| [createAScaleSetWithEphemeralOsDisksUsingPlacementProperty.ts][createAScaleSetWithEphemeralOsDisksUsingPlacementProperty] | Create or update a VM scale set. |  
| [createAScaleSetWithEphemeralOsDisks.ts][createAScaleSetWithEphemeralOsDisks] | Create or update a VM scale set. |  
| [createAScaleSetWithPasswordAuthentication.ts][createAScaleSetWithPasswordAuthentication] | Create or update a VM scale set. |  
| [createAScaleSetWithPremiumStorage.ts][createAScaleSetWithPremiumStorage] | Create or update a VM scale set. |  
| [createAScaleSetWithSshAuthentication.ts][createAScaleSetWithSshAuthentication] | Create or update a VM scale set. |  
| [createAScaleSetWithTerminateScheduledEventsEnabled.ts][createAScaleSetWithTerminateScheduledEventsEnabled] | Create or update a VM scale set. |  
| [createAScaleSetWithVirtualMachinesInDifferentZones.ts][createAScaleSetWithVirtualMachinesInDifferentZones] | Create or update a VM scale set. |  
| [startAnExtensionRollingUpgrade.ts][startAnExtensionRollingUpgrade] | Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the latest available extension version. Instances which are already running the latest extension versions are not affected. |  
| [createVirtualMachineScaleSetVmExtension.ts][createVirtualMachineScaleSetVmExtension] | The operation to create or update the VMSS VM extension. |  
| [updateVirtualMachineScaleSetVmExtension.ts][updateVirtualMachineScaleSetVmExtension] | The operation to update the VMSS VM extension. |  
| [deleteVirtualMachineScaleSetVmExtension.ts][deleteVirtualMachineScaleSetVmExtension] | The operation to delete the VMSS VM extension. |  
| [getVirtualMachineScaleSetVmExtension.ts][getVirtualMachineScaleSetVmExtension] | The operation to get the VMSS VM extension. |  
| [listExtensionsInVmssInstance.ts][listExtensionsInVmssInstance] | The operation to get all extensions of an instance in Virtual Machine Scaleset. |  
| [simulateEvictionAVirtualMachine.ts][simulateEvictionAVirtualMachine] | The operation to simulate the eviction of spot virtual machine in a VM scale set. The eviction will occur within 30 minutes of calling the API |  
| [exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals.ts][exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals] | Export logs that show Api requests made by this subscription in the given time window to show throttling activities. |  
| [exportLogsWhichContainAllThrottledApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriod.ts][exportLogsWhichContainAllThrottledApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriod] | Export logs that show total throttled Api requests for this subscription in the given time window. |  
| [virtualMachineRunCommandList.ts][virtualMachineRunCommandList] | Lists all available run commands for a subscription in a location. |  
| [virtualMachineRunCommandGet.ts][virtualMachineRunCommandGet] | Gets specific run command for a subscription in a location. |  
| [listsAllAvailableResourceSKUs.ts][listsAllAvailableResourceSKUs] | Gets the list of Microsoft.Compute SKUs available for your Subscription. |  
| [listsAllAvailableResourceSKUsForTheSpecifiedRegion.ts][listsAllAvailableResourceSKUsForTheSpecifiedRegion] | Gets the list of Microsoft.Compute SKUs available for your Subscription. |  
| [createAManagedDiskByCopyingASnapshot.ts][createAManagedDiskByCopyingASnapshot] | Creates or updates a disk. |  
| [createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription.ts][createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription] | Creates or updates a disk. |  
| [createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription.ts][createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription] | Creates or updates a disk. |  
| [createAManagedDiskFromAPlatformImage.ts][createAManagedDiskFromAPlatformImage] | Creates or updates a disk. |  
| [createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription.ts][createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription] | Creates or updates a disk. |  
| [createAManagedUploadDisk.ts][createAManagedUploadDisk] | Creates or updates a disk. |  
| [createAnEmptyManagedDisk.ts][createAnEmptyManagedDisk] | Creates or updates a disk. |  
| [getInformationAboutAManagedDisk.ts][getInformationAboutAManagedDisk] | Gets information about a disk. |  
| [listAllManagedDisksInAResourceGroup.ts][listAllManagedDisksInAResourceGroup] | Lists all the disks under a resource group. |  
| [listAllManagedDisksInASubscription.ts][listAllManagedDisksInASubscription] | Lists all the disks under a subscription. |  
| [createASnapshotByImportingAnUnmanagedBlobFromADifferentSubscription.ts][createASnapshotByImportingAnUnmanagedBlobFromADifferentSubscription] | Creates or updates a snapshot. |  
| [createASnapshotByImportingAnUnmanagedBlobFromTheSameSubscription.ts][createASnapshotByImportingAnUnmanagedBlobFromTheSameSubscription] | Creates or updates a snapshot. |  
| [createASnapshotFromAnExistingSnapshotInTheSameOrADifferentSubscription.ts][createASnapshotFromAnExistingSnapshotInTheSameOrADifferentSubscription] | Creates or updates a snapshot. |  
| [getInformationAboutASnapshot.ts][getInformationAboutASnapshot] | Gets information about a snapshot. |  
| [listAllSnapshotsInAResourceGroup.ts][listAllSnapshotsInAResourceGroup] | Lists snapshots under a resource group. |  
| [listAllSnapshotsInASubscription.ts][listAllSnapshotsInASubscription] | Lists snapshots under a subscription. |  
| [createADiskEncryptionSet.ts][createADiskEncryptionSet] | Creates or updates a disk encryption set |  
| [updateADiskEncryptionSet.ts][updateADiskEncryptionSet] | Updates (patches) a disk encryption set. |  
| [getInformationAboutADiskEncryptionSet.ts][getInformationAboutADiskEncryptionSet] | Gets information about a disk encryption set. |  
| [deleteADiskEncryptionSet.ts][deleteADiskEncryptionSet] | Deletes a disk encryption set. |  
| [listAllDiskEncryptionSetsInAResourceGroup.ts][listAllDiskEncryptionSetsInAResourceGroup] | Lists all the disk encryption sets under a resource group. |  
| [listAllDiskEncryptionSetsInASubscription.ts][listAllDiskEncryptionSetsInASubscription] | Lists all the disk encryption sets under a subscription. |  
| [createOrUpdateASimpleGallery.ts][createOrUpdateASimpleGallery] | Create or update a Shared Image Gallery. |  
| [updateASimpleGallery.ts][updateASimpleGallery] | Update a Shared Image Gallery. |  
| [getAGallery.ts][getAGallery] | Retrieves information about a Shared Image Gallery. |  
| [deleteAGallery.ts][deleteAGallery] | Delete a Shared Image Gallery. |  
| [listGalleriesInAResourceGroup.ts][listGalleriesInAResourceGroup] | List galleries under a resource group. |  
| [listGalleriesInASubscription.ts][listGalleriesInASubscription] | List galleries under a subscription. |  
| [createOrUpdateASimpleGalleryImage.ts][createOrUpdateASimpleGalleryImage] | Create or update a gallery Image Definition. |  
| [updateASimpleGalleryImage.ts][updateASimpleGalleryImage] | Update a gallery Image Definition. |  
| [getAGalleryImage.ts][getAGalleryImage] | Retrieves information about a gallery Image Definition. |  
| [deleteAGalleryImage.ts][deleteAGalleryImage] | Delete a gallery image. |  
| [listGalleryImagesInAGallery.ts][listGalleryImagesInAGallery] | List gallery Image Definitions in a gallery. |  
| [createOrUpdateASimpleGalleryImageVersionManagedImageAsSource.ts][createOrUpdateASimpleGalleryImageVersionManagedImageAsSource] | Create or update a gallery Image Version. |  
| [createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource.ts][createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource] | Create or update a gallery Image Version. |  
| [updateASimpleGalleryImageVersionManagedImageAsSource.ts][updateASimpleGalleryImageVersionManagedImageAsSource] | Update a gallery Image Version. |  
| [getAGalleryImageVersionWithReplicationStatus.ts][getAGalleryImageVersionWithReplicationStatus] | Retrieves information about a gallery Image Version. |  
| [getAGalleryImageVersionWithSnapshotsAsASource.ts][getAGalleryImageVersionWithSnapshotsAsASource] | Retrieves information about a gallery Image Version. |  
| [getAGalleryImageVersion.ts][getAGalleryImageVersion] | Retrieves information about a gallery Image Version. |  
| [deleteAGalleryImageVersion.ts][deleteAGalleryImageVersion] | Delete a gallery Image Version. |  
| [listGalleryImageVersionsInAGalleryImageDefinition.ts][listGalleryImageVersionsInAGalleryImageDefinition] | List gallery Image Versions in a gallery Image Definition. |  
| [createOrUpdateASimpleGalleryApplication.ts][createOrUpdateASimpleGalleryApplication] | Create or update a gallery Application Definition. |  
| [updateASimpleGalleryApplication.ts][updateASimpleGalleryApplication] | Update a gallery Application Definition. |  
| [getAGalleryApplication.ts][getAGalleryApplication] | Retrieves information about a gallery Application Definition. |  
| [deleteAGalleryApplication.ts][deleteAGalleryApplication] | Delete a gallery Application. |  
| [listGalleryApplicationsInAGallery.ts][listGalleryApplicationsInAGallery] | List gallery Application Definitions in a gallery. |  
| [createOrUpdateASimpleGalleryApplicationVersion.ts][createOrUpdateASimpleGalleryApplicationVersion] | Create or update a gallery Application Version. |  
| [updateASimpleGalleryApplicationVersion.ts][updateASimpleGalleryApplicationVersion] | Update a gallery Application Version. |  
| [getAGalleryApplicationVersionWithReplicationStatus.ts][getAGalleryApplicationVersionWithReplicationStatus] | Retrieves information about a gallery Application Version. |  
| [getAGalleryApplicationVersion.ts][getAGalleryApplicationVersion] | Retrieves information about a gallery Application Version. |  
| [deleteAGalleryApplicationVersion.ts][deleteAGalleryApplicationVersion] | Delete a gallery Application Version. |  
| [listGalleryApplicationVersionsInAGalleryApplicationDefinition.ts][listGalleryApplicationVersionsInAGalleryApplicationDefinition] | List gallery Application Versions in a gallery Application Definition. |  
| [listContainerServices.ts][listContainerServices] | Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents. |  
| [createOrUpdateContainerService.ts][createOrUpdateContainerService] | Creates or updates a container service with the specified configuration of orchestrator, masters, and agents. |  
| [getContainerService.ts][getContainerService] | Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.  |  
| [deleteContainerService.ts][deleteContainerService] | Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually. |  
| [listContainerServicesByResourceGroup.ts][listContainerServicesByResourceGroup] | Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/createAnAvailabilitySet.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[createAnAvailabilitySet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAnAvailabilitySet.ts  
[listAvailabilitySetsInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAvailabilitySetsInASubscription.ts  
[createOrUpdateAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAProximityPlacementGroup.ts  
[createAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAProximityPlacementGroup.ts  
[createAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAProximityPlacementGroup.ts  
[createAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAProximityPlacementGroup.ts  
[createAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAProximityPlacementGroup.ts  
[createAProximityPlacementGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAProximityPlacementGroup.ts  
[createOrUpdateADedicatedHostGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADedicatedHostGroup.ts  
[createADedicatedHostGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADedicatedHostGroup.ts  
[createOrUpdateADedicatedHost]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADedicatedHost.ts  
[getADedicatedHost]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADedicatedHost.ts  
[createANewSshPublicKeyResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createANewSshPublicKeyResource.ts  
[getAnSshPublicKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAnSshPublicKey.ts  
[generateAnSshKeyPair]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateAnSshKeyPair.ts  
[listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation.ts  
[createACustomImageVmFromAnUnmanagedGeneralizedOsImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createACustomImageVmFromAnUnmanagedGeneralizedOsImage.ts  
[createAPlatformImageVmWithUnmanagedOsAndDataDisks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAPlatformImageVmWithUnmanagedOsAndDataDisks.ts  
[createAVmFromACustomImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmFromACustomImage.ts  
[createAVmInAnAvailabilitySet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmInAnAvailabilitySet.ts  
[createAVmWithDiskEncryptionSetResourceIdInTheOsDiskAndDataDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithDiskEncryptionSetResourceIdInTheOsDiskAndDataDisk.ts  
[createAVmWithAMarketplaceImagePlan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithAMarketplaceImagePlan.ts  
[createAVmWithBootDiagnostics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithBootDiagnostics.ts  
[createAVmWithEmptyDataDisks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithEmptyDataDisks.ts  
[createAVmWithEphemeralOsDiskProvisioningInCacheDiskUsingPlacementProperty]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithEphemeralOsDiskProvisioningInCacheDiskUsingPlacementProperty.ts  
[createAVmWithEphemeralOsDiskProvisioningInResourceDiskUsingPlacementProperty]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithEphemeralOsDiskProvisioningInResourceDiskUsingPlacementProperty.ts  
[createAVmWithEphemeralOsDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithEphemeralOsDisk.ts  
[createAVmWithPasswordAuthentication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithPasswordAuthentication.ts  
[createAVmWithPremiumStorage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithPremiumStorage.ts  
[createAVmWithSshAuthentication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVmWithSshAuthentication.ts  
[updateAVmByDetachingDataDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAVmByDetachingDataDisk.ts  
[getAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAVirtualMachine.ts  
[getVirtualMachineInstanceView]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualMachineInstanceView.ts  
[generalizeAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generalizeAVirtualMachine.ts  
[listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized.ts  
[reapplyTheStateOfAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/reapplyTheStateOfAVirtualMachine.ts  
[reimageAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/reimageAVirtualMachine.ts  
[simulateEvictionAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/simulateEvictionAVirtualMachine.ts  
[virtualMachineRunCommand]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualMachineRunCommand.ts  
[createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource.ts  
[createAVirtualMachineImageFromABlob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromABlob.ts  
[createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource.ts  
[createAVirtualMachineImageFromAManagedDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromAManagedDisk.ts  
[createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource.ts  
[createAVirtualMachineImageFromASnapshot]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromASnapshot.ts  
[createAVirtualMachineImageFromAnExistingVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageFromAnExistingVirtualMachine.ts  
[createAVirtualMachineImageThatIncludesADataDiskFromABlob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageThatIncludesADataDiskFromABlob.ts  
[createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk.ts  
[createAVirtualMachineImageThatIncludesADataDiskFromASnapshot]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAVirtualMachineImageThatIncludesADataDiskFromASnapshot.ts  
[updatesTagsOfAnImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesTagsOfAnImage.ts  
[getInformationAboutAVirtualMachineImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getInformationAboutAVirtualMachineImage.ts  
[listAllVirtualMachineImagesInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualMachineImagesInAResourceGroup.ts  
[listAllVirtualMachineImagesInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualMachineImagesInASubscription.ts  
[createACustomImageScaleSetFromAnUnmanagedGeneralizedOsImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createACustomImageScaleSetFromAnUnmanagedGeneralizedOsImage.ts  
[createAPlatformImageScaleSetWithUnmanagedOsDisks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAPlatformImageScaleSetWithUnmanagedOsDisks.ts  
[createAScaleSetFromACustomImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetFromACustomImage.ts  
[createAScaleSetWithDiskEncryptionSetResourceInOsDiskAndDataDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithDiskEncryptionSetResourceInOsDiskAndDataDisk.ts  
[createAScaleSetWithAMarketplaceImagePlan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithAMarketplaceImagePlan.ts  
[createAScaleSetWithAnAzureApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithAnAzureApplicationGateway.ts  
[createAScaleSetWithAnAzureLoadBalancer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithAnAzureLoadBalancer.ts  
[createAScaleSetWithAutomaticRepairsEnabled]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithAutomaticRepairsEnabled.ts  
[createAScaleSetWithBootDiagnostics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithBootDiagnostics.ts  
[createAScaleSetWithEmptyDataDisksOnEachVm]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithEmptyDataDisksOnEachVm.ts  
[createAScaleSetWithEphemeralOsDisksUsingPlacementProperty]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithEphemeralOsDisksUsingPlacementProperty.ts  
[createAScaleSetWithEphemeralOsDisks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithEphemeralOsDisks.ts  
[createAScaleSetWithPasswordAuthentication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithPasswordAuthentication.ts  
[createAScaleSetWithPremiumStorage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithPremiumStorage.ts  
[createAScaleSetWithSshAuthentication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithSshAuthentication.ts  
[createAScaleSetWithTerminateScheduledEventsEnabled]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithTerminateScheduledEventsEnabled.ts  
[createAScaleSetWithVirtualMachinesInDifferentZones]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAScaleSetWithVirtualMachinesInDifferentZones.ts  
[startAnExtensionRollingUpgrade]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startAnExtensionRollingUpgrade.ts  
[createVirtualMachineScaleSetVmExtension]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualMachineScaleSetVmExtension.ts  
[updateVirtualMachineScaleSetVmExtension]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualMachineScaleSetVmExtension.ts  
[deleteVirtualMachineScaleSetVmExtension]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualMachineScaleSetVmExtension.ts  
[getVirtualMachineScaleSetVmExtension]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualMachineScaleSetVmExtension.ts  
[listExtensionsInVmssInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExtensionsInVmssInstance.ts  
[simulateEvictionAVirtualMachine]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/simulateEvictionAVirtualMachine.ts  
[exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals.ts  
[exportLogsWhichContainAllThrottledApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriod]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportLogsWhichContainAllThrottledApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriod.ts  
[virtualMachineRunCommandList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualMachineRunCommandList.ts  
[virtualMachineRunCommandGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualMachineRunCommandGet.ts  
[listsAllAvailableResourceSKUs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllAvailableResourceSKUs.ts  
[listsAllAvailableResourceSKUsForTheSpecifiedRegion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllAvailableResourceSKUsForTheSpecifiedRegion.ts  
[createAManagedDiskByCopyingASnapshot]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedDiskByCopyingASnapshot.ts  
[createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription.ts  
[createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription.ts  
[createAManagedDiskFromAPlatformImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedDiskFromAPlatformImage.ts  
[createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription.ts  
[createAManagedUploadDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedUploadDisk.ts  
[createAnEmptyManagedDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAnEmptyManagedDisk.ts  
[getInformationAboutAManagedDisk]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getInformationAboutAManagedDisk.ts  
[listAllManagedDisksInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllManagedDisksInAResourceGroup.ts  
[listAllManagedDisksInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllManagedDisksInASubscription.ts  
[createASnapshotByImportingAnUnmanagedBlobFromADifferentSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createASnapshotByImportingAnUnmanagedBlobFromADifferentSubscription.ts  
[createASnapshotByImportingAnUnmanagedBlobFromTheSameSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createASnapshotByImportingAnUnmanagedBlobFromTheSameSubscription.ts  
[createASnapshotFromAnExistingSnapshotInTheSameOrADifferentSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createASnapshotFromAnExistingSnapshotInTheSameOrADifferentSubscription.ts  
[getInformationAboutASnapshot]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getInformationAboutASnapshot.ts  
[listAllSnapshotsInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllSnapshotsInAResourceGroup.ts  
[listAllSnapshotsInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllSnapshotsInASubscription.ts  
[createADiskEncryptionSet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADiskEncryptionSet.ts  
[updateADiskEncryptionSet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateADiskEncryptionSet.ts  
[getInformationAboutADiskEncryptionSet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getInformationAboutADiskEncryptionSet.ts  
[deleteADiskEncryptionSet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteADiskEncryptionSet.ts  
[listAllDiskEncryptionSetsInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllDiskEncryptionSetsInAResourceGroup.ts  
[listAllDiskEncryptionSetsInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllDiskEncryptionSetsInASubscription.ts  
[createOrUpdateASimpleGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGallery.ts  
[updateASimpleGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASimpleGallery.ts  
[getAGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGallery.ts  
[deleteAGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAGallery.ts  
[listGalleriesInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleriesInAResourceGroup.ts  
[listGalleriesInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleriesInASubscription.ts  
[createOrUpdateASimpleGalleryImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGalleryImage.ts  
[updateASimpleGalleryImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASimpleGalleryImage.ts  
[getAGalleryImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryImage.ts  
[deleteAGalleryImage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAGalleryImage.ts  
[listGalleryImagesInAGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleryImagesInAGallery.ts  
[createOrUpdateASimpleGalleryImageVersionManagedImageAsSource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGalleryImageVersionManagedImageAsSource.ts  
[createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource.ts  
[updateASimpleGalleryImageVersionManagedImageAsSource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASimpleGalleryImageVersionManagedImageAsSource.ts  
[getAGalleryImageVersionWithReplicationStatus]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryImageVersionWithReplicationStatus.ts  
[getAGalleryImageVersionWithSnapshotsAsASource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryImageVersionWithSnapshotsAsASource.ts  
[getAGalleryImageVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryImageVersion.ts  
[deleteAGalleryImageVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAGalleryImageVersion.ts  
[listGalleryImageVersionsInAGalleryImageDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleryImageVersionsInAGalleryImageDefinition.ts  
[createOrUpdateASimpleGalleryApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGalleryApplication.ts  
[updateASimpleGalleryApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASimpleGalleryApplication.ts  
[getAGalleryApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryApplication.ts  
[deleteAGalleryApplication]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAGalleryApplication.ts  
[listGalleryApplicationsInAGallery]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleryApplicationsInAGallery.ts  
[createOrUpdateASimpleGalleryApplicationVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateASimpleGalleryApplicationVersion.ts  
[updateASimpleGalleryApplicationVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASimpleGalleryApplicationVersion.ts  
[getAGalleryApplicationVersionWithReplicationStatus]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryApplicationVersionWithReplicationStatus.ts  
[getAGalleryApplicationVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAGalleryApplicationVersion.ts  
[deleteAGalleryApplicationVersion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAGalleryApplicationVersion.ts  
[listGalleryApplicationVersionsInAGalleryApplicationDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGalleryApplicationVersionsInAGalleryApplicationDefinition.ts  
[listContainerServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listContainerServices.ts  
[createOrUpdateContainerService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateContainerService.ts  
[getContainerService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getContainerService.ts  
[deleteContainerService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteContainerService.ts  
[listContainerServicesByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listContainerServicesByResourceGroup.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/compute-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
