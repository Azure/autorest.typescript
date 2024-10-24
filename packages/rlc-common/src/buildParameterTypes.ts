// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  InterfaceDeclarationStructure,
  Project,
  PropertySignatureStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import * as path from "path";
import {
  ObjectSchema,
  ParameterMetadata,
  ParameterMetadatas,
  RLCModel,
  Schema,
  SchemaContext
} from "./interfaces.js";
import {
  getImportModuleName,
  getParameterBaseName,
  getParameterTypeName
} from "./helpers/nameConstructors.js";
import { getImportSpecifier } from "./helpers/importsUtil.js";
import { getObjectInterfaceDeclaration } from "./buildObjectTypes.js";
import { getGeneratedWrapperTypes } from "./helpers/operationHelpers.js";

export function buildParameterTypes(model: RLCModel) {
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `parameters.ts`);
  const partialBodyTypeNames = new Set<string>();
  const parametersFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });
  let hasHeaders = false;

  if (!model.parameters) {
    return;
  }
  for (const requestParameter of model.parameters) {
    const baseParameterName = getParameterBaseName(
      requestParameter.operationGroup,
      requestParameter.operationName
    );
    const requestCount = requestParameter?.parameters?.length ?? 0;
    const topParamName = getParameterTypeName(baseParameterName);
    const subParamNames: string[] = [];

    // We need to loop the requests. An operation with multiple requests means that
    // the operation can get different values for content-type and each value may
    // have a different type associated to it.
    for (let i = 0; i < requestCount; i++) {
      const parameter = requestParameter.parameters[i];
      const internalReferences = new Set<string>();
      // In case we have more than one request to model we need to add a suffix to differentiate
      const nameSuffix = i > 0 ? `${i}` : "";
      const parameterInterfaceName =
        requestCount > 1
          ? `${baseParameterName}RequestParameters${nameSuffix}`
          : topParamName;
      const queryParameterDefinitions = buildQueryParameterDefinition(
        model,
        parameter,
        baseParameterName,
        internalReferences,
        i
      );
      const pathParameterDefinitions = buildPathParameterDefinitions(
        model,
        parameter,
        baseParameterName,
        parametersFile,
        internalReferences,
        i
      );

      const headerParameterDefinitions = buildHeaderParameterDefinitions(
        parameter,
        baseParameterName,
        parametersFile,
        internalReferences,
        i
      );

      const contentTypeParameterDefinition =
        buildContentTypeParametersDefinition(
          parameter,
          baseParameterName,
          internalReferences,
          i
        );

      const bodyParameterDefinition = buildBodyParametersDefinition(
        parameter,
        baseParameterName,
        internalReferences,
        i
      );

      const bodyTypeAlias = buildBodyTypeAlias(parameter, partialBodyTypeNames);
      if (bodyTypeAlias) {
        parametersFile.addTypeAlias(bodyTypeAlias);
      }

      // Add interfaces for body and query parameters
      parametersFile.addInterfaces([
        ...(bodyParameterDefinition ?? []),
        ...(queryParameterDefinitions ?? []),
        ...(pathParameterDefinitions ?? []),
        ...(headerParameterDefinitions ? [headerParameterDefinitions] : []),
        ...(contentTypeParameterDefinition
          ? [contentTypeParameterDefinition]
          : [])
      ]);

      // Add Operation parameters type alias which is composed of the types we generated above
      // plus the common type RequestParameters
      parametersFile.addTypeAlias({
        name: parameterInterfaceName,
        isExported: true,
        type: [...internalReferences, "RequestParameters"].join(" & ")
      });

      subParamNames.push(parameterInterfaceName);

      if (headerParameterDefinitions !== undefined) {
        hasHeaders = true;
      }
    }
    // Add Operation parameters type alias which is composed of the types we generated above
    // plus the common type RequestParameters
    if (requestCount > 1) {
      parametersFile.addTypeAlias({
        name: topParamName,
        isExported: true,
        type: [...subParamNames].join(" | ")
      });
    }
  }

  if (hasHeaders) {
    parametersFile.addImportDeclarations([
      {
        namedImports: ["RawHttpHeadersInput"],
        moduleSpecifier: getImportSpecifier(
          "restPipeline",
          model.importInfo.runtimeImports
        )
      }
    ]);
  }
  parametersFile.addImportDeclarations([
    {
      namedImports: ["RequestParameters"],
      moduleSpecifier: getImportSpecifier(
        "restClient",
        model.importInfo.runtimeImports
      )
    }
  ]);
  if (
    (model.importInfo.internalImports?.parameter?.importsSet?.size ?? 0) > 0
  ) {
    parametersFile.addImportDeclarations([
      {
        namedImports: Array.from(
          model.importInfo.internalImports.parameter.importsSet!
        ),
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./models`,
            esModulesName: `./models.js`
          },
          model
        )
      }
    ]);
  }
  return { path: filePath, content: parametersFile.getFullText() };
}

function buildQueryParameterDefinition(
  model: RLCModel,
  parameters: ParameterMetadatas,
  baseName: string,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure[] | undefined {
  const queryParameters = (parameters?.parameters || []).filter(
    (p) => p.type === "query"
  );

  if (!queryParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const queryParameterInterfaceName = `${baseName}QueryParam${nameSuffix}`;
  const queryParameterPropertiesName = `${baseName}QueryParamProperties`;

  // Get the property signature for each query parameter
  const propertiesDefinition = queryParameters.map((qp) =>
    getPropertyFromSchema(qp.param)
  );
  // Get wrapper types for query parameters
  const wrapperTypesDefinition = getGeneratedWrapperTypes(queryParameters).map(
    (wrapObj) => {
      return getObjectInterfaceDeclaration(
        model,
        wrapObj.name,
        wrapObj,
        [SchemaContext.Input],
        new Set<string>()
      );
    }
  );

  const hasRequiredParameters = propertiesDefinition.some(
    (p) => !p.hasQuestionToken
  );

  const propertiesInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterPropertiesName,
    properties: propertiesDefinition
  };

  const parameterInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterInterfaceName,
    properties: [
      {
        name: "queryParameters",
        type: queryParameterPropertiesName,
        // Mark as optional if there are no required parameters
        hasQuestionToken: !hasRequiredParameters
      }
    ]
  };

  // Mark the queryParameter interface for importing
  internalReferences.add(queryParameterInterfaceName);

  return [...wrapperTypesDefinition, propertiesInterface, parameterInterface];
}

function getPropertyFromSchema(schema: Schema): PropertySignatureStructure {
  const description = schema.description;
  return {
    name: schema.name,
    ...(description && { docs: [{ description }] }),
    type: schema.type,
    hasQuestionToken: !schema.required,
    kind: StructureKind.PropertySignature
  };
}

function buildPathParameterDefinitions(
  model: RLCModel,
  parameters: ParameterMetadatas,
  baseName: string,
  parametersFile: SourceFile,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure[] | undefined {
  const pathParameters = (parameters.parameters || []).filter(
    (p) => p.type === "path"
  );
  if (!pathParameters.length) {
    return undefined;
  }
  const allDefinitions: InterfaceDeclarationStructure[] = [];

  buildClientPathParameters();
  buildMethodWrapParameters();
  return allDefinitions;
  function buildClientPathParameters() {
    // we only have client-level path parameters if the source is from swagger
    if (model.options?.sourceFrom === "TypeSpec") {
      return;
    }
    const clientPathParams = pathParameters.length > 0 ? pathParameters : [];
    const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
    const pathParameterInterfaceName = `${baseName}PathParam${nameSuffix}`;

    const pathInterface = getPathInterfaceDefinition(
      clientPathParams,
      baseName
    );

    if (pathInterface) {
      parametersFile.addInterface(pathInterface);
    }

    internalReferences.add(pathParameterInterfaceName);

    allDefinitions.push({
      isExported: true,
      kind: StructureKind.Interface,
      name: pathParameterInterfaceName,
      properties: [
        {
          name: "pathParameters",
          type: `${baseName}PathParameters`,
          kind: StructureKind.PropertySignature
        }
      ]
    });
  }

  function buildMethodWrapParameters() {
    if (model.options?.sourceFrom === "Swagger") {
      return;
    }
    // we only have method-level path parameters if the source is from typespec
    const methodPathParams = pathParameters.length > 0 ? pathParameters : [];

    // we only need to build the wrapper types if the path parameters are objects
    const wrapperTypesDefinition = getGeneratedWrapperTypes(
      methodPathParams
    ).map((wrap) => {
      return getObjectInterfaceDeclaration(
        model,
        wrap.name,
        wrap,
        [SchemaContext.Input],
        new Set<string>()
      );
    });
    allDefinitions.push(...wrapperTypesDefinition);
  }
}

function getPathInterfaceDefinition(
  pathParameters: ParameterMetadata[],
  baseName: string
): undefined | InterfaceDeclarationStructure {
  const pathInterfaceName = `${baseName}PathParameters`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: pathInterfaceName,
    properties: pathParameters.map((p: ParameterMetadata) =>
      getPropertyFromSchema(p.param)
    )
  };
}

function buildHeaderParameterDefinitions(
  parameters: ParameterMetadatas,
  baseName: string,
  parametersFile: SourceFile,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure | undefined {
  const headerParameters = (parameters.parameters || []).filter(
    (p) => p.type === "header" && p.name !== "contentType"
  );
  if (!headerParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const headerParameterInterfaceName = `${baseName}HeaderParam${nameSuffix}`;

  const headersInterface = getRequestHeaderInterfaceDefinition(
    headerParameters,
    baseName
  );

  let isOptional = true;
  if (headersInterface) {
    parametersFile.addInterface(headersInterface);
    isOptional = !(headersInterface.properties || []).some(
      (prop) => prop.hasQuestionToken === false
    );
  }

  internalReferences.add(headerParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: headerParameterInterfaceName,
    properties: [
      {
        name: "headers",
        type: `RawHttpHeadersInput & ${baseName}Headers`,
        kind: StructureKind.PropertySignature,
        hasQuestionToken: isOptional
      }
    ]
  };
}

function getRequestHeaderInterfaceDefinition(
  headerParameters: ParameterMetadata[],
  baseName: string
): undefined | InterfaceDeclarationStructure {
  const headersInterfaceName = `${baseName}Headers`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: headersInterfaceName,
    properties: headerParameters.map((h: ParameterMetadata) =>
      getPropertyFromSchema(h.param)
    )
  };
}

function buildContentTypeParametersDefinition(
  parameters: ParameterMetadatas,
  baseName: string,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure | undefined {
  const mediaTypeParameters = (parameters.parameters || []).filter(
    (p) => p.type === "header" && p.name === "contentType"
  );
  if (!mediaTypeParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const mediaTypesParameterInterfaceName = `${baseName}MediaTypesParam${nameSuffix}`;

  // Mark the queryParameter interface for importing
  internalReferences.add(mediaTypesParameterInterfaceName);
  const mediaParam = mediaTypeParameters[0].param;

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: mediaTypesParameterInterfaceName,
    properties: [getPropertyFromSchema(mediaParam)]
  };
}

function buildBodyParametersDefinition(
  parameters: ParameterMetadatas,
  baseName: string,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure[] {
  const bodyParameters = parameters.body;
  if (
    !bodyParameters ||
    !bodyParameters?.body ||
    !bodyParameters?.body.length
  ) {
    return [];
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const bodyParameterInterfaceName = `${baseName}BodyParam${nameSuffix}`;
  internalReferences.add(bodyParameterInterfaceName);

  // In case of formData we'd get multiple properties in body marked as partialBody
  if (bodyParameters.isPartialBody) {
    let allOptionalParts = true;
    const propertiesDefinitions: PropertySignatureStructure[] = [];
    for (const param of bodyParameters.body) {
      if (param.required) {
        allOptionalParts = false;
      }

      propertiesDefinitions.push(getPropertyFromSchema(param));
    }

    const formBodyName = `${baseName}FormBody`;
    const formBodyInterface: InterfaceDeclarationStructure = {
      isExported: true,
      kind: StructureKind.Interface,
      name: formBodyName,
      properties: propertiesDefinitions
    };

    return [
      {
        isExported: true,
        kind: StructureKind.Interface,
        name: bodyParameterInterfaceName,
        properties: [
          {
            name: "body",
            type: formBodyName,
            hasQuestionToken: allOptionalParts
          }
        ]
      },
      formBodyInterface
    ];
  } else {
    const bodySignature = getPropertyFromSchema(bodyParameters.body[0]);

    return [
      {
        isExported: true,
        kind: StructureKind.Interface,
        name: bodyParameterInterfaceName,
        properties: [
          {
            docs: bodySignature.docs,
            name: "body",
            type: bodySignature.type,
            hasQuestionToken: bodySignature.hasQuestionToken
          }
        ]
      }
    ];
  }
}

export function buildBodyTypeAlias(
  parameters: ParameterMetadatas,
  partialBodyTypeNames: Set<string>
) {
  const bodyParameters = parameters.body;
  if (
    !bodyParameters ||
    !bodyParameters?.body ||
    !bodyParameters?.body.length
  ) {
    return undefined;
  }
  const schema = bodyParameters.body[0] as ObjectSchema;
  const headerParameters = (parameters.parameters || []).filter(
    (p) => p.type === "header" && p.name === "contentType"
  );
  if (!headerParameters.length || headerParameters.length > 1) {
    return undefined;
  }

  const contentType = headerParameters[0].param.type;
  const description = `${schema.description}`;
  const typeName = `${schema.typeName}ResourceMergeAndPatch`;
  if (partialBodyTypeNames.has(typeName)) {
    return null;
  } else {
    partialBodyTypeNames.add(typeName);
  }
  if (contentType.includes("application/merge-patch+json")) {
    const type = `Partial<${schema.typeName}>`;
    return {
      // kind: StructureKind.TypeAlias,
      ...(description && { docs: [{ description }] }),
      name: `${typeName}`,
      type,
      isExported: true
    };
  }
}
