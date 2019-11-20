import { Generator } from "../generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../../utils/constants';
import * as fs from 'fs';
import * as ejs from 'ejs';
import { ReadmeFileModel } from "../../models/static/readmeFileModel";

export class ReadmeFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'readme_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/static/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public async process(): Promise<void> {
    let readmeFileModel = new ReadmeFileModel();
    readmeFileModel.clientName = `${this.codeModel.info.title}`;
    readmeFileModel.packageName = await this.host.GetValue('package-name');

    let template:string = this.getTemplate();
    let data = ejs.render(template, { readme: readmeFileModel});
    this.host.WriteFile(`README.md`, data);
  }
}
