import {
  OperationDetails,
  OperationGroupDetails,
  PaginationDetails
} from "../../models/operationDetails";
import { ClientDetails } from "../../models/clientDetails";
import {
  ClassDeclaration,
  OptionalKind,
  ParameterDeclarationStructure,
  Scope,
  SourceFile
} from "ts-morph";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getOperationParameterSignatures } from "./parameterUtils";
import { generateOperationJSDoc } from "./docsUtils";
import { getResponseBodyType } from "./responseTypeUtils";

type MethodParameter = OptionalKind<
  ParameterDeclarationStructure & {
    description: string;
  }
>;

interface PagingMethodSettings {
  initialMethodName: string;
  nextMethodName: string;
  publicMethodName: string;
  allMethodName: string;
  pageMethodName: string;
  bodyResponseType: string;
  baseMethodParameters: MethodParameter[];
  paginationDetails: PaginationDetails;
}

/**
 * Adds the required imports for paging operations
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addPagingImports(
  { options }: ClientDetails,
  sourceFile: SourceFile
) {
  if (!options.disablePagingAsyncIterators) {
    sourceFile.addImportDeclarations([
      {
        namedImports: ["PagedAsyncIterableIterator"],
        moduleSpecifier: "@azure/core-paging"
      }
    ]);
  }
}

export function preparePageableOperations(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails
) {
  if (clientDetails.options.disablePagingAsyncIterators) {
    return;
  }

  operationGroupDetails.operations
    .filter(o => o.pagination)
    .forEach(operation => {
      operation.scope = Scope.Private;
      operation.namePrefix = "_";
    });
}

export function writeAsyncIterators(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  operationGroupClass: ClassDeclaration,
  importedModels: Set<string>
) {
  if (clientDetails.options.disablePagingAsyncIterators) {
    return;
  }

  operationGroupDetails.operations
    .filter(o => o.pagination?.nextLinkName)
    .forEach(operation => {
      const baseName = normalizeName(operation.name, NameType.Operation);
      const nextOperationName = normalizeName(
        operation.pagination?.nextLinkOperationName || baseName,
        NameType.Operation
      );

      const bodyResponseType = getResponseBodyType(operation);
      const bodyResponseTypeName =
        bodyResponseType?.typeName.replace("[]", "") || "";

      if (!bodyResponseType) {
        throw new Error(`Pageable operation ${baseName} has no return values`);
      }

      bodyResponseType?.usedModels.forEach(m => importedModels.add(m));

      const { baseMethodParameters } = getOperationParameterSignatures(
        operation,
        clientDetails.parameters,
        importedModels,
        operationGroupClass
      );

      const pagingMethodSettings = {
        initialMethodName: `${operation.namePrefix}${baseName}`,
        nextMethodName: `${operation.namePrefix}${nextOperationName}`,
        publicMethodName: baseName,
        allMethodName: `${baseName}All`,
        pageMethodName: `${baseName}Page`,
        bodyResponseType: bodyResponseTypeName,
        baseMethodParameters,
        paginationDetails: operation.pagination! // We are checking for pagination not being undefined in the filter above
      };

      writePublicMethod(operation, operationGroupClass, pagingMethodSettings);
      writePageMethod(operation, operationGroupClass, pagingMethodSettings);
      writeAllMethod(operation, operationGroupClass, pagingMethodSettings);
    });
}

function writePublicMethod(
  operation: OperationDetails,
  operationGroupClass: ClassDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `PagedAsyncIterableIterator<${pagingMethodSettings.bodyResponseType}, ${pagingMethodSettings.bodyResponseType}[]>`;

  const method = operationGroupClass.addMethod({
    name: pagingMethodSettings.publicMethodName,
    parameters: pagingMethodSettings.baseMethodParameters,
    scope: operation.scope,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.baseMethodParameters,
        operation.description
      )
    ]
  });

  const parameters = pagingMethodSettings.baseMethodParameters
    .map(p => p.name)
    .join(",");

  method.addStatements([
    `const iter = this.${pagingMethodSettings.allMethodName}(${parameters});`,
    `return {
        next() {
          return iter.next();
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        byPage: (settings) => {
          return this.${pagingMethodSettings.pageMethodName}(${parameters});
        }
      };`
  ]);
}

function writeAllMethod(
  operation: OperationDetails,
  operationGroupClass: ClassDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `AsyncIterableIterator<${pagingMethodSettings.bodyResponseType}>`;

  const parameters = pagingMethodSettings.baseMethodParameters
    .map(p => p.name)
    .join(",");

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.allMethodName}`,
    parameters: pagingMethodSettings.baseMethodParameters,
    scope: Scope.Private,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.baseMethodParameters,
        operation.description
      )
    ],
    isAsync: true
  });

  method.addStatements([
    `for await (const page of this.${pagingMethodSettings.nextMethodName}(${parameters})) {
        yield* page;
     }`
  ]);
}

function writePageMethod(
  operation: OperationDetails,
  operationGroupClass: ClassDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `AsyncIterableIterator<${pagingMethodSettings.bodyResponseType}[]>`;
  const itemName = "";
  const nextLinkProperty = pagingMethodSettings.paginationDetails.nextLinkName;
  const parameters = pagingMethodSettings.baseMethodParameters
    .map(p => p.name)
    .join(",");

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.pageMethodName}`,
    parameters: pagingMethodSettings.baseMethodParameters,
    scope: Scope.Private,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.baseMethodParameters,
        operation.description
      )
    ],
    isAsync: true
  });

  if (operation.isLRO) {
    method.addStatements([
      `const poller = await this.${pagingMethodSettings.initialMethodName}(${parameters});`,
      `let result = await poller.pollUntilDone();`
    ]);
  } else {
    method.addStatements([
      `let result = await this.${pagingMethodSettings.initialMethodName}(${parameters});`
    ]);
  }

  method.addStatements([
    `yield result.${pagingMethodSettings.paginationDetails.itemName} || []`,
    `while (result.${nextLinkProperty}) {
        result = await this.${pagingMethodSettings.nextMethodName}(result.${nextLinkProperty}, ${parameters})
      }`
  ]);
}
