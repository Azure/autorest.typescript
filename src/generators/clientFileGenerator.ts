// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  PropertyDeclarationStructure,
  ClassDeclaration,
  SourceFile
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { addOperationSpecs, writeOperations } from "./operationGenerator";
import {
  getModelsName,
  getMappersName,
  normalizeName,
  NameType
} from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import { ImplementationLocation, SchemaType } from "@azure-tools/codemodel";
import { OperationGroupDetails } from "../models/operationDetails";
import { wrapString } from "./utils/stringUtils";

type OperationDeclarationDetails = { name: string; typeName: string };

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const clientContextClassName = `${clientDetails.className}Context`;

  // A client has inline operations when it has a toplevel operation group
  const hasInlineOperations = clientDetails.operationGroups.some(
    og => og.isTopLevel
  );

  const hasCredentials = !!clientDetails.options.addCredentials;

  const clientFile = project.createSourceFile(
    `${clientDetails.srcPath}/${clientDetails.sourceFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  (hasCredentials || hasInlineOperations) &&
    clientFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });

  hasInlineOperations
    ? clientFile.addImportDeclaration({
        namespaceImport: "Parameters",
        moduleSpecifier: "./models/parameters"
      })
    : clientFile.addImportDeclaration({
        namespaceImport: "operations",
        moduleSpecifier: "./operations"
      });

  clientFile.addImportDeclaration({
    namespaceImport: "Models",
    moduleSpecifier: "./models"
  });

  clientFile.addImportDeclaration({
    namespaceImport: "Mappers",
    moduleSpecifier: "./models/mappers"
  });

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
    leadingTrivia: (writer: any) =>
      writer.write("// Operation Specifications\n\n"),
    namedExports: [
      { name: clientDetails.className },
      { name: clientContextClassName },
      { name: "Models", alias: modelsName },
      { name: "Mappers", alias: mappersName }
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

  const docs = [
    `Initializes a new instance of the ${clientDetails.className} class.`,
    ...requiredParams.map(p => wrapString(`@param ${p.name} ${p.description}`)),
    `@param options The parameter options`
  ]
    .filter(d => !!d)
    .join("\n");

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
        type: `any`
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
      typeName: `operations.${normalizeName(og.name, NameType.Class)}`
    };
  });
}

function writeClientOperations(
  file: SourceFile,
  classDeclaration: ClassDeclaration,
  clientDetails: ClientDetails
) {
  const topLevelGroup = clientDetails.operationGroups.find(og => og.isTopLevel);

  // Add top level operation groups as client properties
  if (!!topLevelGroup) {
    writeOperations(
      topLevelGroup,
      classDeclaration,
      clientDetails.parameters,
      true // isInline
    );
    addOperationSpecs(topLevelGroup, file, clientDetails.parameters);
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
