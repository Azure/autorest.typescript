// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsContext } from "../../api/billingBenefitsContext.js";
import { update, get } from "../../api/discount/operations.js";
import {
  DiscountUpdateOptionalParams,
  DiscountGetOptionalParams,
} from "../../api/discount/options.js";
import { Discount, DiscountPatchRequest } from "../../models/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Discount operations. */
export interface DiscountOperations {
  /** Update discounts */
  update: (
    resourceGroupName: string,
    discountName: string,
    body: DiscountPatchRequest,
    options?: DiscountUpdateOptionalParams,
  ) => PollerLike<OperationState<Discount>, Discount>;
  /** Get discount at resource group level */
  get: (
    resourceGroupName: string,
    discountName: string,
    options?: DiscountGetOptionalParams,
  ) => Promise<Discount>;
}

function _getDiscount(context: BillingBenefitsContext) {
  return {
    update: (
      resourceGroupName: string,
      discountName: string,
      body: DiscountPatchRequest,
      options?: DiscountUpdateOptionalParams,
    ) => update(context, resourceGroupName, discountName, body, options),
    get: (
      resourceGroupName: string,
      discountName: string,
      options?: DiscountGetOptionalParams,
    ) => get(context, resourceGroupName, discountName, options),
  };
}

export function _getDiscountOperations(
  context: BillingBenefitsContext,
): DiscountOperations {
  return {
    ..._getDiscount(context),
  };
}
