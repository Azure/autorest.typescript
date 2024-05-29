// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { WebhookResource, WebhookResourcePatch } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByReportResource,
} from "../../api/webhookResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WebhookResourcesGetOptionalParams,
  WebhookResourcesCreateOrUpdateOptionalParams,
  WebhookResourcesUpdateOptionalParams,
  WebhookResourcesDeleteOptionalParams,
  WebhookResourcesListByReportResourceOptionalParams,
} from "../../models/options.js";

export interface WebhookResourcesOperations {
  get: (
    reportName: string,
    webhookName: string,
    options?: WebhookResourcesGetOptionalParams,
  ) => Promise<WebhookResource>;
  createOrUpdate: (
    reportName: string,
    webhookName: string,
    parameters: WebhookResource,
    options?: WebhookResourcesCreateOrUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  update: (
    reportName: string,
    webhookName: string,
    properties: WebhookResourcePatch,
    options?: WebhookResourcesUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  delete: (
    reportName: string,
    webhookName: string,
    options?: WebhookResourcesDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: WebhookResourcesListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<WebhookResource>;
}

export function getWebhookResources(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      webhookName: string,
      options?: WebhookResourcesGetOptionalParams,
    ) => get(context, reportName, webhookName, options),
    createOrUpdate: (
      reportName: string,
      webhookName: string,
      parameters: WebhookResource,
      options?: WebhookResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, webhookName, parameters, options),
    update: (
      reportName: string,
      webhookName: string,
      properties: WebhookResourcePatch,
      options?: WebhookResourcesUpdateOptionalParams,
    ) => update(context, reportName, webhookName, properties, options),
    delete: (
      reportName: string,
      webhookName: string,
      options?: WebhookResourcesDeleteOptionalParams,
    ) => $delete(context, reportName, webhookName, options),
    listByReportResource: (
      reportName: string,
      options?: WebhookResourcesListByReportResourceOptionalParams,
    ) => listByReportResource(context, reportName, options),
  };
}

export function getWebhookResourcesOperations(
  context: AppComplianceAutomationContext,
): WebhookResourcesOperations {
  return {
    ...getWebhookResources(context),
  };
}
