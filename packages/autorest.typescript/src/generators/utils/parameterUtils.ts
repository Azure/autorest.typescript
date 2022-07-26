// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterDetails } from "../../models/parameterDetails";
import {
  OperationDetails,
  OperationRequestDetails
} from "../../models/operationDetails";
import {
  ImplementationLocation,
  SchemaType,
  ParameterLocation,
  Parameter
} from "@autorest/codemodel";
import { wrapString, IndentationType } from "./stringUtils";
import { ClassDeclaration, InterfaceDeclaration } from "ts-morph";
import { ParameterWithDescription } from "./docsUtils";
import {
  NameType,
  normalizeName,
  normalizeTypeName
} from "../../utils/nameUtils";
import { getParameterDescription } from "../../utils/getParameterDescription";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { getAutorestOptions } from "../../autorestSession";

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

/**
 * Gets a list of parameter declarations for each overload the operation supports,
 * and the list of parameter declarations for the base operation.
 */
export function getOperationParameterSignatures(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  operationGroupClass: ClassDeclaration | InterfaceDeclaration
) {
  const operationParameters = filterOperationParameters(parameters, operation, {
    includeContentType: true
  }).filter(p => !p.isFlattened);

  const operationRequests = operation.requests;
  const overloadParameterDeclarations: ParameterWithDescription[][] = [];
  const hasMultipleOverloads = operationRequests.length > 1;

  for (const request of operationRequests) {
    const requestMediaType = request.mediaType;
    // filter out parameters that belong to a different media type
    const requestParameters = operationParameters.filter(
      ({ targetMediaType }) =>
        !targetMediaType || requestMediaType === targetMediaType
    );

    // Convert parameters into TypeScript parameter declarations.
    const parameterDeclarations = requestParameters.reduce<
      ParameterWithDescription[]
    >((acc, param) => {
      const { usedModels } = param.typeDetails;
      let type = normalizeTypeName(param.typeDetails);
      if (
        param.typeDetails.isConstant &&
        param.typeDetails.typeName === "string" &&
        param.typeDetails.defaultValue
      ) {
        type = `"${param.typeDetails.defaultValue}"`;
      }

      // If the type collides with the class name, use the alias
      const uniqueTypeName =
        operationGroupClass.getName() === type ? `${type}Model` : type;
      const typeName = param.nullable
        ? uniqueTypeName + " | null"
        : uniqueTypeName;

      // If any models are used, add them to the named import list
      if (usedModels.length) {
        usedModels.forEach(model => importedModels.add(model));
      }

      const newParameter = {
        name: param.name,
        description: getParameterDescription(param, operation.fullName),
        type: typeName,
        hasQuestionToken: !param.required,
        isContentType: Boolean(
          param.serializedName === "Content-Type" && param.location === "header"
        )
      };

      // Make sure required parameters are added before optional
      const newParameterPosition = param.required
        ? findLastRequiredParamIndex(acc) + 1
        : acc.length;
      acc.splice(newParameterPosition, 0, newParameter);
      return acc;
    }, []);

    trackParameterGroups(
      operation,
      parameters,
      importedModels,
      parameterDeclarations
    );

    // Sort the parameter declarations to match the signature the CodeModel suggests.
    const orderedParameterDeclarations = sortOperationParameters(
      operation,
      request,
      parameterDeclarations
    );

    // add optional parameter
    const optionalParameter = getOptionsParameter(
      operation,
      parameters,
      importedModels,
      {
        mediaType: hasMultipleOverloads ? requestMediaType : undefined
      }
    );
    orderedParameterDeclarations.push(optionalParameter);

    overloadParameterDeclarations.push(orderedParameterDeclarations);
  }

  // Create the parameter declarations for the base method signature.
  const baseMethodParameters = getBaseMethodParameterDeclarations(
    overloadParameterDeclarations
  );

  return { overloadParameterDeclarations, baseMethodParameters };
}

function findLastRequiredParamIndex(
  params: ParameterWithDescription[]
): number {
  for (let i = params.length; i--; ) {
    if (!params[i].hasQuestionToken) {
      return i;
    }
  }
  return -1;
}

function trackParameterGroups(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  parameterDeclarations: ParameterWithDescription[]
) {
  const groupedParameters = getGroupedParameters(
    operation,
    parameters,
    importedModels
  ).filter(gp => !gp.hasQuestionToken);

  // Make sure required parameters are added before optional
  const lastRequiredIndex =
    findLastRequiredParamIndex(parameterDeclarations) + 1;

  if (groupedParameters.length) {
    parameterDeclarations.splice(lastRequiredIndex, 0, ...groupedParameters);
  }
}

/**
 * This function gets the parameter groups specified in the swagger
 * by the parameter grouping extension x-ms-parameter-grouping
 */
function getGroupedParameters(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>
): ParameterWithDescription[] {
  const parameterGroups: Parameter[] = [];
  // We get the parameters that are used by this specific operation, including
  // any optional ones.
  // We extract these from the parameters collection to make sure we reuse them
  // when needed, instead of creating duplicate ones.
  filterOperationParameters(parameters, operation, {
    includeGroupedParameters: true
  })
    .filter(({ parameter }) => parameter.groupedBy)
    // Get optional grouped properties and store them in parameterGroups
    .forEach(({ parameter: { groupedBy } }) => {
      if (!groupedBy || !groupedBy.required) {
        return;
      }

      const groupNAme = getLanguageMetadata(groupedBy.language).name;

      // Make sure we only store the same group once
      if (
        parameterGroups.some(
          p => getLanguageMetadata(p.language).name === groupNAme
        )
      ) {
        return;
      }
      parameterGroups.push(groupedBy);
    });

  return parameterGroups
    .filter(({ required }) => required)
    .map(({ language }) => {
      const { name, description } = getLanguageMetadata(language);
      const type = normalizeName(name, NameType.Interface);

      // Add the model for import
      importedModels.add(type);

      return {
        name,
        type,
        description
      };
    });
}

/**
 * Sorts the list of operation parameters to match the order described by the CodeModel.
 * @param operation Details about an operation.
 * @param request Details about an operation overload.
 * @param parameterDeclarations List of required parameter declarations for the provided operation overload.
 */
function sortOperationParameters(
  operation: OperationDetails,
  request: OperationRequestDetails,
  parameterDeclarations: ParameterWithDescription[]
): ParameterWithDescription[] {
  // Get a sorted list of parameter names for this operation/request.
  // Note that this may inlcude parameters that aren't displayed, e.g. constant types.
  const expectedParameterOrdering = [
    ...operation.parameters,
    ...(request.parameters ?? [])
  ]
    // Only parameters that are implemented on the method should be considered.
    .filter(param => param.implementation === ImplementationLocation.Method)
    .map(param => getLanguageMetadata(param.language).name);

  const orderedParameterDeclarations: typeof parameterDeclarations = [];
  for (const parameterName of expectedParameterOrdering) {
    const index = parameterDeclarations.findIndex(
      p => p.name === parameterName
    );
    if (index === -1) {
      // No matching parameter found.
      // Common cases where this occurs is if a parameter
      // is optional, or a constant.
      continue;
    }

    orderedParameterDeclarations.push(
      ...parameterDeclarations.splice(index, 1)
    );
  }

  // push any remaining parameters into the ordered parameter list
  orderedParameterDeclarations.push(...parameterDeclarations);

  return orderedParameterDeclarations;
}

/**
 * This function takes care of Typescript generator specific Optional parameters grouping.
 *
 * In the Typescript generator we always group optional parameters to provide a simpler interface.
 * This function is responsible for the default optional parameter grouping, which groups into an
 * options bag any optional parameter, including optional grouped parameters.
 */
function getOptionsParameter(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  {
    isOptional = true,
    mediaType
  }: { isOptional?: boolean; mediaType?: string } = {}
): ParameterWithDescription {
  const { useCoreV2 } = getAutorestOptions();

  let type: string = !useCoreV2
    ? "coreHttp.OperationOptions"
    : "coreClient.OperationOptions";

  const operationParameters = filterOperationParameters(parameters, operation, {
    includeOptional: true,
    includeGroupedParameters: true
  });

  const mediaPrefix = mediaType ? `$${mediaType}` : "";
  type = `${operation.typeDetails.typeName}${mediaPrefix}OptionalParams`;
  importedModels.add(type);

  return {
    name: "options",
    type,
    hasQuestionToken: isOptional,
    description: "The options parameters."
  };
}

/**
 * Given a list of operation parameter declarations per overload,
 * returns a list of the parameter declarations that should appear
 * in the operation's base signature.
 *
 * If `overloadParameterDeclarations` contains the parameter declarations for
 * just a single overload, then the return value will be the same as the 1st
 * element in `overloadParameterDeclarations`.
 * @param overloadParameterDeclarations
 */
function getBaseMethodParameterDeclarations(
  overloadParameterDeclarations: ParameterWithDescription[][]
): ParameterWithDescription[] {
  if (!overloadParameterDeclarations.length) {
    return [];
  }
  if (overloadParameterDeclarations.length === 1) {
    return [...overloadParameterDeclarations[0]];
  }

  const baseMethodArg: ParameterWithDescription = {
    name: "args",
    isRestParameter: true,
    description: "Includes all the parameters for this operation.",
    type: overloadParameterDeclarations
      .map(overloadParams => {
        return `[ ${overloadParams
          .map(p => (p.hasQuestionToken ? `${p.type}?` : p.type))
          .join(", ")} ]`;
      })
      .join(" | ")
  };

  return [baseMethodArg];
}
