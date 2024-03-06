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
  WriterFunctionOrValue,
  InterfaceDeclarationStructure,
  InterfaceDeclaration
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
  OperationResponseDetails
} from "../models/operationDetails";
import { ParameterDetails } from "../models/parameterDetails";
import {
  HttpMethod,
  ImplementationLocation,
  Parameter,
  SchemaType
} from "@autorest/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { getStringForValue } from "../utils/valueHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
import {
  getResponseTypeName,
  getAllModelsNames
} from "./utils/responseTypeUtils";
import { getParameterDescription } from "../utils/getParameterDescription";
import { UnionDetails } from "../models/unionDetails";
import { getAutorestOptions } from "../autorestSession";

export function generateModels(clientDetails: ClientDetails, project: Project) {
  const { useCoreV2, srcPath } = getAutorestOptions();
  const modelsIndexFile = project.createSourceFile(
    `${srcPath}/models/index.ts`,
    undefined,
    { overwrite: true }
  );

  if (!useCoreV2) {
    modelsIndexFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });
  } else {
    modelsIndexFile.addImportDeclaration({
      namespaceImport: "coreClient",
      moduleSpecifier: "@azure/core-client"
    });
    modelsIndexFile.addImportDeclaration({
      namespaceImport: "coreRestPipeline",
      moduleSpecifier: "@azure/core-rest-pipeline"
    });
    modelsIndexFile.addImportDeclaration({
      namespaceImport: "coreHttpCompat",
      moduleSpecifier: "@azure/core-http-compat"
    });
  }

  writeUniontypes(clientDetails, modelsIndexFile);
  writeObjects(clientDetails, modelsIndexFile);
  writeChoices(clientDetails, modelsIndexFile);
  writeOperationModels(clientDetails, modelsIndexFile);
  writeClientModels(clientDetails, modelsIndexFile);
  modelsIndexFile.fixUnusedIdentifiers();
  const allTypes = modelsIndexFile.getTypeAliases();
  clientDetails.allTypes = allTypes
    .filter(item => {
      return item.isExported();
    })
    .map(item => {
      return item.getName();
    });
}

const writeClientModels = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => {
  const { useCoreV2, coreHttpCompatMode } = getAutorestOptions();
  let clientOptionalParams = clientDetails.parameters.filter(
    p =>
      (!p.required || p.defaultValue) &&
      p.implementationLocation === ImplementationLocation.Client
  );

  writeOptionalParameters(
    clientDetails.name,
    clientOptionalParams,
    modelsIndexFile,
    {
      baseClass: !useCoreV2
        ? "coreHttp.ServiceClientOptions"
        : coreHttpCompatMode
        ? "coreHttpCompat.ExtendedServiceClientOptions"
        : "coreClient.ServiceClientOptions"
    }
  );
};

const writeOperationModels = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => {
  const modelsNames = getAllModelsNames(clientDetails);
  return clientDetails.operationGroups.forEach(operationGroup => {
    operationGroup.operations.forEach(operation => {
      writeOptionsParameter(clientDetails, operation, modelsIndexFile);
      writeResponseTypes(operation, modelsIndexFile, modelsNames);
    });
  });
};

/**
 * Writes the options parameter model containing all the optional parameters
 */
function writeOptionsParameter(
  clientDetails: ClientDetails,
  operation: OperationDetails,
  sourceFile: SourceFile
) {
  const operationParameters = filterOperationParameters(
    clientDetails.parameters,
    operation,
    { includeOptional: true, includeGroupedParameters: true }
  );

  const optionalParams = operationParameters.filter(
    ({ required, isFlattened }) => !required && !isFlattened
  );

  const operationRequestMediaTypes = new Set<KnownMediaType>();
  operation.requests.forEach(
    r => r.mediaType && operationRequestMediaTypes.add(r.mediaType)
  );
  writeOptionalParameters(
    operation.typeDetails.typeName,
    optionalParams,
    sourceFile,
    {
      mediaTypes: operationRequestMediaTypes,
      operationFullName: operation.fullName,
      operationIsLro: operation.isLro
    }
  );
}

/**
 * This function takes an operation and gets its return type based on
 * the response body and headers
 */
function writeResponseTypes(
  {
    requests,
    responses,
    name,
    typeDetails: operationType,
    isLro
  }: OperationDetails,
  modelsIndexFile: SourceFile,
  allModelsNames: Set<string>
) {
  const { headAsBoolean, useCoreV2 } = getAutorestOptions();

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
          type: buildResponseType(operation, isLro),
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

  if (
    requests[0].method === HttpMethod.Head &&
    addedResponses.length === 0 &&
    headAsBoolean
  ) {
    modelsIndexFile.addTypeAlias({
      name: responseName,
      docs: [`Contains response data for the ${name} operation.`],
      isExported: true,
      type: useCoreV2
        ? `{ 
        body: boolean; 
      }`
        : `{ 
        body: boolean;

        _response: coreHttp.HttpResponse & {
          /** The response body as text (string format) */
          bodyAsText: string;
      
          /** The response body as parsed JSON or XML */
          parsedBody: ResourceGroup;
        };
      }`,
      leadingTrivia: writer => writer.blankLine(),
      kind: StructureKind.TypeAlias
    });
  }
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
  types: { bodyType },
  mediaType
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
  const internalResponseProperties: OptionalKind<
    PropertySignatureStructure
  >[] = [];

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
      }
    );
  } else if (mediaType === KnownMediaType.Binary) {
    mainProperties.push(
      {
        name: "blobBody",
        type: "Promise<Blob>",
        docs: [
          "BROWSER ONLY\n\nThe response body as a browser Blob.\nAlways `undefined` in node.js."
        ],
        hasQuestionToken: true
      },
      {
        name: "readableStreamBody",
        type: "NodeJS.ReadableStream",
        docs: [
          "NODEJS ONLY\n\nThe response body as a node.js Readable stream.\nAlways `undefined` in the browser."
        ],
        hasQuestionToken: true
      }
    );
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
  operationResponse: OperationResponseDetails,
  isLro: boolean = false
): WriterFunction | string {
  const { useCoreV2 } = getAutorestOptions();
  // First we get the response Headers and Body details
  const headersProperties = getHeadersProperties(operationResponse);
  const bodyProperties = getBodyProperties(operationResponse);

  const innerResponseProperties = [
    ...(bodyProperties?.internalResponseProperties || []),
    ...(headersProperties?.internalResponseProperties || [])
  ];

  let intersectionTypes: WriterFunctionOrValue[] = [];
  let innerTypeWriter: WriterFunctionOrValue = Writers.objectType({});

  if (useCoreV2) {
    if (bodyProperties?.mainProperties?.length) {
      innerTypeWriter = Writers.objectType({
        properties: bodyProperties?.mainProperties
      });
      intersectionTypes.push(innerTypeWriter);
    }
  } else {
    innerTypeWriter = Writers.objectType({
      properties: [
        ...(bodyProperties?.mainProperties || []),
        {
          name: "_response",
          docs: ["The underlying HTTP response."],
          type: innerResponseProperties.length
            ? Writers.intersectionType(
                "coreHttp.HttpResponse",
                Writers.objectType({
                  properties: innerResponseProperties
                })
              )
            : "coreHttp.HttpResponse",
          leadingTrivia: writer => writer.blankLine()
        }
      ]
    });

    intersectionTypes = [innerTypeWriter];
  }

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

  if (!useCoreV2) {
    return intersectionTypes.length > 1
      ? // Using apply instead of calling the method directly to be able to conditionally pass
        // parameters, this way we don't have to have a nested if/else tree to decide which parameters
        // to pass, we will pass any intersectionTypes availabe plus the innerType. When there are no intersection types
        // we just return innerType
        Writers.intersectionType.apply(
          Writers,
          intersectionTypes as IntersectionTypeParameters
        )
      : (innerTypeWriter as WriterFunction);
  } else {
    if (intersectionTypes.length > 1) {
      return Writers.intersectionType.apply(
        Writers,
        intersectionTypes as IntersectionTypeParameters
      );
    } else if (intersectionTypes.length == 1) {
      return intersectionTypes[0] as WriterFunction | string;
    } else {
      return "OperationResponse";
    }
  }
}

const writeChoices = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => {
  clientDetails.unions.forEach(choice => {
    if (choice.schemaType === SchemaType.Choice) {
      writeExtensibleChoice(choice, modelsIndexFile);
    } else {
      writeSealedChoice(choice, modelsIndexFile);
    }
  });
};

const writeExtensibleChoice = (
  choice: UnionDetails,
  modelsIndexFile: SourceFile
) => {
  // Only generate helper enums for string and number.
  // Other types will only have the type alias and information about the known values listed in the docs
  if (
    choice.itemType === SchemaType.Number ||
    choice.itemType == SchemaType.String
  ) {
    const enumName = getExtensibleEnumName(choice);
    modelsIndexFile.addEnum({
      isConst: false,
      isExported: true,
      name: enumName,
      docs: [
        `Known values of {@link ${choice.name}} that the service accepts.`
      ],
      members: choice.properties.map(p => ({
        name: p.name,
        value: p.value,
        docs: [p.description ? p.description : p.name]
      }))
    });
  }

  modelsIndexFile.addTypeAlias({
    name: getExtensibleEnumTypeName(choice),
    docs: [getExtensibleChoiceDescription(choice)],
    isExported: true,
    type: choice.itemType || SchemaType.String,
    trailingTrivia: writer => writer.newLine()
  });
};

function getExtensibleEnumTypeName(choice: UnionDetails) {
  if (choice?.serializedName?.startsWith("$DO_NOT_NORMALIZE$")) {
    return choice.serializedName.replace("$DO_NOT_NORMALIZE$", "");
  }

  return choice.serializedName ?? choice.name;
}
function getExtensibleEnumName(choice: UnionDetails) {
  return `Known${choice.name}`;
}

// Builds the description based on the choice name. For numbers and strings we need to
// add informationa bout the helper enum we generated.
function getExtensibleChoiceDescription(choice: UnionDetails) {
  const hasEnum = [SchemaType.String, SchemaType.Number].includes(
    choice.itemType || SchemaType.Unknown
  );

  const valueDescriptions = choice.properties
    .map(p => `**${p.value}**${p.description ? `: ${p.description}` : ""}`)
    .join(` \\\n`)
    // Escape the character / to make sure we don't incorrectly announce a comment blocks /** */
    .replace(/^\//g, "\\/")
    .replace(/([^\\])(\/)/g, "$1\\/");
  const enumName = getExtensibleEnumName(choice);
  const enumLink = `{@link ${enumName}} can be used interchangeably with ${choice.name},\n this enum contains the known values that the service supports.`;

  return [
    `${choice.description} \\`,
    ...(hasEnum ? [enumLink] : []),
    `### Known values supported by the service`,
    valueDescriptions
  ].join(" \n");
}

const writeSealedChoice = (
  choice: UnionDetails,
  modelsIndexFile: SourceFile
) => {
  const values = choice.properties
    .map(p =>
      choice.itemType === SchemaType.String ? `"${p.value}"` : p.value
    )
    .join(" | ");

  modelsIndexFile.addTypeAlias({
    name: choice.name,
    docs: [choice.description],
    isExported: true,
    type: values,
    trailingTrivia: writer => writer.newLine()
  });
};

const writeObjects = (
  clientDetails: ClientDetails,
  modelsIndexFile: SourceFile
) => clientDetails.objects.forEach(writeObjectSignature(modelsIndexFile));

const writeObjectSignature = (modelsIndexFile: SourceFile) => (
  model: ObjectDetails
) => {
  modelsIndexFile.addInterface({
    name: model.name,
    docs: model.description ? [model.description] : [],
    isExported: true,
    extends: model.parents.map(p => p.name),
    properties: getPropertiesSignatures(model),
    leadingTrivia: writer => writer.blankLine()
  });
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
        [polymorphicObject.name],
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
  operationIsLro?: boolean;
}

function getOptionalGroups(
  optionalParams: ParameterDetails[]
): PropertySignatureStructure[] {
  let optionalGroups: Parameter[] = [];

  optionalParams
    .filter(
      ({ parameter: { groupedBy, flattened } }) =>
        groupedBy && !groupedBy.required && !flattened
    )
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
      name: normalizeName(name, NameType.Parameter, true),
      hasQuestionToken: !group.required,
      type: normalizeName(name, NameType.Interface),
      docs: [description],
      kind: StructureKind.PropertySignature
    };
  });
}

function writeOptionalParameters(
  typeName: string,
  optionalParams: ParameterDetails[],
  modelsIndexFile: SourceFile,
  {
    baseClass,
    mediaTypes,
    operationFullName,
    operationIsLro
  }: WriteOptionalParametersOptions
) {
  const { useCoreV2 } = getAutorestOptions();
  const optionalGroupDeclarations = getOptionalGroups(optionalParams);
  function buildParamDetails(p: ParameterDetails): PropertySignatureStructure {
    const description = getParameterDescription(p, operationFullName);
    return {
      name: normalizeName(p.propertyName, NameType.Parameter),
      hasQuestionToken: true,
      type: p.typeDetails.typeName,
      docs: description ? [description] : undefined,
      kind: StructureKind.PropertySignature
    };
  }

  function buildOptionsInterface(
    name: string,
    properties: OptionalKind<PropertySignatureStructure>[]
  ): OptionalKind<InterfaceDeclarationStructure> {
    return {
      name: name,
      docs: ["Optional parameters."],
      isExported: true,
      extends: [
        baseClass ||
          (!useCoreV2
            ? "coreHttp.OperationOptions"
            : "coreClient.OperationOptions")
      ],
      properties: properties
    };
  }

  const mediaTypesCount = mediaTypes?.size ?? 0;
  const interfaces: InterfaceDeclaration[] = [];
  if (mediaTypesCount > 1) {
    // Create an optional params for each media type.
    for (const mediaType of mediaTypes!.values()) {
      interfaces.push(
        modelsIndexFile.addInterface(
          buildOptionsInterface(`${typeName}$${mediaType}OptionalParams`, [
            ...optionalGroupDeclarations,
            ...optionalParams
              .filter(
                p => !p.targetMediaType || p.targetMediaType === mediaType
              )
              .map<PropertySignatureStructure>(buildParamDetails)
          ])
        )
      );
    }
  } else {
    interfaces.push(
      modelsIndexFile.addInterface(
        buildOptionsInterface(`${typeName}OptionalParams`, [
          ...optionalGroupDeclarations,
          ...optionalParams.map<PropertySignatureStructure>(buildParamDetails)
        ])
      )
    );
  }
  if (operationIsLro)
    interfaces.forEach(iface => {
      iface.addProperties([
        {
          name: "updateIntervalInMs",
          type: "number",
          hasQuestionToken: true,
          docs: ["Delay to wait until next poll, in milliseconds."]
        },
        {
          name: "resumeFrom",
          type: "string",
          hasQuestionToken: true,
          docs: [
            "A serialized poller which can be used to resume an existing paused Long-Running-Operation."
          ]
        }
      ]);
    });
}

// Get the type name to generate given a property
function getPropertyTypeName(
  property: PropertyDetails,
  objectDetails: ObjectDetails,
  ignoreNullableOnOptional: boolean
) {
  if (property.isConstant) {
    if (
      property.type === SchemaType.Number ||
      property.type === SchemaType.Boolean
    ) {
      return `${property.defaultValue}`;
    }
    return `"${getStringForValue(
      property.defaultValue,
      property.type,
      false //quoted
    )}"`;
  }

  const typeName =
    property.name === "siblings"
      ? `${(objectDetails as PolymorphicObjectDetails).unionName}[]`
      : property.type;

  if (ignoreNullableOnOptional) {
    return property.nullable && property.required
      ? `${typeName} | null`
      : typeName;
  } else {
    return property.nullable ? `${typeName} | null` : typeName;
  }
}

/**
 * Get a list of properties from an object which aren't marked as discriminators
 * @param objectDetails Object description
 */
function getNonDiscriminatorProperties(
  objectDetails: ObjectDetails
): PropertyDetails[] {
  const { properties } = objectDetails;

  return properties.filter(property => !property.isDiscriminator);
}

function getPropertyDescription({ description, readOnly }: PropertyDetails) {
  if (readOnly) {
    const readonlyNote =
      "NOTE: This property will not be serialized. It can only be populated by the server.";
    return description ? [`${description}\n${readonlyNote}`] : [readonlyNote];
  } else {
    return description ? [description] : undefined;
  }
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
    key => {
      // Remove enclosing quotes from the key to get the real property name
      const propertyName = key.replace(/(^")|("$)/g, "");
      const name = normalizeName(propertyName, NameType.Property);
      return {
        docs: [
          `Polymorphic discriminator, which specifies the different types this object can be`
        ],
        name: `"${name}"`,
        type: discriminatorValues[key].map(disc => `"${disc}"`).join(" | "),
        kind: StructureKind.PropertySignature
      };
    }
  );

  const propertiesWithoutDiscriminator = properties.filter(
    p => !discProps.some(dp => dp.name === p.name)
  );

  return [...discProps, ...propertiesWithoutDiscriminator];
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
const getPropertiesSignatures = (objectDetails: ObjectDetails) => {
  const { ignoreNullableOnOptional = false } = getAutorestOptions();
  const properties = getNonDiscriminatorProperties(objectDetails).map<
    PropertySignatureStructure
  >(property => ({
    name: `"${property.name}"`,
    hasQuestionToken: !property.required,
    isReadonly: property.readOnly,
    type: getPropertyTypeName(
      property,
      objectDetails,
      ignoreNullableOnOptional
    ),
    docs: getPropertyDescription(property),
    kind: StructureKind.PropertySignature
  }));
  return withDiscriminator(
    objectDetails,
    withAdditionalProperties(objectDetails, properties)
  );
};
