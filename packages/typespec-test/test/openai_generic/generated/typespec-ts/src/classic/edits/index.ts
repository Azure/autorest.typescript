// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { create, CreateOptions } from "../../api/edits/index.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";

export interface EditsOperations {
  edits: {
    create: (
      edit: CreateEditRequest,
      options?: CreateOptions
    ) => Promise<CreateEditResponse>;
  };
}

export function getEdits(context: OpenAIContext) {
  return {
    create: (edit: CreateEditRequest, options?: CreateOptions) =>
      create(context, edit, options),
  };
}

export function getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    edits: getEdits(context),
  };
}
