// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CloudngfwContext } from "../../api/cloudngfwContext.js";
import {
  listByLocalRulestacks,
  $delete,
  createOrUpdate,
  get,
} from "../../api/certificateObjectLocalRulestack/operations.js";
import {
  CertificateObjectLocalRulestackListByLocalRulestacksOptionalParams,
  CertificateObjectLocalRulestackDeleteOptionalParams,
  CertificateObjectLocalRulestackCreateOrUpdateOptionalParams,
  CertificateObjectLocalRulestackGetOptionalParams,
} from "../../api/certificateObjectLocalRulestack/options.js";
import { CertificateObjectLocalRulestackResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CertificateObjectLocalRulestack operations. */
export interface CertificateObjectLocalRulestackOperations {
  /** List CertificateObjectLocalRulestackResource resources by LocalRulestacks */
  listByLocalRulestacks: (
    resourceGroupName: string,
    localRulestackName: string,
    options?: CertificateObjectLocalRulestackListByLocalRulestacksOptionalParams,
  ) => PagedAsyncIterableIterator<CertificateObjectLocalRulestackResource>;
  /** Delete a CertificateObjectLocalRulestackResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    options?: CertificateObjectLocalRulestackDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a CertificateObjectLocalRulestackResource */
  createOrUpdate: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    resource: CertificateObjectLocalRulestackResource,
    options?: CertificateObjectLocalRulestackCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<CertificateObjectLocalRulestackResource>,
    CertificateObjectLocalRulestackResource
  >;
  /** Get a CertificateObjectLocalRulestackResource */
  get: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    options?: CertificateObjectLocalRulestackGetOptionalParams,
  ) => Promise<CertificateObjectLocalRulestackResource>;
}

function _getCertificateObjectLocalRulestack(context: CloudngfwContext) {
  return {
    listByLocalRulestacks: (
      resourceGroupName: string,
      localRulestackName: string,
      options?: CertificateObjectLocalRulestackListByLocalRulestacksOptionalParams,
    ) =>
      listByLocalRulestacks(
        context,
        resourceGroupName,
        localRulestackName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      options?: CertificateObjectLocalRulestackDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, localRulestackName, name, options),
    createOrUpdate: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      resource: CertificateObjectLocalRulestackResource,
      options?: CertificateObjectLocalRulestackCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        localRulestackName,
        name,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      options?: CertificateObjectLocalRulestackGetOptionalParams,
    ) => get(context, resourceGroupName, localRulestackName, name, options),
  };
}

export function _getCertificateObjectLocalRulestackOperations(
  context: CloudngfwContext,
): CertificateObjectLocalRulestackOperations {
  return {
    ..._getCertificateObjectLocalRulestack(context),
  };
}
