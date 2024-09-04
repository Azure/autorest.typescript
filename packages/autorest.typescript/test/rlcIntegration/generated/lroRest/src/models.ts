// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface Product extends Resource {
  properties?: ProductProperties;
}

export interface ProductProperties {
  provisioningState?: string;
}

export interface Resource {
  /** Dictionary of <string> */
  tags?: Record<string, string>;
  /** Resource Location */
  location?: string;
}

export interface Sku {
  name?: string;
  id?: string;
}

export interface SubProduct extends SubResource {
  properties?: SubProductProperties;
}

export interface SubProductProperties {
  provisioningState?: string;
}

export interface SubResource {}
