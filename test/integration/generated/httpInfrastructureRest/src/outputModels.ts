// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ErrorModelOutput {
  status?: number;
  message?: string;
}

export interface MyExceptionOutput {
  statusCode?: string;
}

export interface BOutput extends MyExceptionOutput {
  textStatusCode?: string;
}

export interface COutput {
  httpCode?: string;
}

export interface DOutput {
  httpStatusCode?: string;
}
