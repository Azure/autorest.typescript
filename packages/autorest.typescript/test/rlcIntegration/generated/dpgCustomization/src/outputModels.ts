// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ProductOutput {
  received: "raw" | "model";
}

export interface ProductResultOutput {
  values?: Array<ProductOutput>;
  nextLink?: string;
}

export interface LROProductOutput extends ProductOutput {
  provisioningState: string;
}
