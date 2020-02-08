// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "../models/clientDetails";
import {
  Project,
  PropertySignatureStructure,
  StructureKind,
  SourceFile,
  Writers,
  WriterFunction,
  OptionalKind
} from "ts-morph";
import { keys } from "lodash";
import {
  ObjectKind,
  PolymorphicObjectDetails,
  ObjectDetails,
  PropertyDetails,
  PropertyKind
} from "../models/modelDetails";
import { normalizeName, NameType } from "../utils/nameUtils";
import { filterOperationParameters } from "./utils/parameterUtils";
import {
  OperationDetails,
  OperationResponseDetails
} from "../models/operationDetails";
import { ParameterDetails } from "../models/parameterDetails";

export function generateModels(clientDetails: ClientDetails, project: Project) {
  const modelsIndexFile = project.createSourceFile(
    `${clientDetails.srcPath}/models/index.ts`,
    undefined,
    { overwrite: true }
  );

  modelsIndexFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  writeUniontypes(clientDetails, modelsIndexFile);
  writeObjects(clientDetails, modelsIndexFile);
  writeChoices(clientDetails, modelsIndexFile);
  writeOperationModels(clientDetails, modelsIndexFile);
}

const writeOperationModels = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) =>
  clientDetails.operationGroups.forEach(operationGroup => {
    operationGroup.operations.forEach(operation => {
      // Add interfaces for operation optional parameters
      const operationGroupName = normalizeName(
        operationGroup.name,
        NameType.Interface
      );
      const optionalParams = filterOperationParameters(
        clientDetails.parameters,
        operation,
        { includeOptional: true }
      ).filter(p => !p.required);

      const operationName = normalizeName(operation.name, NameType.Interface);
      writeOptionalParameters(
        operationGroupName,
        operationName,
        optionalParams,
        modelsIndexFile
      );
      writeResponseTypes(operation, modelsIndexFile);
    });
  });

function writeResponseTypes(
  { responses, name, typeDetails: operationType }: OperationDetails,
  modelsIndexFile: SourceFile
) {
  const responseName = `${operationType.typeName}Response`;

  responses
    .filter(
      ({ isError, mappers }) =>
        !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
    )
    .forEach(operation => {
      // Define possible values for response
      const responseType = operation.types.bodyType || {
        typeName: "string",
        kind: PropertyKind.Primitive
      };

      const responseValueType = responseType.typeName;

      if (responseType.isConstant) {
        if (responseType.defaultValue === undefined) {
          throw new Error(
            `OperationResponse type does not have a defaultValue (operation: ${name})`
          );
        }

        if (responseType.typeName === undefined) {
          throw new Error(
            `OperationResponse type does not have a modelTypeName (operation: ${name})`
          );
        }

        let defaultValue = responseType.defaultValue;

        // Get quoted value for string
        if (responseType.typeName === "string" && defaultValue !== "null") {
          defaultValue = `"${defaultValue}"`;
        }

        modelsIndexFile.addTypeAlias({
          name: responseValueType,
          docs: [`Defines values for ${responseType.typeName}.`],
          isExported: true,
          type: defaultValue,
          leadingTrivia: writer => writer.blankLine()
        });
      }

      modelsIndexFile.addTypeAlias({
        name: responseName,
        docs: [`Contains response data for the ${name} operation.`],
        isExported: true,
        type: generateResponseType(operation),
        leadingTrivia: writer => writer.blankLine()
      });
    });
}

interface GeneratedResponseDetails {
  typeName: string;
  mainProperties?: OptionalKind<PropertySignatureStructure>[];
  internalResponseProperties: OptionalKind<PropertySignatureStructure>[];
}

function getBodyProperties({
  types: { bodyType }
}: OperationResponseDetails): GeneratedResponseDetails | undefined {
  if (!bodyType) {
    return;
  }

  const isPrimitive = bodyType.kind === PropertyKind.Primitive;
  const isComposite = bodyType.kind === PropertyKind.Composite;

  const typeName = isPrimitive
    ? bodyType.typeName
    : normalizeName(bodyType.typeName, NameType.Interface);

  return {
    typeName,
    mainProperties: !isComposite
      ? [
          {
            name: "body", // Is there any extension that overrides this?
            type: typeName,
            docs: ["The parsed response body."]
          }
        ]
      : [],
    internalResponseProperties: [
      {
        name: "bodyAsText",
        type: "string",
        leadingTrivia: writer => writer.blankLine(),
        docs: ["The response body as text (string format)"]
      },
      {
        name: "parsedBody",
        docs: ["The response body as parsed JSON or XML"],
        type: typeName,
        leadingTrivia: writer => writer.blankLine()
      }
    ]
  };
}

function getHeadersProperties({
  types: { headersType }
}: OperationResponseDetails): GeneratedResponseDetails | undefined {
  if (!headersType) {
    return;
  }

  const typeName = normalizeName(headersType.typeName, NameType.Interface);

  return {
    typeName,
    internalResponseProperties: [
      {
        name: "parsedHeaders",
        docs: ["The parsed HTTP response headers."],
        type: typeName
      }
    ],
    mainProperties: []
  };
}

function generateResponseType(
  operationResponse: OperationResponseDetails
): WriterFunction {
  const headersProperties = getHeadersProperties(operationResponse);
  const bodyProperties = getBodyProperties(operationResponse);
  const isBodyComposite =
    operationResponse.types.bodyType?.kind === PropertyKind.Composite;

  const innerTypeWriter = Writers.objectType({
    properties: [
      ...(bodyProperties?.mainProperties || []),
      {
        name: "_response",
        docs: ["The underlying HTTP response."],
        type: Writers.intersectionType(
          "coreHttp.HttpResponse",
          Writers.objectType({
            properties: [
              ...(bodyProperties?.internalResponseProperties || []),
              ...(headersProperties?.internalResponseProperties || [])
            ]
          })
        ),
        leadingTrivia: writer => writer.blankLine()
      }
    ]
  });

  const parameters = [
    (isBodyComposite && bodyProperties?.typeName) || "",
    headersProperties?.typeName || "",
    innerTypeWriter
  ].filter(p => p !== "") as any;

  return parameters.length > 1
    ? Writers.intersectionType.apply(Writers, parameters)
    : innerTypeWriter;
}

const writeChoices = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) =>
  clientDetails.unions.forEach(choice => {
    modelsIndexFile.addTypeAlias({
      name: choice.name,
      docs: [choice.description],
      isExported: true,
      type: choice.values.join(" | "),
      trailingTrivia: writer => writer.newLine()
    });
  });

const writeObjects = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => clientDetails.objects.forEach(writeObjectSignature(modelsIndexFile));

const writeObjectSignature = (modelsIndexFile: SourceFile) => (
  model: ObjectDetails
) => {
  const properties = getPropertiesSignatures(model);
  const parents = model.parents.map(p => p.name).join(" & ");

  if (parents) {
    modelsIndexFile.addTypeAlias({
      name: model.name,
      docs: [model.description],
      isExported: true,
      type: Writers.intersectionType(
        parents,
        Writers.objectType({ properties })
      ),
      leadingTrivia: writer => writer.blankLine()
    });
  } else {
    modelsIndexFile.addInterface({
      name: model.name,
      docs: [model.description],
      isExported: true,
      properties,
      leadingTrivia: writer => writer.blankLine()
    });
  }
};

/**
 * This function writes all UnionTypes, these types represent the options a request can use for a Polymorphic parameter
 */
function writeUniontypes({ objects }: ClientDetails, modelsFile: SourceFile) {
  objects
    .filter(
      obj => obj.kind === ObjectKind.Polymorphic && obj.children.length > 0
    )
    .forEach(obj => {
      const polymorphicObject = obj as PolymorphicObjectDetails;
      const childrenNames = [
        obj.name,
        ...polymorphicObject.children.map(c => {
          return c.schema.children && c.schema.children.immediate.length
            ? `${c.name}Union`
            : c.name;
        })
      ];
      modelsFile.addTypeAlias({
        name: `${obj.name}Union`,
        isExported: true,
        type: childrenNames.join(" | "),
        trailingTrivia: writer => writer.newLine()
      });
    });
}

function writeOptionalParameters(
  operationGroupName: string,
  operationName: string,
  optionalParams: ParameterDetails[],
  modelsIndexFile: SourceFile
) {
  if (!optionalParams || !optionalParams.length) {
    return;
  }

  modelsIndexFile.addInterface({
    name: `${operationGroupName}${operationName}OptionalParams`,
    docs: ["Optional parameters."],
    isExported: true,
    extends: ["coreHttp.RequestOptionsBase"],
    properties: optionalParams.map<PropertySignatureStructure>(p => ({
      name: p.name,
      hasQuestionToken: !p.required,
      type: p.typeDetails.typeName,
      docs: p.description ? [p.description] : undefined,
      kind: StructureKind.PropertySignature
    }))
  });
}

/**
 * Extracts all properties from ObjectDetails and returns a list of PropertySignatureStructure
 * @param objectDetails Object description
 */
function getProperties(
  objectDetails: ObjectDetails
): PropertySignatureStructure[] {
  const { properties } = objectDetails;
  const getTypename = (property: PropertyDetails) =>
    property.name === "siblings"
      ? `${(objectDetails as PolymorphicObjectDetails).unionName}[]`
      : property.type;

  return properties
    .filter(property => !property.isConstant && !property.isDiscriminator)
    .map<PropertySignatureStructure>(property => ({
      name: property.name,
      hasQuestionToken: !property.required,
      isReadonly: property.readOnly,
      type: getTypename(property),
      docs: property.description ? [property.description] : undefined,
      kind: StructureKind.PropertySignature
    }));
}

/**
 * This function enahnces a list of PropertySignatures with the Polymorphic discriminator property if needed
 * @param model ObjectDetails
 * @param properties Properties to enhance
 */
function withDiscriminator(
  model: ObjectDetails,
  properties: PropertySignatureStructure[]
): PropertySignatureStructure[] {
  const discriminator = (model as PolymorphicObjectDetails).discriminator;
  if (!discriminator) {
    return properties;
  }

  const discProps = keys(discriminator).map<PropertySignatureStructure>(
    key => ({
      docs: [
        `Polymorphic discriminator, which specifies the different types this object can be`
      ],
      name: key,
      type: discriminator[key].map(disc => `"${disc}"`).join(" | "),
      kind: StructureKind.PropertySignature
    })
  );

  return [...discProps, ...properties];
}

/**
 * This function enahnces a list of PropertySignatures with the additional Properties property if needed
 * @param model ObjectDetails
 * @param properties Properties to enhance
 */
function withAdditionalProperties(
  model: ObjectDetails,
  properties: PropertySignatureStructure[]
): PropertySignatureStructure[] {
  if (!model.hasAdditionalProperties) {
    return properties;
  }

  return [
    {
      docs: [
        `Describes unknown properties. The value of an unknown property can be of "any" type.`
      ],
      name: "[property: string]",
      type: "any",
      kind: StructureKind.PropertySignature
    },
    ...properties
  ];
}

/**
 * Gets an enhanced list of Properties to construct an Object signature
 * @param objectDetails Object description
 */
const getPropertiesSignatures = (objectDetails: ObjectDetails) =>
  withDiscriminator(
    objectDetails,
    withAdditionalProperties(objectDetails, getProperties(objectDetails))
  );
