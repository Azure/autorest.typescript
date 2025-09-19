// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GetSecretOptionalParams extends OperationOptions {
  /** The media type (MIME type) of the certificate. If a supported format is specified, the certificate content is converted to the requested format. Currently, only PFX to PEM conversion is supported. If an unsupported format is specified, the request is rejected. If not specified, the certificate is returned in its original format without conversion. */
  outContentType?: string;
}
