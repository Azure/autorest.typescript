import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as constants from '../utils/constants';
import * as namingUtils from '../utils/nameUtils';
import { Generator } from "./generator";
import { ClientFileModel, OperationGroupName } from "../models/clientFileModel";

export class ClientGenerator implements Generator{
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;  

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = 'client_template.ejs';
  }

  getTemplate(): string {
    return fs.readFileSync(`${constants.TEMPLATE_LOCATION}/${this.templateName}`, {
      encoding: 'utf8'
    });
  }

  public process() {
    let clientFileModel = new ClientFileModel();

    clientFileModel.clientFileName = `${namingUtils.getClientFileName(this.codeModel.info.title)}.ts`;
    clientFileModel.clientClassName = `${namingUtils.getClientClassName(this.codeModel.info.title)}`;
    clientFileModel.clientContextClassName = `${namingUtils.getClientContextClassName(this.codeModel.info.title)}`;
    clientFileModel.clientContextFileName = `${namingUtils.getClientContextFileName(this.codeModel.info.title)}`;
    clientFileModel.modelsName = `${namingUtils.getModelsName(this.codeModel.info.title)}`;
    clientFileModel.mappersName = `${namingUtils.getMappersName(this.codeModel.info.title)}`;

    this.codeModel.operationGroups.forEach(operationGroup => {
      if(operationGroup.$key.length > 0) {
        let og = new OperationGroupName();
        og.operationGroupName = operationGroup.$key;
        og.operationGroupReferenceName = namingUtils.getCamelCaseWithUpperCaseBeginning(operationGroup.$key);
        clientFileModel.operationGroupsNameMapper.push(og);
      }      
    })

    let template:string = this.getTemplate();
    let data = ejs.render(template, { client: clientFileModel});
    this.host.WriteFile(
      `src/${clientFileModel.clientFileName}`,
      data,
      undefined,
      "source-files-typescript"
    );
  }
}