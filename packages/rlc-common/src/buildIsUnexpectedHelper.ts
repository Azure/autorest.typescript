// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paths, RLCModel } from "./interfaces.js";
import * as path from "path";
import {
  FunctionDeclarationOverloadStructure,
  OptionalKind,
  Project,
  VariableDeclarationKind
} from "ts-morph";
import { hasUnexpectedHelper } from "./helpers/operationHelpers.js";
import { getImportModuleName } from "./helpers/nameConstructors.js";
export function buildIsUnexpectedHelper(model: RLCModel) {
  if (!hasUnexpectedHelper(model)) {
    return;
  }
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `isUnexpected.ts`);
  const isErrorHelper = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  let map: Record<string, string[]> = {};
  const allResponseTypes: Set<string> = new Set();
  const allErrorTypes: Set<string> = new Set();
  const overloads: OptionalKind<FunctionDeclarationOverloadStructure>[] = [];
  const pathDictionary = model.paths;

  for (const [path, details] of Object.entries(pathDictionary)) {
    for (const [methodName, methodDetails] of Object.entries(details.methods)) {
      const originalMethod = methodName.toUpperCase();
      const operation = `${originalMethod} ${path}`;
      const success = methodDetails[0].successStatus;
      map = { ...map, ...{ [operation]: success } };

      // LROs may call the same path but with GET
      // to get the operation status.
      if (
        methodDetails[0].operationHelperDetail?.lroDetails?.isLongRunning &&
        originalMethod !== "GET"
      ) {
        const operation = `GET ${path}`;
        const logicalSuccessCodes = methodDetails[0].operationHelperDetail
          ?.lroDetails?.logicalResponseTypes?.success
          ? ["200"]
          : [];
        const initalSuccessCodes =
          (pathDictionary[path].methods["get"] &&
            pathDictionary[path].methods["get"][0]?.successStatus) ??
          methodDetails[0].successStatus;
        const successSet = new Set(
          logicalSuccessCodes.concat(initalSuccessCodes)
        );

        map = { ...map, ...{ [operation]: Array.from(successSet) } };
      }

      const successTypes = [...methodDetails[0].responseTypes.success];
      const errorTypes = methodDetails[0].responseTypes.error;

      if (
        model.helperDetails?.clientLroOverload &&
        methodDetails[0].operationHelperDetail?.lroDetails?.logicalResponseTypes
          ?.success
      ) {
        successTypes.push(
          ...methodDetails[0].operationHelperDetail?.lroDetails
            ?.logicalResponseTypes.success
        );
      }

      if (!successTypes.length || !errorTypes.length || !errorTypes[0]) {
        continue;
      }

      successTypes.forEach((t) => allResponseTypes.add(t));
      errorTypes.forEach((t) => {
        allResponseTypes.add(t);
        allErrorTypes.add(t);
      });

      overloads.push({
        isExported: true,
        parameters: [
          {
            name: "response",
            type: [...successTypes, ...errorTypes].join(" | ")
          }
        ],
        returnType: `response is ${errorTypes[0]}`
      });
    }
  }
  isErrorHelper.addImportDeclaration({
    namedImports: [...allResponseTypes],
    moduleSpecifier: getImportModuleName(
      {
        cjsName: `./responses`,
        esModulesName: `./responses.js`
      },
      model
    )
  });

  isErrorHelper.addVariableStatement({
    declarations: [
      {
        name: "responseMap",
        initializer: JSON.stringify(map),
        type: "Record<string, string[]>"
      }
    ],
    declarationKind: VariableDeclarationKind.Const
  });

  if (allErrorTypes.size) {
    const hasTemplate = hasParametrizedPath(pathDictionary);
    isErrorHelper.addFunction({
      overloads,
      isExported: true,
      name: "isUnexpected",
      parameters: [
        {
          name: "response",
          type: [...allResponseTypes].join(" | ")
        }
      ],
      returnType: `response is ${[...allErrorTypes].join(" | ")}`,
      statements: [
        `
          const lroOriginal = response.headers["x-ms-original-url"];
          const url = new URL(lroOriginal ?? response.request.url);
          const method = response.request.method;
          ${
            hasTemplate ? "let" : "const"
          } pathDetails = responseMap[\`\${method} \${url.pathname}\`];
          if (!pathDetails) {`,
        hasTemplate
          ? "pathDetails = getParametrizedPathSuccess(method, url.pathname);"
          : `return true;`,
        `  }
          return !pathDetails.includes(response.status);
        `
      ]
    });
    if (hasTemplate) {
      isErrorHelper.addFunction({
        isExported: false,
        name: "getParametrizedPathSuccess",
        parameters: [
          {
            name: "method",
            type: "string"
          },
          {
            name: "path",
            type: "string"
          }
        ],
        returnType: `string[]`,
        statements: [
          `
          const pathParts = path.split("/");
            
          // Traverse list to match the longest candidate
          // matchedLen: the length of candidate path
          // matchedValue: the matched status code array
          let matchedLen = -1,
            matchedValue: string[] = [];
          
          // Iterate the responseMap to find a match
          for (const [key, value] of Object.entries(responseMap)) {
            // Extracting the path from the map key which is in format
            // GET /path/foo
            if (!key.startsWith(method)) {
              continue;
            }
            const candidatePath = getPathFromMapKey(key);
            // Get each part of the url path
            const candidateParts = candidatePath.split("/");
        
            // track if we have found a match to return the values found.
            let found = true;
            for (
              let i = candidateParts.length - 1, j = pathParts.length - 1;
              i >= 1 && j >= 1;
              i--, j--
            ) {
              if (
                candidateParts[i]?.startsWith("{") &&
                candidateParts[i]?.indexOf("}") !== -1
              ) {
                const start = candidateParts[i]!.indexOf("}") + 1,
                  end = candidateParts[i]?.length;
                // If the current part of the candidate is a "template" part
                // Try to use the suffix of pattern to match the path
                // {guid} ==> $
                // {guid}:export ==> :export$
                const isMatched = new RegExp(
                  \`\${candidateParts[i]?.slice(start, end)}\`
                ).test(pathParts[j] || '');
        
                if (!isMatched) {
                  found = false;
                  break;
                }
                continue;
              }
        
              // If the candidate part is not a template and
              // the parts don't match mark the candidate as not found
              // to move on with the next candidate path.
              if (candidateParts[i] !== pathParts[j]) {
                found = false;
                break;
              }
            }
        
            // We finished evaluating the current candidate parts
            // Update the matched value if and only if we found the longer pattern
            if (found && candidatePath.length > matchedLen) {
              matchedLen = candidatePath.length;
              matchedValue = value;
            }
          }
        
          return matchedValue;
        `
        ]
      });

      isErrorHelper.addFunction({
        isExported: false,
        name: "getPathFromMapKey",
        parameters: [
          {
            name: "mapKey",
            type: "string"
          }
        ],
        returnType: `string`,
        statements: [
          `const pathStart = mapKey.indexOf("/");
         return mapKey.slice(pathStart);`
        ]
      });
    }
  }

  return {
    path: filePath,
    content: isErrorHelper.getFullText()
  };
}

function hasParametrizedPath(pathDictionary: Paths): boolean {
  for (const [path] of Object.entries(pathDictionary)) {
    if (path.includes("/{") && path.includes("}")) {
      return true;
    }
  }

  return false;
}
