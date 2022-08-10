import { ServiceInformation } from "../interfaces";
import { generateDocs } from "../utils/docs";

export function generateServiceInformation(
  serviceInformation: ServiceInformation
) {
  const definitions: string[] = [];

  definitions.push(`@serviceTitle("${serviceInformation.name}")`);

  serviceInformation.version &&
    definitions.push(`@serviceVersion("${serviceInformation.version}")`);

  if (serviceInformation.endpoint) {
    definitions.push(
      `@server("${serviceInformation.endpoint}", "${serviceInformation.doc}"`
    );
    if (
      serviceInformation.endpointParameters &&
      serviceInformation.endpointParameters.length
    ) {
      definitions.push(", {");
      for (const param of serviceInformation.endpointParameters) {
        const doc = generateDocs(param);
        doc && definitions.push(doc);
        definitions.push(`${param.name}: string `);
      }
    }
    definitions.push("})");
  }
  const serviceDoc = generateDocs(serviceInformation);
  serviceDoc && definitions.push(serviceDoc);
  definitions.push(`namespace ${serviceInformation.name};`);

  return definitions.join("\n");
}
