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

interface MethodDetails {
  name: string;
  parameters: MethodParameter[];
}

interface PagingMethodSettings {
  initialMethod: MethodDetails;
  nextMethod: MethodDetails;
  publicMethod: MethodDetails;
  allMethod: MethodDetails;
  pageMethod: MethodDetails;
  bodyResponseType: string;
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
    .filter(
      o =>
        o.pagination?.supportsAsyncIterators &&
        !o.pagination?.isNextLinkMethod &&
        o.pagination?.nextLinkName
    )
    .forEach(operation => {
      const baseName = normalizeName(operation.name, NameType.Operation);
      const nextOperationName = normalizeName(
        operation.pagination?.nextLinkOperationName || baseName,
        NameType.Operation
      );

      const nextLinkName = operation.pagination?.nextLinkName;

      const nextOperation = operationGroupDetails.operations.find(
        o =>
          o.name.toLocaleLowerCase() ===
          operation.pagination?.nextLinkOperationName?.toLocaleLowerCase()
      );

      if (!nextOperation) {
        throw new Error(`Couldn't find next operation for ${operation.name}`);
      }

      const bodyResponseType = getResponseBodyType(operation);
      const bodyResponseTypeName =
        bodyResponseType?.typeName.replace("[]", "") || "";

      if (!bodyResponseType) {
        throw new Error(`Pageable operation ${baseName} has no return values`);
      }

      bodyResponseType?.usedModels.forEach(m => importedModels.add(m));

      let {
        baseMethodParameters: nextMethodParameters
      } = getOperationParameterSignatures(
        nextOperation,
        clientDetails.parameters,
        importedModels,
        operationGroupClass
      );
      const { baseMethodParameters } = getOperationParameterSignatures(
        operation,
        clientDetails.parameters,
        importedModels,
        operationGroupClass
      );

      nextMethodParameters = nextMethodParameters.map(parameter => {
        if (
          parameter.name === nextLinkName ||
          // TODO: HACK
          parameter.name === "odata.nextLink" ||
          parameter.name === "nextLink"
        ) {
          return { ...parameter, hasQuestionToken: true };
        }

        return parameter;
      });

      const pagingMethodSettings: PagingMethodSettings = {
        initialMethod: {
          name: `${operation.namePrefix}${baseName}`,
          parameters: baseMethodParameters
        },
        nextMethod: {
          name: `${operation.namePrefix}${nextOperationName}`,
          parameters: nextMethodParameters
        },
        publicMethod: { name: baseName, parameters: baseMethodParameters },
        allMethod: { name: `${baseName}All`, parameters: baseMethodParameters },
        pageMethod: {
          name: `${baseName}Page`,
          parameters: baseMethodParameters
        },
        bodyResponseType: bodyResponseTypeName,
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
    name: pagingMethodSettings.publicMethod.name,
    parameters: pagingMethodSettings.publicMethod.parameters,
    scope: Scope.Public,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.publicMethod.parameters,
        operation.description
      )
    ]
  });

  let parameters = pagingMethodSettings.publicMethod.parameters
    .map(p => p.name)
    .join(",");

  const pageMethodNameParams = pagingMethodSettings.pageMethod.parameters
    .map(p => p.name)
    .join(",");

  method.addStatements([
    `const iter = this.${pagingMethodSettings.allMethod.name}(${parameters});`,
    `return {
        next() {
          return iter.next();
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        byPage: (settings) => {
          return this.${pagingMethodSettings.pageMethod.name}(${pageMethodNameParams});
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

  const pageMethodParameters = pagingMethodSettings.pageMethod.parameters
    .map(p => p.name)
    .join(",");

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.allMethod.name}`,
    parameters: pagingMethodSettings.initialMethod.parameters,
    scope: Scope.Private,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.initialMethod.parameters,
        operation.description
      )
    ],
    isAsync: true
  });

  method.addStatements([
    `for await (const page of this.${pagingMethodSettings.pageMethod.name}(${pageMethodParameters})) {
        yield *page
     }`
  ]);
}

function writePageMethod(
  operation: OperationDetails,
  operationGroupClass: ClassDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `AsyncIterableIterator<${pagingMethodSettings.bodyResponseType}[]>`;
  const itemName = pagingMethodSettings.paginationDetails.itemName;
  const nextLinkProperty = normalizeName(
    pagingMethodSettings.paginationDetails.nextLinkName!,
    NameType.Property
  );
  const parameters = pagingMethodSettings.initialMethod.parameters
    .map(p => p.name)
    .join(",");

  const nextParameters = pagingMethodSettings.nextMethod.parameters
    .map(p =>
      p.name === pagingMethodSettings.paginationDetails.nextLinkName ||
      p.name === "nextLink"
        ? "continuationToken"
        : p.name
    )
    .join(",");

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.pageMethod.name}`,
    parameters: pagingMethodSettings.pageMethod.parameters,
    scope: Scope.Private,
    returnType,
    docs: [
      generateOperationJSDoc(
        pagingMethodSettings.initialMethod.parameters,
        operation.description
      )
    ],
    isAsync: true
  });

  let firstRequestStatements = [
    `let result = await this.${pagingMethodSettings.initialMethod.name}(${parameters});`
  ];

  if (operation.isLRO) {
    firstRequestStatements = [
      `const poller = await this.${pagingMethodSettings.initialMethod.name}(${parameters});`,
      // TODO: Fix typing here, currently returning the original response type conflicts because the nextPage doesn't contain the LROSymbol. Maybe an union type is the correct type
      `let result: any = await poller.pollUntilDone();`
    ];
  }

  method.addStatements([
    ...firstRequestStatements,
    `let continuationToken = result.${nextLinkProperty}`,
    `yield result.${itemName} || [];`
  ]);

  method.addStatements([
    `while (continuationToken) {
        result = await this.${pagingMethodSettings.nextMethod.name}(${nextParameters});
        continuationToken = result.${nextLinkProperty}
        yield result.${itemName} || [];
      }`
  ]);
}
