// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../utils/constants';
import * as fs from 'fs';

export class ModelsGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'models_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public process(): void {
    throw new Error("Method not implemented.");
  }
}
