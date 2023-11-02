// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface QueryDefaultOptions extends OperationOptions {}

export interface QueryBase64Options extends OperationOptions {}

export interface QueryBase64urlOptions extends OperationOptions {}

export interface QueryBase64urlArrayOptions extends OperationOptions {}

export interface PropertyDefaultOptions extends OperationOptions {}

export interface PropertyBase64Options extends OperationOptions {}

export interface PropertyBase64urlOptions extends OperationOptions {}

export interface PropertyBase64urlArrayOptions extends OperationOptions {}

export interface HeaderDefaultOptions extends OperationOptions {}

export interface HeaderBase64Options extends OperationOptions {}

export interface HeaderBase64urlOptions extends OperationOptions {}

export interface HeaderBase64urlArrayOptions extends OperationOptions {}

export interface RequestBodyDefaultOptions extends OperationOptions {}

export interface RequestBodyOctetStreamOptions extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyCustomContentTypeOptions extends OperationOptions {
  contentType?: string;
}

export interface RequestBodyBase64Options extends OperationOptions {}

export interface RequestBodyBase64urlOptions extends OperationOptions {}

export interface ResponseBodyDefaultOptions extends OperationOptions {}

export interface ResponseBodyOctetStreamOptions extends OperationOptions {}

export interface ResponseBodyCustomContentTypeOptions
  extends OperationOptions {}

export interface ResponseBodyBase64Options extends OperationOptions {}

export interface ResponseBodyBase64urlOptions extends OperationOptions {}
