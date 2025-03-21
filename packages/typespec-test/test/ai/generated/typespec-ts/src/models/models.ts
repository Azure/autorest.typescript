// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Evaluation,
  evaluationArrayDeserializer,
  EvaluationSchedule,
  evaluationScheduleArrayDeserializer,
} from "./azure/ai/projects/models.js";
import {
  CodeInterpreterToolDefinition,
  FileSearchToolDefinition,
} from "./azure/ai/projects/agents/models.js";

/** Paged collection of Evaluation items */
export interface _PagedEvaluation {
  /** The Evaluation items on this page */
  value: Evaluation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedEvaluationDeserializer(item: any): _PagedEvaluation {
  return {
    value: evaluationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of EvaluationSchedule items */
export interface _PagedEvaluationSchedule {
  /** The EvaluationSchedule items on this page */
  value: EvaluationSchedule[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedEvaluationScheduleDeserializer(
  item: any,
): _PagedEvaluationSchedule {
  return {
    value: evaluationScheduleArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Alias for _MessageAttachmentTool */
export type _MessageAttachmentTool =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;

export function _messageAttachmentToolSerializer(
  item: _MessageAttachmentTool,
): any {
  return item;
}

export function _messageAttachmentToolDeserializer(
  item: any,
): _MessageAttachmentTool {
  return item;
}
