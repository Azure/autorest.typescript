import { Generator } from "../generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../../utils/constants';
import * as fs from 'fs';
import * as ejs from 'ejs';
import { PackageFileModel } from "../../models/static/packageFileModel";
import * as namingUtils from '../../utils/nameUtils';

export class PackageFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'package_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/static/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public async process(): Promise<void> {
    let packageFileModel = new PackageFileModel();

    packageFileModel.packageName = await this.host.GetValue('package-name');
    packageFileModel.clientClassName = `${namingUtils.getClientClassName(this.codeModel.info.title)}`;;
    packageFileModel.packageVersion = await this.host.GetValue('package-version');
    packageFileModel.clientFileName = `${namingUtils.getClientFileName(this.codeModel.info.title)}`;
    packageFileModel.packageNameModified = `${namingUtils.getPackageNameModified(packageFileModel.packageName)}`;

    let template:string = this.getTemplate();
    let data = ejs.render(template, { package: packageFileModel});
    this.host.WriteFile(`package.json`, data);
  }
}
