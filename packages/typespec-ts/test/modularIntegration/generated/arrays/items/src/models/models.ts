// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Array inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: InnerModel[];
}
