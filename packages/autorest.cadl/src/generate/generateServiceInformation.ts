import { ServiceInformation } from "../interfaces";

export function generateServiceInformation(
  serviceInformation: ServiceInformation
) {
  const definitions: string[] = [];

  definitions.push(`@serviceTitle("${serviceInformation.name}")`);

  serviceInformation.version &&
    definitions.push(`@serviceVersion("${serviceInformation.version}")`);

  if (serviceInformation.endpoint) {
    definitions.push(
      `@server("${serviceInformation.endpoint}", "${serviceInformation.description}"`
    );
    if (
      serviceInformation.endpointParameters &&
      serviceInformation.endpointParameters.length
    ) {
      definitions.push(", {");
      for (const param of serviceInformation.endpointParameters) {
        definitions.push(`@docs("${param.doc}")`);
        definitions.push(`${param.name}: string `);
      }
    }
    definitions.push("})");
  }

  return definitions.join("\n");
}
