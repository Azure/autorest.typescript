// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as fs from 'fs';
import * as ejs from 'ejs';
import * as namingUtils from '../utils/nameUtils';
import * as constants from '../utils/constants';
import { ClientContextFileModel } from '../models/clientContextFileModel';

export class ClientContextFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'client_context_file_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public async process(): Promise<void> {
    let clientContextFileModel = new ClientContextFileModel();
    clientContextFileModel.clientContextFileName = `${namingUtils.getClientContextFileName(this.codeModel.info.title)}.ts`;
    clientContextFileModel.packageName = await this.host.GetValue('package-name');
    clientContextFileModel.packageVersion = await this.host.GetValue('package-version');
    clientContextFileModel.contextClassName = `${namingUtils.getClientContextClassName(this.codeModel.info.title)}`;
    clientContextFileModel.clientClassName = `${namingUtils.getClientClassName(this.codeModel.info.title)}`;
    let template:string = this.getTemplate();
    let data = ejs.render(template, { context: clientContextFileModel});
    this.host.WriteFile(
      `src/${clientContextFileModel.clientContextFileName}`,
      data,
      undefined,
      "source-files-typescript"
    );
  }
}
