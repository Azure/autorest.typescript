// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ArtifactManifestsUpdateStateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ArtifactManifestsListCredentialOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ArtifactManifestsListByArtifactStoreOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ArtifactManifestsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ArtifactManifestsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ArtifactManifestsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ArtifactManifestsGetOptionalParams extends OperationOptions {}
