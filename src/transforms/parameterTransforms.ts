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
import { normalizeName, NameType } from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import {
  isSchemaType,
  getMapperClassName,
  transformMapper
} from "./mapperTransforms";
import { isEqual, isNil } from "lodash";
import { getTypeForSchema } from "../utils/schemaHelpers";
import { getStringForValue } from "../utils/valueHelpers";
import { TOPLEVEL_OPERATIONGROUP } from "./constants";
import { ClientOptions } from "../models/clientDetails";
import { PropertyKind } from "../models/modelDetails";
import { KnownMediaType } from "@azure-tools/codegen";

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
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
    kind: PropertyKind.Primitive
  },
  isSynthetic: true,
  schemaType: SchemaType.Object
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
      hasXmlMetadata
    )
  );

  // Adding credentials parameter as a Synthetic parameter, this is to treat this as any another parameter
  // during generation and remove the need of special handling it.
  if (options.addCredentials) {
    const creds = buildCredentialsParameter();
    parameters.unshift(creds);
  }

  return parameters;
}

const extractOperationParameters = (codeModel: CodeModel) =>
  codeModel.operationGroups.reduce<OperationParameterDetails[]>((acc, og) => {
    const groupName =
      getLanguageMetadata(og.language).name || TOPLEVEL_OPERATIONGROUP;
    return [
      ...acc,
      ...og.operations.reduce<OperationParameterDetails[]>(
        (operations, operation) => {
          const opName = getLanguageMetadata(operation.language).name;
          const operationName = `${groupName}_${opName}`.toLowerCase();
          const operationParams: OperationParameterDetails[] = (
            operation.request.parameters || []
          ).map(p => ({ parameter: p, operationName }));
          return [...operations, ...operationParams];
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
  hasXmlMetadata: boolean
): void {
  const parameterSerializedName = getParameterName(parameter);
  const description = getLanguageMetadata(parameter.language).description;

  if (!parameterSerializedName) {
    throw new Error(
      `Couldn't get parameter serializedName for operation: ${operationName}`
    );
  }
  const sameNameParams = operationParameters.filter(
    p => p.serializedName === parameterSerializedName
  );

  if (!sameNameParams.length) {
    const name = normalizeName(parameterSerializedName, NameType.Property);
    const collectionFormat = getCollectionFormat(parameter);
    const typeDetails = getTypeForSchema(parameter.schema);
    const paramDetails: ParameterDetails = {
      nameRef: name,
      description,
      name,
      serializedName: parameterSerializedName,
      operationsIn: [operationName],
      location: getParameterLocation(parameter),
      required: getParameterRequired(parameter),
      schemaType: parameter.schema.type,
      parameterPath: getParameterPath(parameter),
      mapper: getMapperOrRef(
        parameter.schema,
        parameterSerializedName,
        parameter.required,
        hasXmlMetadata
      ),
      isGlobal: getIsGlobal(parameter),
      parameter,
      collectionFormat,
      implementationLocation: parameter.implementation,
      typeDetails,
      defaultValue: getDefaultValue(parameter),
      skipEncoding: getSkipEncoding(parameter)
    };
    operationParameters.push(paramDetails);

    return;
  }

  //Disambiguate parameter
  disambiguateParameter(
    parameter,
    operationParameters,
    parameterSerializedName,
    sameNameParams,
    operationName,
    hasXmlMetadata
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
  const serializedName =
    metadata.serializedName || normalizeName(metadata.name, NameType.Property);
  return isClientImplementation(parameter) || parameter.required
    ? serializedName
    : ["options", serializedName];
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
  const fromExtension =
    parameter.extensions && parameter.extensions["x-ms-requestBody-name"];
  const parameterSerializedName = getLanguageMetadata(parameter.language)
    .serializedName;

  return fromExtension || parameterSerializedName;
}

export function disambiguateParameter(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  serializedName: string,
  sameNameParams: ParameterDetails[],
  operationName: string,
  hasXmlMetadata: boolean
) {
  const existingParam = sameNameParams.find(p =>
    isEqual(p.parameter, parameter)
  );

  if (existingParam) {
    if (existingParam.operationsIn) {
      existingParam.operationsIn.push(operationName);
    } else {
      existingParam.operationsIn = [operationName];
    }
    return;
  } else {
    // Since there is already a parameter with the same name, we need to ad a sufix
    const name = normalizeName(serializedName, NameType.Property);
    const nameRef = `${name}${sameNameParams.length}`;
    const collectionFormat = getCollectionFormat(parameter);
    const description = getLanguageMetadata(parameter.language).description;
    const typeDetails = getTypeForSchema(parameter.schema);

    operationParameters.push({
      nameRef,
      name,
      description,
      serializedName,
      operationsIn: [operationName],
      required: parameter.required,
      schemaType: parameter.schema.type,
      parameterPath: getParameterPath(parameter),
      location: getParameterLocation(parameter),
      mapper: getMapperOrRef(
        parameter.schema,
        serializedName,
        parameter.required,
        hasXmlMetadata
      ),
      typeDetails,
      isGlobal: getIsGlobal(parameter),
      parameter,
      collectionFormat,
      implementationLocation: parameter.implementation,
      defaultValue: getDefaultValue(parameter),
      skipEncoding: getSkipEncoding(parameter)
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
