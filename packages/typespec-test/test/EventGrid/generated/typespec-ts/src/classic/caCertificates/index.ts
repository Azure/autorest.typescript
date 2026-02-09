// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import {
  listByNamespace,
  $delete,
  createOrUpdate,
  get,
} from "../../api/caCertificates/operations.js";
import {
  CaCertificatesListByNamespaceOptionalParams,
  CaCertificatesDeleteOptionalParams,
  CaCertificatesCreateOrUpdateOptionalParams,
  CaCertificatesGetOptionalParams,
} from "../../api/caCertificates/options.js";
import { CaCertificate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CaCertificates operations. */
export interface CaCertificatesOperations {
  /** Get all the CA certificates under a namespace. */
  listByNamespace: (
    resourceGroupName: string,
    namespaceName: string,
    options?: CaCertificatesListByNamespaceOptionalParams,
  ) => PagedAsyncIterableIterator<CaCertificate>;
  /** Delete an existing CA certificate. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    caCertificateName: string,
    options?: CaCertificatesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create or update a CA certificate with the specified parameters. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    caCertificateName: string,
    caCertificateInfo: CaCertificate,
    options?: CaCertificatesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CaCertificate>, CaCertificate>;
  /** Get properties of a CA certificate. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    caCertificateName: string,
    options?: CaCertificatesGetOptionalParams,
  ) => Promise<CaCertificate>;
}

function _getCaCertificates(context: EventGridContext) {
  return {
    listByNamespace: (
      resourceGroupName: string,
      namespaceName: string,
      options?: CaCertificatesListByNamespaceOptionalParams,
    ) => listByNamespace(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      caCertificateName: string,
      options?: CaCertificatesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, caCertificateName, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      caCertificateName: string,
      caCertificateInfo: CaCertificate,
      options?: CaCertificatesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        caCertificateName,
        caCertificateInfo,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      caCertificateName: string,
      options?: CaCertificatesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, caCertificateName, options),
  };
}

export function _getCaCertificatesOperations(context: EventGridContext): CaCertificatesOperations {
  return {
    ..._getCaCertificates(context),
  };
}
