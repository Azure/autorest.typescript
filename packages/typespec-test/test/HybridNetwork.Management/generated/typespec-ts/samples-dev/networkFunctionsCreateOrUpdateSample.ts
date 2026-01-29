// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network function resource.
 *
 * @summary creates or updates a network function resource.
 * x-ms-original-file: 2025-03-30/AzureCore/VirtualNetworkFunctionCreate.json
 */
async function createVirtualNetworkFunctionResourceOnAzureCore(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.createOrUpdate("rg", "testNf", {
    location: "eastus",
    properties: {
      allowSoftwareUpdate: false,
      configurationType: "Open",
      deploymentValues:
        '{"virtualMachineName":"test-VM","cpuCores":4,"memorySizeGB":8,"cloudServicesNetworkAttachment":{"attachedNetworkId":"test-csnet","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-cs-vlan"},"networkAttachments":[{"attachedNetworkId":"test-l3vlan","defaultGateway":"True","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-vlan"}],"sshPublicKeys":[{"keyData":"ssh-rsa CMIIIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0TqlveKKlc2MFvEmuXJiLGBsY1t4ML4uiRADGSZlnc+7Ugv3h+MCjkkwOKiOdsNo8k4KSBIG5GcQfKYOOd17AJvqCL6cGQbaLuqv0a64jeDm8oO8/xN/IM0oKw7rMr/2oAJOgIsfeXPkRxWWic9AVIS++H5Qi2r7bUFX+cqFsyUCAwEBBQ=="}],"storageProfile":{"osDisk":{"createOption":"Ephemeral","deleteOption":"Delete","diskSizeGB":10}},"userData":"testUserData","adminUsername":"testUser","virtioInterface":"Transitional","isolateEmulatorThread":"False","bootMethod":"BIOS","placementHints":[]}',
      networkFunctionDefinitionVersionResourceReference: {
        id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1",
        idType: "Open",
      },
      nfviId: "/subscriptions/subid/resourceGroups/testResourceGroup",
      nfviType: "AzureCore",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a network function resource.
 *
 * @summary creates or updates a network function resource.
 * x-ms-original-file: 2025-03-30/AzureOperatorNexus/VirtualNetworkFunctionCreate.json
 */
async function createVirtualNetworkFunctionResourceOnAzureOperatorNexus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.createOrUpdate("rg", "testNf", {
    location: "eastus",
    properties: {
      allowSoftwareUpdate: false,
      configurationType: "Open",
      deploymentValues:
        '{"virtualMachineName":"test-VM","extendedLocationName":"test-cluster","cpuCores":4,"memorySizeGB":8,"cloudServicesNetworkAttachment":{"attachedNetworkId":"test-csnet","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-cs-vlan"},"networkAttachments":[{"attachedNetworkId":"test-l3vlan","defaultGateway":"True","ipAllocationMethod":"Dynamic","networkAttachmentName":"test-vlan"}],"sshPublicKeys":[{"keyData":"ssh-rsa CMIIIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0TqlveKKlc2MFvEmuXJiLGBsY1t4ML4uiRADGSZlnc+7Ugv3h+MCjkkwOKiOdsNo8k4KSBIG5GcQfKYOOd17AJvqCL6cGQbaLuqv0a64jeDm8oO8/xN/IM0oKw7rMr/2oAJOgIsfeXPkRxWWic9AVIS++H5Qi2r7bUFX+cqFsyUCAwEBBQ=="}],"storageProfile":{"osDisk":{"createOption":"Ephemeral","deleteOption":"Delete","diskSizeGB":10}},"userData":"testUserData","adminUsername":"testUser","virtioInterface":"Transitional","isolateEmulatorThread":"False","bootMethod":"BIOS","placementHints":[]}',
      networkFunctionDefinitionVersionResourceReference: {
        id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1",
        idType: "Open",
      },
      nfviId:
        "/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation",
      nfviType: "AzureOperatorNexus",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a network function resource.
 *
 * @summary creates or updates a network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionCreate.json
 */
async function createNetworkFunctionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.createOrUpdate("rg", "testNf", {
    location: "eastus",
    properties: {
      allowSoftwareUpdate: false,
      configurationType: "Open",
      deploymentValues: '{"releaseName":"testReleaseName","namespace":"testNamespace"}',
      networkFunctionDefinitionVersionResourceReference: {
        id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1",
        idType: "Open",
      },
      nfviId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation",
      nfviType: "AzureArcKubernetes",
      roleOverrideValues: [
        '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}',
        '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}',
      ],
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a network function resource.
 *
 * @summary creates or updates a network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionCreateSecret.json
 */
async function createNetworkFunctionResourceWithSecrets(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.createOrUpdate("rg", "testNf", {
    location: "eastus",
    properties: {
      allowSoftwareUpdate: false,
      configurationType: "Secret",
      networkFunctionDefinitionVersionResourceReference: {
        id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1",
        idType: "Open",
      },
      nfviId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation",
      nfviType: "AzureArcKubernetes",
      roleOverrideValues: [
        '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}',
        '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}',
      ],
      secretDeploymentValues: '{"adminPassword":"password1","userPassword":"password2"}',
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a network function resource.
 *
 * @summary creates or updates a network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionFirstPartyCreate.json
 */
async function createFirstPartyNetworkFunctionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.createOrUpdate("rg", "testNf", {
    location: "eastus",
    properties: {
      allowSoftwareUpdate: false,
      configurationType: "Open",
      deploymentValues: '{"releaseName":"testReleaseName","namespace":"testNamespace"}',
      networkFunctionDefinitionVersionResourceReference: {
        id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/testVendor/networkFunctionDefinitionGroups/testnetworkFunctionDefinitionGroupName/networkFunctionDefinitionVersions/1.0.1",
        idType: "Secret",
      },
      nfviId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation",
      nfviType: "AzureArcKubernetes",
      roleOverrideValues: [
        '{"name":"testRoleOne","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"helmPackageVersion":"2.1.3","values":"{\\"roleOneParam\\":\\"roleOneOverrideValue\\"}"}}}',
        '{"name":"testRoleTwo","deployParametersMappingRuleProfile":{"helmMappingRuleProfile":{"releaseName":"overrideReleaseName","releaseNamespace":"overrideNamespace","values":"{\\"roleTwoParam\\":\\"roleTwoOverrideValue\\"}"}}}',
      ],
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createVirtualNetworkFunctionResourceOnAzureCore();
  await createVirtualNetworkFunctionResourceOnAzureOperatorNexus();
  await createNetworkFunctionResource();
  await createNetworkFunctionResourceWithSecrets();
  await createFirstPartyNetworkFunctionResource();
}

main().catch(console.error);
