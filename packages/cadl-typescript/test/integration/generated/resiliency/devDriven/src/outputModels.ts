// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Product resource */
export interface ProductOutput {
  /** key of product */
  readonly key: string;
  /**
   * received mode
   *
   * Possible values: raw, model
   */
  received: string;
}

/** Final response from LRO call */
export interface LroProductOutput extends ProductOutput {
  /** Provisioning state returned by the service */
  provisioningState: string;
}

/** Paged collection of Product items */
export type ProductListOutput = Paged<ProductOutput>;
