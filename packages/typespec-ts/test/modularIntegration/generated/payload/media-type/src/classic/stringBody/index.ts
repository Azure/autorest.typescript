// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MediaTypeContext } from "../../api/MediaTypeContext.js";
import {
  sendAsText,
  getAsText,
  sendAsJson,
  getAsJson,
} from "../../api/stringBody/index.js";
import {
  StringBodySendAsTextOptions,
  StringBodyGetAsTextOptions,
  StringBodySendAsJsonOptions,
  StringBodyGetAsJsonOptions,
} from "../../models/options.js";

export interface StringBodyOperations {
  sendAsText: (
    text: string,
    options?: StringBodySendAsTextOptions,
  ) => Promise<void>;
  getAsText: (options?: StringBodyGetAsTextOptions) => Promise<string>;
  sendAsJson: (
    text: string,
    options?: StringBodySendAsJsonOptions,
  ) => Promise<void>;
  getAsJson: (options?: StringBodyGetAsJsonOptions) => Promise<string>;
}

export function getStringBody(context: MediaTypeContext) {
  return {
    sendAsText: (text: string, options?: StringBodySendAsTextOptions) =>
      sendAsText(context, text, options),
    getAsText: (options?: StringBodyGetAsTextOptions) =>
      getAsText(context, options),
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptions) =>
      sendAsJson(context, text, options),
    getAsJson: (options?: StringBodyGetAsJsonOptions) =>
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
