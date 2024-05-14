// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Array inner model */
export interface InnerModelOutput {
  /** Required string property */
  property: string;
  children?: Array<InnerModelOutput>;
}
