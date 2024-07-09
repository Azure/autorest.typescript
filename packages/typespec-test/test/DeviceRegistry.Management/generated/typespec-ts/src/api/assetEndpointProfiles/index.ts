// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  assetEndpointProfilePropertiesSerializer,
  extendedLocationSerializer,
  assetEndpointProfileUpdatePropertiesSerializer,
  CreatedByType,
  AssetEndpointProfile,
  UserAuthenticationMode,
  AssetEndpointProfileUpdate,
  _AssetEndpointProfileListResult,
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
import { serializeRecord } from "../../helpers/serializerHelpers.js";
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

  const _result = result as unknown as AssetEndpointProfilesGet200Response;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          targetAddress: _result.body.properties?.["targetAddress"],
          userAuthentication: !_result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: _result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !_result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !_result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        _result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !_result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  _result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => {
                    return {
                      certThumbprint: p["certThumbprint"],
                      certSecretReference: p["certSecretReference"],
                      certPasswordReference: p["certPasswordReference"],
                    };
                  }),
              },
          additionalConfiguration:
            _result.body.properties?.["additionalConfiguration"],
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : assetEndpointProfilePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
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

  const _result =
    result as unknown as AssetEndpointProfilesCreateOrReplaceLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          targetAddress: _result.body.properties?.["targetAddress"],
          userAuthentication: !_result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: _result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !_result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !_result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        _result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !_result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  _result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => {
                    return {
                      certThumbprint: p["certThumbprint"],
                      certSecretReference: p["certSecretReference"],
                      certPasswordReference: p["certPasswordReference"],
                    };
                  }),
              },
          additionalConfiguration:
            _result.body.properties?.["additionalConfiguration"],
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetEndpointProfileUpdatePropertiesSerializer(
              properties.properties,
            ),
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

  const _result =
    result as unknown as AssetEndpointProfilesUpdateLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          uuid: _result.body.properties?.["uuid"],
          targetAddress: _result.body.properties?.["targetAddress"],
          userAuthentication: !_result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: _result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !_result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        _result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !_result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        _result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !_result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  _result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => {
                    return {
                      certThumbprint: p["certThumbprint"],
                      certSecretReference: p["certSecretReference"],
                      certPasswordReference: p["certPasswordReference"],
                    };
                  }),
              },
          additionalConfiguration:
            _result.body.properties?.["additionalConfiguration"],
          provisioningState: _result.body.properties?.[
            "provisioningState"
          ] as any,
        },
    extendedLocation: {
      type: _result.body.extendedLocation["type"],
      name: _result.body.extendedLocation["name"],
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
): Promise<_AssetEndpointProfileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as AssetEndpointProfilesListByResourceGroup200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
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
                    mode: p.properties?.userAuthentication?.[
                      "mode"
                    ] as UserAuthenticationMode,
                    usernamePasswordCredentials: !p.properties
                      ?.userAuthentication?.usernamePasswordCredentials
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
                    ].map((p) => {
                      return {
                        certThumbprint: p["certThumbprint"],
                        certSecretReference: p["certSecretReference"],
                        certPasswordReference: p["certPasswordReference"],
                      };
                    }),
                  },
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              provisioningState: p.properties?.["provisioningState"] as any,
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: _result.body["nextLink"],
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
): Promise<_AssetEndpointProfileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as AssetEndpointProfilesListBySubscription200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"] as CreatedByType,
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.[
                "lastModifiedByType"
              ] as CreatedByType,
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
                    mode: p.properties?.userAuthentication?.[
                      "mode"
                    ] as UserAuthenticationMode,
                    usernamePasswordCredentials: !p.properties
                      ?.userAuthentication?.usernamePasswordCredentials
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
                    ].map((p) => {
                      return {
                        certThumbprint: p["certThumbprint"],
                        certSecretReference: p["certSecretReference"],
                        certPasswordReference: p["certPasswordReference"],
                      };
                    }),
                  },
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              provisioningState: p.properties?.["provisioningState"] as any,
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: _result.body["nextLink"],
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
