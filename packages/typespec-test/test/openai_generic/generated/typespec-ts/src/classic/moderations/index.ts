// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createModeration } from "../../api/moderations";
import {
  CreateModerationRequest,
  CreateModerationOptions,
  CreateModerationResponse,
} from "../../models";

export interface ModerationsOperations {
  moderations: {
    createModeration: (
      content: CreateModerationRequest,
      options?: CreateModerationOptions
    ) => Promise<CreateModerationResponse>;
  };
}

export function getModerations(context: Client) {
  return {
    createModeration: (
      content: CreateModerationRequest,
      options?: CreateModerationOptions
    ) => createModeration(context, content, options),
  };
}

export function getModerationsOperations(): ModerationsOperations {
  return {
    moderations: getModerations,
  };
}
