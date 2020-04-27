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
import { addOperationSpecs, writeOperations } from "./operationGenerator";
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

type OperationDeclarationDetails = { name: string; typeName: string };

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const clientContextClassName = `${clientDetails.className}Context`;
  const hasMappers = !!clientDetails.mappers.length;

  // A client has inline operations when it has a toplevel operation group
  const hasInlineOperations = clientDetails.operationGroups.some(
    og => og.isTopLevel
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

  if (hasInlineOperations && shouldImportParameters(clientDetails)) {
    clientFile.addImportDeclaration({
      namespaceImport: "Parameters",
      moduleSpecifier: "./models/parameters"
    });
  } else if (!hasInlineOperations) {
    clientFile.addImportDeclaration({
      namespaceImport: "operations",
      moduleSpecifier: "./operations"
    });
  }

  clientFile.addImportDeclaration({
    namespaceImport: "Models",
    moduleSpecifier: "./models"
  });

  // Only import mappers if there are any
  if (hasMappers) {
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
    extends: clientContextClassName
  });

  writeConstructor(clientDetails, clientClass);
  writeClientOperations(clientFile, clientClass, clientDetails);

  clientFile.addExportDeclaration({
    leadingTrivia: (writer: CodeBlockWriter) =>
      writer.write("// Operation Specifications\n\n"),
    namedExports: [
      { name: clientDetails.className },
      { name: clientContextClassName },
      { name: "Models", alias: modelsName },
      ...(hasMappers ? [{ name: "Mappers", alias: mappersName }] : [])
    ]
  });

  clientDetails.operationGroups.some(og => !og.isTopLevel) &&
    clientFile.addExportDeclaration({
      moduleSpecifier: "./operations"
    });
}

function writeConstructor(
  clientDetails: ClientDetails,
  classDeclaration: ClassDeclaration
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

  const optionsParameterType = hasClientOptionalParameters
    ? `Models.${clientDetails.className}OptionalParams`
    : "coreHttp.ServiceClientOptions";
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
  clientDetails: ClientDetails
) {
  const topLevelGroup = clientDetails.operationGroups.find(og => og.isTopLevel);
  const hasMappers = !!clientDetails.mappers.length;
  // Add top level operation groups as client properties
  // TODO: Switch to named model imports in client File
  const importedModels = new Set<string>();
  if (!!topLevelGroup) {
    writeOperations(
      topLevelGroup,
      classDeclaration,
      importedModels,
      clientDetails.parameters,
      true // isInline
    );

    addOperationSpecs(
      topLevelGroup,
      file,
      clientDetails.parameters,
      hasMappers
    );

    // Use named import from Models
    if (importedModels.size) {
      file.addImportDeclaration({
        namedImports: [...importedModels],
        moduleSpecifier: "./models"
      });
    }
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
