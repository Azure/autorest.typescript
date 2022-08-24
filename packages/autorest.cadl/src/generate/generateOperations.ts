import {
  CadlOperation,
  CadlOperationGroup,
  CadlParameter,
} from "../interfaces";
import { generateDocs, generateSummary } from "../utils/docs";

export function generateOperation(operation: CadlOperation) {
  const doc = generateDocs(operation);
  const summary = generateSummary(operation);
  const { verb, name, route, responses, parameters } = operation;
  const params = generateParameters(parameters);
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
  responses.length > 2 &&
    statements.push(
      `// FIXME: (multi-response) Swagger defines multiple requests and responses. 
       //      This needs to be revisited as CADL supports linking specific responses to each request`
    );
}

function generateParameters(parameters: CadlParameter[]) {
  const params: string[] = [];
  for (const parameter of parameters) {
    const location = parameter.location;
    params.push(generateDocs(parameter));
    params.push(`@${location} "${parameter.name}": ${parameter.type},`);
  }
  return params.join("\n");
}

export function generateOperationGroup(operationGroup: CadlOperationGroup) {
  const statements: string[] = [];
  const doc = generateDocs(operationGroup);
  const { name, operations } = operationGroup;

  statements.push(`${doc}`);
  const hasInterface = Boolean(name);
  hasInterface && statements.push(`interface ${name} {`);
  for (const operation of operations) {
    statements.push(generateOperation(operation));
  }
  hasInterface && statements.push(`}`);

  return statements.join("\n");
}
