// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { WebhookResource, WebhookResourcePatch } from "../../models/models.js";
import {
  webhookGet,
  webhookCreateOrUpdate,
  webhookUpdate,
  webhookDelete,
  webhookListByReportResource,
} from "../../api/webhook/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WebhookGetOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookListByReportResourceOptionalParams,
} from "../../models/options.js";

export interface WebhookOperations {
  get: (
    reportName: string,
    webhookName: string,
    options?: WebhookGetOptionalParams,
  ) => Promise<WebhookResource>;
  createOrUpdate: (
    reportName: string,
    webhookName: string,
    parameters: WebhookResource,
    options?: WebhookCreateOrUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  update: (
    reportName: string,
    webhookName: string,
    properties: WebhookResourcePatch,
    options?: WebhookUpdateOptionalParams,
  ) => Promise<WebhookResource>;
  delete: (
    reportName: string,
    webhookName: string,
    options?: WebhookDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: WebhookListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<WebhookResource>;
}

export function getWebhook(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      webhookName: string,
      options?: WebhookGetOptionalParams,
    ) => webhookGet(context, reportName, webhookName, options),
    createOrUpdate: (
      reportName: string,
      webhookName: string,
      parameters: WebhookResource,
      options?: WebhookCreateOrUpdateOptionalParams,
    ) =>
      webhookCreateOrUpdate(
        context,
        reportName,
        webhookName,
        parameters,
        options,
      ),
    update: (
      reportName: string,
      webhookName: string,
      properties: WebhookResourcePatch,
      options?: WebhookUpdateOptionalParams,
    ) => webhookUpdate(context, reportName, webhookName, properties, options),
    delete: (
      reportName: string,
      webhookName: string,
      options?: WebhookDeleteOptionalParams,
    ) => webhookDelete(context, reportName, webhookName, options),
    listByReportResource: (
      reportName: string,
      options?: WebhookListByReportResourceOptionalParams,
    ) => webhookListByReportResource(context, reportName, options),
  };
}

export function getWebhookOperations(
  context: AppComplianceAutomationContext,
): WebhookOperations {
  return {
    ...getWebhook(context),
  };
}
