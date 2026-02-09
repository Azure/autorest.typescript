// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  getFullUrl,
  listByPartnerNamespace,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/channels/operations.js";
import {
  ChannelsGetFullUrlOptionalParams,
  ChannelsListByPartnerNamespaceOptionalParams,
  ChannelsDeleteOptionalParams,
  ChannelsUpdateOptionalParams,
  ChannelsCreateOrUpdateOptionalParams,
  ChannelsGetOptionalParams,
} from "../../api/channels/options.js";
import { Channel, ChannelUpdateParameters, EventSubscriptionFullUrl } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Channels operations. */
export interface ChannelsOperations {
  /** Get the full endpoint URL of a partner destination channel. */
  getFullUrl: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsGetFullUrlOptionalParams,
  ) => Promise<EventSubscriptionFullUrl>;
  /** List all the channels in a partner namespace. */
  listByPartnerNamespace: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: ChannelsListByPartnerNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<Channel>;
  /** Delete an existing channel. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Synchronously updates a channel with the specified parameters. */
  update: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    channelUpdateParameters: ChannelUpdateParameters,
    options?: ChannelsUpdateOptionalParams,
  ) => Promise<void>;
  /** Synchronously creates or updates a new channel with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    channelInfo: Channel,
    options?: ChannelsCreateOrUpdateOptionalParams,
  ) => Promise<Channel>;
  /** Get properties of a channel. */
  get: (
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsGetOptionalParams,
  ) => Promise<Channel>;
}

function _getChannels(context: EventGridContext) {
  return {
    getFullUrl: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      channelName: string,
      options?: ChannelsGetFullUrlOptionalParams,
    ) => getFullUrl(context, resourceGroupName, partnerNamespaceName, channelName, options),
    listByPartnerNamespace: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      options?: ChannelsListByPartnerNamespaceOptionalParams,
    ) => listByPartnerNamespace(context, resourceGroupName, partnerNamespaceName, options),
    delete: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      channelName: string,
      options?: ChannelsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, partnerNamespaceName, channelName, options),
    update: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      channelName: string,
      channelUpdateParameters: ChannelUpdateParameters,
      options?: ChannelsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        partnerNamespaceName,
        channelName,
        channelUpdateParameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      channelName: string,
      channelInfo: Channel,
      options?: ChannelsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        partnerNamespaceName,
        channelName,
        channelInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      partnerNamespaceName: string,
      channelName: string,
      options?: ChannelsGetOptionalParams,
    ) => get(context, resourceGroupName, partnerNamespaceName, channelName, options),
  };
}

export function _getChannelsOperations(context: EventGridContext): ChannelsOperations {
  return {
    ..._getChannels(context),
  };
}
