// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductResultValueOutput {
  value?: Array<ProductOutput>;
  nextLink?: string;
}

export interface ProductOutput {
  properties?: ProductPropertiesOutput;
}

export interface ProductPropertiesOutput {
  id?: number;
  name?: string;
}

export interface ProductResultOutput {
  values?: Array<ProductOutput>;
  nextLink?: string;
}

export interface OdataProductResultOutput {
  values?: Array<ProductOutput>;
  "odata.nextLink"?: string;
}

export interface ProductResultValueWithXMSClientNameOutput {
  values?: Array<ProductOutput>;
  nextLink?: string;
}
