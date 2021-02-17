// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  PropertyDeclarationStructure,
  ClassDeclaration,
  SourceFile
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import {
  addOperationSpecs,
  writeOperations,
  writeGetOperationOptions
} from "./operationGenerator";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ImplementationLocation, SchemaType } from "@autorest/codemodel";
import {
  OperationDetails,
  OperationGroupDetails
} from "../models/operationDetails";
import { formatJsDocParam } from "./utils/parameterUtils";
import { shouldImportParameters } from "./utils/importUtils";
import { getAllModelsNames } from "./utils/responseTypeUtils";
import { addTracingOperationImports } from "./utils/tracingUtils";
import { addPagingImports } from "./utils/pagingOperations";

type OperationDeclarationDetails = { name: string; typeName: string };

export function generateClient(
  clientDetails: ClientDetails,
  project: Project,
  hideClients: boolean
) {
  const clientContextClassName = `${clientDetails.className}Context`;
  const hasMappers = !!clientDetails.mappers.length;

  // Check if there are any client level operations
  const inlineOperations = clientDetails.operationGroups.filter(
    og => og.isTopLevel
  );

  const hasInlineOperations = inlineOperations.length > 0;

  // Check if there are any non client-level operations to import
  const importedOperations = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  const hasImportedOperations = importedOperations.length > 0;

  if (hasImportedOperations && hasInlineOperations) {
    // Check if there is a name collision between client-level operation names
    // and operation group key names.
    checkForNameCollisions(importedOperations, inlineOperations);
  }

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

  const flattenedInlineOperations = inlineOperations.reduce<OperationDetails[]>(
    (acc, curr) => (acc = [...acc, ...curr.operations]),
    []
  );

  addPagingImports(flattenedInlineOperations, clientDetails, clientFile);

  const hasLRO = inlineOperations.some(og => og.operations.some(o => o.isLRO));

  if (hasInlineOperations && hasLRO) {
    clientFile.addImportDeclaration({
      namedImports: ["LROPoller", "shouldDeserializeLRO"],
      moduleSpecifier: "./lro"
    });
  }

  if (hasImportedOperations) {
    clientFile.addImportDeclaration({
      namedImports: importedOperations.map(o =>
        normalizeName(o.name, NameType.OperationGroup, true /* shouldGuard */)
      ),
      moduleSpecifier: "./operations"
    });
  }

  if (hasInlineOperations && shouldImportParameters(clientDetails)) {
    addTracingOperationImports(clientDetails, clientFile, ".");
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

  if (hideClients) {
    clientClass.addJsDoc({
      tags: [
        {
          tagName: "hidden"
        }
      ]
    });
  }

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

export function checkForNameCollisions(
  importedOperations: OperationGroupDetails[],
  inlineOperations: OperationGroupDetails[]
) {
  const groupOpsKeyNames = importedOperations.map(og => og.key.toLowerCase());
  const inlineOpsKeyNames = inlineOperations.map(og =>
    og.operations.map(operation => operation.name.toLowerCase())
  );

  const collidingKeyNames = inlineOpsKeyNames.map(inlineOpsKeyArray =>
    inlineOpsKeyArray.filter(inlineOpKey =>
      groupOpsKeyNames.includes(inlineOpKey)
    )
  );

  if (collidingKeyNames.length > 0 && collidingKeyNames[0].length > 0) {
    const messages = collidingKeyNames.map(
      key =>
        `Operation Group(s) '${key}' is/are colliding with client-level operation(s) with the same name.`
    );
    throw new Error(...messages);
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
      typeName: `${normalizeName(
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
      allModelsNames,
      clientDetails,
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
