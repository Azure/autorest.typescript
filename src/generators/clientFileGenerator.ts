// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  PropertyDeclarationStructure,
  ClassDeclaration,
  SourceFile,
  CodeBlockWriter
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import {
  addOperationSpecs,
  writeOperations,
  writeGetOperationOptions
} from "./operationGenerator";
import {
  getModelsName,
  getMappersName,
  normalizeName,
  NameType
} from "../utils/nameUtils";
import { ImplementationLocation, SchemaType } from "@azure-tools/codemodel";
import { OperationGroupDetails } from "../models/operationDetails";
import { formatJsDocParam } from "./utils/parameterUtils";
import { shouldImportParameters } from "./utils/importUtils";
import { getAllModelsNames } from "./utils/responseTypeUtils";

type OperationDeclarationDetails = { name: string; typeName: string };

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const clientContextClassName = `${clientDetails.className}Context`;
  const hasMappers = !!clientDetails.mappers.length;

  // Check if there are any client level operations
  const hasInlineOperations = clientDetails.operationGroups.some(
    og => og.isTopLevel
  );

  // Check if there are any non client-level operations to import
  const hasImportedOperations = clientDetails.operationGroups.some(
    og => !og.isTopLevel
  );

  const hasCredentials = !!clientDetails.options.addCredentials;
  const hasClientOptionalParams = clientDetails.parameters.some(
    p =>
      !p.required && p.implementationLocation === ImplementationLocation.Client
  );

  const clientFile = project.createSourceFile(
    `${clientDetails.srcPath}/${clientDetails.sourceFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  (hasCredentials || hasInlineOperations || !hasClientOptionalParams) &&
    clientFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });

  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );

  if (hasInlineOperations && hasLRO) {
    clientFile.addImportDeclaration({
      namedImports: ["LROPoller", "shouldDeserializeLRO"],
      moduleSpecifier: "./lro"
    });
  }

  if (hasImportedOperations) {
    clientFile.addImportDeclaration({
      namespaceImport: "operations",
      moduleSpecifier: "./operations"
    });
  }

  if (hasInlineOperations && shouldImportParameters(clientDetails)) {
    clientFile.addImportDeclaration({
      namespaceImport: "Parameters",
      moduleSpecifier: "./models/parameters"
    });
  }

  // Only import mappers if there are any
  if (hasInlineOperations && hasMappers) {
    clientFile.addImportDeclaration({
      namespaceImport: "Mappers",
      moduleSpecifier: "./models/mappers"
    });
  }

  clientFile.addImportDeclaration({
    namedImports: [clientContextClassName],
    moduleSpecifier: `./${clientDetails.sourceFileName}Context`
  });

  const clientClass = clientFile.addClass({
    name: clientDetails.className,
    extends: clientContextClassName,
    isExported: true
  });

  const importedModels = new Set<string>();

  writeConstructor(clientDetails, clientClass, importedModels);
  writeClientOperations(
    clientFile,
    clientClass,
    clientDetails,
    hasLRO,
    importedModels
  );

  // Use named import from Models
  if (importedModels.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    });
  }
}

function writeConstructor(
  clientDetails: ClientDetails,
  classDeclaration: ClassDeclaration,
  importedModels: Set<string>
) {
  const requiredParams = clientDetails.parameters.filter(
    param =>
      param.required &&
      param.implementationLocation === ImplementationLocation.Client &&
      !param.defaultValue &&
      param.schemaType !== SchemaType.Constant
  );

  const hasClientOptionalParameters = clientDetails.parameters.some(
    param =>
      !param.required &&
      param.implementationLocation === ImplementationLocation.Client
  );

  const docs = [
    `Initializes a new instance of the ${clientDetails.className} class.`,
    ...formatJsDocParam(requiredParams),
    `@param options The parameter options`
  ]
    .filter(d => !!d)
    .join("\n");

  let optionsParameterType = "ServiceClientOptions";

  if (hasClientOptionalParameters) {
    const paramType = `${clientDetails.className}OptionalParams`;
    importedModels.add(paramType);
    optionsParameterType = paramType;
  }

  requiredParams.forEach(({ typeDetails }) =>
    typeDetails.usedModels.forEach(model => importedModels.add(model))
  );

  const clientConstructor = classDeclaration.addConstructor({
    docs: [docs],
    parameters: [
      ...requiredParams.map(p => ({
        name: p.name,
        hasQuestionToken: !p.required,
        type: p.typeDetails.typeName
      })),
      {
        name: "options",
        hasQuestionToken: true,
        type: optionsParameterType
      }
    ]
  });

  clientConstructor.addStatements([
    `super(${[...requiredParams.map(p => p.name), "options"].join()});`
  ]);

  const operationDeclarationDetails: OperationDeclarationDetails[] = getOperationGroupsDeclarationDetails(
    clientDetails.operationGroups.filter(og => !og.isTopLevel)
  );

  clientConstructor.addStatements([
    ...operationDeclarationDetails.map(
      ({ name, typeName }) => `this.${name} = new ${typeName}(this)`
    )
  ]);
}

function getOperationGroupsDeclarationDetails(
  operationGroups: OperationGroupDetails[]
) {
  return operationGroups.map(og => {
    return {
      name: normalizeName(og.name, NameType.Property),
      typeName: `operations.${normalizeName(
        og.name,
        NameType.OperationGroup,
        true /* shouldGuard */
      )}`
    };
  });
}

function writeClientOperations(
  file: SourceFile,
  classDeclaration: ClassDeclaration,
  clientDetails: ClientDetails,
  hasLRO: boolean,
  importedModels: Set<string>
) {
  const allModelsNames = getAllModelsNames(clientDetails);
  const topLevelGroup = clientDetails.operationGroups.find(og => og.isTopLevel);
  const hasMappers = !!clientDetails.mappers.length;
  // Add top level operation groups as client properties
  if (!!topLevelGroup) {
    if (hasLRO) {
      writeGetOperationOptions(classDeclaration);
    }
    writeOperations(
      topLevelGroup,
      classDeclaration,
      importedModels,
      clientDetails.parameters,
      allModelsNames,
      true // isInline,
    );

    addOperationSpecs(
      topLevelGroup,
      file,
      clientDetails.parameters,
      hasMappers
    );
  }

  const operationsDeclarationDetails = getOperationGroupsDeclarationDetails(
    clientDetails.operationGroups.filter(og => !og.isTopLevel)
  );

  // Each operation group will have its class
  // and the client class will have each group as properties
  classDeclaration.addProperties(
    operationsDeclarationDetails.map(op => {
      return {
        name: op.name,
        type: op.typeName
      } as PropertyDeclarationStructure;
    })
  );
}
