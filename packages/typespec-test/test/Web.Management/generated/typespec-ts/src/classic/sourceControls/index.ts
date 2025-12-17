// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  listSourceControls,
  updateSourceControl,
  getSourceControl,
} from "../../api/sourceControls/operations.js";
import {
  SourceControlsListSourceControlsOptionalParams,
  SourceControlsUpdateSourceControlOptionalParams,
  SourceControlsGetSourceControlOptionalParams,
} from "../../api/sourceControls/options.js";
import { SourceControl } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SourceControls operations. */
export interface SourceControlsOperations {
  /** Description for Gets the source controls available for Azure websites. */
  listSourceControls: (
    options?: SourceControlsListSourceControlsOptionalParams,
  ) => PagedAsyncIterableIterator<SourceControl>;
  /** Description for Updates source control token */
  updateSourceControl: (
    sourceControlType: string,
    requestMessage: SourceControl,
    options?: SourceControlsUpdateSourceControlOptionalParams,
  ) => Promise<SourceControl>;
  /** Description for Gets source control token */
  getSourceControl: (
    sourceControlType: string,
    options?: SourceControlsGetSourceControlOptionalParams,
  ) => Promise<SourceControl>;
}

function _getSourceControls(context: WebContext) {
  return {
    listSourceControls: (options?: SourceControlsListSourceControlsOptionalParams) =>
      listSourceControls(context, options),
    updateSourceControl: (
      sourceControlType: string,
      requestMessage: SourceControl,
      options?: SourceControlsUpdateSourceControlOptionalParams,
    ) => updateSourceControl(context, sourceControlType, requestMessage, options),
    getSourceControl: (
      sourceControlType: string,
      options?: SourceControlsGetSourceControlOptionalParams,
    ) => getSourceControl(context, sourceControlType, options),
  };
}

export function _getSourceControlsOperations(context: WebContext): SourceControlsOperations {
  return {
    ..._getSourceControls(context),
  };
}
