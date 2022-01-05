// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
    Project,
    SourceFile
} from "ts-morph";
import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { ClientDetails } from "../../models/clientDetails";
import { SampleDetails } from "../../models/sampleDetails";
  
/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export function generateSamples(
  clientDetails: ClientDetails,
  project: Project
): void {
  // Toplevel operations are inlined in the client
  const samples = clientDetails.samples;
  const session = getSession();
  if (!samples) {
    session.error("No samples are found! ", []);
  }
  for(const sample of samples as SampleDetails[]) {
    try {
      const file = fs.readFileSync(path.join(__dirname, "../static/samples.ts.hbs"), {
        encoding: "utf-8"
      });

      const readmeFileContents = hbs.compile(file, { noEscape: true });
      project.createSourceFile(`samples-dev/${sample.sampleFunctionName}.ts`, readmeFileContents(sample), {
        overwrite: true
      });
    } catch (error) {
      session.error("An error was encountered while handling sample generation", [sample.sampleFunctionName]);
      throw error;
    }
  }
}
  
