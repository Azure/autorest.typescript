// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  OracleSubscriptionListResult,
  OracleSubscription,
  OracleSubscriptionUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  OracleSubscriptionsCreateOrUpdate200Response,
  OracleSubscriptionsCreateOrUpdate201Response,
  OracleSubscriptionsCreateOrUpdateDefaultResponse,
  OracleSubscriptionsCreateOrUpdateLogicalResponse,
  OracleSubscriptionsDelete202Response,
  OracleSubscriptionsDelete204Response,
  OracleSubscriptionsDeleteDefaultResponse,
  OracleSubscriptionsDeleteLogicalResponse,
  OracleSubscriptionsGet200Response,
  OracleSubscriptionsGetDefaultResponse,
  OracleSubscriptionsListActivationLinks200Response,
  OracleSubscriptionsListActivationLinks202Response,
  OracleSubscriptionsListActivationLinksDefaultResponse,
  OracleSubscriptionsListActivationLinksLogicalResponse,
  OracleSubscriptionsListBySubscription200Response,
  OracleSubscriptionsListBySubscriptionDefaultResponse,
  OracleSubscriptionsListCloudAccountDetails200Response,
  OracleSubscriptionsListCloudAccountDetails202Response,
  OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
  OracleSubscriptionsListCloudAccountDetailsLogicalResponse,
  OracleSubscriptionsListSaasSubscriptionDetails200Response,
  OracleSubscriptionsListSaasSubscriptionDetails202Response,
  OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
  OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse,
  OracleSubscriptionsUpdate200Response,
  OracleSubscriptionsUpdate202Response,
  OracleSubscriptionsUpdateDefaultResponse,
  OracleSubscriptionsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  OracleSubscriptionsListBySubscriptionOptionalParams,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListActivationLinksOptionalParams,
} from "../../models/options.js";

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | OracleSubscriptionsListBySubscription200Response
  | OracleSubscriptionsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | OracleSubscriptionsListBySubscription200Response
    | OracleSubscriptionsListBySubscriptionDefaultResponse,
): Promise<OracleSubscriptionListResult> {
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
            provisioningState: p.properties?.["provisioningState"],
            saasSubscriptionId: p.properties?.["saasSubscriptionId"],
            cloudAccountId: p.properties?.["cloudAccountId"],
            cloudAccountState: p.properties?.["cloudAccountState"],
            termUnit: p.properties?.["termUnit"],
            productCode: p.properties?.["productCode"],
            intent: p.properties?.["intent"],
          },
      plan: !p.plan
        ? undefined
        : {
            name: p.plan?.["name"],
            publisher: p.plan?.["publisher"],
            product: p.plan?.["product"],
            promotionCode: p.plan?.["promotionCode"],
            version: p.plan?.["version"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List OracleSubscription resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OracleSubscription> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | OracleSubscriptionsCreateOrUpdate200Response
  | OracleSubscriptionsCreateOrUpdate201Response
  | OracleSubscriptionsCreateOrUpdateDefaultResponse
  | OracleSubscriptionsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              termUnit: resource.properties?.["termUnit"],
              productCode: resource.properties?.["productCode"],
              intent: resource.properties?.["intent"],
            },
        plan: !resource.plan
          ? undefined
          : {
              name: resource.plan?.["name"],
              publisher: resource.plan?.["publisher"],
              product: resource.plan?.["product"],
              promotionCode: resource.plan?.["promotionCode"],
              version: resource.plan?.["version"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | OracleSubscriptionsCreateOrUpdate200Response
    | OracleSubscriptionsCreateOrUpdate201Response
    | OracleSubscriptionsCreateOrUpdateDefaultResponse
    | OracleSubscriptionsCreateOrUpdateLogicalResponse,
): Promise<OracleSubscription> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as OracleSubscriptionsCreateOrUpdateLogicalResponse;
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Create a OracleSubscription */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, subscriptionId, resource, options),
  }) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  OracleSubscriptionsGet200Response | OracleSubscriptionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | OracleSubscriptionsGet200Response
    | OracleSubscriptionsGetDefaultResponse,
): Promise<OracleSubscription> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Get a OracleSubscription */
export async function get(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): Promise<OracleSubscription> {
  const result = await _getSend(context, subscriptionId, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | OracleSubscriptionsUpdate200Response
  | OracleSubscriptionsUpdate202Response
  | OracleSubscriptionsUpdateDefaultResponse
  | OracleSubscriptionsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        plan: !properties.plan
          ? undefined
          : {
              name: properties.plan?.["name"],
              publisher: properties.plan?.["publisher"],
              product: properties.plan?.["product"],
              promotionCode: properties.plan?.["promotionCode"],
              version: properties.plan?.["version"],
            },
        properties: !properties.properties
          ? undefined
          : {
              productCode: properties.properties?.["productCode"],
              intent: properties.properties?.["intent"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | OracleSubscriptionsUpdate200Response
    | OracleSubscriptionsUpdate202Response
    | OracleSubscriptionsUpdateDefaultResponse
    | OracleSubscriptionsUpdateLogicalResponse,
): Promise<OracleSubscription> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as OracleSubscriptionsUpdateLogicalResponse;
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Update a OracleSubscription */
export function update(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, subscriptionId, properties, options),
  }) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | OracleSubscriptionsDelete202Response
  | OracleSubscriptionsDelete204Response
  | OracleSubscriptionsDeleteDefaultResponse
  | OracleSubscriptionsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | OracleSubscriptionsDelete202Response
    | OracleSubscriptionsDelete204Response
    | OracleSubscriptionsDeleteDefaultResponse
    | OracleSubscriptionsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as OracleSubscriptionsDeleteLogicalResponse;
  return;
}

/** Delete a OracleSubscription */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, subscriptionId, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listCloudAccountDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | OracleSubscriptionsListCloudAccountDetails200Response
  | OracleSubscriptionsListCloudAccountDetails202Response
  | OracleSubscriptionsListCloudAccountDetailsDefaultResponse
  | OracleSubscriptionsListCloudAccountDetailsLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _listCloudAccountDetailsDeserialize(
  result:
    | OracleSubscriptionsListCloudAccountDetails200Response
    | OracleSubscriptionsListCloudAccountDetails202Response
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse
    | OracleSubscriptionsListCloudAccountDetailsLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as OracleSubscriptionsListCloudAccountDetailsLogicalResponse;
  return;
}

/** List Cloud Account Details */
export function listCloudAccountDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _listCloudAccountDetailsDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _listCloudAccountDetailsSend(context, subscriptionId, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listSaasSubscriptionDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | OracleSubscriptionsListSaasSubscriptionDetails200Response
  | OracleSubscriptionsListSaasSubscriptionDetails202Response
  | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
  | OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSaasSubscriptionDetailsDeserialize(
  result:
    | OracleSubscriptionsListSaasSubscriptionDetails200Response
    | OracleSubscriptionsListSaasSubscriptionDetails202Response
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
    | OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result =
    result as OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse;
  return;
}

/** List Saas Subscription Details */
export function listSaasSubscriptionDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _listSaasSubscriptionDetailsDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _listSaasSubscriptionDetailsSend(context, subscriptionId, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _listActivationLinksSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | OracleSubscriptionsListActivationLinks200Response
  | OracleSubscriptionsListActivationLinks202Response
  | OracleSubscriptionsListActivationLinksDefaultResponse
  | OracleSubscriptionsListActivationLinksLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _listActivationLinksDeserialize(
  result:
    | OracleSubscriptionsListActivationLinks200Response
    | OracleSubscriptionsListActivationLinks202Response
    | OracleSubscriptionsListActivationLinksDefaultResponse
    | OracleSubscriptionsListActivationLinksLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as OracleSubscriptionsListActivationLinksLogicalResponse;
  return;
}

/** List Activation Links */
export function listActivationLinks(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _listActivationLinksDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _listActivationLinksSend(context, subscriptionId, options),
  }) as PollerLike<OperationState<void>, void>;
}
