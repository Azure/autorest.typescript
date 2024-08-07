// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { serializeRecord } from "../helpers/serializerHelpers.js";
export function resourceSerializer(item) {
    return item;
}
export function proxyResourceSerializer(item) {
    return item;
}
export function iscsiPathSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : iscsiPathPropertiesSerializer(item.properties),
    };
}
export function iscsiPathPropertiesSerializer(item) {
    return {
        networkBlock: item["networkBlock"],
    };
}
export function scriptExecutionSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : scriptExecutionPropertiesSerializer(item.properties),
    };
}
export function scriptExecutionPropertiesSerializer(item) {
    return {
        scriptCmdletId: item["scriptCmdletId"],
        parameters: item["parameters"],
        hiddenParameters: item["hiddenParameters"],
        failureReason: item["failureReason"],
        timeout: item["timeout"],
        retention: item["retention"],
        output: item["output"],
        namedOutputs: !item.namedOutputs
            ? item.namedOutputs
            : serializeRecord(item.namedOutputs),
    };
}
export function scriptExecutionParameterUnionSerializer(item) {
    switch (item.type) {
        case "SecureValue":
            return scriptSecureStringExecutionParameterSerializer(item);
        case "Value":
            return scriptStringExecutionParameterSerializer(item);
        case "Credential":
            return pSCredentialExecutionParameterSerializer(item);
        default:
            return scriptExecutionParameterSerializer(item);
    }
}
export function scriptExecutionParameterSerializer(item) {
    return {
        type: item["type"],
        name: item["name"],
    };
}
export function scriptSecureStringExecutionParameterSerializer(item) {
    return {
        type: item["type"],
        name: item["name"],
        secureValue: item["secureValue"],
    };
}
export function scriptStringExecutionParameterSerializer(item) {
    return {
        type: item["type"],
        name: item["name"],
        value: item["value"],
    };
}
export function pSCredentialExecutionParameterSerializer(item) {
    return {
        type: item["type"],
        name: item["name"],
        username: item["username"],
        password: item["password"],
    };
}
export function placementPolicySerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : placementPolicyPropertiesUnionSerializer(item.properties),
    };
}
export function placementPolicyPropertiesUnionSerializer(item) {
    switch (item.type) {
        case "VmVm":
            return vmVmPlacementPolicyPropertiesSerializer(item);
        case "VmHost":
            return vmHostPlacementPolicyPropertiesSerializer(item);
        default:
            return placementPolicyPropertiesSerializer(item);
    }
}
export function placementPolicyPropertiesSerializer(item) {
    return {
        ...placementPolicyPropertiesUnionSerializer(item),
    };
}
export function vmVmPlacementPolicyPropertiesSerializer(item) {
    return {
        type: item["type"],
        state: item["state"],
        displayName: item["displayName"],
        vmMembers: item["vmMembers"],
        affinityType: item["affinityType"],
    };
}
export function vmHostPlacementPolicyPropertiesSerializer(item) {
    return {
        type: item["type"],
        state: item["state"],
        displayName: item["displayName"],
        vmMembers: item["vmMembers"],
        hostMembers: item["hostMembers"],
        affinityType: item["affinityType"],
        affinityStrength: item["affinityStrength"],
        azureHybridBenefitType: item["azureHybridBenefitType"],
    };
}
export function placementPolicyUpdateSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : placementPolicyUpdatePropertiesSerializer(item.properties),
    };
}
export function placementPolicyUpdatePropertiesSerializer(item) {
    return {
        state: item["state"],
        vmMembers: item["vmMembers"],
        hostMembers: item["hostMembers"],
        affinityStrength: item["affinityStrength"],
        azureHybridBenefitType: item["azureHybridBenefitType"],
    };
}
export function virtualMachineRestrictMovementSerializer(item) {
    return {
        restrictMovement: item["restrictMovement"],
    };
}
export function addonSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : addonPropertiesUnionSerializer(item.properties),
    };
}
export function addonPropertiesUnionSerializer(item) {
    switch (item.addonType) {
        case "SRM":
            return addonSrmPropertiesSerializer(item);
        case "VR":
            return addonVrPropertiesSerializer(item);
        case "HCX":
            return addonHcxPropertiesSerializer(item);
        case "Arc":
            return addonArcPropertiesSerializer(item);
        default:
            return addonPropertiesSerializer(item);
    }
}
export function addonPropertiesSerializer(item) {
    return {
        addonType: item["addonType"],
    };
}
export function addonSrmPropertiesSerializer(item) {
    return {
        addonType: item["addonType"],
        licenseKey: item["licenseKey"],
    };
}
export function addonVrPropertiesSerializer(item) {
    return {
        addonType: item["addonType"],
        vrsCount: item["vrsCount"],
    };
}
export function addonHcxPropertiesSerializer(item) {
    return {
        addonType: item["addonType"],
        offer: item["offer"],
    };
}
export function addonArcPropertiesSerializer(item) {
    return {
        addonType: item["addonType"],
        vCenter: item["vCenter"],
    };
}
export function cloudLinkSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : cloudLinkPropertiesSerializer(item.properties),
    };
}
export function cloudLinkPropertiesSerializer(item) {
    return {
        linkedCloud: item["linkedCloud"],
    };
}
export function workloadNetworkPublicIPSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkPublicIPPropertiesSerializer(item.properties),
    };
}
export function workloadNetworkPublicIPPropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        numberOfPublicIPs: item["numberOfPublicIPs"],
    };
}
export function workloadNetworkDnsZoneSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkDnsZonePropertiesSerializer(item.properties),
    };
}
export function workloadNetworkDnsZonePropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        domain: item["domain"],
        dnsServerIps: item["dnsServerIps"],
        sourceIp: item["sourceIp"],
        dnsServices: item["dnsServices"],
        revision: item["revision"],
    };
}
export function workloadNetworkDnsServiceSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkDnsServicePropertiesSerializer(item.properties),
    };
}
export function workloadNetworkDnsServicePropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        dnsServiceIp: item["dnsServiceIp"],
        defaultDnsZone: item["defaultDnsZone"],
        fqdnZones: item["fqdnZones"],
        logLevel: item["logLevel"],
        revision: item["revision"],
    };
}
export function workloadNetworkVMGroupSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkVMGroupPropertiesSerializer(item.properties),
    };
}
export function workloadNetworkVMGroupPropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        members: item["members"],
        revision: item["revision"],
    };
}
export function workloadNetworkPortMirroringSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkPortMirroringPropertiesSerializer(item.properties),
    };
}
export function workloadNetworkPortMirroringPropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        direction: item["direction"],
        source: item["source"],
        destination: item["destination"],
        revision: item["revision"],
    };
}
export function workloadNetworkDhcpSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkDhcpEntityUnionSerializer(item.properties),
    };
}
export function workloadNetworkDhcpEntityUnionSerializer(item) {
    switch (item.dhcpType) {
        case "SERVER":
            return workloadNetworkDhcpServerSerializer(item);
        case "RELAY":
            return workloadNetworkDhcpRelaySerializer(item);
        default:
            return workloadNetworkDhcpEntitySerializer(item);
    }
}
export function workloadNetworkDhcpEntitySerializer(item) {
    return {
        dhcpType: item["dhcpType"],
        displayName: item["displayName"],
        revision: item["revision"],
    };
}
export function workloadNetworkDhcpServerSerializer(item) {
    return {
        dhcpType: item["dhcpType"],
        displayName: item["displayName"],
        revision: item["revision"],
        serverAddress: item["serverAddress"],
        leaseTime: item["leaseTime"],
    };
}
export function workloadNetworkDhcpRelaySerializer(item) {
    return {
        dhcpType: item["dhcpType"],
        displayName: item["displayName"],
        revision: item["revision"],
        serverAddresses: item["serverAddresses"],
    };
}
export function workloadNetworkSegmentSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : workloadNetworkSegmentPropertiesSerializer(item.properties),
    };
}
export function workloadNetworkSegmentPropertiesSerializer(item) {
    return {
        displayName: item["displayName"],
        connectedGateway: item["connectedGateway"],
        subnet: !item.subnet
            ? item.subnet
            : workloadNetworkSegmentSubnetSerializer(item.subnet),
        revision: item["revision"],
    };
}
export function workloadNetworkSegmentSubnetSerializer(item) {
    return {
        dhcpRanges: item["dhcpRanges"],
        gatewayAddress: item["gatewayAddress"],
    };
}
export function globalReachConnectionSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : globalReachConnectionPropertiesSerializer(item.properties),
    };
}
export function globalReachConnectionPropertiesSerializer(item) {
    return {
        authorizationKey: item["authorizationKey"],
        peerExpressRouteCircuit: item["peerExpressRouteCircuit"],
        expressRouteId: item["expressRouteId"],
    };
}
export function expressRouteAuthorizationSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : expressRouteAuthorizationPropertiesSerializer(item.properties),
    };
}
export function expressRouteAuthorizationPropertiesSerializer(item) {
    return {
        expressRouteId: item["expressRouteId"],
    };
}
export function hcxEnterpriseSiteSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : hcxEnterpriseSitePropertiesSerializer(item.properties),
    };
}
export function hcxEnterpriseSitePropertiesSerializer(item) {
    return item;
}
export function datastoreSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : datastorePropertiesSerializer(item.properties),
    };
}
export function datastorePropertiesSerializer(item) {
    return {
        netAppVolume: !item.netAppVolume
            ? item.netAppVolume
            : netAppVolumeSerializer(item.netAppVolume),
        diskPoolVolume: !item.diskPoolVolume
            ? item.diskPoolVolume
            : diskPoolVolumeSerializer(item.diskPoolVolume),
        elasticSanVolume: !item.elasticSanVolume
            ? item.elasticSanVolume
            : elasticSanVolumeSerializer(item.elasticSanVolume),
    };
}
export function netAppVolumeSerializer(item) {
    return {
        id: item["id"],
    };
}
export function diskPoolVolumeSerializer(item) {
    return {
        targetId: item["targetId"],
        lunName: item["lunName"],
        mountOption: item["mountOption"],
    };
}
export function elasticSanVolumeSerializer(item) {
    return {
        targetId: item["targetId"],
    };
}
export function clusterSerializer(item) {
    return {
        properties: !item.properties
            ? item.properties
            : clusterPropertiesSerializer(item.properties),
        sku: skuSerializer(item.sku),
    };
}
export function clusterPropertiesSerializer(item) {
    return {
        clusterSize: item["clusterSize"],
        hosts: item["hosts"],
        vsanDatastoreName: item["vsanDatastoreName"],
    };
}
export function skuSerializer(item) {
    return {
        name: item["name"],
        tier: item["tier"],
        size: item["size"],
        family: item["family"],
        capacity: item["capacity"],
    };
}
export function clusterUpdateSerializer(item) {
    return {
        sku: !item.sku ? item.sku : skuSerializer(item.sku),
        properties: !item.properties
            ? item.properties
            : clusterUpdatePropertiesSerializer(item.properties),
    };
}
export function clusterUpdatePropertiesSerializer(item) {
    return {
        clusterSize: item["clusterSize"],
        hosts: item["hosts"],
    };
}
export function trackedResourceSerializer(item) {
    return {
        tags: !item.tags ? item.tags : serializeRecord(item.tags),
        location: item["location"],
    };
}
export function privateCloudSerializer(item) {
    return {
        tags: !item.tags ? item.tags : serializeRecord(item.tags),
        location: item["location"],
        properties: !item.properties
            ? item.properties
            : privateCloudPropertiesSerializer(item.properties),
        sku: skuSerializer(item.sku),
        identity: !item.identity
            ? item.identity
            : systemAssignedServiceIdentitySerializer(item.identity),
    };
}
export function privateCloudPropertiesSerializer(item) {
    return {
        managementCluster: managementClusterSerializer(item.managementCluster),
        internet: item["internet"],
        identitySources: item["identitySources"] === undefined
            ? item["identitySources"]
            : item["identitySources"].map(identitySourceSerializer),
        availability: !item.availability
            ? item.availability
            : availabilityPropertiesSerializer(item.availability),
        encryption: !item.encryption
            ? item.encryption
            : encryptionSerializer(item.encryption),
        extendedNetworkBlocks: item["extendedNetworkBlocks"],
        circuit: !item.circuit ? item.circuit : circuitSerializer(item.circuit),
        networkBlock: item["networkBlock"],
        vcenterPassword: item["vcenterPassword"],
        nsxtPassword: item["nsxtPassword"],
        secondaryCircuit: !item.secondaryCircuit
            ? item.secondaryCircuit
            : circuitSerializer(item.secondaryCircuit),
        virtualNetworkId: item["virtualNetworkId"],
        dnsZoneType: item["dnsZoneType"],
    };
}
export function managementClusterSerializer(item) {
    return {
        clusterSize: item["clusterSize"],
        hosts: item["hosts"],
        vsanDatastoreName: item["vsanDatastoreName"],
    };
}
export function identitySourceSerializer(item) {
    return {
        name: item["name"],
        alias: item["alias"],
        domain: item["domain"],
        baseUserDN: item["baseUserDN"],
        baseGroupDN: item["baseGroupDN"],
        primaryServer: item["primaryServer"],
        secondaryServer: item["secondaryServer"],
        ssl: item["ssl"],
        username: item["username"],
        password: item["password"],
    };
}
export function availabilityPropertiesSerializer(item) {
    return {
        strategy: item["strategy"],
        zone: item["zone"],
        secondaryZone: item["secondaryZone"],
    };
}
export function encryptionSerializer(item) {
    return {
        status: item["status"],
        keyVaultProperties: !item.keyVaultProperties
            ? item.keyVaultProperties
            : encryptionKeyVaultPropertiesSerializer(item.keyVaultProperties),
    };
}
export function encryptionKeyVaultPropertiesSerializer(item) {
    return {
        keyName: item["keyName"],
        keyVersion: item["keyVersion"],
        keyVaultUrl: item["keyVaultUrl"],
    };
}
export function circuitSerializer(item) {
    return item;
}
export function systemAssignedServiceIdentitySerializer(item) {
    return {
        type: item["type"],
    };
}
export function privateCloudUpdateSerializer(item) {
    return {
        tags: !item.tags ? item.tags : serializeRecord(item.tags),
        sku: !item.sku ? item.sku : skuSerializer(item.sku),
        identity: !item.identity
            ? item.identity
            : systemAssignedServiceIdentitySerializer(item.identity),
        properties: !item.properties
            ? item.properties
            : privateCloudUpdatePropertiesSerializer(item.properties),
    };
}
export function privateCloudUpdatePropertiesSerializer(item) {
    return {
        managementCluster: !item.managementCluster
            ? item.managementCluster
            : managementClusterSerializer(item.managementCluster),
        internet: item["internet"],
        identitySources: item["identitySources"] === undefined
            ? item["identitySources"]
            : item["identitySources"].map(identitySourceSerializer),
        availability: !item.availability
            ? item.availability
            : availabilityPropertiesSerializer(item.availability),
        encryption: !item.encryption
            ? item.encryption
            : encryptionSerializer(item.encryption),
        extendedNetworkBlocks: item["extendedNetworkBlocks"],
        dnsZoneType: item["dnsZoneType"],
    };
}
//# sourceMappingURL=models.js.map