// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  schemaGroupArrayDeserializer,
  SchemaGroup,
  schemaVersionArrayDeserializer,
  SchemaVersion,
} from "./azure/schemaRegistry/models.js";

/** Paged collection of SchemaGroup items */
export interface _PagedSchemaGroup {
  /** The SchemaGroup items on this page */
  value: SchemaGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedSchemaGroupDeserializer(item: any): _PagedSchemaGroup {
  return {
    value: schemaGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of Version items */
export interface _PagedVersion {
  /** The Version items on this page */
  value: SchemaVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedVersionDeserializer(item: any): _PagedVersion {
  return {
    value: schemaVersionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}
