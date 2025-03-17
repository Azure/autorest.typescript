// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  create,
  ModerationsCreateOptionalParams,
} from "../../api/moderations/index.js";
import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";

/** Interface representing a Moderations operations. */
export interface ModerationsOperations {
  create: (
    content: CreateModerationRequest,
    options?: ModerationsCreateOptionalParams,
  ) => Promise<CreateModerationResponse>;
}

function _getModerations(context: OpenAIContext) {
  return {
    create: (
      content: CreateModerationRequest,
      options?: ModerationsCreateOptionalParams,
    ) => create(context, content, options),
  };
}

export function _getModerationsOperations(
  context: OpenAIContext,
): ModerationsOperations {
  return {
    ..._getModerations(context),
  };
}
