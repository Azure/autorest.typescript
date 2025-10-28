// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  assetResourceUnionArrayDeserializer,
  AssetResourceUnion,
  Task,
  dataConnectionUnionArrayDeserializer,
  DataConnectionUnion,
  discoGroupArrayDeserializer,
  DiscoGroup,
  discoTemplateArrayDeserializer,
  DiscoTemplate,
  savedFilterArrayDeserializer,
  SavedFilter,
  taskArrayDeserializer,
  cisaCveResultArrayDeserializer,
  CisaCveResult,
  policyArrayDeserializer,
  Policy,
} from "../../../models.js";

/** Paged collection of AssetResource items */
export interface _AzureCoreFoundationsPagedAssetResource {
  /** The AssetResource items on this page */
  value: AssetResourceUnion[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
  /** The cursor mark to be used on the next request.  Not set if using paging. */
  mark?: string;
}

export function _azureCoreFoundationsPagedAssetResourceDeserializer(
  item: any,
): _AzureCoreFoundationsPagedAssetResource {
  return {
    value: assetResourceUnionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
    mark: item["mark"],
  };
}

/** Paged collection of DataConnection items */
export interface _AzureCoreFoundationsPagedDataConnection {
  /** The DataConnection items on this page */
  value: DataConnectionUnion[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedDataConnectionDeserializer(
  item: any,
): _AzureCoreFoundationsPagedDataConnection {
  return {
    value: dataConnectionUnionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of DiscoGroup items */
export interface _AzureCoreFoundationsPagedDiscoGroup {
  /** The DiscoGroup items on this page */
  value: DiscoGroup[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedDiscoGroupDeserializer(
  item: any,
): _AzureCoreFoundationsPagedDiscoGroup {
  return {
    value: discoGroupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of DiscoTemplate items */
export interface _AzureCoreFoundationsPagedDiscoTemplate {
  /** The DiscoTemplate items on this page */
  value: DiscoTemplate[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedDiscoTemplateDeserializer(
  item: any,
): _AzureCoreFoundationsPagedDiscoTemplate {
  return {
    value: discoTemplateArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of SavedFilter items */
export interface _AzureCoreFoundationsPagedSavedFilter {
  /** The SavedFilter items on this page */
  value: SavedFilter[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedSavedFilterDeserializer(
  item: any,
): _AzureCoreFoundationsPagedSavedFilter {
  return {
    value: savedFilterArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of Task items */
export interface _AzureCoreFoundationsPagedTask {
  /** The Task items on this page */
  value: Task[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedTaskDeserializer(
  item: any,
): _AzureCoreFoundationsPagedTask {
  return {
    value: taskArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of CisaCveResult items */
export interface _AzureCoreFoundationsPagedCisaCveResult {
  /** The CisaCveResult items on this page */
  value: CisaCveResult[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedCisaCveResultDeserializer(
  item: any,
): _AzureCoreFoundationsPagedCisaCveResult {
  return {
    value: cisaCveResultArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}

/** Paged collection of Policy items */
export interface _AzureCoreFoundationsPagedPolicy {
  /** The Policy items on this page */
  value: Policy[];
  /** The link to the next page of items */
  nextLink?: string;
  /** The total number of items available in the full result set. */
  totalElements?: number;
}

export function _azureCoreFoundationsPagedPolicyDeserializer(
  item: any,
): _AzureCoreFoundationsPagedPolicy {
  return {
    value: policyArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
    totalElements: item["totalElements"],
  };
}
