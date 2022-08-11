import {
  CadlObjectProperty,
  CadlOperation,
  CadlOperationGroup,
} from "../interfaces";
import { generateDocs, generateSummary } from "../utils/docs";

export function generateOperation(operation: CadlOperation) {
  const doc = generateDocs(operation);
  const summary = generateSummary(operation);
  const { verb, name, route, responses, parameters } = operation;
  const params = generatePathParameters(parameters.pathParameters);
  const statements: string[] = [];
  summary && statements.push(summary);
  statements.push(doc);
  statements.push(`@route("${route}")`);
  generateMultiResponseWarning(responses, statements);
  statements.push(
    `@${verb} op ${name}(${params ? params : ""}): ${responses.join(" | ")};`
  );
  return statements.join("\n");
}

function generateMultiResponseWarning(
  responses: string[],
  statements: string[]
) {
  responses.length > 1 &&
    statements.push(
      `//TODO: (multi-response) Swagger defines multiple requests and responses. 
       //      This needs to be revisited as CADL supports linking specific responses to each request`
    );
}

function generatePathParameters(parameters: CadlObjectProperty[]) {
  const params: string[] = [];
  for (const parameter of parameters) {
    params.push(generateDocs(parameter));
    params.push(`@path ${parameter.name}: ${parameter.type},`);
  }
  return params.join("\n");
}

export function generateOperationGroup(operationGroup: CadlOperationGroup) {
  const statements: string[] = [];
  const doc = generateDocs(operationGroup);
  const { name, operations } = operationGroup;

  statements.push(`${doc}`);
  statements.push(`interface ${name} {`);
  for (const operation of operations) {
    statements.push(generateOperation(operation));
  }
  statements.push(`}`);

  return statements.join("\n");
}
