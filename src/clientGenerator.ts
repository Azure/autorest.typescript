import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import * as ejs from 'ejs';
import * as fs from 'fs';

export class ClientGenerator {
  private codeModel:CodeModel;
  private host:Host;
  private clientContextClassName:string;
  private clientContextFileName:string;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.clientContextClassName = "DummyContextClassName";
    this.clientContextFileName = "DummyContextFileName";
  }

  private getTemplate(): string {
    return fs.readFileSync('./src/template/client_template.ejs', {
        encoding: 'utf8'
    });
  }

  public process() {
    let template:string = this.getTemplate();
    let data = ejs.render(template, { client: this});
    this.host.WriteFile(
      'parameters.ts',
      data,
      undefined,
      "source-files-typescript"
    );
  }
}