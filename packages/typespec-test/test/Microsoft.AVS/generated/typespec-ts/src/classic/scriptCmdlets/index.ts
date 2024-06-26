// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { ScriptCmdlet } from "../../models/models.js";
import { listByScriptPackage, get } from "../../api/scriptCmdlets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ScriptCmdletsListByScriptPackageOptionalParams,
  ScriptCmdletsGetOptionalParams,
} from "../../models/options.js";

export interface ScriptCmdletsOperations {
  listByScriptPackage: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListByScriptPackageOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptCmdlet>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    scriptCmdletName: string,
    options?: ScriptCmdletsGetOptionalParams,
  ) => Promise<ScriptCmdlet>;
}

export function getScriptCmdlets(context: AVSContext) {
  return {
    listByScriptPackage: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      options?: ScriptCmdletsListByScriptPackageOptionalParams,
    ) =>
      listByScriptPackage(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      scriptCmdletName: string,
      options?: ScriptCmdletsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        scriptCmdletName,
        options,
      ),
  };
}

export function getScriptCmdletsOperations(
  context: AVSContext,
): ScriptCmdletsOperations {
  return {
    ...getScriptCmdlets(context),
  };
}
