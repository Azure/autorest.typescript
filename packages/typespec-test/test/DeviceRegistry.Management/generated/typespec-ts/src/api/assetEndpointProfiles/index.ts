// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssetEndpointProfile,
  AssetEndpointProfileUpdate,
  AssetEndpointProfileListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  AssetEndpointProfilesCreateOrReplace200Response,
  AssetEndpointProfilesCreateOrReplace201Response,
  AssetEndpointProfilesCreateOrReplaceDefaultResponse,
  AssetEndpointProfilesCreateOrReplaceLogicalResponse,
  AssetEndpointProfilesDelete202Response,
  AssetEndpointProfilesDelete204Response,
  AssetEndpointProfilesDeleteDefaultResponse,
  AssetEndpointProfilesDeleteLogicalResponse,
  AssetEndpointProfilesGet200Response,
  AssetEndpointProfilesGetDefaultResponse,
  AssetEndpointProfilesListByResourceGroup200Response,
  AssetEndpointProfilesListByResourceGroupDefaultResponse,
  AssetEndpointProfilesListBySubscription200Response,
  AssetEndpointProfilesListBySubscriptionDefaultResponse,
  AssetEndpointProfilesUpdate200Response,
  AssetEndpointProfilesUpdate202Response,
  AssetEndpointProfilesUpdateDefaultResponse,
  AssetEndpointProfilesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AssetEndpointProfilesGetOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AssetEndpointProfilesGet200Response | AssetEndpointProfilesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | AssetEndpointProfilesGet200Response
    | AssetEndpointProfilesGetDefaultResponse,
): Promise<AssetEndpointProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.["mode"],
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a AssetEndpointProfile */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): Promise<AssetEndpointProfile> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesCreateOrReplace200Response
  | AssetEndpointProfilesCreateOrReplace201Response
  | AssetEndpointProfilesCreateOrReplaceDefaultResponse
  | AssetEndpointProfilesCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              targetAddress: resource.properties?.["targetAddress"],
              userAuthentication: !resource.properties?.userAuthentication
                ? undefined
                : {
                    mode: resource.properties?.userAuthentication?.["mode"],
                    usernamePasswordCredentials: !resource.properties
                      ?.userAuthentication?.usernamePasswordCredentials
                      ? undefined
                      : {
                          usernameReference:
                            resource.properties?.userAuthentication
                              ?.usernamePasswordCredentials?.[
                              "usernameReference"
                            ],
                          passwordReference:
                            resource.properties?.userAuthentication
                              ?.usernamePasswordCredentials?.[
                              "passwordReference"
                            ],
                        },
                    x509Credentials: !resource.properties?.userAuthentication
                      ?.x509Credentials
                      ? undefined
                      : {
                          certificateReference:
                            resource.properties?.userAuthentication
                              ?.x509Credentials?.["certificateReference"],
                        },
                  },
              transportAuthentication: !resource.properties
                ?.transportAuthentication
                ? undefined
                : {
                    ownCertificates:
                      resource.properties?.transportAuthentication?.[
                        "ownCertificates"
                      ].map((p) => ({
                        certThumbprint: p["certThumbprint"],
                        certSecretReference: p["certSecretReference"],
                        certPasswordReference: p["certPasswordReference"],
                      })),
                  },
              additionalConfiguration:
                resource.properties?.["additionalConfiguration"],
            },
        extendedLocation: {
          type: resource.extendedLocation["type"],
          name: resource.extendedLocation["name"],
        },
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | AssetEndpointProfilesCreateOrReplace200Response
    | AssetEndpointProfilesCreateOrReplace201Response
    | AssetEndpointProfilesCreateOrReplaceDefaultResponse
    | AssetEndpointProfilesCreateOrReplaceLogicalResponse,
): Promise<AssetEndpointProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetEndpointProfilesCreateOrReplaceLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.["mode"],
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a AssetEndpointProfile */
export function createOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetEndpointProfilesUpdate200Response
  | AssetEndpointProfilesUpdate202Response
  | AssetEndpointProfilesUpdateDefaultResponse
  | AssetEndpointProfilesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: properties["tags"],
        properties: !properties.properties
          ? undefined
          : {
              targetAddress: properties.properties?.["targetAddress"],
              userAuthentication: !properties.properties?.userAuthentication
                ? undefined
                : {
                    mode: properties.properties?.userAuthentication?.["mode"],
                    usernamePasswordCredentials: !properties.properties
                      ?.userAuthentication?.usernamePasswordCredentials
                      ? undefined
                      : {
                          usernameReference:
                            properties.properties?.userAuthentication
                              ?.usernamePasswordCredentials?.[
                              "usernameReference"
                            ],
                          passwordReference:
                            properties.properties?.userAuthentication
                              ?.usernamePasswordCredentials?.[
                              "passwordReference"
                            ],
                        },
                    x509Credentials: !properties.properties?.userAuthentication
                      ?.x509Credentials
                      ? undefined
                      : {
                          certificateReference:
                            properties.properties?.userAuthentication
                              ?.x509Credentials?.["certificateReference"],
                        },
                  },
              transportAuthentication: !properties.properties
                ?.transportAuthentication
                ? undefined
                : {
                    ownCertificates:
                      properties.properties?.transportAuthentication?.[
                        "ownCertificates"
                      ].map((p) => ({
                        certThumbprint: p["certThumbprint"],
                        certSecretReference: p["certSecretReference"],
                        certPasswordReference: p["certPasswordReference"],
                      })),
                  },
              additionalConfiguration:
                properties.properties?.["additionalConfiguration"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | AssetEndpointProfilesUpdate200Response
    | AssetEndpointProfilesUpdate202Response
    | AssetEndpointProfilesUpdateDefaultResponse
    | AssetEndpointProfilesUpdateLogicalResponse,
): Promise<AssetEndpointProfile> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetEndpointProfilesUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.["mode"],
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a AssetEndpointProfile */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetEndpointProfilesDelete202Response
  | AssetEndpointProfilesDelete204Response
  | AssetEndpointProfilesDeleteDefaultResponse
  | AssetEndpointProfilesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AssetEndpointProfilesDelete202Response
    | AssetEndpointProfilesDelete204Response
    | AssetEndpointProfilesDeleteDefaultResponse
    | AssetEndpointProfilesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as AssetEndpointProfilesDeleteLogicalResponse;
  return;
}

/** Delete a AssetEndpointProfile */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesListByResourceGroup200Response
  | AssetEndpointProfilesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AssetEndpointProfilesListByResourceGroup200Response
    | AssetEndpointProfilesListByResourceGroupDefaultResponse,
): Promise<AssetEndpointProfileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
      id: p["id"],
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
            targetAddress: p.properties?.["targetAddress"],
            userAuthentication: !p.properties?.userAuthentication
              ? undefined
              : {
                  mode: p.properties?.userAuthentication?.["mode"],
                  usernamePasswordCredentials: !p.properties?.userAuthentication
                    ?.usernamePasswordCredentials
                    ? undefined
                    : {
                        usernameReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "usernameReference"
                          ],
                        passwordReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "passwordReference"
                          ],
                      },
                  x509Credentials: !p.properties?.userAuthentication
                    ?.x509Credentials
                    ? undefined
                    : {
                        certificateReference:
                          p.properties?.userAuthentication?.x509Credentials?.[
                            "certificateReference"
                          ],
                      },
                },
            transportAuthentication: !p.properties?.transportAuthentication
              ? undefined
              : {
                  ownCertificates: p.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
                },
            additionalConfiguration: p.properties?.["additionalConfiguration"],
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List AssetEndpointProfile resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesListBySubscription200Response
  | AssetEndpointProfilesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AssetEndpointProfilesListBySubscription200Response
    | AssetEndpointProfilesListBySubscriptionDefaultResponse,
): Promise<AssetEndpointProfileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
      id: p["id"],
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
            targetAddress: p.properties?.["targetAddress"],
            userAuthentication: !p.properties?.userAuthentication
              ? undefined
              : {
                  mode: p.properties?.userAuthentication?.["mode"],
                  usernamePasswordCredentials: !p.properties?.userAuthentication
                    ?.usernamePasswordCredentials
                    ? undefined
                    : {
                        usernameReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "usernameReference"
                          ],
                        passwordReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "passwordReference"
                          ],
                      },
                  x509Credentials: !p.properties?.userAuthentication
                    ?.x509Credentials
                    ? undefined
                    : {
                        certificateReference:
                          p.properties?.userAuthentication?.x509Credentials?.[
                            "certificateReference"
                          ],
                      },
                },
            transportAuthentication: !p.properties?.transportAuthentication
              ? undefined
              : {
                  ownCertificates: p.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
                },
            additionalConfiguration: p.properties?.["additionalConfiguration"],
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List AssetEndpointProfile resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
