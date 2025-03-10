// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { create, EditsCreateOptionalParams } from "../../api/edits/index.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";

/** Interface representing a Edits operations. */
export interface EditsOperations {
  create: (
    edit: CreateEditRequest,
    options?: EditsCreateOptionalParams,
  ) => Promise<CreateEditResponse>;
}

function _getEdits(context: OpenAIContext) {
  return {
    create: (edit: CreateEditRequest, options?: EditsCreateOptionalParams) =>
      create(context, edit, options),
  };
}

export function _getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    ..._getEdits(context),
  };
}
