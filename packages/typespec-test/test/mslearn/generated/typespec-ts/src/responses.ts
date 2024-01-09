// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  LearningPathOutput,
  LearningPathListOutput,
  ModuleOutput,
  ModuleListOutput,
} from "./outputModels";

export interface ReadLearningPath200Headers {
  /** The maximum number of requests you're permitted to make per hour. */
  "ratelimit-limit": number;
  /** The number of requests remaining in the current rate limit window. */
  "ratelimit-remaining": number;
}

/** HTTP success responses */
export interface ReadLearningPath200Response extends HttpResponse {
  status: "200";
  body: LearningPathOutput | Record<string, any>;
  headers: RawHttpHeaders & ReadLearningPath200Headers;
}

/** The server could not understand the request due to invalid syntax. */
export interface ReadLearningPath400Response extends HttpResponse {
  status: "400";
}

/** Access is unauthorized. */
export interface ReadLearningPath401Response extends HttpResponse {
  status: "401";
}

/** Access is forbidden. */
export interface ReadLearningPath403Response extends HttpResponse {
  status: "403";
}

/** The server cannot find the requested resource. */
export interface ReadLearningPath404Response extends HttpResponse {
  status: "404";
}

export interface ReadLearningPath429Headers {
  /** Delay in seconds to retry for a 429 request */
  "retry-after": number;
}

/** Response when rate limit exceeded allowed quota */
export interface ReadLearningPath429Response extends HttpResponse {
  status: "429";
  headers: RawHttpHeaders & ReadLearningPath429Headers;
}

export interface ListLearningPaths200Headers {
  /** The maximum number of requests you're permitted to make per hour. */
  "ratelimit-limit": number;
  /** The number of requests remaining in the current rate limit window. */
  "ratelimit-remaining": number;
}

/** HTTP success responses */
export interface ListLearningPaths200Response extends HttpResponse {
  status: "200";
  body: LearningPathListOutput | Record<string, any>;
  headers: RawHttpHeaders & ListLearningPaths200Headers;
}

/** The server could not understand the request due to invalid syntax. */
export interface ListLearningPaths400Response extends HttpResponse {
  status: "400";
}

/** Access is unauthorized. */
export interface ListLearningPaths401Response extends HttpResponse {
  status: "401";
}

/** Access is forbidden. */
export interface ListLearningPaths403Response extends HttpResponse {
  status: "403";
}

export interface ListLearningPaths429Headers {
  /** Delay in seconds to retry for a 429 request */
  "retry-after": number;
}

/** Response when rate limit exceeded allowed quota */
export interface ListLearningPaths429Response extends HttpResponse {
  status: "429";
  headers: RawHttpHeaders & ListLearningPaths429Headers;
}

export interface ReadModule200Headers {
  /** The maximum number of requests you're permitted to make per hour. */
  "ratelimit-limit": number;
  /** The number of requests remaining in the current rate limit window. */
  "ratelimit-remaining": number;
}

/** HTTP success responses */
export interface ReadModule200Response extends HttpResponse {
  status: "200";
  body: ModuleOutput | Record<string, any>;
  headers: RawHttpHeaders & ReadModule200Headers;
}

/** The server could not understand the request due to invalid syntax. */
export interface ReadModule400Response extends HttpResponse {
  status: "400";
}

/** Access is unauthorized. */
export interface ReadModule401Response extends HttpResponse {
  status: "401";
}

/** Access is forbidden. */
export interface ReadModule403Response extends HttpResponse {
  status: "403";
}

/** The server cannot find the requested resource. */
export interface ReadModule404Response extends HttpResponse {
  status: "404";
}

export interface ReadModule429Headers {
  /** Delay in seconds to retry for a 429 request */
  "retry-after": number;
}

/** Response when rate limit exceeded allowed quota */
export interface ReadModule429Response extends HttpResponse {
  status: "429";
  headers: RawHttpHeaders & ReadModule429Headers;
}

export interface ListModules200Headers {
  /** The maximum number of requests you're permitted to make per hour. */
  "ratelimit-limit": number;
  /** The number of requests remaining in the current rate limit window. */
  "ratelimit-remaining": number;
}

/** HTTP success responses */
export interface ListModules200Response extends HttpResponse {
  status: "200";
  body: ModuleListOutput | Record<string, any>;
  headers: RawHttpHeaders & ListModules200Headers;
}

/** The server could not understand the request due to invalid syntax. */
export interface ListModules400Response extends HttpResponse {
  status: "400";
}

/** Access is unauthorized. */
export interface ListModules401Response extends HttpResponse {
  status: "401";
}

/** Access is forbidden. */
export interface ListModules403Response extends HttpResponse {
  status: "403";
}

export interface ListModules429Headers {
  /** Delay in seconds to retry for a 429 request */
  "retry-after": number;
}

/** Response when rate limit exceeded allowed quota */
export interface ListModules429Response extends HttpResponse {
  status: "429";
  headers: RawHttpHeaders & ListModules429Headers;
}
