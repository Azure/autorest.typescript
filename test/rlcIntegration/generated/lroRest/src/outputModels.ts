// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductOutput extends ResourceOutput {
  properties?: ProductPropertiesOutput;
}

export interface ProductPropertiesOutput {
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

export interface ResourceOutput {
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

export interface SubResourceOutput {
  /** Sub Resource Id */
  id?: string;
}
