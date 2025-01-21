// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const sampleTemplate = `
{{#each importedTypes}}
{{this}}
{{/each}}
import * as dotenv from "dotenv";

dotenv.config();

{{#each samples}}
/**
 * This sample demonstrates how to {{this.description}}
 *
 * @summary {{this.description}}
 {{#if this.originalFileLocation}}
 * x-ms-original-file: {{this.originalFileLocation}}
 {{/if}}
 */
async function {{name}}() {
  {{#each this.clientParamAssignments}}
  {{this}}
  {{/each}}
  const client = {{this.defaultFactoryName}}({{this.clientParamNames}});
  {{#each this.pathParamAssignments}}
  {{this}}
  {{/each}}
  {{#each this.methodParamAssignments}}
  {{this}}
  {{/each}}
  {{#if this.isPaging}}
  const initialResponse = await client.path({{this.pathParamNames}}).{{method}}({{methodParamNames}});
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  {{else if this.isLRO}}
  const initialResponse ={{#unless this.useLegacyLro}} await{{/unless}} client.path({{this.pathParamNames}}).{{method}}({{methodParamNames}});
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  {{else}}
  const result = await client.path({{this.pathParamNames}}).{{method}}({{methodParamNames}});
  {{/if}}
  console.log(result);
}

{{/each}}

async function main() {
{{#each samples}}
  await {{this.name}}();
{{/each}}
}

main().catch(console.error);
`;
