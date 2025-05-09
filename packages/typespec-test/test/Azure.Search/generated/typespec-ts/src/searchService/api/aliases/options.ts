// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AliasesCreateOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface AliasesListOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface AliasesGetOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface AliasesDeleteOptionalParams extends OperationOptions {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  ifMatch?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  ifNoneMatch?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface AliasesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  ifMatch?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  ifNoneMatch?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}
