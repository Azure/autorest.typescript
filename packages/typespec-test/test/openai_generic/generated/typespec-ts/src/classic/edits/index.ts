// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { create } from "../../api/edits/index.js";
import { EditsCreateOptionalParams } from "../../api/options.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";

/** Interface representing a Edits operations. */
export interface EditsOperations {
  create: (
    edit: CreateEditRequest,
    options?: EditsCreateOptionalParams,
  ) => Promise<CreateEditResponse>;
}

export function getEdits(context: OpenAIContext) {
  return {
    create: (edit: CreateEditRequest, options?: EditsCreateOptionalParams) =>
      create(context, edit, options),
  };
}

export function getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    ...getEdits(context),
  };
}
