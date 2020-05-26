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
  OptionalKind,
  WriterFunctionOrValue
} from "ts-morph";
import { keys, pull, isEqual } from "lodash";
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
  OperationResponseDetails,
  OperationGroupDetails
} from "../models/operationDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { ImplementationLocation, Parameter } from "@azure-tools/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { getStringForValue } from "../utils/valueHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
import {
  getResponseTypeName,
  getAllModelsNames
} from "./utils/responseTypeUtils";
import { getParameterDescription } from "../utils/getParameterDescription";

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
  writeClientModels(clientDetails, modelsIndexFile);
}

const writeClientModels = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => {
  let clientOptionalParams = clientDetails.parameters.filter(
    p =>
      (!p.required || p.defaultValue) &&
      p.implementationLocation === ImplementationLocation.Client
  );

  writeOptionalParameters(
    clientDetails.name,
    "",
    clientOptionalParams,
    modelsIndexFile,
    { baseClass: "coreHttp.ServiceClientOptions" }
  );
};

const writeOperationModels = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => {
  const modelsNames = getAllModelsNames(clientDetails);
  return clientDetails.operationGroups.forEach(operationGroup => {
    operationGroup.operations.forEach(operation => {
      writeOptionsParameter(
        clientDetails,
        operationGroup,
        operation,
        modelsIndexFile
      );
      writeResponseTypes(operation, modelsIndexFile, modelsNames);
    });
  });
};

/**
 * Writes the options parameter model containing all the optional parameters
 */
function writeOptionsParameter(
  clientDetails: ClientDetails,
  operationGroup: OperationGroupDetails,
  operation: OperationDetails,
  sourceFile: SourceFile
) {
  const operationParameters = filterOperationParameters(
    clientDetails.parameters,
    operation,
    { includeOptional: true, includeGroupedParameters: true }
  );

  const operationGroupName = normalizeName(
    operationGroup.name,
    NameType.Interface
  );

  const optionalParams = operationParameters.filter(
    ({ required }) => !required
  );

  const operationName = normalizeName(operation.name, NameType.Interface);
  const operationRequestMediaTypes = new Set<KnownMediaType>();
  operation.requests.forEach(
    r => r.mediaType && operationRequestMediaTypes.add(r.mediaType)
  );
  writeOptionalParameters(
    operationGroupName,
    operationName,
    optionalParams,
    sourceFile,
    {
      mediaTypes: operationRequestMediaTypes,
      operationFullName: operation.fullName
    }
  );
}

/**
 * This function takes an operation and gets its return type based on
 * the response body and headers
 */
function writeResponseTypes(
  { responses, name, typeDetails: operationType }: OperationDetails,
  modelsIndexFile: SourceFile,
  allModelsNames: Set<string>
) {
  const responseName = getResponseTypeName(
    operationType.typeName,
    allModelsNames
  );

  const addedResponses: {
    name: string;
    response: Partial<OperationResponseDetails>;
  }[] = [];

  responses
    // Filter responses that are not marked as errors and that have either body or headers
    .filter(
      ({ isError, mappers }) =>
        !isError && (mappers.bodyMapper || mappers.headersMapper)
    )
    .forEach(operation => {
      const { statusCodes, ...coreResponse } = operation;
      if (addedResponses.length === 0) {
        // Define possible values for response
        modelsIndexFile.addTypeAlias({
          name: responseName,
          docs: [`Contains response data for the ${name} operation.`],
          isExported: true,
          type: buildResponseType(operation),
          leadingTrivia: writer => writer.blankLine(),
          kind: StructureKind.TypeAlias
        });
        addedResponses.push({ name: responseName, response: coreResponse });
      }

      const existingResponse = addedResponses.find(r => r.name === name);
      if (
        existingResponse &&
        isEqual(existingResponse.response, coreResponse)
      ) {
        throw new Error(
          "Handling multiple response types is not yet implemented"
        );
      }
    });
}

/**
 * Interface to store necessary data about a part of the response (headers or body) to generate
 * the response type
 */
interface GeneratedResponseDetails {
  mainProperties?: OptionalKind<PropertySignatureStructure>[];
  internalResponseProperties: OptionalKind<PropertySignatureStructure>[];
  intersectionType?: string;
}

/**
 * Extracts the necessary data from the response body to generate a response type
 */
function getBodyProperties({
  types: { bodyType }, mediaType
}: OperationResponseDetails): GeneratedResponseDetails | undefined {
  if (!bodyType && mediaType !== KnownMediaType.Binary) {
    return;
  }

  const hasBodyProperty =
    bodyType?.kind !== PropertyKind.Composite &&
    bodyType?.kind !== PropertyKind.Dictionary;
  // Used when the bodyType is not a primitive, or for binary media types with no defined bodyType.
  const mainProperties: OptionalKind<PropertySignatureStructure>[] = [];
  // These are the additional default properties to add under the _response property in the response type
  const internalResponseProperties: OptionalKind<PropertySignatureStructure>[] = [];

  if (bodyType) {
    if (hasBodyProperty) {
      mainProperties.push({
        name: "body", // Is there any extension that overrides this?
        type: bodyType.typeName,
        docs: ["The parsed response body."]
      });
    }
    internalResponseProperties.push(
      {
        name: "bodyAsText",
        type: "string",
        leadingTrivia: writer => writer.blankLine(),
        docs: ["The response body as text (string format)"]
      },
      {
        name: "parsedBody",
        docs: ["The response body as parsed JSON or XML"],
        type: bodyType.typeName,
        leadingTrivia: writer => writer.blankLine()
      });
  } else if (mediaType === KnownMediaType.Binary) {
    mainProperties.push(
      {
        name: "blobBody",
        type: "Promise<Blob>",
        docs: ["BROWSER ONLY\n\nThe response body as a browser Blob.\nAlways `undefined` in node.js."],
        hasQuestionToken: true
      },
      {
        name: "readableStreamBody",
        type: "NodeJS.ReadableStream",
        docs: ["NODEJS ONLY\n\nThe response body as a node.js Readable stream.\nAlways `undefined` in the browser."],
        hasQuestionToken: true
      });
  }

  return {
    mainProperties,
    // intersectionType is used when the body is Composite, this means that there is a model
    // representing this object and the response type will need to be an intersection.
    ...(!hasBodyProperty && { intersectionType: bodyType?.typeName }),
    internalResponseProperties
  };
}

/**
 * Extracts the necessary data from the response headers to generate a response type
 */
function getHeadersProperties({
  types: { headersType }
}: OperationResponseDetails): GeneratedResponseDetails | undefined {
  if (!headersType) {
    return;
  }
  const { typeName } = headersType;

  return {
    // These are the additional default properties to add under the _response property in the response type
    internalResponseProperties: [
      {
        name: "parsedHeaders",
        docs: ["The parsed HTTP response headers."],
        type: typeName
      }
    ],
    // Headers are always represented as Composite, so we will never need to add a headers property to the response type.
    mainProperties: [],
    // Headers are always represented as Composite, so its type will always be added as an intersection to the response type.
    intersectionType: typeName
  };
}

type IntersectionTypeParameters = [
  WriterFunctionOrValue,
  WriterFunctionOrValue,
  ...WriterFunctionOrValue[]
];

/**
 * This function builds the type to represent an Operation response, taking the response headers and body
 * to create a type that contains all the properties that a response may include
 */
function buildResponseType(
  operationResponse: OperationResponseDetails
): WriterFunction {
  // First we get the response Headers and Body details
  const headersProperties = getHeadersProperties(operationResponse);
  const bodyProperties = getBodyProperties(operationResponse);

  const innerResponseProperties = [
    ...(bodyProperties?.internalResponseProperties || []),
    ...(headersProperties?.internalResponseProperties || [])
  ];
  const innerTypeWriter = Writers.objectType({
    properties: [
      ...(bodyProperties?.mainProperties || []),
      {
        name: "_response",
        docs: ["The underlying HTTP response."],
        type: innerResponseProperties.length ? Writers.intersectionType(
          "coreHttp.HttpResponse",
          Writers.objectType({
            properties: innerResponseProperties
          })
        ) : "coreHttp.HttpResponse",
        leadingTrivia: writer => writer.blankLine()
      }
    ]
  });

  let intersectionTypes: WriterFunctionOrValue[] = [innerTypeWriter];
  bodyProperties?.intersectionType &&
    intersectionTypes.unshift(bodyProperties.intersectionType);
  headersProperties?.intersectionType &&
    intersectionTypes.unshift(headersProperties.intersectionType);

  /**
   * Here we define our response type:
   *    When we have either a Body or Header intersection type, the Response type will be
   *    an intersection with them i.e.
   *    type OperationResponse = BodyType & HeadersType & {
   *       _response: {
   *         bodyAsText: string,
   *         parsedBody: BodyType,
   *         parsedHeaders: HeadersType
   *      }
   *    }
   *
   *    When we don't have any intersection types, the response type will just be the innerType i.e
   *    type OperationResponse = {
   *       body: number
   *       _response: {
   *         bodyAsText: string,
   *         parsedBody: number
   *      }
   *    }
   */
  return intersectionTypes.length > 1
    ? // Using apply instead of calling the method directly to be able to conditionally pass
    // parameters, this way we don't have to have a nested if/else tree to decide which parameters
    // to pass, we will pass any intersectionTypes availabe plus the innerType. When there are no intersection types
    // we just return innerType
    Writers.intersectionType.apply(
      Writers,
      intersectionTypes as IntersectionTypeParameters
    )
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
      docs: model.description ? [model.description] : [],
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
      docs: model.description ? [model.description] : [],
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

interface WriteOptionalParametersOptions {
  baseClass?: string;
  mediaTypes?: Set<KnownMediaType>;

  /**
   * Useful for getting parameter description.
   */
  operationFullName?: string;
}

function getOptionalGroups(
  optionalParams: ParameterDetails[]
): PropertySignatureStructure[] {
  let optionalGroups: Parameter[] = [];

  optionalParams
    .filter(({ parameter: { groupedBy } }) => groupedBy && !groupedBy.required)
    .forEach(p => {
      const { parameter } = p;
      const groupName = getLanguageMetadata(parameter.groupedBy!.language).name;
      const isAlreadyTracked = optionalGroups.some(p => {
        const { name } = getLanguageMetadata(p.language);
        return name === groupName;
      });

      if (parameter.groupedBy && !isAlreadyTracked) {
        optionalGroups.push(parameter.groupedBy);
      }
      pull(optionalParams, p);
    });

  return optionalGroups.map(group => {
    const { name, description } = getLanguageMetadata(group.language);
    return {
      name: name,
      hasQuestionToken: !group.required,
      type: normalizeName(name, NameType.Interface),
      docs: [description],
      kind: StructureKind.PropertySignature
    };
  });
}

function writeOptionalParameters(
  operationGroupName: string,
  operationName: string,
  optionalParams: ParameterDetails[],
  modelsIndexFile: SourceFile,
  { baseClass, mediaTypes, operationFullName }: WriteOptionalParametersOptions
) {
  if (!optionalParams || !optionalParams.length) {
    return;
  }

  const optionalGroupDeclarations = getOptionalGroups(optionalParams);

  const mediaTypesCount = mediaTypes?.size ?? 0;
  if (mediaTypesCount > 1) {
    // Create an optional params for each media type.
    const interfaceNames: string[] = [];
    for (const mediaType of mediaTypes!.values()) {
      const name = `${operationGroupName}${operationName}$${mediaType}OptionalParams`;
      interfaceNames.push(name);
      modelsIndexFile.addInterface({
        name: name,
        docs: ["Optional parameters."],
        isExported: true,
        extends: [baseClass || "coreHttp.OperationOptions"],
        properties: [
          ...optionalGroupDeclarations,
          ...optionalParams
            .filter(p => !p.targetMediaType || p.targetMediaType === mediaType)
            .map<PropertySignatureStructure>(p => {
              const description = getParameterDescription(p, operationFullName);
              return {
                name: p.name,
                hasQuestionToken: true,
                type: p.typeDetails.typeName,
                docs: description ? [description] : undefined,
                kind: StructureKind.PropertySignature
              };
            })
        ]
      });
    }
  } else {
    modelsIndexFile.addInterface({
      name: `${operationGroupName}${operationName}OptionalParams`,
      docs: ["Optional parameters."],
      isExported: true,
      extends: [baseClass || "coreHttp.OperationOptions"],
      properties: [
        ...optionalGroupDeclarations,
        ...optionalParams.map<PropertySignatureStructure>(p => {
          const description = getParameterDescription(p, operationFullName);
          return {
            name: p.name,
            hasQuestionToken: true,
            type: p.typeDetails.typeName,
            docs: description ? [description] : undefined,
            kind: StructureKind.PropertySignature
          };
        })
      ]
    });
  }
}

/**
 * Extracts all properties from ObjectDetails and returns a list of PropertySignatureStructure
 * @param objectDetails Object description
 */
function getProperties(
  objectDetails: ObjectDetails
): PropertySignatureStructure[] {
  const { properties } = objectDetails;
  const getTypename = (property: PropertyDetails) => {
    if (property.isConstant) {
      return `"${getStringForValue(
        property.defaultValue,
        property.type,
        false //quoted
      )}"`;
    }

    return property.name === "siblings"
      ? `${(objectDetails as PolymorphicObjectDetails).unionName}[]`
      : property.type;
  };

  return properties
    .filter(property => !property.isDiscriminator)
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
  const discriminatorValues = (model as PolymorphicObjectDetails)
    .discriminatorValues;
  if (!discriminatorValues) {
    return properties;
  }

  const discProps = keys(discriminatorValues).map<PropertySignatureStructure>(
    key => ({
      docs: [
        `Polymorphic discriminator, which specifies the different types this object can be`
      ],
      name: key,
      type: discriminatorValues[key].map(disc => `"${disc}"`).join(" | "),
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
