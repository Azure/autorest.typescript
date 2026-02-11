// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createEvaluations, EvaluationsContext, EvaluationsOptionalParams } from "./api/index.js";
import { Evaluation, EvaluationSchedule } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  disableSchedule,
  listSchedule,
  createOrReplaceSchedule,
  getSchedule,
  update,
  list,
  create,
  get,
} from "./api/operations.js";
import {
  DisableScheduleOptionalParams,
  ListScheduleOptionalParams,
  CreateOrReplaceScheduleOptionalParams,
  GetScheduleOptionalParams,
  UpdateOptionalParams,
  ListOptionalParams,
  CreateOptionalParams,
  GetOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { EvaluationsOptionalParams } from "./api/evaluationsContext.js";

export class Evaluations {
  private _client: EvaluationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: EvaluationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createEvaluations(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
  }

  /** Disable the evaluation schedule. */
  disableSchedule(
    name: string,
    options: DisableScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableSchedule(this._client, name, options);
  }

  /** Resource list operation template. */
  listSchedule(
    options: ListScheduleOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<EvaluationSchedule> {
    return listSchedule(this._client, options);
  }

  /** Create or replace operation template. */
  createOrReplaceSchedule(
    name: string,
    resource: EvaluationSchedule,
    options: CreateOrReplaceScheduleOptionalParams = { requestOptions: {} },
  ): Promise<EvaluationSchedule> {
    return createOrReplaceSchedule(this._client, name, resource, options);
  }

  /** Resource read operation template. */
  getSchedule(
    name: string,
    options: GetScheduleOptionalParams = { requestOptions: {} },
  ): Promise<EvaluationSchedule> {
    return getSchedule(this._client, name, options);
  }

  /** Resource update operation template. */
  update(
    id: string,
    resource: Evaluation,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<Evaluation> {
    return update(this._client, id, resource, options);
  }

  /** Resource list operation template. */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Evaluation> {
    return list(this._client, options);
  }

  /** Run the evaluation. */
  create(
    evaluation: Evaluation,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<Evaluation> {
    return create(this._client, evaluation, options);
  }

  /** Resource read operation template. */
  get(id: string, options: GetOptionalParams = { requestOptions: {} }): Promise<Evaluation> {
    return get(this._client, id, options);
  }
}
