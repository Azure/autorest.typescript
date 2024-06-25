// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/openAIContext.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { create } from "../../api/edits/index.js";
import { EditsCreateOptionalParams } from "../../models/options.js";

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
