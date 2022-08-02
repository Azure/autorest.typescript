// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductOutput {
  properties?: ProductProperties;
}

export interface ProductPropertiesOutput {
  provisioningState?: string;
  provisioningStateValues?: ProductPropertiesProvisioningStateValues;
}

export interface ResourceOutput {
  /** Resource Id */
  id?: string;
  /** Resource Type */
  type?: string;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  /** Resource Location */
  location?: string;
  /** Resource Name */
  name?: string;
}

export interface CloudErrorOutput {
  code?: number;
  message?: string;
}

export interface SkuOutput {
  name?: string;
  id?: string;
}

export interface SubProductOutput {
  properties?: SubProductProperties;
}

export interface SubProductPropertiesOutput {
  provisioningState?: string;
  provisioningStateValues?: SubProductPropertiesProvisioningStateValues;
}

export interface SubResourceOutput {
  /** Sub Resource Id */
  id?: string;
}
