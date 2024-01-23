// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeTextParameters,
  AnalyzeImageParameters,
  GetTextBlocklistParameters,
  CreateOrUpdateTextBlocklistParameters,
  DeleteTextBlocklistParameters,
  ListTextBlocklistsParameters,
  AddOrUpdateBlockItemsParameters,
  RemoveBlockItemsParameters,
  GetTextBlocklistItemParameters,
  ListTextBlocklistItemsParameters,
} from "./parameters.js";
import {
  AnalyzeText200Response,
  AnalyzeTextDefaultResponse,
  AnalyzeImage200Response,
  AnalyzeImageDefaultResponse,
  GetTextBlocklist200Response,
  GetTextBlocklistDefaultResponse,
  CreateOrUpdateTextBlocklist200Response,
  CreateOrUpdateTextBlocklist201Response,
  CreateOrUpdateTextBlocklistDefaultResponse,
  DeleteTextBlocklist204Response,
  DeleteTextBlocklistDefaultResponse,
  ListTextBlocklists200Response,
  ListTextBlocklistsDefaultResponse,
  AddOrUpdateBlockItems200Response,
  AddOrUpdateBlockItemsDefaultResponse,
  RemoveBlockItems204Response,
  RemoveBlockItemsDefaultResponse,
  GetTextBlocklistItem200Response,
  GetTextBlocklistItemDefaultResponse,
  ListTextBlocklistItems200Response,
  ListTextBlocklistItemsDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AnalyzeText {
  /** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  post(
    options: AnalyzeTextParameters,
  ): StreamableMethod<AnalyzeText200Response | AnalyzeTextDefaultResponse>;
}

export interface AnalyzeImage {
  /** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  post(
    options: AnalyzeImageParameters,
  ): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse>;
}

export interface GetTextBlocklist {
  /** Returns text blocklist details. */
  get(
    options?: GetTextBlocklistParameters,
  ): StreamableMethod<
    GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
  >;
  /** Updates a text blocklist, if blocklistName does not exist, create a new blocklist. */
  patch(
    options: CreateOrUpdateTextBlocklistParameters,
  ): StreamableMethod<
    | CreateOrUpdateTextBlocklist200Response
    | CreateOrUpdateTextBlocklist201Response
    | CreateOrUpdateTextBlocklistDefaultResponse
  >;
  /** Deletes a text blocklist. */
  delete(
    options?: DeleteTextBlocklistParameters,
  ): StreamableMethod<
    DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
  >;
}

export interface ListTextBlocklists {
  /** Get all text blocklists details. */
  get(
    options?: ListTextBlocklistsParameters,
  ): StreamableMethod<
    ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
  >;
}

export interface AddOrUpdateBlockItems {
  /** Add or update blockItems to a text blocklist. You can add or update at most 100 BlockItems in one request. */
  post(
    options?: AddOrUpdateBlockItemsParameters,
  ): StreamableMethod<
    AddOrUpdateBlockItems200Response | AddOrUpdateBlockItemsDefaultResponse
  >;
}

export interface RemoveBlockItems {
  /** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
  post(
    options?: RemoveBlockItemsParameters,
  ): StreamableMethod<
    RemoveBlockItems204Response | RemoveBlockItemsDefaultResponse
  >;
}

export interface GetTextBlocklistItem {
  /** Get blockItem By blockItemId from a text blocklist. */
  get(
    options?: GetTextBlocklistItemParameters,
  ): StreamableMethod<
    GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
  >;
}

export interface ListTextBlocklistItems {
  /** Get all blockItems in a text blocklist */
  get(
    options?: ListTextBlocklistItemsParameters,
  ): StreamableMethod<
    ListTextBlocklistItems200Response | ListTextBlocklistItemsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): AnalyzeText;
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): AnalyzeImage;
  /** Resource for '/text/blocklists/\{blocklistName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/blocklists/{blocklistName}",
    blocklistName: string,
  ): GetTextBlocklist;
  /** Resource for '/text/blocklists' has methods for the following verbs: get */
  (path: "/text/blocklists"): ListTextBlocklists;
  /** Resource for '/text/blocklists/\{blocklistName\}:addOrUpdateBlockItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:addOrUpdateBlockItems",
    blocklistName: string,
  ): AddOrUpdateBlockItems;
  /** Resource for '/text/blocklists/\{blocklistName\}:removeBlockItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:removeBlockItems",
    blocklistName: string,
  ): RemoveBlockItems;
  /** Resource for '/text/blocklists/\{blocklistName\}/blockItems/\{blockItemId\}' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blockItems/{blockItemId}",
    blocklistName: string,
    blockItemId: string,
  ): GetTextBlocklistItem;
  /** Resource for '/text/blocklists/\{blocklistName\}/blockItems' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blockItems",
    blocklistName: string,
  ): ListTextBlocklistItems;
}

export type ContentSafetyContext = Client & {
  path: Routes;
};
