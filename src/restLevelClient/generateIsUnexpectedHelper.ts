import { getAutorestOptions } from "../autorestSession";
import * as path from "path";
import {
  FunctionDeclarationOverloadStructure,
  OptionalKind,
  Project,
  VariableDeclarationKind
} from "ts-morph";
import { pathDictionary } from "./generateClientDefinition";

/**
 * Generates a helper function `isUnexpected` which takes a response
 * and checks if the status code matches any of the success status codes
 * defined in the API spec. This aids with type narrowing down.
 */
export function generateIsUnexpectedHelper(project: Project) {
  const { srcPath } = getAutorestOptions();
  const isErrorHelper = project.createSourceFile(
    path.join(srcPath, `isUnexpected.ts`),
    undefined,
    {
      overwrite: true
    }
  );

  let map: Record<string, string[]> = {};
  let allResponseTypes: Set<string> = new Set();
  let allErrorTypes: Set<string> = new Set();
  let overloads: OptionalKind<FunctionDeclarationOverloadStructure>[] = [];

  for (const [path, details] of Object.entries(pathDictionary)) {
    for (const [methodName, methodDetails] of Object.entries(details.methods)) {
      const operation = `${methodName.toUpperCase()} ${path}`;
      const success = methodDetails[0].successStatus;
      map = { ...map, ...{ [operation]: success } };

      const successTypes = methodDetails[0].responseTypes.success;
      const errorTypes = methodDetails[0].responseTypes.error;

      if (!successTypes.length || !errorTypes.length || !errorTypes[0]) {
        continue;
      }

      successTypes.forEach(t => allResponseTypes.add(t));
      errorTypes.forEach(t => {
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
    moduleSpecifier: "./responses"
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
          const url = new URL(response.request.url);
          const method = response.request.method;
          return responseMap[\`\${method} \${url.pathname}\`].includes(response.status);
        `
      ]
    });
  }
}
