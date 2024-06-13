// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VmInstanceHybridIdentityMetadata } from "../../models/models.js";
import {
  get,
  listByVirtualMachineInstance,
} from "../../api/vmInstanceHybridIdentityMetadatas/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

export interface VmInstanceHybridIdentityMetadatasOperations {
  get: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
  ) => Promise<VmInstanceHybridIdentityMetadata>;
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<VmInstanceHybridIdentityMetadata>;
}

export function getVmInstanceHybridIdentityMetadatas(context: ScVmmContext) {
  return {
    get: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
    ) => get(context, resourceUri, options),
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
    ) => listByVirtualMachineInstance(context, resourceUri, options),
  };
}

export function getVmInstanceHybridIdentityMetadatasOperations(
  context: ScVmmContext,
): VmInstanceHybridIdentityMetadatasOperations {
  return {
    ...getVmInstanceHybridIdentityMetadatas(context),
  };
}
