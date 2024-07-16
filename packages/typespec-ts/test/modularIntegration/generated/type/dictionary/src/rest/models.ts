// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Dictionary inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: Record<string, InnerModel>;
}
