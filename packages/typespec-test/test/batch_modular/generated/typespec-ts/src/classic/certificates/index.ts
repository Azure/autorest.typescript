// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import { BatchCertificate } from "../../models/models.js";
import {
  createCertificate,
  listCertificates,
  cancelCertificateDeletion,
  deleteCertificate,
  getCertificate,
} from "../../api/certificates/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  CertificatesCreateCertificateOptions,
  CertificatesListCertificatesOptions,
  CertificatesCancelCertificateDeletionOptions,
  CertificatesDeleteCertificateOptions,
  CertificatesGetCertificateOptions,
} from "../../models/options.js";

export interface CertificatesOperations {
  createCertificate: (
    body: BatchCertificate,
    options?: CertificatesCreateCertificateOptions,
  ) => Promise<void>;
  listCertificates: (
    options?: CertificatesListCertificatesOptions,
  ) => PagedAsyncIterableIterator<BatchCertificate>;
  cancelCertificateDeletion: (
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificatesCancelCertificateDeletionOptions,
  ) => Promise<void>;
  deleteCertificate: (
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificatesDeleteCertificateOptions,
  ) => Promise<void>;
  getCertificate: (
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificatesGetCertificateOptions,
  ) => Promise<BatchCertificate>;
}

export function getCertificates(context: BatchContext) {
  return {
    createCertificate: (
      body: BatchCertificate,
      options?: CertificatesCreateCertificateOptions,
    ) => createCertificate(context, body, options),
    listCertificates: (options?: CertificatesListCertificatesOptions) =>
      listCertificates(context, options),
    cancelCertificateDeletion: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options?: CertificatesCancelCertificateDeletionOptions,
    ) =>
      cancelCertificateDeletion(
        context,
        thumbprintAlgorithm,
        thumbprint,
        options,
      ),
    deleteCertificate: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options?: CertificatesDeleteCertificateOptions,
    ) => deleteCertificate(context, thumbprintAlgorithm, thumbprint, options),
    getCertificate: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options?: CertificatesGetCertificateOptions,
    ) => getCertificate(context, thumbprintAlgorithm, thumbprint, options),
  };
}

export function getCertificatesOperations(
  context: BatchContext,
): CertificatesOperations {
  return {
    ...getCertificates(context),
  };
}
