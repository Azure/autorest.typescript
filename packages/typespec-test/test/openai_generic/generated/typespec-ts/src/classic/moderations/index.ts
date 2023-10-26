// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { create, CreateOptions } from "../../api/moderations/index.js";
import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";

export interface ModerationsOperations {
  moderations: {
    create: (
      content: CreateModerationRequest,
      options?: CreateOptions
    ) => Promise<CreateModerationResponse>;
  };
}

export function getModerations(context: OpenAIContext) {
  return {
    create: (content: CreateModerationRequest, options?: CreateOptions) =>
      create(context, content, options),
  };
}

export function getModerationsOperations(
  context: OpenAIContext
): ModerationsOperations {
  return {
    moderations: getModerations(context),
  };
}
