import { Generator } from "../generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as constants from '../../utils/constants';
import * as fs from 'fs';
import * as ejs from 'ejs';
import { RollupFileModel } from "../../models/static/rollupFileModel";
import * as namingUtils from '../../utils/nameUtils';

export class RollupConfigFileGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'rollup_config_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/static/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public async process(): Promise<void> {
    let rollupFileModel = new RollupFileModel();
    rollupFileModel.clientFileName = `${namingUtils.getClientFileName(this.codeModel.info.title)}`;
    rollupFileModel.packageName = await this.host.GetValue('package-name');
    rollupFileModel.packageOutputName = `${namingUtils.getPackageOutputName(rollupFileModel.packageName)}`;

    let template:string = this.getTemplate();
    let data = ejs.render(template, { rollup: rollupFileModel});
    this.host.WriteFile(`rollup.config.js`, data);
  }
}
