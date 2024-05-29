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
  ScopingConfigurationResourcesCreateOrUpdate200Response,
  ScopingConfigurationResourcesCreateOrUpdate201Response,
  ScopingConfigurationResourcesCreateOrUpdateDefaultResponse,
  ScopingConfigurationResourcesDelete200Response,
  ScopingConfigurationResourcesDelete204Response,
  ScopingConfigurationResourcesDeleteDefaultResponse,
  ScopingConfigurationResourcesGet200Response,
  ScopingConfigurationResourcesGetDefaultResponse,
  ScopingConfigurationResourcesListByReportResource200Response,
  ScopingConfigurationResourcesListByReportResourceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ScopingConfigurationResourcesGetOptionalParams,
  ScopingConfigurationResourcesCreateOrUpdateOptionalParams,
  ScopingConfigurationResourcesDeleteOptionalParams,
  ScopingConfigurationResourcesListByReportResourceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationResourcesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationResourcesGet200Response
  | ScopingConfigurationResourcesGetDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | ScopingConfigurationResourcesGet200Response
    | ScopingConfigurationResourcesGetDefaultResponse,
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
export async function get(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationResourcesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingConfigurationResource> {
  const result = await _getSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  parameters: ScopingConfigurationResource,
  options: ScopingConfigurationResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationResourcesCreateOrUpdate200Response
  | ScopingConfigurationResourcesCreateOrUpdate201Response
  | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse
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

export async function _createOrUpdateDeserialize(
  result:
    | ScopingConfigurationResourcesCreateOrUpdate200Response
    | ScopingConfigurationResourcesCreateOrUpdate201Response
    | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse,
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
export async function createOrUpdate(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  parameters: ScopingConfigurationResource,
  options: ScopingConfigurationResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingConfigurationResource> {
  const result = await _createOrUpdateSend(
    context,
    reportName,
    scopingConfigurationName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationResourcesDelete200Response
  | ScopingConfigurationResourcesDelete204Response
  | ScopingConfigurationResourcesDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ScopingConfigurationResourcesDelete200Response
    | ScopingConfigurationResourcesDelete204Response
    | ScopingConfigurationResourcesDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Clean the AppComplianceAutomation scoping configuration of the specific report. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _listByReportResourceSend(
  context: Client,
  reportName: string,
  options: ScopingConfigurationResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScopingConfigurationResourcesListByReportResource200Response
  | ScopingConfigurationResourcesListByReportResourceDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByReportResourceDeserialize(
  result:
    | ScopingConfigurationResourcesListByReportResource200Response
    | ScopingConfigurationResourcesListByReportResourceDefaultResponse,
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
export function listByReportResource(
  context: Client,
  reportName: string,
  options: ScopingConfigurationResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ScopingConfigurationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByReportResourceSend(context, reportName, options),
    _listByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
