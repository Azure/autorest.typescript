import { Generator } from "../generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../../utils/constants';
import * as fs from 'fs';
import * as ejs from 'ejs';

export class TsConfigFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'tsconfig_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/static/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public async process(): Promise<void> {
    let template:string = this.getTemplate();
    let data = ejs.render(template);
    this.host.WriteFile(
      `tsconfig.json`,
      data,
      undefined,
      "source-files-typescript"
    );
  }
}
