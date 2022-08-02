// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Product {
  properties?: object;
}

export interface ProductProperties {
  provisioningState?: string;
  provisioningStateValues?: choice;
}

export interface Resource {
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

export interface Sku {
  name?: string;
  id?: string;
}

export interface SubProduct {
  properties?: object;
}

export interface SubProductProperties {
  provisioningState?: string;
  provisioningStateValues?: choice;
}

export interface SubResource {
  /** Sub Resource Id */
  id?: string;
}
