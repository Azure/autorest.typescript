// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import {
  AutoRestExtension,
  AutorestExtensionHost,
  startSession,
} from "@autorest/extension-base";
import { writeFile } from "fs/promises";
import { writeEnums } from "./generate/generateModels";
import { generateObject } from "./generate/generateObject";

import { transformEnum } from "./transforms/transformChoices";
import { transformObject } from "./transforms/transformObject";

import { format } from "prettier";
import { generateServiceInformation } from "./generate/generateServiceInformation";
import { transformServiceInformation } from "./transforms/transformServiceInformation";
import { transformOperationGroup } from "./transforms/transformOperations";
import { generateOperationGroup } from "./generate/generateOperations";

export async function processRequest(host: AutorestExtensionHost) {
  const session = await startSession<CodeModel>(host, codeModelSchema);
  const model = session.model;
  const cadlEnums = [
    ...(model.schemas.choices ?? []),
    ...(model.schemas.sealedChoices ?? []),
  ].map(transformEnum);

  const cadlObjects = model.schemas.objects?.map(transformObject) ?? [];

  const cadlOperationGroups = model.operationGroups.map(
    transformOperationGroup
  );

  const file = [
    `import "@cadl-lang/rest";`,
    `using Cadl.Rest;`,
    `using Cadl.Http;`,
  ];

  file.push(generateServiceInformation(transformServiceInformation(model)));

  const enums = writeEnums(cadlEnums).join(`\n\n`);
  const objects = cadlObjects.map(generateObject).join("\n\n");
  const operationGroups = cadlOperationGroups
    .map(generateOperationGroup)
    .join("\n\n");
  const models = [enums, objects].join("\n");

  file.push(models);
  file.push(operationGroups);
  const content = file.join("\n");

  await writeFile("models-raw.cadl", content);

  const formattedFile = format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath: "models.cadl",
  });

  await writeFile("models.cadl", formattedFile);
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("cadl-init", processRequest);
  await pluginHost.run();
}

main();
