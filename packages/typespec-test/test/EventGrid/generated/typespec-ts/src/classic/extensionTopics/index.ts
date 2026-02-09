// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EventGridContext } from "../../api/eventGridContext.js";
import { get } from "../../api/extensionTopics/operations.js";
import { ExtensionTopicsGetOptionalParams } from "../../api/extensionTopics/options.js";
import { ExtensionTopic } from "../../models/models.js";

/** Interface representing a ExtensionTopics operations. */
export interface ExtensionTopicsOperations {
  /** Get the properties of an extension topic. */
  get: (scope: string, options?: ExtensionTopicsGetOptionalParams) => Promise<ExtensionTopic>;
}

function _getExtensionTopics(context: EventGridContext) {
  return {
    get: (scope: string, options?: ExtensionTopicsGetOptionalParams) =>
      get(context, scope, options),
  };
}

export function _getExtensionTopicsOperations(
  context: EventGridContext,
): ExtensionTopicsOperations {
  return {
    ..._getExtensionTopics(context),
  };
}
