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
import { SampleGroup } from "../../models/sampleDetails";

/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export function generateHLCSamples(
  clientDetails: ClientDetails,
  project: Project
): void {
  // Toplevel operations are inlined in the client
  const sampleGroups = clientDetails.samples;
  const session = getSession();
  if (!sampleGroups) {
    session.error("No samples are found! ", []);
  }
  for (const sampleGroup of sampleGroups as SampleGroup[]) {
    try {
      const file = fs.readFileSync(path.join(__dirname, "hlcSamples.ts.hbs"), {
        encoding: "utf-8"
      });

      const sampleGroupFileContents = hbs.compile(file, { noEscape: true });
      project.createSourceFile(`samples-dev/${sampleGroup.sampleFileName}.ts`, sampleGroupFileContents(sampleGroup), {
        overwrite: true
      });
    } catch (error) {
      session.error("An error was encountered while handling sample generation", [sampleGroup.sampleFileName]);
      throw error;
    }
  }
}

