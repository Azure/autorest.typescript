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
  ConstantSchema,
  VirtualParameter
} from "@autorest/codemodel";
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
  getSchemaTypeDocumentation,
  getSecurityInfoFromModel
} from "../utils/schemaHelpers";
import { getStringForValue } from "../utils/valueHelpers";
import { ClientOptions } from "../models/clientDetails";
import { PropertyKind } from "../models/modelDetails";
import { KnownMediaType } from "@azure-tools/codegen";
import { getAutorestOptions } from "../autorestSession";
import { DictionaryMapper } from "@azure/core-client";
import { ReservedModelNames } from "@azure-tools/rlc-common";

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
  /**
   * Only specified when an operation has multiple requests.
   * This is used to identify which request a parameter belongs to.
   */
  targetMediaType?: KnownMediaType;
}

const buildCredentialsParameter = (): ParameterDetails => {
  const { useCoreV2 } = getAutorestOptions();
  return {
    nameRef: "credentials",
    description:
      "Subscription credentials which uniquely identify client subscription.",
    name: "credentials",
    propertyName: "credentials",
    serializedName: "credentials",
    location: ParameterLocation.None,
    required: true,
    nullable: false,
    parameterPath: "credentials",
    mapper: "any",
    isGlobal: true,
    parameter: {} as Parameter,
    implementationLocation: ImplementationLocation.Client,
    typeDetails: {
      typeName: !useCoreV2
        ? "coreHttp.TokenCredential | coreHttp.ServiceClientCredentials"
        : "coreAuth.TokenCredential",
      kind: PropertyKind.Primitive,
      usedModels: []
    },
    isSynthetic: true,
    schemaType: SchemaType.Object,
    isFlattened: false
  };
};

const buildEndpointParameter = (): ParameterDetails => ({
  nameRef: "endpoint",
  description: "Overrides client endpoint.",
  name: "endpoint",
  propertyName: "endpoint",
  serializedName: "endpoint",
  location: ParameterLocation.None,
  required: false,
  nullable: true,
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
  schemaType: SchemaType.String,
  isFlattened: false
});

export function transformParameters(
  codeModel: CodeModel,
  options: ClientOptions
): ParameterDetails[] {
  let parameters: ParameterDetails[] = [];
  const { addCredentials } = getSecurityInfoFromModel(codeModel.security);

  const hasXmlMetadata = !!options.mediaTypes?.has(KnownMediaType.Xml);
  extractOperationParameters(codeModel).forEach((p) =>
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
  if (addCredentials) {
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
          ).map((p) => {
            if (p.required) {
              p.language.default.isTopLevelParameter = true;
              p.schema.language.default.isTopLevelParameter = true;
            }
            return {
              parameter: p,
              operationName
            };
          });

          // Operations may have multiple requests, each with their own set of parameters.
          // This is known to be the case when an operation can consume multiple media types.
          // We need to ensure that the parameters from each request (method overload) is accounted for.
          const requestParams: OperationParameterDetails[] = [];
          requests.map((request) => {
            request.parameters?.map((parameter) => {
              requestParams.push({
                operationName,
                parameter,
                targetMediaType: request.protocol.http?.knownMediaType
              });
              if (parameter.required) {
                if ((parameter as any)["targetProperty"] !== undefined) {
                  (parameter as any)[
                    "targetProperty"
                  ].language.default.isTopLevelParameter = true;
                  (parameter as any)[
                    "targetProperty"
                  ].schema.language.default.isTopLevelParameter = true;
                }
                parameter.language.default.isTopLevelParameter = true;
                parameter.schema.language.default.isTopLevelParameter = true;
              }
              return parameter;
            });
            return request;
          });
          return [...operations, ...requestParams, ...operationParams];
        },
        []
      )
    ];
  }, []);

function getDefaultValue(parameter: Parameter) {
  if (parameter.schema.type === SchemaType.Constant) {
    const constantSchema = parameter.schema as ConstantSchema;
    let defaultValue = getStringForValue(
      constantSchema.value.value,
      constantSchema.valueType.type
    );

    if (
      constantSchema.valueType.type !== SchemaType.String &&
      constantSchema.defaultValue
    ) {
      defaultValue = constantSchema.defaultValue;
    }

    return defaultValue;
  }

  if (!!parameter.clientDefaultValue) {
    return getStringForValue(
      parameter.clientDefaultValue,
      parameter.schema.type
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
  const { useCoreV2 } = getAutorestOptions();

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
  const propertyName = normalizeName(
    parameterName,
    NameType.Property,
    true  /** shouldGuard */
  )
  const sameNameParams = operationParameters.filter(
    (p) => p.name === name || p.nameRef === name
  );
  description += getSchemaTypeDocumentation(parameter.schema);
  const isRequired = getParameterRequired(parameter);
  const isNullable = !!parameter.nullable;

  const collectionFormat = getCollectionFormat(parameter);
  const typeDetails = getTypeForSchema(parameter.schema, false, useCoreV2);
  const paramDetails: ParameterDetails = {
    nameRef: name,
    description:
      isRequired && parameter.implementation === ImplementationLocation.Method
        ? undefined
        : description,
    name,
    propertyName,
    serializedName,
    operationsIn: {
      [operationName]: {
        description
      }
    },
    location: getParameterLocation(parameter),
    required: isRequired,
    nullable: isNullable,
    schemaType: parameter.schema.type,
    parameterPath: getParameterPath(parameter),
    mapper: getMapperOrRef(
      (parameter as VirtualParameter).originalParameter
        ? (parameter as VirtualParameter).originalParameter.schema
        : parameter.schema,
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
    targetMediaType,
    isFlattened: !!parameter.flattened
  };

  if (
    parameter.extensions &&
    parameter.extensions["x-ms-header-collection-prefix"] &&
    typeof paramDetails.mapper !== "string"
  ) {
    (paramDetails.mapper as DictionaryMapper)["headerCollectionPrefix"] =
      parameter.extensions["x-ms-header-collection-prefix"];
  }

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
    parameter.language.default.isTopLevelParameter ? true: false /** shouldGuard */
  );

  const propertyName = normalizeName(
    metadata.name,
    NameType.Property,
    true
  );
  if (parameter.groupedBy) {
    const groupedByName = getLanguageMetadata(
      parameter.groupedBy.language
    ).name;
    return [
      ...(!parameter.required && !parameter.groupedBy.required
        ? ["options"]
        : []),
      normalizeName(groupedByName, NameType.Parameter, true /** shouldGuard */),
      propertyName
    ];
  }

  return isClientImplementation(parameter) || parameter.required
    ? name
    : ["options", propertyName];
}

const isClientImplementation = (parameter: Parameter) =>
  parameter.implementation === ImplementationLocation.Client;

function getParameterLocation(parameter: Parameter): ParameterLocation {
  const originalLocaltion =
    parameter.protocol.http?.in ||
    (parameter as VirtualParameter).originalParameter.protocol.http?.in;
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
  const httpInfo =
    parameter.protocol.http ||
    (parameter as VirtualParameter).originalParameter.protocol.http;
  if (!httpInfo) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  const style = httpInfo.style;

  if (httpInfo.in !== ParameterLocation.Query || !style) {
    return undefined;
  }

  const getStyle = (value: QueryCollectionFormat) =>
    Object.keys(QueryCollectionFormat).find(
      (key) => (QueryCollectionFormat as any)[key] === value
    );

  let queryCollectionFormat: QueryCollectionFormat;
  switch (style) {
    case AllSerializationStyles.SpaceDelimited:
      queryCollectionFormat = QueryCollectionFormat.Ssv;
      break;
    case AllSerializationStyles.Form:
      queryCollectionFormat = httpInfo?.explode
        ? QueryCollectionFormat.Multi
        : QueryCollectionFormat.Csv;
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
  targetMediaType,
  parameter
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
    targetMediaType: targetMediaType || KnownMediaType.Json,
    isFlattened: parameter.flattened
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
  const existingParam = sameNameParams.find((p) =>
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
