// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createEdit } from "../../api/edits/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { CreateEditOptions } from "../../models/options.js";

export interface EditsOperations {
  edits: {
    createEdit: (
      edit: CreateEditRequest,
      options?: CreateEditOptions
    ) => Promise<CreateEditResponse>;
  };
}

export function getEdits(context: OpenAIContext) {
  return {
    createEdit: (edit: CreateEditRequest, options?: CreateEditOptions) =>
      createEdit(context, edit, options),
  };
}

export function getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    edits: getEdits(context),
  };
}
