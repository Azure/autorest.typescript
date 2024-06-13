// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ScopingConfigurationResource,
  ScopingConfigurationResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AppComplianceAutomationContext as Client,
  ScopingConfigurationCreateOrUpdate200Response,
  ScopingConfigurationCreateOrUpdate201Response,
  ScopingConfigurationCreateOrUpdateDefaultResponse,
  ScopingConfigurationDelete200Response,
  ScopingConfigurationDelete204Response,
  ScopingConfigurationDeleteDefaultResponse,
  ScopingConfigurationGet200Response,
  ScopingConfigurationGetDefaultResponse,
  ScopingConfigurationListByReportResource200Response,
  ScopingConfigurationListByReportResourceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ScopingConfigurationGetOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationListByReportResourceOptionalParams,
} from "../../models/options.js";

export function _scopingConfigurationGetSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ScopingConfigurationGet200Response | ScopingConfigurationGetDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationGetDeserialize(
  result:
    | ScopingConfigurationGet200Response
    | ScopingConfigurationGetDefaultResponse,
): Promise<ScopingConfigurationResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      answers:
        result.body.properties["answers"] === undefined
          ? result.body.properties["answers"]
          : result.body.properties["answers"].map((p) => ({
              questionId: p["questionId"],
              answers: p["answers"],
            })),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationGet(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): Promise<ScopingConfigurationResource> {
  const result = await _scopingConfigurationGetSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _scopingConfigurationGetDeserialize(result);
}

export function _scopingConfigurationCreateOrUpdateSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  parameters: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationCreateOrUpdate200Response
  | ScopingConfigurationCreateOrUpdate201Response
  | ScopingConfigurationCreateOrUpdateDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: {
          answers:
            parameters.properties["answers"] === undefined
              ? parameters.properties["answers"]
              : parameters.properties["answers"].map((p) => ({
                  questionId: p["questionId"],
                  answers: p["answers"],
                })),
        },
      },
    });
}

export async function _scopingConfigurationCreateOrUpdateDeserialize(
  result:
    | ScopingConfigurationCreateOrUpdate200Response
    | ScopingConfigurationCreateOrUpdate201Response
    | ScopingConfigurationCreateOrUpdateDefaultResponse,
): Promise<ScopingConfigurationResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      answers:
        result.body.properties["answers"] === undefined
          ? result.body.properties["answers"]
          : result.body.properties["answers"].map((p) => ({
              questionId: p["questionId"],
              answers: p["answers"],
            })),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationCreateOrUpdate(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  parameters: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingConfigurationResource> {
  const result = await _scopingConfigurationCreateOrUpdateSend(
    context,
    reportName,
    scopingConfigurationName,
    parameters,
    options,
  );
  return _scopingConfigurationCreateOrUpdateDeserialize(result);
}

export function _scopingConfigurationDeleteSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ScopingConfigurationDelete200Response
  | ScopingConfigurationDelete204Response
  | ScopingConfigurationDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationDeleteDeserialize(
  result:
    | ScopingConfigurationDelete200Response
    | ScopingConfigurationDelete204Response
    | ScopingConfigurationDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Clean the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationDelete(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _scopingConfigurationDeleteSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _scopingConfigurationDeleteDeserialize(result);
}

export function _scopingConfigurationListByReportResourceSend(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationListByReportResource200Response
  | ScopingConfigurationListByReportResourceDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationListByReportResourceDeserialize(
  result:
    | ScopingConfigurationListByReportResource200Response
    | ScopingConfigurationListByReportResourceDefaultResponse,
): Promise<ScopingConfigurationResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: {
        answers:
          p.properties["answers"] === undefined
            ? p.properties["answers"]
            : p.properties["answers"].map((p) => ({
                questionId: p["questionId"],
                answers: p["answers"],
              })),
        provisioningState: p.properties["provisioningState"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a list format of the singleton scopingConfiguration for a specified report. */
export function scopingConfigurationListByReportResource(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ScopingConfigurationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scopingConfigurationListByReportResourceSend(
        context,
        reportName,
        options,
      ),
    _scopingConfigurationListByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
