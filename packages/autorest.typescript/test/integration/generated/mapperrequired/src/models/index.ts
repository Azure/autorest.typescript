// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

/** The certificate issuer update parameters. */
export interface CertificateIssuerUpdateParameters {
  /** The issuer provider. */
  provider?: string;
}

/** Optional parameters. */
export interface UpdateCertificateIssuerOptionalParams
  extends coreClient.OperationOptions {
  /** The issuer provider. */
  provider?: string;
}

/** Contains response data for the updateCertificateIssuer operation. */
export type UpdateCertificateIssuerResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface MapperRequiredClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
