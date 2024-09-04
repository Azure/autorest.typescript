// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
