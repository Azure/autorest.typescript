// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel, RLCOptions } from "../interfaces.js";
import { NameType, normalizeName } from "./nameUtils.js";

/**
 * Get the response type name by baseName or operatioName & statusCode
 * @param baseResponseName
 */
export function getResponseTypeName(baseResponseName: string): string;
export function getResponseTypeName(
  operationGroup: string,
  operationName: string,
  statusCode: string
): string;
export function getResponseTypeName(
  baseNameOrOperationGroup: string,
  operationName?: string,
  statusCode?: string
): string {
  if (operationName) {
    baseNameOrOperationGroup = getResponseBaseName(
      baseNameOrOperationGroup,
      operationName!,
      statusCode || ""
    );
  }
  return normalizeName(
    `${baseNameOrOperationGroup}Response`,
    NameType.Interface
  );
}

/**
 * The prefix of all response types
 * @param operationGroup operation group name e.g string_PutEmpty
 * @param operationName operation name D e.g string_PutEmpty
 * @param statusCode 2XX, 4XX, 5XX, default etc.
 * @returns normolized base name e.g StringPutEmpty200
 */
export function getResponseBaseName(
  operationGroup: string,
  operationName: string,
  statusCode: string
) {
  return normalizeName(
    `${operationGroup}_${operationName}_${statusCode}`,
    NameType.Interface
  );
}

/**
 * The prefix of all parameter relevant types
 * @param operationName is composed with operationGroup and operationID e.g string_PutEmpty
 * @returns
 */
export function getParameterBaseName(
  operationGroup: string,
  operationName: string
) {
  return normalizeName(
    `${operationGroup}_${operationName}`,
    NameType.Interface
  );
}

/**
 * Get the top-layer parameter name
 * @param operationGroup operation group name
 * @param operationName is composed with operationGroup and operationID e.g string_PutEmpty
 * @returns top-layer parameter name e.g StringPutEmptParameters
 */
export function getParameterTypeName(baseName: string): string;
export function getParameterTypeName(
  operationGroup: string,
  operationName: string
): string;
export function getParameterTypeName(
  baseNameOrOperationGroup: string,
  operationName?: string
) {
  if (operationName) {
    baseNameOrOperationGroup = getParameterBaseName(
      baseNameOrOperationGroup,
      operationName!
    );
  }

  return normalizeName(
    `${baseNameOrOperationGroup}_Parameters`,
    NameType.Interface
  );
}

export interface ModuleName {
  esModulesName: string;
  cjsName: string;
}
/**
 * This is a helper function that gets the right import module depending on the type of
 * library being generated
 */
export function getImportModuleName(name: ModuleName, codeModel: RLCModel) {
  if (codeModel.options?.isModularLibrary) {
    return name.esModulesName;
  }

  return name.cjsName;
}

export function getClientName(model: RLCModel) {
  const clientName = model.libraryName;
  let clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;

  if (model.options?.isModularLibrary) {
    clientInterfaceName = `${clientName.replace("Client", "")}Context`;
  }

  return clientInterfaceName;
}
