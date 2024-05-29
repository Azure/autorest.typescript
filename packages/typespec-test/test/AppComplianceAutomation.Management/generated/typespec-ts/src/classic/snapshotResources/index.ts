// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  SnapshotResource,
  SnapshotDownloadRequest,
  DownloadResponse,
} from "../../models/models.js";
import {
  get,
  listByReportResource,
  download,
} from "../../api/snapshotResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SnapshotResourcesGetOptionalParams,
  SnapshotResourcesListByReportResourceOptionalParams,
  SnapshotResourcesDownloadOptionalParams,
} from "../../models/options.js";

export interface SnapshotResourcesOperations {
  get: (
    reportName: string,
    snapshotName: string,
    options?: SnapshotResourcesGetOptionalParams,
  ) => Promise<SnapshotResource>;
  listByReportResource: (
    reportName: string,
    options?: SnapshotResourcesListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<SnapshotResource>;
  download: (
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotResourcesDownloadOptionalParams,
  ) => PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}

export function getSnapshotResources(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      snapshotName: string,
      options?: SnapshotResourcesGetOptionalParams,
    ) => get(context, reportName, snapshotName, options),
    listByReportResource: (
      reportName: string,
      options?: SnapshotResourcesListByReportResourceOptionalParams,
    ) => listByReportResource(context, reportName, options),
    download: (
      reportName: string,
      snapshotName: string,
      body: SnapshotDownloadRequest,
      options?: SnapshotResourcesDownloadOptionalParams,
    ) => download(context, reportName, snapshotName, body, options),
  };
}

export function getSnapshotResourcesOperations(
  context: AppComplianceAutomationContext,
): SnapshotResourcesOperations {
  return {
    ...getSnapshotResources(context),
  };
}
