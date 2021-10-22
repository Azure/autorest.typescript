import { Project } from "ts-morph";
import * as path from 'path';
import * as fs from 'fs';
import * as hbs from "handlebars";
import { getAutorestOptions } from "../../autorestSession";

export function generateEnvBrowserFile(
    project: Project
  ) {
    const { generateTest } = getAutorestOptions();
    if (!generateTest) {
      return;
    }
    project.createSourceFile("test/public/utils/env.browser.ts", '', {
      overwrite: true
    });
  }
