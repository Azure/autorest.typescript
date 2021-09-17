// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

export interface CloudError {
  code?: number;
  message?: string;
}

export interface Sku {
  name?: string;
  id?: string;
}

export interface SubResource {
  /** Sub Resource Id */
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

export interface OperationResult {
  /** The status of the request */
  status?:
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
  error?: OperationResultError;
}

export interface OperationResultError {
  /** The error code for an operation failure */
  code?: number;
  /** The detailed arror message */
  message?: string;
}
