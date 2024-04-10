// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface QueryDefaultOptionalParams extends OperationOptions {}

export interface QueryBase64OptionalParams extends OperationOptions {}

export interface QueryBase64urlOptionalParams extends OperationOptions {}

export interface QueryBase64urlArrayOptionalParams extends OperationOptions {}

export interface PropertyDefaultOptionalParams extends OperationOptions {}

export interface PropertyBase64OptionalParams extends OperationOptions {}

export interface PropertyBase64urlOptionalParams extends OperationOptions {}

export interface PropertyBase64urlArrayOptionalParams
  extends OperationOptions {}

export interface HeaderDefaultOptionalParams extends OperationOptions {}

export interface HeaderBase64OptionalParams extends OperationOptions {}

export interface HeaderBase64urlOptionalParams extends OperationOptions {}

export interface HeaderBase64urlArrayOptionalParams extends OperationOptions {}

export interface RequestBodyDefaultOptionalParams extends OperationOptions {}

export interface RequestBodyOctetStreamOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyCustomContentTypeOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyBase64OptionalParams extends OperationOptions {}

export interface RequestBodyBase64urlOptionalParams extends OperationOptions {}

export interface ResponseBodyDefaultOptionalParams extends OperationOptions {}

export interface ResponseBodyOctetStreamOptionalParams
  extends OperationOptions {}

export interface ResponseBodyCustomContentTypeOptionalParams
  extends OperationOptions {}

export interface ResponseBodyBase64OptionalParams extends OperationOptions {}

export interface ResponseBodyBase64urlOptionalParams extends OperationOptions {}
