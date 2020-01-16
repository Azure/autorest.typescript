// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  Parameter,
  ParameterLocation,
  SchemaType,
  Schema,
  ImplementationLocation,
  SerializationStyle
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

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
}

export function transformParameters(codeModel: CodeModel): ParameterDetails[] {
  let parameters: ParameterDetails[] = [];
  extractOperationParameters(codeModel).forEach(p =>
    populateOperationParameters(p.parameter, parameters, p.operationName)
  );

  return parameters;
}

const extractOperationParameters = (codeModel: CodeModel) =>
  codeModel.operationGroups.reduce<OperationParameterDetails[]>((acc, og) => {
    const groupName = getLanguageMetadata(og.language).name;
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

export function populateOperationParameters(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  operationName: string
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
      required: parameter.required,
      schemaType: parameter.schema.type,
      parameterPath: getParameterPath(parameter),
      mapper: getMapperOrRef(
        parameter.schema,
        parameterSerializedName,
        parameter.required
      ),
      isGlobal: getIsGlobal(parameter),
      parameter,
      collectionFormat,
      implementationLocation: parameter.implementation,
      typeDetails
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
    operationName
  );
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
  if (!parameter.protocol.http) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  return parameter.protocol.http.in;
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
  operationName: string
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
        parameter.required
      ),
      typeDetails,
      isGlobal: getIsGlobal(parameter),
      parameter,
      collectionFormat,
      implementationLocation: parameter.implementation
    });
  }
}

function getMapperOrRef(
  schema: Schema,
  serializedName: string,
  required?: boolean
) {
  if (isSchemaType([SchemaType.Object], schema)) {
    const className = getMapperClassName(schema);
    return className;
  }

  return transformMapper({ schema, options: { serializedName, required } });
}
