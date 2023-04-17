// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is an internal model. */
export interface InternalModelOutput {
  name: string;
}

/** This is a non-internal model only used by internal operation. */
export interface ModelOnlyUsedByInternalOperationOutput {
  id: string;
  name: string;
}
