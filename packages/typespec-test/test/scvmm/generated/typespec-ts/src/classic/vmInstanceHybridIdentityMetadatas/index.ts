// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VmInstanceHybridIdentityMetadata } from "../../models/models.js";
import {
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
} from "../../api/vmInstanceHybridIdentityMetadatas/options.js";
import {
  vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance,
  vmInstanceHybridIdentityMetadatasGet,
} from "../../api/vmInstanceHybridIdentityMetadatas/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a VmInstanceHybridIdentityMetadatas operations. */
export interface VmInstanceHybridIdentityMetadatasOperations {
  /** Returns the list of HybridIdentityMetadata of the given VM. */
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<VmInstanceHybridIdentityMetadata>;
  /** Implements HybridIdentityMetadata GET method. */
  get: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
  ) => Promise<VmInstanceHybridIdentityMetadata>;
}

function _getVmInstanceHybridIdentityMetadatas(context: ScVmmContext) {
  return {
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
    ) =>
      vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance(
        context,
        resourceUri,
        options,
      ),
    get: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
    ) => vmInstanceHybridIdentityMetadatasGet(context, resourceUri, options),
  };
}

export function _getVmInstanceHybridIdentityMetadatasOperations(
  context: ScVmmContext,
): VmInstanceHybridIdentityMetadatasOperations {
  return {
    ..._getVmInstanceHybridIdentityMetadatas(context),
  };
}
