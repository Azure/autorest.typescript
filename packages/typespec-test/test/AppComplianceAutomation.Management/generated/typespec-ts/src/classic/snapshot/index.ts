// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  SnapshotResource,
  SnapshotDownloadRequest,
  DownloadResponse,
} from "../../models/models.js";
import {
  snapshotGet,
  snapshotListByReportResource,
  snapshotDownload,
} from "../../api/snapshot/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SnapshotGetOptionalParams,
  SnapshotListByReportResourceOptionalParams,
  SnapshotDownloadOptionalParams,
} from "../../models/options.js";

export interface SnapshotOperations {
  get: (
    reportName: string,
    snapshotName: string,
    options?: SnapshotGetOptionalParams,
  ) => Promise<SnapshotResource>;
  listByReportResource: (
    reportName: string,
    options?: SnapshotListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<SnapshotResource>;
  download: (
    reportName: string,
    snapshotName: string,
    body: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams,
  ) => PollerLike<OperationState<DownloadResponse>, DownloadResponse>;
}

export function getSnapshot(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      snapshotName: string,
      options?: SnapshotGetOptionalParams,
    ) => snapshotGet(context, reportName, snapshotName, options),
    listByReportResource: (
      reportName: string,
      options?: SnapshotListByReportResourceOptionalParams,
    ) => snapshotListByReportResource(context, reportName, options),
    download: (
      reportName: string,
      snapshotName: string,
      body: SnapshotDownloadRequest,
      options?: SnapshotDownloadOptionalParams,
    ) => snapshotDownload(context, reportName, snapshotName, body, options),
  };
}

export function getSnapshotOperations(
  context: AppComplianceAutomationContext,
): SnapshotOperations {
  return {
    ...getSnapshot(context),
  };
}
