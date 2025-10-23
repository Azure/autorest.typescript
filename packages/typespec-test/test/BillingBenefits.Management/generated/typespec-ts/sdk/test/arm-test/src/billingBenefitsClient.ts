// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createBillingBenefits,
  BillingBenefitsContext,
  BillingBenefitsClientOptionalParams,
} from "./api/index.js";
import { validatePurchase } from "./api/operations.js";
import { ValidatePurchaseOptionalParams } from "./api/options.js";
import {
  DiscountOperations,
  _getDiscountOperations,
} from "./classic/discount/index.js";
import {
  DiscountsOperations,
  _getDiscountsOperations,
} from "./classic/discounts/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import {
  ReservationOrderAliasOperations,
  _getReservationOrderAliasOperations,
} from "./classic/reservationOrderAlias/index.js";
import {
  SavingsPlanOperations,
  _getSavingsPlanOperations,
} from "./classic/savingsPlan/index.js";
import {
  SavingsPlanOrderOperations,
  _getSavingsPlanOrderOperations,
} from "./classic/savingsPlanOrder/index.js";
import {
  SavingsPlanOrderAliasOperations,
  _getSavingsPlanOrderAliasOperations,
} from "./classic/savingsPlanOrderAlias/index.js";
import {
  SavingsPlanPurchaseValidateRequest,
  SavingsPlanValidateResponse,
} from "./models/models.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BillingBenefitsClientOptionalParams } from "./api/billingBenefitsContext.js";

export class BillingBenefitsClient {
  private _client: BillingBenefitsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Benefits RP let users create and manage benefits like savings plan. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: BillingBenefitsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBillingBenefits(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.discount = _getDiscountOperations(this._client);
    this.reservationOrderAlias = _getReservationOrderAliasOperations(
      this._client,
    );
    this.savingsPlan = _getSavingsPlanOperations(this._client);
    this.savingsPlanOrder = _getSavingsPlanOrderOperations(this._client);
    this.savingsPlanOrderAlias = _getSavingsPlanOrderAliasOperations(
      this._client,
    );
    this.discounts = _getDiscountsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** Validate savings plan purchase. */
  validatePurchase(
    body: SavingsPlanPurchaseValidateRequest,
    options: ValidatePurchaseOptionalParams = { requestOptions: {} },
  ): Promise<SavingsPlanValidateResponse> {
    return validatePurchase(this._client, body, options);
  }

  /** The operation groups for discount */
  public readonly discount: DiscountOperations;
  /** The operation groups for reservationOrderAlias */
  public readonly reservationOrderAlias: ReservationOrderAliasOperations;
  /** The operation groups for savingsPlan */
  public readonly savingsPlan: SavingsPlanOperations;
  /** The operation groups for savingsPlanOrder */
  public readonly savingsPlanOrder: SavingsPlanOrderOperations;
  /** The operation groups for savingsPlanOrderAlias */
  public readonly savingsPlanOrderAlias: SavingsPlanOrderAliasOperations;
  /** The operation groups for discounts */
  public readonly discounts: DiscountsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
