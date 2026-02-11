// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createCertificates,
  CertificatesContext,
  CertificatesOptionalParams,
} from "./api/index.js";
import { BatchCertificate } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  getCertificate,
  deleteCertificate,
  cancelCertificateDeletion,
  listCertificates,
  createCertificate,
} from "./api/operations.js";
import {
  GetCertificateOptionalParams,
  DeleteCertificateOptionalParams,
  CancelCertificateDeletionOptionalParams,
  ListCertificatesOptionalParams,
  CreateCertificateOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { CertificatesOptionalParams } from "./api/certificatesContext.js";

export class Certificates {
  private _client: CertificatesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: CertificatesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCertificates(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Gets information about the specified Certificate. */
  getCertificate(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: GetCertificateOptionalParams = { requestOptions: {} },
  ): Promise<BatchCertificate> {
    return getCertificate(this._client, thumbprintAlgorithm, thumbprint, options);
  }

  /**
   * You cannot delete a Certificate if a resource (Pool or Compute Node) is using
   * it. Before you can delete a Certificate, you must therefore make sure that the
   * Certificate is not associated with any existing Pools, the Certificate is not
   * installed on any Nodes (even if you remove a Certificate from a Pool, it is not
   * removed from existing Compute Nodes in that Pool until they restart), and no
   * running Tasks depend on the Certificate. If you try to delete a Certificate
   * that is in use, the deletion fails. The Certificate status changes to
   * deleteFailed. You can use Cancel Delete Certificate to set the status back to
   * active if you decide that you want to continue using the Certificate.
   */
  deleteCertificate(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: DeleteCertificateOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteCertificate(this._client, thumbprintAlgorithm, thumbprint, options);
  }

  /**
   * If you try to delete a Certificate that is being used by a Pool or Compute
   * Node, the status of the Certificate changes to deleteFailed. If you decide that
   * you want to continue using the Certificate, you can use this operation to set
   * the status of the Certificate back to active. If you intend to delete the
   * Certificate, you do not need to run this operation after the deletion failed.
   * You must make sure that the Certificate is not being used by any resources, and
   * then you can try again to delete the Certificate.
   */
  cancelCertificateDeletion(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return cancelCertificateDeletion(this._client, thumbprintAlgorithm, thumbprint, options);
  }

  /** Lists all of the Certificates that have been added to the specified Account. */
  listCertificates(
    options: ListCertificatesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchCertificate> {
    return listCertificates(this._client, options);
  }

  /** Creates a Certificate to the specified Account. */
  createCertificate(
    body: BatchCertificate,
    options: CreateCertificateOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createCertificate(this._client, body, options);
  }
}
