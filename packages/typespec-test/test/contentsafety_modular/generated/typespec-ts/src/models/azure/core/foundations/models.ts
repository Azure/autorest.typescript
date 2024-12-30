// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TextBlocklist,
  textBlocklistArrayDeserializer,
  textBlockItemArrayDeserializer,
  TextBlockItem,
} from "../../../models.js";

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

/** Paged collection of TextBlockItem items */
export interface _PagedTextBlockItem {
  /** The TextBlockItem items on this page */
  value: TextBlockItem[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTextBlockItemDeserializer(
  item: any,
): _PagedTextBlockItem {
  return {
    value: textBlockItemArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}
