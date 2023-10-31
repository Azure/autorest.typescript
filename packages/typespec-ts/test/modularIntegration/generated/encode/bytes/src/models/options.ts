// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface QueryQueryDefaultOptions extends OperationOptions {}

export interface QueryQueryBase64Options extends OperationOptions {}

export interface QueryQueryBase64urlOptions extends OperationOptions {}

export interface QueryQueryBase64urlArrayOptions extends OperationOptions {}

export interface PropertyPropertyDefaultOptions extends OperationOptions {}

export interface PropertyPropertyBase64Options extends OperationOptions {}

export interface PropertyPropertyBase64urlOptions extends OperationOptions {}

export interface PropertyPropertyBase64urlArrayOptions
  extends OperationOptions {}

export interface HeaderHeaderDefaultOptions extends OperationOptions {}

export interface HeaderHeaderBase64Options extends OperationOptions {}

export interface HeaderHeaderBase64urlOptions extends OperationOptions {}

export interface HeaderHeaderBase64urlArrayOptions extends OperationOptions {}

export interface RequestBodyRequestBodyDefaultOptions
  extends OperationOptions {}

export interface RequestBodyRequestBodyOctetStreamOptions
  extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyRequestBodyCustomContentTypeOptions
  extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyRequestBodyBase64Options extends OperationOptions {}

export interface RequestBodyRequestBodyBase64urlOptions
  extends OperationOptions {}

export interface ResponseBodyResponseBodyDefaultOptions
  extends OperationOptions {}

export interface ResponseBodyResponseBodyOctetStreamOptions
  extends OperationOptions {}

export interface ResponseBodyResponseBodyCustomContentTypeOptions
  extends OperationOptions {}

export interface ResponseBodyResponseBodyBase64Options
  extends OperationOptions {}

export interface ResponseBodyResponseBodyBase64urlOptions
  extends OperationOptions {}
