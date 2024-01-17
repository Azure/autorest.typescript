// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { User, ListItemInputBody } from "./models.js";

/** The resource instance. */
export type UserResourceMergeAndPatch = Partial<User>;

export interface CreateOrUpdateBodyParam {
  /** The resource instance. */
  body: UserResourceMergeAndPatch;
}

export interface CreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateParameters = CreateOrUpdateMediaTypesParam &
  CreateOrUpdateBodyParam &
  RequestParameters;

export interface CreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export type CreateOrReplaceParameters = CreateOrReplaceBodyParam &
  RequestParameters;
export type GetParameters = RequestParameters;

export interface ListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Expressions that specify the order of returned results. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  orderby?: string;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
  /** Expand the indicated resources into the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  expand?: string;
}

export interface ListQueryParam {
  queryParameters?: ListQueryParamProperties;
}

export type ListParameters = ListQueryParam & RequestParameters;
export type ListWithPageParameters = RequestParameters;

export interface ListWithParametersBodyParam {
  /** The body of the input. */
  body: ListItemInputBody;
}

export interface ListWithParametersQueryParamProperties {
  /**
   * Another query parameter.
   *
   * Possible values: "First", "Second"
   */
  another?: string;
}

export interface ListWithParametersQueryParam {
  queryParameters?: ListWithParametersQueryParamProperties;
}

export type ListWithParametersParameters = ListWithParametersQueryParam &
  ListWithParametersBodyParam &
  RequestParameters;
export type ListWithCustomPageModelParameters = RequestParameters;
export type DeleteParameters = RequestParameters;

export interface ExportQueryParamProperties {
  /** The format of the data. */
  format: string;
}

export interface ExportQueryParam {
  queryParameters: ExportQueryParamProperties;
}

export type ExportParameters = ExportQueryParam & RequestParameters;
export type ListFirstItemParameters = RequestParameters;
export type ListSecondItemParameters = RequestParameters;
