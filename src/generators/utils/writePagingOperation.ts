import {
  writeOperation,
  GenerateOperationParameters,
  getAllParameters,
  generateOperationJSDoc,
  ParameterWithDescription
} from "./writeOperation";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { TypeDetails, PropertyKind } from "../../models/modelDetails";
import { CodeBlockWriter } from "ts-morph";
import { OperationDetails } from "../../models/operationDetails";
import { isEmpty } from "lodash";
import { ParameterDetails } from "../../models/parameterDetails";
import { filterOperationParameters } from "./parameterUtils";

/**
 * This function is responsible for generating a Paging operation using the Async Iterator pattern.
 * To achieve this, we need to generate 2 functions, (1) A private function that contains the logic for
 * fetching the next page from the service using the metadata in PagingMetadata (we'll call it fetcher)
 * and (2) a public function that generates the iterator implementing PagedAsyncIterableIterator from @azure/core-paging
 */
export function writePagingOperation(params: GenerateOperationParameters) {
  writeFetchingFunction(params);
  writeGeneratorFunction(params);
}

/**
 * This function is responsible for generating a function that returns an AsyncIterator to consume a pageable
 * service endpoint. The goal is to abstract paging details from the SDK consumer
 */
function writeGeneratorFunction({
  operationGroupClass,
  operation,
  parameters: operationParameters
}: GenerateOperationParameters) {
  const { paging, name } = operation;
  if (!paging) {
    throw new Error(`Expected paging metadata for operation ${name}`);
  }

  const parametersDeclaration = getAllParameters(
    operationParameters,
    operation
  );

  const operationMethod = operationGroupClass.addMethod({
    name: `${normalizeName(name, NameType.Property)}`,
    parameters: parametersDeclaration,
    returnType: `PagedAsyncIterableIterator<${getValueTypes(
      paging.valueTypes
    )}>`,
    docs: [generateOperationJSDoc(parametersDeclaration, operation.description)]
  });

  operationMethod.addStatements(writer => {
    writeAsycIteratorStatement(writer, operation, operationParameters);
  });
}

/**
 * This function generates the body for the following scenarios
 * 1. The request defines a nextLink = null. In this case we just call the service once and return the results on next with done = true
 */
function writeAsycIteratorStatement(
  writer: CodeBlockWriter,
  operation: OperationDetails,
  parameters: ParameterDetails[]
) {
  const { paging, name } = operation;
  if (!paging) {
    throw new Error(`Expected paging metadata for operation ${name}`);
  }

  const fetchMethodName = normalizeName(`fetch_${name}`, NameType.Property);
  const requiredParameters = filterOperationParameters(parameters, operation);
  writer
    .writeLine(`async function *${fetchMethodName}Iterator (options: any)`)
    .block(() => {
      writer.write(`let response;`);
      writer.write(
        `this.${fetchMethodName}(${requiredParameters
          .map(p => p.name)
          .join(", ")}options)`
      );
    });

  writer.write(`return`).block(() => {
    writer.writeLine("next ()").block(() => {
      writer.writeLine(`return iterator.next`);
    });
  });
}
/**
 * This function is responsible for generating the private functions that will be used to fetch the data from a pageable
 * service. These generated functions will not be exposed in order to abstract paging details from the consumers
 */
function writeFetchingFunction(params: GenerateOperationParameters) {
  const { operation, options } = params;
  const { paging, name } = operation;
  if (!paging) {
    throw new Error(`Expected paging metadata for operation ${name}`);
  }

  writeOperation({
    ...params,
    options: { ...options, isPrivate: true, namePrefix: "fetch_" }
  });
}

function getValueTypes(types: TypeDetails[]): string {
  return types.reduce((acc, current) => {
    const unionToken = `${acc ? "|" : ""}`;
    if (current.kind === PropertyKind.Primitive) {
      return `${acc} ${unionToken} ${current.typeName}`;
    }

    return `${acc} ${unionToken} Models.${current.typeName}`;
  }, "");
}
