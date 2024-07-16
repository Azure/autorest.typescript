// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  VmVmPlacementPolicyPropertiesOutput,
  VmHostPlacementPolicyPropertiesOutput,
  PlacementPolicyPropertiesOutput,
} from "../rest/index.js";
import {
  VmVmPlacementPolicyProperties,
  VmHostPlacementPolicyProperties,
  PlacementPolicyPropertiesUnion,
} from "../models/models.js";

/** deserialize function for VmVmPlacementPolicyProperties */
function deserializeVmVmPlacementPolicyProperties(
  obj: VmVmPlacementPolicyPropertiesOutput,
): VmVmPlacementPolicyProperties {
  return {
    type: obj["type"],
    state: obj["state"] as PlacementPolicyState,
    displayName: obj["displayName"],
    provisioningState: obj["provisioningState"] as any,
    vmMembers: obj["vmMembers"],
    affinityType: obj["affinityType"] as AffinityType,
  };
}

/** deserialize function for VmHostPlacementPolicyProperties */
function deserializeVmHostPlacementPolicyProperties(
  obj: VmHostPlacementPolicyPropertiesOutput,
): VmHostPlacementPolicyProperties {
  return {
    type: obj["type"],
    state: obj["state"] as PlacementPolicyState,
    displayName: obj["displayName"],
    provisioningState: obj["provisioningState"] as any,
    vmMembers: obj["vmMembers"],
    hostMembers: obj["hostMembers"],
    affinityType: obj["affinityType"] as AffinityType,
    affinityStrength: obj["affinityStrength"] as AffinityStrength,
    azureHybridBenefitType: obj[
      "azureHybridBenefitType"
    ] as AzureHybridBenefitType,
  };
}

/** deserialize function for PlacementPolicyPropertiesOutput */
export function deserializePlacementPolicyPropertiesUnion(
  obj: PlacementPolicyPropertiesOutput,
): PlacementPolicyPropertiesUnion {
  switch (obj.type) {
    case "VmVm":
      return deserializeVmVmPlacementPolicyProperties(
        obj as VmVmPlacementPolicyProperties,
      );
    case "VmHost":
      return deserializeVmHostPlacementPolicyProperties(
        obj as VmHostPlacementPolicyProperties,
      );
    default:
      return obj;
  }
}
