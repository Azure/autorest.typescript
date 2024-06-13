// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  OracleSubscription,
  OracleSubscriptionUpdate,
} from "../../models/models.js";
import {
  listBySubscription,
  createOrUpdate,
  get,
  update,
  $delete,
  listCloudAccountDetails,
  listSaasSubscriptionDetails,
  listActivationLinks,
} from "../../api/oracleSubscriptions/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
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

export interface OracleSubscriptionsOperations {
  listBySubscription: (
    subscriptionId: string,
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OracleSubscription>;
  createOrUpdate: (
    subscriptionId: string,
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  get: (
    subscriptionId: string,
    options?: OracleSubscriptionsGetOptionalParams,
  ) => Promise<OracleSubscription>;
  update: (
    subscriptionId: string,
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  delete: (
    subscriptionId: string,
    options?: OracleSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listCloudAccountDetails: (
    subscriptionId: string,
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listSaasSubscriptionDetails: (
    subscriptionId: string,
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listActivationLinks: (
    subscriptionId: string,
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getOracleSubscriptions(context: DatabaseContext) {
  return {
    listBySubscription: (
      subscriptionId: string,
      options?: OracleSubscriptionsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    createOrUpdate: (
      subscriptionId: string,
      resource: OracleSubscription,
      options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, subscriptionId, resource, options),
    get: (
      subscriptionId: string,
      options?: OracleSubscriptionsGetOptionalParams,
    ) => get(context, subscriptionId, options),
    update: (
      subscriptionId: string,
      properties: OracleSubscriptionUpdate,
      options?: OracleSubscriptionsUpdateOptionalParams,
    ) => update(context, subscriptionId, properties, options),
    delete: (
      subscriptionId: string,
      options?: OracleSubscriptionsDeleteOptionalParams,
    ) => $delete(context, subscriptionId, options),
    listCloudAccountDetails: (
      subscriptionId: string,
      options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
    ) => listCloudAccountDetails(context, subscriptionId, options),
    listSaasSubscriptionDetails: (
      subscriptionId: string,
      options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
    ) => listSaasSubscriptionDetails(context, subscriptionId, options),
    listActivationLinks: (
      subscriptionId: string,
      options?: OracleSubscriptionsListActivationLinksOptionalParams,
    ) => listActivationLinks(context, subscriptionId, options),
  };
}

export function getOracleSubscriptionsOperations(
  context: DatabaseContext,
): OracleSubscriptionsOperations {
  return {
    ...getOracleSubscriptions(context),
  };
}
