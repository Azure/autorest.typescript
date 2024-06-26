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

export interface ScriptPackagesOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptPackage>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptPackagesGetOptionalParams,
  ) => Promise<ScriptPackage>;
}

export function getScriptPackages(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
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
      subscriptionId: string,
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
): ScriptPackagesOperations {
  return {
    ...getScriptPackages(context),
  };
}
