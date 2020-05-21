// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterDetails } from "../../models/parameterDetails";
import { OperationDetails } from "../../models/operationDetails";
import {
  ImplementationLocation,
  SchemaType,
  ParameterLocation
} from "@azure-tools/codemodel";
import { wrapString, IndentationType } from "./stringUtils";

interface ParameterFilterOptions {
  includeOptional?: boolean;
  includeClientParams?: boolean;
  includeUriParameters?: boolean;
  includeGlobalParameters?: boolean;
  includeConstantParameters?: boolean;
  includeGroupedParameters?: boolean;
  // Whether the contentType parameter should always be included.
  includeContentType?: boolean;
}

/**
 * Helper function to filter pre-processed parameters, to be used to find matching parameters
 * within an operation
 * @param parameters original list of parameters to filter
 * @param operation operation to look up the parameter in
 * @param param2 Object with filtering options
 */
export function filterOperationParameters(
  parameters: ParameterDetails[],
  operation: OperationDetails,
  {
    includeOptional,
    includeClientParams,
    includeGlobalParameters,
    includeConstantParameters,
    includeGroupedParameters,
    includeContentType
  }: ParameterFilterOptions = {}
) {
  const isContentType = (param: ParameterDetails) =>
    param.name === "contentType" && param.location === ParameterLocation.Header;

  const optionalFilter = (param: ParameterDetails) =>
    !!(includeOptional || param.required);

  const constantFilter = (param: ParameterDetails) =>
    (includeContentType && isContentType(param)) ||
    !!(includeConstantParameters || param.schemaType !== SchemaType.Constant);

  const clientParamFilter = (param: ParameterDetails) =>
    !!(
      includeClientParams ||
      param.implementationLocation !== ImplementationLocation.Client
    );

  const globalFilter = (param: ParameterDetails) =>
    !!(includeGlobalParameters || !param.isGlobal);

  const isInOperation = (param: ParameterDetails) =>
    !!(param.operationsIn && param.operationsIn[operation.fullName]);

  // We may want to filter out any parameter that is grouped by here.
  // This is so that we can place the group parameter instead.
  // We already have logic to group optional parameters
  const groupedFilter = (param: ParameterDetails) =>
    !!(includeGroupedParameters || !param.parameter.groupedBy);

  return parameters.filter(
    param =>
      groupedFilter(param) &&
      globalFilter(param) &&
      isInOperation(param) &&
      optionalFilter(param) &&
      constantFilter(param) &&
      clientParamFilter(param)
  );
}

export function formatJsDocParam(parameters: Partial<ParameterDetails>[]) {
  return parameters.map(p =>
    wrapString(`@param ${p.name} ${p.description}`, {
      indentationType: IndentationType.JSDocParam,
      paramNameLength: p.name?.length
    })
  );
}
