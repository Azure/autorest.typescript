// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Product extends Resource {
  properties?: ProductProperties;
}

export interface ProductProperties {
  provisioningState?: string;
  provisioningStateValues?:
    | "Succeeded"
    | "Failed"
    | "canceled"
    | "Accepted"
    | "Creating"
    | "Created"
    | "Updating"
    | "Updated"
    | "Deleting"
    | "Deleted"
    | "OK";
}

export interface Resource {
  /** Resource Id */
  id?: string;
  /** Resource Type */
  type?: string;
  /** Dictionary of <string> */
  tags?: Record<string, string>;
  /** Resource Location */
  location?: string;
  /** Resource Name */
  name?: string;
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
  provisioningStateValues?:
    | "Succeeded"
    | "Failed"
    | "canceled"
    | "Accepted"
    | "Creating"
    | "Created"
    | "Updating"
    | "Updated"
    | "Deleting"
    | "Deleted"
    | "OK";
}

export interface SubResource {
  /** Sub Resource Id */
  id?: string;
}
