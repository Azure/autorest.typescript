import {
  OperationDetails,
  OperationGroupDetails
} from "../../models/operationDetails";
import { ClientDetails } from "../../models/clientDetails";
import {
  ClassDeclaration,
  InterfaceDeclaration,
  MethodDeclaration,
  OptionalKind,
  ParameterDeclarationStructure,
  Scope,
  SourceFile
} from "ts-morph";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getOperationParameterSignatures } from "./parameterUtils";
import { generateOperationJSDoc } from "./docsUtils";
import { getPagingResponseBodyType } from "./responseTypeUtils";
import { getAutorestOptions } from "../../autorestSession";

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
  nextMethod?: MethodDetails;
  publicMethod: MethodDetails;
  allMethod: MethodDetails;
  pageMethod: MethodDetails;
  bodyResponseType: string;
  nextLinkName?: string;
  itemName: string;
}

/**
 * Adds the required imports for paging operations
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addPagingImports(
  operations: OperationDetails[],
  sourceFile: SourceFile
) {
  const { disablePagingAsyncIterators } = getAutorestOptions();
  if (!disablePagingAsyncIterators && hasAsyncIteratorOperations(operations)) {
    sourceFile.addImportDeclarations([
      {
        namedImports: ["PagedAsyncIterableIterator"],
        moduleSpecifier: "@azure/core-paging"
      }
    ]);
  }
}

export function addPagingEsNextRef(
  operations: OperationDetails[],
  sourceFile: SourceFile
) {
  const { disablePagingAsyncIterators } = getAutorestOptions();

  if (!disablePagingAsyncIterators && hasAsyncIteratorOperations(operations)) {
    sourceFile.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
  }
}

/**
 * Checks whether or not an operation group contains any pageable operations
 * that would need AsyncIterators
 */
export function hasAsyncIteratorOperations(operations: OperationDetails[]) {
  return operations.some(o => o.pagination);
}

/**
 * This function prepares the initial and next operations to be generated using
 * AsyncIterators, adding some extra metadata sunc as scope and prefix

 */
export function preparePageableOperations(
  operationGroupDetails: OperationGroupDetails
) {
  const { disablePagingAsyncIterators } = getAutorestOptions();

  if (disablePagingAsyncIterators) {
    return;
  }

  operationGroupDetails.operations
    .filter(o => o.pagination)
    .forEach(operation => {
      operation.scope = Scope.Private;
      operation.namePrefix = "_";
    });
}

/**
 * This function generates all the required methods for the pageable operation
 * using AsyncIterators. It generates 3 extra methods on top of the initial and next operations
 * One public method, one private page method whcih gets results per page, and an All method that
 * iterates throug pages, returning all results in a single collection
 */
export function writeAsyncIterators(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  operationGroupClass: ClassDeclaration | InterfaceDeclaration,
  importedModels: Set<string>
) {
  const { disablePagingAsyncIterators } = getAutorestOptions();

  if (disablePagingAsyncIterators) {
    return;
  }

  operationGroupDetails.operations
    // We can skip "next" operations since covering the original is enough. Otherwise we'll end up with duplicate methods.
    .filter(o => o.pagination && !o.pagination.isNextLinkMethod)
    .forEach(operation => {
      const initialOperationName = normalizeName(
        operation.name,
        NameType.Operation
      );

      const nextOperationName = normalizeName(
        operation.pagination?.nextLinkOperationName || initialOperationName,
        NameType.Operation
      );

      const nextOperation = operationGroupDetails.operations.find(
        o =>
          o.name.toLocaleLowerCase() ===
          operation.pagination?.nextLinkOperationName?.toLocaleLowerCase()
      );

      // We need to figure out the body response type to be able to set the return types properly
      const bodyResponseType = getPagingResponseBodyType(operation);

      // Since we'll be using this type name for importing, we need to make sure that it is not in
      // the form of array [], just need the name.
      let bodyResponseTypeName =
        bodyResponseType?.typeName.replace("[]", "") || "";

      // In case the type name collides with the operation group class we need to append Model to the name
      if (bodyResponseTypeName === operationGroupDetails.name) {
        bodyResponseTypeName = `${bodyResponseTypeName}Model`;
      }

      if (!bodyResponseType) {
        throw new Error(
          `Pageable operation ${initialOperationName} has no return values`
        );
      }

      // Keep track of the models we'll need to import
      bodyResponseType?.usedModels.forEach(m => importedModels.add(m));

      let nextMethodParameters: MethodParameter[] | null = null;

      if (nextOperation) {
        nextMethodParameters = getOperationParameterSignatures(
          nextOperation,
          clientDetails.parameters,
          importedModels,
          operationGroupClass
        ).baseMethodParameters.map(parameter => {
          if (parameter.name === "nextLink") {
            return { ...parameter, hasQuestionToken: true };
          }

          return parameter;
        });
      }

      const {
        baseMethodParameters: initialMethodParameters
      } = getOperationParameterSignatures(
        operation,
        clientDetails.parameters,
        importedModels,
        operationGroupClass
      );

      // Build an object with all the information about the paging methods
      // while generating each of the paging methods, this will help up access
      // information about the other methods.
      const pagingMethodSettings: PagingMethodSettings = {
        initialMethod: {
          name: `${operation.namePrefix}${initialOperationName}`,
          parameters: initialMethodParameters
        },
        nextMethod: nextMethodParameters
          ? {
              name: `${operation.namePrefix}${nextOperationName}`,
              parameters: nextMethodParameters
            }
          : undefined,
        publicMethod: {
          name: getPublicMethodName(operation),
          parameters: initialMethodParameters
        },
        allMethod: {
          name: `${initialOperationName}PagingAll`,
          parameters: initialMethodParameters
        },
        pageMethod: {
          name: `${initialOperationName}PagingPage`,
          parameters: initialMethodParameters
        },
        bodyResponseType: bodyResponseTypeName,
        nextLinkName: operation.pagination?.nextLinkName || "nextLink",
        itemName: operation.pagination?.itemName || "value"
      };

      writePublicMethod(operation, operationGroupClass, pagingMethodSettings);
      if (operationGroupClass instanceof ClassDeclaration) {
        writePageMethod(operation, operationGroupClass, pagingMethodSettings);
        writeAllMethod(operationGroupClass, pagingMethodSettings);
      }
    });
}

/**
 * This method enforces Azure SDK Typescript guideline that paging methods should be named list*
 * https://azure.github.io/azure-sdk/typescript_design.html#ts-pagination-provide-list
 */
export function getPublicMethodName(operation: OperationDetails) {
  let initialOperationName = normalizeName(operation.name, NameType.Operation);
  if (initialOperationName.indexOf("list") === 0) {
    initialOperationName = initialOperationName.replace("list", "");
  } else if (initialOperationName.indexOf("get") === 0) {
    initialOperationName = initialOperationName.replace("get", "");
  } else {
    initialOperationName = normalizeName(initialOperationName, NameType.Class);
  }
  return operation.isLro
    ? `beginList${initialOperationName}AndWait`
    : `list${initialOperationName}`;
}

/**
 * Generates the content of the public method, here we reference the other 2 methods All and Page
 */
function writePublicMethod(
  operation: OperationDetails,
  operationGroupClass: ClassDeclaration | InterfaceDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `PagedAsyncIterableIterator<${pagingMethodSettings.bodyResponseType}>`;

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

  if (operationGroupClass instanceof ClassDeclaration) {
    // Extract the parameter names for the All method to call it
    let allMethodParameters = pagingMethodSettings.allMethod.parameters
      .map(p => p.name)
      .join();

    // Extract the parameter names for the page method to call it
    const pageMethodNameParams = pagingMethodSettings.pageMethod.parameters
      .map(p => p.name)
      .join();

    (method as MethodDeclaration).addStatements([
      `const iter = this.${pagingMethodSettings.allMethod.name}(${allMethodParameters});`,
      `return {
        next() {
          return iter.next();
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        byPage: () => {
          return this.${pagingMethodSettings.pageMethod.name}(${pageMethodNameParams});
        }
      };`
    ]);
  }
}

/**
 * Generates the All method which loops through all the pages and returns an iterator for all the results
 */
function writeAllMethod(
  operationGroupClass: ClassDeclaration,
  pagingMethodSettings: PagingMethodSettings
) {
  const returnType = `AsyncIterableIterator<${pagingMethodSettings.bodyResponseType}>`;

  // Gets the page method parameters to use when calling it.
  const pageMethodParameters = pagingMethodSettings.pageMethod.parameters
    .map(p => p.name)
    .join();

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.allMethod.name}`,
    parameters: pagingMethodSettings.initialMethod.parameters,
    scope: Scope.Private,
    returnType,
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

  // Name of the property that contains the page value
  const itemName = pagingMethodSettings.itemName;

  // Name of the property that contains the nextLink
  const nextLinkProperty = normalizeName(
    pagingMethodSettings.nextLinkName!,
    NameType.Property
  );

  // Extract the names for the initial method parameters
  const initialMethodParameters = pagingMethodSettings.initialMethod.parameters
    .map(p => p.name)
    .join();

  const method = operationGroupClass.addMethod({
    name: `*${pagingMethodSettings.pageMethod.name}`,
    parameters: pagingMethodSettings.pageMethod.parameters,
    scope: Scope.Private,
    returnType,
    isAsync: true
  });

  let firstRequestStatements = [
    `let result = await this.${pagingMethodSettings.initialMethod.name}(${initialMethodParameters});`
  ];

  if (operation.isLro) {
    // Since this is also an Lro operation, we need to poll until done to get the result
    firstRequestStatements = [
      `const poller = await this.${pagingMethodSettings.initialMethod.name}(${initialMethodParameters});`,
      `let result: any = await poller.pollUntilDone();`
    ];
  }

  method.addStatements([
    ...firstRequestStatements,
    `yield result.${itemName} || [];`
  ]);

  // There is a scenario where there is no nextMethod, just the initial one, in that case we don't need to loop
  // until we no longer have a continuationToken, we just stop there.
  // Otherwise we generate the below code to loop
  if (pagingMethodSettings.nextMethod) {
    // Extract the parameters to send to the nextMethod
    const nextParameters = pagingMethodSettings.nextMethod.parameters
      // renaming nextLink to continuationToken sice it is the name we are using below and to avoid collisions with the
      // nextLink parameter that this (page method) takes.
      .map(p => (p.name === "nextLink" ? "continuationToken" : p.name))
      .join();

    method.addStatements([
      `let continuationToken = result.${nextLinkProperty}`
    ]);

    method.addStatements([
      `while (continuationToken) {
        result = await this.${pagingMethodSettings.nextMethod.name}(${nextParameters});
        continuationToken = result.${nextLinkProperty}
        yield result.${itemName} || [];
      }`
    ]);
  }
}
