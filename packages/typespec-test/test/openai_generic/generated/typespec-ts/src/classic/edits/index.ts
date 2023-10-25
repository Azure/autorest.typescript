// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createEdit } from "../../api/edits";
import {
  CreateEditRequest,
  CreateEditOptions,
  CreateEditResponse,
} from "../../models";

export interface EditsOperations {
  edits: {
    createEdit: (
      edit: CreateEditRequest,
      options?: CreateEditOptions
    ) => Promise<CreateEditResponse>;
  };
}

export function getEdits(context: Client) {
  return {
    createEdit: (edit: CreateEditRequest, options?: CreateEditOptions) =>
      createEdit(context, edit, options),
  };
}

export function getEditsOperations(): EditsOperations {
  return {
    edits: getEdits,
  };
}
