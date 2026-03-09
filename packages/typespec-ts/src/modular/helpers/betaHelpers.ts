// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";

/**
 * Gets the normalized property name for a top-level operation group.
 * Applies double normalization: Interface -> Property to handle nested casing.
 */
export function getTopLevelPropertyName(groupName: string): string {
  const rawGroupName = normalizeName(groupName, NameType.Interface);
  return normalizeName(rawGroupName, NameType.Property);
}

/**
 * Gets the normalized property name for a nested operation group.
 */
export function getNestedPropertyName(groupName: string): string {
  return normalizeName(groupName, NameType.Property);
}
