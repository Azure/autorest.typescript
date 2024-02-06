// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateLivenessSessionParameters,
  ListLivenessSessionsParameters,
  GetLivenessSessionParameters,
  DeleteLivenessSessionParameters,
  ListLivenessSessionAuditEntriesParameters,
  CreateLivenessWithVerifySessionByJsonParameters,
  CreateLivenessWithVerifySessionByFormDataParameters,
  ListLivenessWithVerifySessionsParameters,
  GetLivenessWithVerifySessionParameters,
  DeleteLivenessWithVerifySessionParameters,
  ListLivenessWithVerifySessionAuditEntriesParameters,
} from "./parameters";
import {
  CreateLivenessSession200Response,
  CreateLivenessSessionDefaultResponse,
  ListLivenessSessions200Response,
  ListLivenessSessionsDefaultResponse,
  GetLivenessSession200Response,
  GetLivenessSessionDefaultResponse,
  DeleteLivenessSession200Response,
  DeleteLivenessSessionDefaultResponse,
  ListLivenessSessionAuditEntries200Response,
  ListLivenessSessionAuditEntriesDefaultResponse,
  CreateLivenessWithVerifySessionByJson200Response,
  CreateLivenessWithVerifySessionByJsonDefaultResponse,
  CreateLivenessWithVerifySessionByFormData200Response,
  CreateLivenessWithVerifySessionByFormDataDefaultResponse,
  ListLivenessWithVerifySessions200Response,
  ListLivenessWithVerifySessionsDefaultResponse,
  GetLivenessWithVerifySession200Response,
  GetLivenessWithVerifySessionDefaultResponse,
  DeleteLivenessWithVerifySession200Response,
  DeleteLivenessWithVerifySessionDefaultResponse,
  ListLivenessWithVerifySessionAuditEntries200Response,
  ListLivenessWithVerifySessionAuditEntriesDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateLivenessSession {
  /** Operation that applies to a collection of resources. */
  post(
    options?: CreateLivenessSessionParameters,
  ): StreamableMethod<
    CreateLivenessSession200Response | CreateLivenessSessionDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: ListLivenessSessionsParameters,
  ): StreamableMethod<
    ListLivenessSessions200Response | ListLivenessSessionsDefaultResponse
  >;
}

export interface GetLivenessSession {
  /** Resource read operation template. */
  get(
    options?: GetLivenessSessionParameters,
  ): StreamableMethod<
    GetLivenessSession200Response | GetLivenessSessionDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: DeleteLivenessSessionParameters,
  ): StreamableMethod<
    DeleteLivenessSession200Response | DeleteLivenessSessionDefaultResponse
  >;
}

export interface ListLivenessSessionAuditEntries {
  /** Operation that lists resources in a non-paginated way. */
  get(
    options?: ListLivenessSessionAuditEntriesParameters,
  ): StreamableMethod<
    | ListLivenessSessionAuditEntries200Response
    | ListLivenessSessionAuditEntriesDefaultResponse
  >;
}

export interface CreateLivenessWithVerifySessionByJson {
  /** Operation that applies to a collection of resources. */
  post(
    options?: CreateLivenessWithVerifySessionByJsonParameters,
  ): StreamableMethod<
    | CreateLivenessWithVerifySessionByJson200Response
    | CreateLivenessWithVerifySessionByJsonDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: CreateLivenessWithVerifySessionByFormDataParameters,
  ): StreamableMethod<
    | CreateLivenessWithVerifySessionByFormData200Response
    | CreateLivenessWithVerifySessionByFormDataDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: ListLivenessWithVerifySessionsParameters,
  ): StreamableMethod<
    | ListLivenessWithVerifySessions200Response
    | ListLivenessWithVerifySessionsDefaultResponse
  >;
}

export interface GetLivenessWithVerifySession {
  /** Resource read operation template. */
  get(
    options?: GetLivenessWithVerifySessionParameters,
  ): StreamableMethod<
    | GetLivenessWithVerifySession200Response
    | GetLivenessWithVerifySessionDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: DeleteLivenessWithVerifySessionParameters,
  ): StreamableMethod<
    | DeleteLivenessWithVerifySession200Response
    | DeleteLivenessWithVerifySessionDefaultResponse
  >;
}

export interface ListLivenessWithVerifySessionAuditEntries {
  /** Operation that lists resources in a non-paginated way. */
  get(
    options?: ListLivenessWithVerifySessionAuditEntriesParameters,
  ): StreamableMethod<
    | ListLivenessWithVerifySessionAuditEntries200Response
    | ListLivenessWithVerifySessionAuditEntriesDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions",
    apiVersion: string,
  ): CreateLivenessSession;
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions/\{sessionId\}' has methods for the following verbs: get, delete */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}",
    apiVersion: string,
    sessionId: string,
  ): GetLivenessSession;
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions/\{sessionId\}/audit' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}/audit",
    apiVersion: string,
    sessionId: string,
  ): ListLivenessSessionAuditEntries;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions",
    apiVersion: string,
  ): CreateLivenessWithVerifySessionByJson;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions/\{sessionId\}' has methods for the following verbs: get, delete */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
    apiVersion: string,
    sessionId: string,
  ): GetLivenessWithVerifySession;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions/\{sessionId\}/audit' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit",
    apiVersion: string,
    sessionId: string,
  ): ListLivenessWithVerifySessionAuditEntries;
}

export type FaceClient = Client & {
  path: Routes;
};
