// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterDetails } from "../../models/parameterDetails";
import { OperationDetails } from "../../models/operationDetails";
import { ImplementationLocation, SchemaType } from "@azure-tools/codemodel";
import { StructureKind, ParameterDeclarationStructure } from "ts-morph";

interface ParameterFilterOptions {
  includeOptional?: boolean;
  includeClientParams?: boolean;
  includeUriParameters?: boolean;
  includeGlobalParameters?: boolean;
  includeConstantParameters?: boolean;
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
    includeConstantParameters
  }: ParameterFilterOptions = {}
) {
  const optionalFilter = (param: ParameterDetails) =>
    !!(includeOptional || param.required);

  const constantFilter = (param: ParameterDetails) =>
    !!(includeConstantParameters || param.schemaType !== SchemaType.Constant);

  const clientParamFilter = (param: ParameterDetails) =>
    !!(
      includeClientParams ||
      param.implementationLocation !== ImplementationLocation.Client
    );

  const globalFilter = (param: ParameterDetails) =>
    !!(includeGlobalParameters || !param.isGlobal);

  const isInOperation = (param: ParameterDetails) =>
    !!(param.operationsIn && param.operationsIn.includes(operation.fullName));

  return parameters.filter(
    param =>
      globalFilter(param) &&
      isInOperation(param) &&
      optionalFilter(param) &&
      constantFilter(param) &&
      clientParamFilter(param)
  );
}
