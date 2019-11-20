// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fs from "fs";
import * as ejs from "ejs";

import * as constants from "../utils/constants";
import { Generator } from "./generator";
import { CodeModel } from "@azure-tools/codemodel";
import { Host } from "@azure-tools/autorest-extension-base";
import { transformMapper } from "../mapperTransforms";

export class MappersGenerator implements Generator {
  private host: Host;
  private codeModel: CodeModel;
  private templateName: string;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = "mappers_template.ejs";
  }

  getTemplate(): string {
    return fs.readFileSync(
      `${constants.TEMPLATE_LOCATION}/${this.templateName}`,
      {
        encoding: "utf8"
      }
    );
  }

  public async process(): Promise<void> {
    const mappers = (this.codeModel.schemas.objects || []).map(transformMapper);
    let template: string = this.getTemplate();
    let renderedFile = ejs.render(template, { mappers });

    this.host.WriteFile(
      "src/models/index.ts",
      renderedFile,
      undefined,
      "source-files-typescript"
    );
  }
}
