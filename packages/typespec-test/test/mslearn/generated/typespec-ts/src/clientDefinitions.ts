// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReadLearningPathParameters,
  ListLearningPathsParameters,
  ReadModuleParameters,
  ListModulesParameters,
} from "./parameters";
import {
  ReadLearningPath200Response,
  ReadLearningPath400Response,
  ReadLearningPath401Response,
  ReadLearningPath403Response,
  ReadLearningPath404Response,
  ReadLearningPath429Response,
  ListLearningPaths200Response,
  ListLearningPaths400Response,
  ListLearningPaths401Response,
  ListLearningPaths403Response,
  ListLearningPaths429Response,
  ReadModule200Response,
  ReadModule400Response,
  ReadModule401Response,
  ReadModule403Response,
  ReadModule404Response,
  ReadModule429Response,
  ListModules200Response,
  ListModules400Response,
  ListModules401Response,
  ListModules403Response,
  ListModules429Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ReadLearningPath {
  /** Reads a content */
  get(
    options?: ReadLearningPathParameters
  ): StreamableMethod<
    | ReadLearningPath200Response
    | ReadLearningPath400Response
    | ReadLearningPath401Response
    | ReadLearningPath403Response
    | ReadLearningPath404Response
    | ReadLearningPath429Response
  >;
}

export interface ListLearningPaths {
  /** List contents */
  get(
    options?: ListLearningPathsParameters
  ): StreamableMethod<
    | ListLearningPaths200Response
    | ListLearningPaths400Response
    | ListLearningPaths401Response
    | ListLearningPaths403Response
    | ListLearningPaths429Response
  >;
}

export interface ReadModule {
  /** Reads a content */
  get(
    options?: ReadModuleParameters
  ): StreamableMethod<
    | ReadModule200Response
    | ReadModule400Response
    | ReadModule401Response
    | ReadModule403Response
    | ReadModule404Response
    | ReadModule429Response
  >;
}

export interface ListModules {
  /** List contents */
  get(
    options?: ListModulesParameters
  ): StreamableMethod<
    | ListModules200Response
    | ListModules400Response
    | ListModules401Response
    | ListModules403Response
    | ListModules429Response
  >;
}

export interface Routes {
  /** Resource for '/learning-paths/\{id\}' has methods for the following verbs: get */
  (path: "/learning-paths/{id}", id: string): ReadLearningPath;
  /** Resource for '/learning-paths' has methods for the following verbs: get */
  (path: "/learning-paths"): ListLearningPaths;
  /** Resource for '/modules/\{id\}' has methods for the following verbs: get */
  (path: "/modules/{id}", id: string): ReadModule;
  /** Resource for '/modules' has methods for the following verbs: get */
  (path: "/modules"): ListModules;
}

export type LearnClient = Client & {
  path: Routes;
};
