// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface ProductOutput extends ResourceOutput {
  properties?: ProductPropertiesOutput;
}

export interface ProductPropertiesOutput {
  provisioningState?: string;
  readonly provisioningStateValues?:
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

export interface ResourceOutput {
  /** Resource Id */
  readonly id?: string;
  /** Resource Type */
  readonly type?: string;
  /** Dictionary of <string> */
  tags?: Record<string, string>;
  /** Resource Location */
  location?: string;
  /** Resource Name */
  readonly name?: string;
}

export interface CloudErrorOutput {
  code?: number;
  message?: string;
}

export interface SkuOutput {
  name?: string;
  id?: string;
}

export interface SubProductOutput extends SubResourceOutput {
  properties?: SubProductPropertiesOutput;
}

export interface SubProductPropertiesOutput {
  provisioningState?: string;
  readonly provisioningStateValues?:
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

export interface SubResourceOutput {
  /** Sub Resource Id */
  readonly id?: string;
}
