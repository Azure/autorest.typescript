// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createBudgets, BudgetsContext, BudgetsOptionalParams } from "./api/index.js";
import { Widget, SAPUser } from "../models/models.js";
import { $continue, getBudgets, createOrReplace } from "./api/operations.js";
import {
  ContinueOptionalParams,
  GetBudgetsOptionalParams,
  CreateOrReplaceOptionalParams,
} from "./api/options.js";
import { KeyCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BudgetsOptionalParams } from "./api/budgetsContext.js";

export class Budgets {
  private _client: BudgetsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: BudgetsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBudgets(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   *  @fixme continue is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  continue(options: ContinueOptionalParams = { requestOptions: {} }): Promise<void> {
    return $continue(this._client, options);
  }

  getBudgets(
    name: string,
    options: GetBudgetsOptionalParams = { requestOptions: {} },
  ): Promise<Widget[]> {
    return getBudgets(this._client, name, options);
  }

  /** Long-running resource create or replace operation template. */
  createOrReplace(
    name: string,
    resource: SAPUser,
    options: CreateOrReplaceOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<SAPUser>, SAPUser> {
    return createOrReplace(this._client, name, resource, options);
  }
}
