// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureAIContext } from "../../api/azureAIContext.js";
import {
  deleteSchedule,
  listSchedule,
  createOrReplaceSchedule,
  getSchedule,
  update,
  list,
  create,
  get,
} from "../../api/evaluations/index.js";
import {
  EvaluationsDeleteScheduleOptionalParams,
  EvaluationsListScheduleOptionalParams,
  EvaluationsCreateOrReplaceScheduleOptionalParams,
  EvaluationsGetScheduleOptionalParams,
  EvaluationsUpdateOptionalParams,
  EvaluationsListOptionalParams,
  EvaluationsCreateOptionalParams,
  EvaluationsGetOptionalParams,
} from "../../api/options.js";
import { Evaluation, EvaluationSchedule } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Evaluations operations. */
export interface EvaluationsOperations {
  /** Resource delete operation template. */
  deleteSchedule: (
    id: string,
    options?: EvaluationsDeleteScheduleOptionalParams,
  ) => Promise<void>;
  /** Resource list operation template. */
  listSchedule: (
    options?: EvaluationsListScheduleOptionalParams,
  ) => PagedAsyncIterableIterator<EvaluationSchedule>;
  /** Create or replace operation template. */
  createOrReplaceSchedule: (
    id: string,
    resource: EvaluationSchedule,
    options?: EvaluationsCreateOrReplaceScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** Resource read operation template. */
  getSchedule: (
    id: string,
    options?: EvaluationsGetScheduleOptionalParams,
  ) => Promise<EvaluationSchedule>;
  /** Resource update operation template. */
  update: (
    id: string,
    resource: Evaluation,
    options?: EvaluationsUpdateOptionalParams,
  ) => Promise<Evaluation>;
  /** Resource list operation template. */
  list: (
    options?: EvaluationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Evaluation>;
  /** Run the evaluation. */
  create: (
    evaluation: Evaluation,
    options?: EvaluationsCreateOptionalParams,
  ) => Promise<Evaluation>;
  /** Resource read operation template. */
  get: (
    id: string,
    options?: EvaluationsGetOptionalParams,
  ) => Promise<Evaluation>;
}

export function getEvaluations(context: AzureAIContext) {
  return {
    deleteSchedule: (
      id: string,
      options?: EvaluationsDeleteScheduleOptionalParams,
    ) => deleteSchedule(context, id, options),
    listSchedule: (options?: EvaluationsListScheduleOptionalParams) =>
      listSchedule(context, options),
    createOrReplaceSchedule: (
      id: string,
      resource: EvaluationSchedule,
      options?: EvaluationsCreateOrReplaceScheduleOptionalParams,
    ) => createOrReplaceSchedule(context, id, resource, options),
    getSchedule: (id: string, options?: EvaluationsGetScheduleOptionalParams) =>
      getSchedule(context, id, options),
    update: (
      id: string,
      resource: Evaluation,
      options?: EvaluationsUpdateOptionalParams,
    ) => update(context, id, resource, options),
    list: (options?: EvaluationsListOptionalParams) => list(context, options),
    create: (
      evaluation: Evaluation,
      options?: EvaluationsCreateOptionalParams,
    ) => create(context, evaluation, options),
    get: (id: string, options?: EvaluationsGetOptionalParams) =>
      get(context, id, options),
  };
}

export function getEvaluationsOperations(
  context: AzureAIContext,
): EvaluationsOperations {
  return {
    ...getEvaluations(context),
  };
}
