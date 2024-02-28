// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a resource. */
export interface ResourceOutput {
  name: string;
  description?: string;
  map?: Record<string, InnerModelOutput>;
  array?: Array<InnerModelOutput>;
  intValue?: number;
  floatValue?: number;
  innerModel?: InnerModelOutput;
  intArray?: number[];
}

/** It is the model used by Resource model */
export interface InnerModelOutput {
  name?: string;
  description?: string;
}
