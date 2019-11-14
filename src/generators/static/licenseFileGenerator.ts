import { Generator } from "../generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../../utils/constants';
import * as fs from 'fs';
import * as ejs from 'ejs';

export class LicenseFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'license_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/static/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public process(): void {
    let template:string = this.getTemplate();
    let data = ejs.render(template);
    this.host.WriteFile(
      `LICENSE.txt`,
      data,
      undefined,
      "source-files-typescript"
    );
  }
}