// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductResultValue {
  value?: Array<Product>;
  nextLink?: string;
}

export interface Product {
  properties?: ProductProperties;
}

export interface ProductProperties {
  id?: number;
  name?: string;
}

export interface ProductResult {
  values?: Array<Product>;
  nextLink?: string;
}

export interface OdataProductResult {
  values?: Array<Product>;
  "odata.nextLink"?: string;
}

export interface ProductResultValueWithXMSClientName {
  values?: Array<Product>;
  nextLink?: string;
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
}
