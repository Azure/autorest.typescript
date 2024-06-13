// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { GuestAgent, GuestAgentListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  GuestAgentsCreate200Response,
  GuestAgentsCreate201Response,
  GuestAgentsCreateDefaultResponse,
  GuestAgentsCreateLogicalResponse,
  GuestAgentsDelete200Response,
  GuestAgentsDelete204Response,
  GuestAgentsDeleteDefaultResponse,
  GuestAgentsGet200Response,
  GuestAgentsGetDefaultResponse,
  GuestAgentsListByVirtualMachineInstance200Response,
  GuestAgentsListByVirtualMachineInstanceDefaultResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GuestAgentsGetOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<GuestAgentsGet200Response | GuestAgentsGetDefaultResponse> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: GuestAgentsGet200Response | GuestAgentsGetDefaultResponse,
): Promise<GuestAgent> {
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
          uuid: result.body.properties?.["uuid"],
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          httpProxyConfig: !result.body.properties?.httpProxyConfig
            ? undefined
            : {
                httpsProxy:
                  result.body.properties?.httpProxyConfig?.["httpsProxy"],
              },
          provisioningAction: result.body.properties?.["provisioningAction"],
          status: result.body.properties?.["status"],
          customResourceName: result.body.properties?.["customResourceName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Implements GuestAgent GET method. */
export async function get(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): Promise<GuestAgent> {
  const result = await _getSend(context, resourceUri, options);
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GuestAgentsCreate200Response
  | GuestAgentsCreate201Response
  | GuestAgentsCreateDefaultResponse
  | GuestAgentsCreateLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              credentials: !resource.properties?.credentials
                ? undefined
                : {
                    username: resource.properties?.credentials?.["username"],
                    password: resource.properties?.credentials?.["password"],
                  },
              httpProxyConfig: !resource.properties?.httpProxyConfig
                ? undefined
                : {
                    httpsProxy:
                      resource.properties?.httpProxyConfig?.["httpsProxy"],
                  },
              provisioningAction: resource.properties?.["provisioningAction"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateDefaultResponse
    | GuestAgentsCreateLogicalResponse,
): Promise<GuestAgent> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as GuestAgentsCreateLogicalResponse;
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
          uuid: result.body.properties?.["uuid"],
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          httpProxyConfig: !result.body.properties?.httpProxyConfig
            ? undefined
            : {
                httpsProxy:
                  result.body.properties?.httpProxyConfig?.["httpsProxy"],
              },
          provisioningAction: result.body.properties?.["provisioningAction"],
          status: result.body.properties?.["status"],
          customResourceName: result.body.properties?.["customResourceName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create Or Update GuestAgent. */
export function create(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<GuestAgent>, GuestAgent> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(context, resourceUri, resource, options),
  }) as PollerLike<OperationState<GuestAgent>, GuestAgent>;
}

export function _$deleteSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GuestAgentsDelete200Response
  | GuestAgentsDelete204Response
  | GuestAgentsDeleteDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | GuestAgentsDelete200Response
    | GuestAgentsDelete204Response
    | GuestAgentsDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Implements GuestAgent DELETE method. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, resourceUri, options);
  return _$deleteDeserialize(result);
}

export function _listByVirtualMachineInstanceSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GuestAgentsListByVirtualMachineInstance200Response
  | GuestAgentsListByVirtualMachineInstanceDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByVirtualMachineInstanceDeserialize(
  result:
    | GuestAgentsListByVirtualMachineInstance200Response
    | GuestAgentsListByVirtualMachineInstanceDefaultResponse,
): Promise<GuestAgentListResult> {
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
            uuid: p.properties?.["uuid"],
            credentials: !p.properties?.credentials
              ? undefined
              : {
                  username: p.properties?.credentials?.["username"],
                  password: p.properties?.credentials?.["password"],
                },
            httpProxyConfig: !p.properties?.httpProxyConfig
              ? undefined
              : { httpsProxy: p.properties?.httpProxyConfig?.["httpsProxy"] },
            provisioningAction: p.properties?.["provisioningAction"],
            status: p.properties?.["status"],
            customResourceName: p.properties?.["customResourceName"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Returns the list of GuestAgent of the given vm. */
export function listByVirtualMachineInstance(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<GuestAgent> {
  return buildPagedAsyncIterator(
    context,
    () => _listByVirtualMachineInstanceSend(context, resourceUri, options),
    _listByVirtualMachineInstanceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
