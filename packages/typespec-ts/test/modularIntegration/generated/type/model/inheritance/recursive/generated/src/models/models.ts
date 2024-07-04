// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Element as ElementRest,
  Extension as ExtensionRest,
} from "../rest/index.js";

/** element */
export interface Element {
  extension?: Extension[];
}

export function elementSerializer(item: Element): ElementRest {
  return {
    extension:
      item["extension"] === undefined
        ? item["extension"]
        : item["extension"].map(extensionSerializer),
  };
}

/** extension */
export interface Extension extends Element {
  level: number;
}

export function extensionSerializer(item: Extension): ExtensionRest {
  return {
    extension:
      item["extension"] === undefined
        ? item["extension"]
        : item["extension"].map(extensionSerializer),
    level: item["level"],
  };
}
