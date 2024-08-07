// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { ScriptPackage } from "../../models/models.js";
import { listByPrivateCloud, get } from "../../api/scriptPackages/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ScriptPackagesListByPrivateCloudOptionalParams,
  ScriptPackagesGetOptionalParams,
} from "../../models/options.js";

/** Interface representing a ScriptPackages operations. */
export interface ScriptPackagesOperations {
  /** List ScriptPackage resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptPackage>;
  /** Get a ScriptPackage */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptPackagesGetOptionalParams,
  ) => Promise<ScriptPackage>;
}

export function getScriptPackages(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ScriptPackagesListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      options?: ScriptPackagesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
  };
}

export function getScriptPackagesOperations(
  context: AVSContext,
  subscriptionId: string,
): ScriptPackagesOperations {
  return {
    ...getScriptPackages(context, subscriptionId),
  };
}
