// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MediaTypeContext } from "../../api/mediaTypeContext.js";
import {
  sendAsText,
  getAsText,
  sendAsJson,
  getAsJson,
} from "../../api/stringBody/index.js";
import {
  StringBodySendAsTextOptionalParams,
  StringBodyGetAsTextOptionalParams,
  StringBodySendAsJsonOptionalParams,
  StringBodyGetAsJsonOptionalParams,
} from "../../api/options.js";

/** Interface representing a StringBody operations. */
export interface StringBodyOperations {
  sendAsText: (
    text: string,
    options?: StringBodySendAsTextOptionalParams,
  ) => Promise<void>;
  getAsText: (options?: StringBodyGetAsTextOptionalParams) => Promise<string>;
  sendAsJson: (
    text: string,
    options?: StringBodySendAsJsonOptionalParams,
  ) => Promise<void>;
  getAsJson: (options?: StringBodyGetAsJsonOptionalParams) => Promise<string>;
}

export function getStringBody(context: MediaTypeContext) {
  return {
    sendAsText: (text: string, options?: StringBodySendAsTextOptionalParams) =>
      sendAsText(context, text, options),
    getAsText: (options?: StringBodyGetAsTextOptionalParams) =>
      getAsText(context, options),
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptionalParams) =>
      sendAsJson(context, text, options),
    getAsJson: (options?: StringBodyGetAsJsonOptionalParams) =>
      getAsJson(context, options),
  };
}

export function getStringBodyOperations(
  context: MediaTypeContext,
): StringBodyOperations {
  return {
    ...getStringBody(context),
  };
}
