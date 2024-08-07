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

/** Interface representing a ScriptCmdlets operations. */
export interface ScriptCmdletsOperations {
  /** List ScriptCmdlet resources by ScriptPackage */
  listByScriptPackage: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListByScriptPackageOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptCmdlet>;
  /** Get a ScriptCmdlet */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    scriptCmdletName: string,
    options?: ScriptCmdletsGetOptionalParams,
  ) => Promise<ScriptCmdlet>;
}

export function getScriptCmdlets(context: AVSContext, subscriptionId: string) {
  return {
    listByScriptPackage: (
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
  subscriptionId: string,
): ScriptCmdletsOperations {
  return {
    ...getScriptCmdlets(context, subscriptionId),
  };
}
