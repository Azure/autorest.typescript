import {
  CodeModel,
  Operation,
  ParameterLocation,
  ImplementationLocation,
  Response
} from "@autorest/codemodel";
import { isEqual } from "lodash";

import {
  gerOperationSuccessStatus,
  getResponseTypeName
} from "./operationHelpers";

import {
  CallSignatureDeclarationStructure,
  Project,
  SourceFile,
  StructureKind,
  Writers
} from "ts-morph";
import * as path from "path";

import { getAutorestOptions } from "../autorestSession";
import { CasingConvention, NameType, normalizeName } from "../utils/nameUtils";
import { getLanguageMetadata } from "../utils/languageHelpers";
import {
  buildMethodDefinitions,
  getOperationParameters,
  getPathParamDefinitions
} from "./helpers/operationHelpers";
import {
  generateMethodShortcuts,
  REST_CLIENT_RESERVED
} from "./generateMethodShortcuts";
import { Methods, PathParameter, Paths, ResponseTypes } from "./interfaces";
import { isLongRunningOperation } from "./helpers/hasPollingOperations";
export let pathDictionary: Paths = {};

export function generatePathFirstClient(model: CodeModel, project: Project) {
  const name = normalizeName(
    getLanguageMetadata(model.language).name,
    NameType.File
  );
  const { srcPath } = getAutorestOptions();
  const clientFile = project.createSourceFile(
    path.join(srcPath, `clientDefinitions.ts`),
    undefined,
    {
      overwrite: true
    }
  );

  // Get all paths
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  pathDictionary = {};
  for (const operationGroup of model.operationGroups) {
    for (const operation of operationGroup.operations) {
      const operationName = getLanguageMetadata(operation.language).name;
      const operationDescription = getLanguageMetadata(operation.language)
        .description;
      const pathParameters: PathParameter[] =
        operation.parameters
          ?.filter(p => p.protocol.http?.in === ParameterLocation.Path)
          .map(p => {
            const languageMetadata = getLanguageMetadata(p.language);
            return {
              name: languageMetadata.serializedName || languageMetadata.name,
              schema: p.schema,
              description: languageMetadata.description
            };
          }) || [];
      const path: string = operation.requests?.[0].protocol.http?.path;
      pathParameters.sort(function compare(a: PathParameter, b: PathParameter) {
        return path.indexOf(a.name) - path.indexOf(b.name);
      });

      for (const request of operation.requests || []) {
        const path: string = (request.protocol.http?.path as string) || "";
        const method = request.protocol.http?.method;

        if (path && method) {
          if (!pathDictionary[path]) {
            pathDictionary[path] = {
              pathParameters,
              methods: {},
              name: operationName,
              annotations: {
                isLongRunning: isLongRunningOperation(operation)
              }
            };
          }
          const hasOptionalOptions = !hasRequiredOptions(operation);

          const newMethod = {
            description: operationDescription,
            optionsName: getOperationOptionsType(operation, importedParameters),
            hasOptionalOptions,
            returnType: `StreamableMethod<${getOperationReturnType(
              operation,
              importedResponses,
              clientImports
            )}>`,
            responseTypes: getResponseTypes(operation),
            successStatus: gerOperationSuccessStatus(operation)
          };

          if (
            pathDictionary[path].methods[`${method}`] &&
            !pathDictionary[path].methods[`${method}`].some(m =>
              isEqual(m, newMethod)
            )
          ) {
            pathDictionary[path].methods[`${method}`].push(newMethod);
          } else {
            pathDictionary[path].methods[`${method}`] = [newMethod];
          }
        }
      }
    }
  }

  writeShortcutInterface(model, pathDictionary, clientFile);
  clientFile.addInterface({
    name: "Routes",
    isExported: true,
    callSignatures: getPathFirstRoutesInterfaceDefinition(
      pathDictionary,
      clientFile
    )
  });

  const clientName = getLanguageMetadata(model.language).name;

  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;

  const { rlcShortcut } = getAutorestOptions();

  let shortcutElements = !rlcShortcut
    ? []
    : model.operationGroups.map(og => {
        const groupName = og.language.default.name;
        const name = normalizeName(
          groupName,
          NameType.OperationGroup,
          true,
          REST_CLIENT_RESERVED,
          CasingConvention.Camel
        );
        const interfaceName = normalizeName(
          `${name}Operations`,
          NameType.Interface,
          true,
          REST_CLIENT_RESERVED
        );
        return { name, type: interfaceName };
      });

  // There may be operations without an operation group, those shortcut
  // methods need to be handled differently.
  const shortcutsInOperationGroup = shortcutElements.filter(s => s.name);

  clientFile.addTypeAlias({
    isExported: true,
    name: clientInterfaceName,
    type: Writers.intersectionType(
      "Client",
      Writers.objectType({
        properties: [
          { name: "path", type: "Routes" },
          ...shortcutsInOperationGroup
        ]
      }),
      // If the length of shortcutMethods in operation group and all shortcutMethods
      // is the same, then we don't have any operations at the client level
      // Otherwise we need to make the client interface name an union with the
      // definition of all client level shortcut methods
      ...(shortcutsInOperationGroup.length !== shortcutElements.length
        ? [`ClientOperations`]
        : [])
    )
  });

  if (importedParameters.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedParameters],
      moduleSpecifier: "./parameters"
    });
  }

  if (importedResponses.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedResponses],
      moduleSpecifier: "./responses"
    });
  }

  clientImports.add("Client");
  clientImports.add("StreamableMethod");
  clientFile.addImportDeclarations([
    {
      namedImports: [...clientImports],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);
}

function writeShortcutInterface(
  model: CodeModel,
  pathDictionary: Paths,
  clientFile: SourceFile
) {
  const { rlcShortcut } = getAutorestOptions();
  if (!rlcShortcut) {
    return;
  }

  // Create a map of Operation group descriptions
  const descriptions = model.operationGroups.reduce((map, current) => {
    const { name, description } = current.language.default;
    map.set(name, description);

    return map;
  }, new Map<string, string>());

  const shortcuts = generateMethodShortcuts(model, pathDictionary);

  for (const group of Object.keys(shortcuts)) {
    const groupName =
      normalizeName(group, NameType.Interface, true, REST_CLIENT_RESERVED) ||
      "Client";
    const groupOperations = shortcuts[group];

    clientFile.addInterface({
      docs: [
        descriptions.get(group) ||
          `Contains operations for ${groupName} operations`
      ],
      name: `${groupName}Operations`,
      isExported: true,
      methods: groupOperations
    });
  }
}

function hasRequiredOptions(operation: Operation) {
  return getOperationParameters(operation)
    .filter(p => p.implementation === ImplementationLocation.Method)
    .filter(p => ["query", "body", "headers"].includes(p.protocol.http?.in))
    .some(p => p.required);
}

function getOperationOptionsType(
  operation: Operation,
  importedParameters = new Set<string>()
) {
  const paramsName = `${
    getLanguageMetadata(operation.language).name
  }Parameters`;
  importedParameters.add(paramsName);

  return paramsName;
}

function getOperationReturnType(
  operation: Operation,
  importedResponses = new Set<string>(),
  coreClientImports = new Set<string>()
) {
  let returnType: string = "HttpResponse";
  if (
    (operation.responses && operation.responses.length) ||
    (operation.exceptions && operation.exceptions.length)
  ) {
    const responses = [
      ...(operation.responses ?? []),
      ...(operation.exceptions ?? [])
    ];
    const responseTypes = responses
      .filter(
        r => r.protocol.http?.statusCodes && r.protocol.http?.statusCodes.length
      )
      .map(r => {
        const responseName = getResponseTypeName(operation, r);
        importedResponses.add(responseName);
        return responseName;
      });

    if (responseTypes.length) {
      if (
        responseTypes.indexOf("HttpResponse") > -1 &&
        !coreClientImports.has(returnType)
      ) {
        coreClientImports.add("HttpResponse");
      }
      returnType = responseTypes.join(" | ");
    }
  }
  if (returnType === "HttpResponse" && !coreClientImports.has(returnType)) {
    coreClientImports.add(returnType);
  }
  return returnType;
}

function getPathFirstRoutesInterfaceDefinition(
  paths: Paths,
  sourcefile: SourceFile
): CallSignatureDeclarationStructure[] {
  const signatures: CallSignatureDeclarationStructure[] = [];
  for (const key of Object.keys(paths)) {
    generatePathFirstRouteMethodsDefinition(
      paths[key].name,
      paths[key].methods,
      sourcefile
    );
    const pathParams = paths[key].pathParameters;
    signatures.push({
      docs: [
        `Resource for '${key
          .replace(/}/g, "\\}")
          .replace(
            /{/g,
            "\\{"
          )}' has methods for the following verbs: ${Object.keys(
          paths[key].methods
        ).join(", ")}`
      ],
      parameters: [
        { name: "path", type: `"${key}"` },
        ...getPathParamDefinitions(pathParams)
      ],
      returnType: paths[key].name,
      kind: StructureKind.CallSignature
    });
  }
  return signatures;
}

function generatePathFirstRouteMethodsDefinition(
  operationName: string,
  methods: Methods,
  file: SourceFile
): void {
  const methodDefinitions = buildMethodDefinitions(methods);

  file.addInterface({
    methods: methodDefinitions,
    name: operationName,
    isExported: true
  });
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(operation: Operation): ResponseTypes {
  let returnTypes: ResponseTypes = {
    error: [],
    success: []
  };
  if (
    (operation.responses && operation.responses.length) ||
    (operation.exceptions && operation.exceptions.length)
  ) {
    function getResponseType(responses: Response[]) {
      return responses
        .filter(
          r =>
            r.protocol.http?.statusCodes && r.protocol.http?.statusCodes.length
        )
        .map(r => {
          const responseName = getResponseTypeName(operation, r);
          return responseName;
        });
    }

    returnTypes.error = getResponseType(operation.exceptions ?? []);
    returnTypes.success = getResponseType(operation.responses ?? []);
  }
  return returnTypes;
}
