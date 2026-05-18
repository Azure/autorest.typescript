// Licensed under the MIT License.

import { OpenAIContext } from "../../api/index.js";
import { create } from "../../api/edits/operations.js";
import { EditsCreateOptionalParams } from "../../api/edits/options.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";

/** Interface representing a Edits operations. */
export interface EditsOperations {
  /** @deprecated deprecated */
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
