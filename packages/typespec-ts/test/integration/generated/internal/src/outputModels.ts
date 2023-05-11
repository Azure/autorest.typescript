// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is a model used by both public and internal operation. It should be generated and exported. */
export interface SharedModelOutput {
  name: string;
}

/** This is a model only used by public operation. It should be generated and exported. */
export interface PublicModelOutput {
  name: string;
}

/** This is a model only used by internal operation. It should be generated but not exported. */
export interface InternalModelOutput {
  name: string;
}
