// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductOutput {
  properties?: object;
}

export interface ProductPropertiesOutput {
  provisioningState?: string;
  provisioningStateValues?: choice;
}

export interface ResourceOutput {
  /** Resource Id */
  id?: string;
  /** Resource Type */
  type?: string;
  /** Dictionary of <string> */
  tags?: dictionary;
  /** Resource Location */
  location?: string;
  /** Resource Name */
  name?: string;
}

export interface CloudErrorOutput {
  code?: integer;
  message?: string;
}

export interface SkuOutput {
  name?: string;
  id?: string;
}

export interface SubProductOutput {
  properties?: object;
}

export interface SubProductPropertiesOutput {
  provisioningState?: string;
  provisioningStateValues?: choice;
}

export interface SubResourceOutput {
  /** Sub Resource Id */
  id?: string;
}
