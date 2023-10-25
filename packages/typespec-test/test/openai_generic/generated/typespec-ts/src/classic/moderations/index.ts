// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createModeration } from "../../api/moderations/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
import { CreateModerationOptions } from "../../models/options.js";

export interface ModerationsOperations {
  moderations: {
    createModeration: (
      content: CreateModerationRequest,
      options?: CreateModerationOptions
    ) => Promise<CreateModerationResponse>;
  };
}

export function getModerations(context: OpenAIContext) {
  return {
    createModeration: (
      content: CreateModerationRequest,
      options?: CreateModerationOptions
    ) => createModeration(context, content, options),
  };
}

export function getModerationsOperations(
  context: OpenAIContext
): ModerationsOperations {
  return {
    moderations: getModerations(context),
  };
}
