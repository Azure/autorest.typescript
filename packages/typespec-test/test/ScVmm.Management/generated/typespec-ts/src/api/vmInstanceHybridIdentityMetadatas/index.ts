// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  VmInstanceHybridIdentityMetadata,
  VmInstanceHybridIdentityMetadataListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VmInstanceHybridIdentityMetadatasGet200Response,
  VmInstanceHybridIdentityMetadatasGetDefaultResponse,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VmInstanceHybridIdentityMetadatasGet200Response
  | VmInstanceHybridIdentityMetadatasGetDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | VmInstanceHybridIdentityMetadatasGet200Response
    | VmInstanceHybridIdentityMetadatasGetDefaultResponse,
): Promise<VmInstanceHybridIdentityMetadata> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          resourceUid: result.body.properties?.["resourceUid"],
          publicKey: result.body.properties?.["publicKey"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Implements HybridIdentityMetadata GET method. */
export async function get(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasGetOptionalParams = {
    requestOptions: {},
  },
): Promise<VmInstanceHybridIdentityMetadata> {
  const result = await _getSend(context, resourceUri, options);
  return _getDeserialize(result);
}

export function _listByVirtualMachineInstanceSend(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
  | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByVirtualMachineInstanceDeserialize(
  result:
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance200Response
    | VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDefaultResponse,
): Promise<VmInstanceHybridIdentityMetadataListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            resourceUid: p.properties?.["resourceUid"],
            publicKey: p.properties?.["publicKey"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Returns the list of HybridIdentityMetadata of the given VM. */
export function listByVirtualMachineInstance(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VmInstanceHybridIdentityMetadata> {
  return buildPagedAsyncIterator(
    context,
    () => _listByVirtualMachineInstanceSend(context, resourceUri, options),
    _listByVirtualMachineInstanceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
