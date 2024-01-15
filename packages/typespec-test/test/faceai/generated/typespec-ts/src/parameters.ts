// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  LivenessSessionCreationContent,
  LivenessWithVerifySessionCreationContent,
} from "./models";

export interface CreateLivenessSessionBodyParam {
  body?: LivenessSessionCreationContent;
}

export type CreateLivenessSessionParameters = CreateLivenessSessionBodyParam &
  RequestParameters;
export type GetLivenessSessionParameters = RequestParameters;
export type DeleteLivenessSessionParameters = RequestParameters;

export interface ListLivenessSessionsQueryParamProperties {
  /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface ListLivenessSessionsQueryParam {
  queryParameters?: ListLivenessSessionsQueryParamProperties;
}

export type ListLivenessSessionsParameters = ListLivenessSessionsQueryParam &
  RequestParameters;

export interface ListLivenessSessionAuditEntriesQueryParamProperties {
  /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface ListLivenessSessionAuditEntriesQueryParam {
  queryParameters?: ListLivenessSessionAuditEntriesQueryParamProperties;
}

export type ListLivenessSessionAuditEntriesParameters =
  ListLivenessSessionAuditEntriesQueryParam & RequestParameters;

export interface CreateLivenessWithVerifySessionByJsonBodyParam {
  body?: LivenessSessionCreationContent;
}

export type CreateLivenessWithVerifySessionByJsonParameters =
  CreateLivenessWithVerifySessionByJsonBodyParam & RequestParameters;

export interface CreateLivenessWithVerifySessionByFormDataBodyParam {
  body?: LivenessWithVerifySessionCreationContent;
}

export interface CreateLivenessWithVerifySessionByFormDataMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type CreateLivenessWithVerifySessionByFormDataParameters =
  CreateLivenessWithVerifySessionByFormDataMediaTypesParam &
    CreateLivenessWithVerifySessionByFormDataBodyParam &
    RequestParameters;
export type GetLivenessWithVerifySessionParameters = RequestParameters;
export type DeleteLivenessWithVerifySessionParameters = RequestParameters;

export interface ListLivenessWithVerifySessionsQueryParamProperties {
  /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface ListLivenessWithVerifySessionsQueryParam {
  queryParameters?: ListLivenessWithVerifySessionsQueryParamProperties;
}

export type ListLivenessWithVerifySessionsParameters =
  ListLivenessWithVerifySessionsQueryParam & RequestParameters;

export interface ListLivenessWithVerifySessionAuditEntriesQueryParamProperties {
  /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface ListLivenessWithVerifySessionAuditEntriesQueryParam {
  queryParameters?: ListLivenessWithVerifySessionAuditEntriesQueryParamProperties;
}

export type ListLivenessWithVerifySessionAuditEntriesParameters =
  ListLivenessWithVerifySessionAuditEntriesQueryParam & RequestParameters;
