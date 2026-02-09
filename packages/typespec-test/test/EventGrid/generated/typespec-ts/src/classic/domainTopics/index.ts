// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import { listByDomain, $delete, createOrUpdate, get } from "../../api/domainTopics/operations.js";
import {
  DomainTopicsListByDomainOptionalParams,
  DomainTopicsDeleteOptionalParams,
  DomainTopicsCreateOrUpdateOptionalParams,
  DomainTopicsGetOptionalParams,
} from "../../api/domainTopics/options.js";
import { DomainTopic } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DomainTopics operations. */
export interface DomainTopicsOperations {
  /** List all the topics in a domain. */
  listByDomain: (
    resourceGroupName: string,
    domainName: string,
    options?: DomainTopicsListByDomainOptionalParams,
  ) => PagedAsyncIterableIterator<DomainTopic>;
  /** Delete existing domain topic. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Asynchronously creates or updates a new domain topic with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get properties of a domain topic. */
  get: (
    resourceGroupName: string,
    domainName: string,
    domainTopicName: string,
    options?: DomainTopicsGetOptionalParams,
  ) => Promise<DomainTopic>;
}

function _getDomainTopics(context: EventGridContext) {
  return {
    listByDomain: (
      resourceGroupName: string,
      domainName: string,
      options?: DomainTopicsListByDomainOptionalParams,
    ) => listByDomain(context, resourceGroupName, domainName, options),
    delete: (
      resourceGroupName: string,
      domainName: string,
      domainTopicName: string,
      options?: DomainTopicsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, domainName, domainTopicName, options),
    createOrUpdate: (
      resourceGroupName: string,
      domainName: string,
      domainTopicName: string,
      options?: DomainTopicsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, domainName, domainTopicName, options),
    get: (
      resourceGroupName: string,
      domainName: string,
      domainTopicName: string,
      options?: DomainTopicsGetOptionalParams,
    ) => get(context, resourceGroupName, domainName, domainTopicName, options),
  };
}

export function _getDomainTopicsOperations(context: EventGridContext): DomainTopicsOperations {
  return {
    ..._getDomainTopics(context),
  };
}
