// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TextBlocklist,
  textBlocklistArrayDeserializer,
  textBlocklistItemArrayDeserializer,
  TextBlocklistItem,
} from "./contentSafety/models.js";

/** Paged collection of TextBlocklist items */
export interface _PagedTextBlocklist {
  /** The TextBlocklist items on this page */
  value: TextBlocklist[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlocklistDeserializer(
  item: any,
): _PagedTextBlocklist {
  return {
    value: textBlocklistArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of TextBlocklistItem items */
export interface _PagedTextBlocklistItem {
  /** The TextBlocklistItem items on this page */
  value: TextBlocklistItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlocklistItemDeserializer(
  item: any,
): _PagedTextBlocklistItem {
  return {
    value: textBlocklistItemArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}
