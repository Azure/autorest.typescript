// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
import { create } from "../../api/moderations/index.js";
import { ModerationsCreateOptionalParams } from "../../models/options.js";

/** Interface representing a Moderations operations. */
export interface ModerationsOperations {
  create: (
    content: CreateModerationRequest,
    options?: ModerationsCreateOptionalParams,
  ) => Promise<CreateModerationResponse>;
}

export function getModerations(context: OpenAIContext) {
  return {
    create: (
      content: CreateModerationRequest,
      options?: ModerationsCreateOptionalParams,
    ) => create(context, content, options),
  };
}

export function getModerationsOperations(
  context: OpenAIContext,
): ModerationsOperations {
  return {
    ...getModerations(context),
  };
}
