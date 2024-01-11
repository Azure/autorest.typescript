// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { create } from "../../api/edits/index.js";
import { EditsCreateOptions } from "../../models/options.js";

export interface EditsOperations {
  create: (
    edit: CreateEditRequest,
    options?: EditsCreateOptions,
  ) => Promise<CreateEditResponse>;
}

export function getEdits(context: OpenAIContext) {
  return {
    create: (edit: CreateEditRequest, options?: EditsCreateOptions) =>
      create(context, edit, options),
  };
}

export function getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    ...getEdits(context),
  };
}
