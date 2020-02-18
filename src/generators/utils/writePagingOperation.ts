import {
  writeOperation,
  GenerateOperationParameters,
  getAllParameters,
  generateOperationJSDoc
} from "./writeOperation";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { TypeDetails, PropertyKind } from "../../models/modelDetails";

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
  parameters: params
}: GenerateOperationParameters) {
  const { paging, name } = operation;
  if (!paging) {
    throw new Error(`Expected paging metadata for operation ${name}`);
  }

  const parameters = getAllParameters(params, operation);
  operationGroupClass.addMethod({
    name: `${normalizeName(name, NameType.Property)}`,
    parameters,
    returnType: `PagedAsyncIterableIterator<${getValueTypes(
      paging.valueTypes
    )}>`,
    docs: [generateOperationJSDoc(parameters, operation.description)]
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
