// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  Parameter,
  ParameterLocation,
  SchemaType,
  Schema,
  ImplementationLocation,
  SerializationStyle,
  ConstantSchema
} from "@azure-tools/codemodel";
import { QueryCollectionFormat } from "@azure/core-http";
import { getLanguageMetadata } from "../utils/languageHelpers";
import {
  normalizeName,
  NameType,
  getOperationFullName
} from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import {
  isSchemaType,
  getMapperClassName,
  transformMapper
} from "./mapperTransforms";
import { isEqual, isNil } from "lodash";
import {
  getTypeForSchema,
  getSchemaTypeDocumentation
} from "../utils/schemaHelpers";
import { getStringForValue } from "../utils/valueHelpers";
import { ClientOptions } from "../models/clientDetails";
import { PropertyKind } from "../models/modelDetails";
import { KnownMediaType } from "@azure-tools/codegen";

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
  /**
   * Only specified when an operation has multiple requests.
   * This is used to identify which request a parameter belongs to.
   */
  targetMediaType?: KnownMediaType;
}

const buildCredentialsParameter = (): ParameterDetails => ({
  nameRef: "credentials",
  description:
    "Subscription credentials which uniquely identify client subscription.",
  name: "credentials",
  serializedName: "credentials",
  location: ParameterLocation.None,
  required: true,
  parameterPath: "credentials",
  mapper: "any",
  isGlobal: true,
  parameter: {} as Parameter,
  implementationLocation: ImplementationLocation.Client,
  typeDetails: {
    typeName: "coreHttp.TokenCredential | coreHttp.ServiceClientCredentials",
    kind: PropertyKind.Primitive,
    usedModels: []
  },
  isSynthetic: true,
  schemaType: SchemaType.Object
});

const buildEndpointParameter = (): ParameterDetails => ({
  nameRef: "endpoint",
  description: "Overrides client endpoint.",
  name: "endpoint",
  serializedName: "endpoint",
  location: ParameterLocation.None,
  required: false,
  parameterPath: "endpoint",
  mapper: "any",
  isGlobal: true,
  parameter: {} as Parameter,
  implementationLocation: ImplementationLocation.Client,
  typeDetails: {
    typeName: "string",
    kind: PropertyKind.Primitive,
    usedModels: []
  },
  isSynthetic: true,
  schemaType: SchemaType.String
});

export function transformParameters(
  codeModel: CodeModel,
  options: ClientOptions
): ParameterDetails[] {
  let parameters: ParameterDetails[] = [];
  const hasXmlMetadata = !!options.mediaTypes?.has(KnownMediaType.Xml);
  extractOperationParameters(codeModel).forEach(p =>
    populateOperationParameters(
      p.parameter,
      parameters,
      p.operationName,
      hasXmlMetadata,
      p.targetMediaType
    )
  );

  // Adding credentials parameter as a Synthetic parameter, this is to treat this as any another parameter
  // during generation and remove the need of special handling it.
  if (options.addCredentials) {
    const creds = buildCredentialsParameter();
    parameters.unshift(creds);
  }

  parameters.push(buildEndpointParameter());

  return parameters;
}

const extractOperationParameters = (codeModel: CodeModel) =>
  codeModel.operationGroups.reduce<OperationParameterDetails[]>((acc, og) => {
    const clientName = getLanguageMetadata(codeModel.language).name;
    return [
      ...acc,
      ...og.operations.reduce<OperationParameterDetails[]>(
        (operations, operation) => {
          const operationName = getOperationFullName(og, operation, clientName);

          // Look for request in old 'request' property if new 'requests' doesn't exist
          const requests = operation.requests;
          if (requests === undefined) {
            throw new Error(
              `No request object was found for operation: ${operationName}`
            );
          }
          const operationParams: OperationParameterDetails[] = (
            operation.parameters || []
          ).map(p => ({ parameter: p, operationName }));

          // Operations may have multiple requests, each with their own set of parameters.
          // This is known to be the case when an operation can consume multiple media types.
          // We need to ensure that the parameters from each request (method overload) is accounted for.
          const requestParams: OperationParameterDetails[] = [];
          requests.forEach(request => {
            request.parameters?.forEach(parameter => {
              requestParams.push({
                operationName,
                parameter,
                targetMediaType: request.protocol.http?.knownMediaType
              });
            });
          });
          return [...operations, ...requestParams, ...operationParams];
        },
        []
      )
    ];
  }, []);

function getDefaultValue(parameter: Parameter) {
  if (!!parameter.clientDefaultValue) {
    return getStringForValue(
      parameter.clientDefaultValue,
      parameter.schema.type
    );
  }

  if (parameter.schema.type === SchemaType.Constant) {
    const constantSchema = parameter.schema as ConstantSchema;
    return (
      constantSchema.defaultValue ||
      getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType.type
      )
    );
  }

  return undefined;
}

export function populateOperationParameters(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  operationName: string,
  hasXmlMetadata: boolean,
  targetMediaType?: KnownMediaType
): void {
  const parameterName = getParameterName(parameter);
  const parameterMetadata = getLanguageMetadata(parameter.language);
  const schemaMetadata = getLanguageMetadata(parameter.schema.language);

  if (!parameterName) {
    throw new Error(
      `Couldn't get parameter name for operation: ${operationName}`
    );
  }

  const serializedName: string =
    parameterMetadata.serializedName ||
    schemaMetadata.serializedName ||
    parameterName;

  let description = parameterMetadata.description || schemaMetadata.description;

  // Ignore parameters with SchemaType.Group, since these are "virtual".
  // These are handled separately in GroupTransforms and through
  // parameter.groupedBy here in parameterTransforms
  if (parameter.schema.type === SchemaType.Group) {
    return;
  }

  const name = normalizeName(
    parameterName,
    NameType.Parameter,
    true /** shouldGuard */
  );

  const sameNameParams = operationParameters.filter(p => p.name === name);
  description += getSchemaTypeDocumentation(parameter.schema);
  const isRequired = getParameterRequired(parameter);

  const collectionFormat = getCollectionFormat(parameter);
  const typeDetails = getTypeForSchema(parameter.schema);
  const paramDetails: ParameterDetails = {
    nameRef: name,
    description:
      isRequired && parameter.implementation === ImplementationLocation.Method
        ? undefined
        : description,
    name,
    serializedName,
    operationsIn: {
      [operationName]: {
        description
      }
    },
    location: getParameterLocation(parameter),
    required: isRequired,
    schemaType: parameter.schema.type,
    parameterPath: getParameterPath(parameter),
    mapper: getMapperOrRef(
      parameter.schema,
      serializedName,
      parameter.required,
      hasXmlMetadata
    ),
    isGlobal: getIsGlobal(parameter),
    parameter,
    collectionFormat,
    implementationLocation: parameter.implementation,
    typeDetails,
    defaultValue: getDefaultValue(parameter),
    skipEncoding: getSkipEncoding(parameter),
    targetMediaType
  };

  if (!sameNameParams.length) {
    operationParameters.push(paramDetails);
    return;
  }

  //Disambiguate parameter
  disambiguateParameter(
    paramDetails,
    operationParameters,
    sameNameParams,
    operationName,
    description
  );
}

function getSkipEncoding(parameter: Parameter) {
  return parameter.extensions && parameter.extensions["x-ms-skip-url-encoding"];
}

function getParameterRequired(parameter: Parameter) {
  const requiredExtension = (parameter.extensions || {})["x-required"];
  if (!isNil(requiredExtension)) {
    return requiredExtension;
  }

  return parameter.required;
}

function getIsGlobal(parameter: Parameter) {
  return parameter.extensions
    ? !isNil(parameter.extensions["x-ms-priority"])
    : false;
}

function getParameterPath(parameter: Parameter) {
  const metadata = getLanguageMetadata(parameter.language);
  // ParameterPath has to include the name we used for the parameter, not the serializedName
  const name = normalizeName(
    metadata.name,
    NameType.Parameter,
    true /** shouldGuard */
  );

  if (parameter.groupedBy) {
    const groupedByName = getLanguageMetadata(parameter.groupedBy.language)
      .name;
    return [
      ...(!parameter.required ? ["options"] : []),
      normalizeName(groupedByName, NameType.Parameter, true /** shouldGuard */),
      name
    ];
  }

  return isClientImplementation(parameter) || parameter.required
    ? name
    : ["options", name];
}

const isClientImplementation = (parameter: Parameter) =>
  parameter.implementation === ImplementationLocation.Client;

function getParameterLocation(parameter: Parameter): ParameterLocation {
  const originalLocaltion = parameter.protocol.http?.in;
  const locationExtension =
    parameter.extensions && parameter.extensions["x-in"];
  if (!originalLocaltion && !locationExtension) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  return locationExtension || originalLocaltion;
}

/**
 * Serialization styles used by ModelerFour but not present in SerializationStyle
 */
enum AdditionalStyles {
  TabDelimited = "tabDelimited"
}

const AllSerializationStyles = { ...SerializationStyle, ...AdditionalStyles };

function getCollectionFormat(parameter: Parameter): string | undefined {
  if (!parameter.protocol.http) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  const style = parameter.protocol.http.style;

  if (parameter.protocol.http.in !== ParameterLocation.Query || !style) {
    return undefined;
  }

  const getStyle = (value: QueryCollectionFormat) =>
    Object.keys(QueryCollectionFormat).find(
      key => (QueryCollectionFormat as any)[key] === value
    );

  let queryCollectionFormat: QueryCollectionFormat;
  switch (style) {
    case AllSerializationStyles.SpaceDelimited:
      queryCollectionFormat = QueryCollectionFormat.Ssv;
      break;
    case AllSerializationStyles.Form:
      queryCollectionFormat = QueryCollectionFormat.Csv;
      break;
    case AllSerializationStyles.TabDelimited:
      queryCollectionFormat = QueryCollectionFormat.Tsv;
      break;
    case AllSerializationStyles.PipeDelimited:
      queryCollectionFormat = QueryCollectionFormat.Pipes;
      break;
    case AllSerializationStyles.Simple:
      return undefined;
    default:
      throw new Error(
        `Handling query parameter format: ${style} hasn't bee implemented yet`
      );
  }

  return getStyle(queryCollectionFormat);
}

function getParameterName(parameter: Parameter) {
  const nameFromExtension: string | undefined =
    parameter.extensions && parameter.extensions["x-ms-requestBody-name"];
  const { name: originalName } = getLanguageMetadata(parameter.language);

  const name = nameFromExtension || originalName;

  if (!name) {
    throw new Error(
      `ParameterTransform: Expected parameter to have a name ${JSON.stringify(
        parameter.language
      )}`
    );
  }

  return name;
}

/**
 * Extracts the properties from ParameterDetails to use for equality comparison
 */
function getComparableParameter({
  name,
  serializedName,
  location,
  required,
  parameterPath,
  mapper,
  collectionFormat,
  schemaType,
  implementationLocation,
  typeDetails,
  skipEncoding,
  isSynthetic,
  targetMediaType
}: ParameterDetails) {
  return {
    name,
    serializedName,
    location,
    required,
    parameterPath,
    mapper,
    collectionFormat,
    schemaType,
    implementationLocation,
    typeDetails,
    skipEncoding,
    isSynthetic,
    targetMediaType
  };
}

/**
 * This function takes care of disambiguating parameters with different schemas but
 * using the same name. If it is the first time a parameter is seen, we store it in the
 * operationParameters array.
 *
 * If there is already a parameter with the same name we check if they are the same, if so
 * we just add the current operationName to the operationsIn array.
 *
 * Otherwise we add a suffix to the parameter name and store it as a different parameter.
 */
export function disambiguateParameter(
  parameter: ParameterDetails,
  operationParameters: ParameterDetails[],
  sameNameParams: ParameterDetails[],
  operationName: string,
  description: string
) {
  const param = getComparableParameter(parameter);
  const existingParam = sameNameParams.find(p =>
    isEqual(getComparableParameter(p), param)
  );

  if (existingParam) {
    if (existingParam.operationsIn) {
      existingParam.operationsIn[operationName] = { description };
    } else {
      existingParam.operationsIn = { [operationName]: { description } };
    }
    return;
  } else {
    // Since there is already a parameter with the same name, we need to ad a suffix
    const nameRef = `${parameter.name}${sameNameParams.length}`;
    let description = parameter.description;

    if (parameter.schemaType === SchemaType.Time) {
      description += `\nThis value should be an ISO-8601 formatted string representing time. E.g. "HH:MM:SS" or "HH:MM:SS.mm".`;
    }

    // Start tracking as a new parameter with a different name
    operationParameters.push({
      ...parameter,
      nameRef,
      description
    });
  }
}

function getMapperOrRef(
  schema: Schema,
  serializedName: string,
  required?: boolean,
  hasXmlMetadata = false
) {
  if (isSchemaType([SchemaType.Object], schema)) {
    const className = getMapperClassName(schema);
    return className;
  }

  return transformMapper({
    schema,
    options: { serializedName, required, hasXmlMetadata }
  });
}
