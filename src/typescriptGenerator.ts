import {Host} from "@azure-tools/autorest-extension-base";
import {CodeModel} from "@azure-tools/codemodel";
import {ClientContextFileGenerator} from "./generators/clientContextFileGenerator";
import {ClientGenerator} from "./generators/clientFileGenerator";
import {Generator} from "./generators/generator";
import {ModelsGenerator} from "./generators/modelsGenerator";
import {OperationGroupsGenerator} from "./generators/operationGroupsGenerator";
import {StaticFilesGenerator} from "./generators/staticFilesGenerator";

export class TypescriptGenerator {
  private codeModel: CodeModel;
  private host: Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
  }

  public async process(): Promise<void> {
    let generators = [
      //new ClientContextFileGenerator(this.codeModel, this.host),
      new StaticFilesGenerator(this.codeModel, this.host),
      new ClientGenerator(this.codeModel, this.host)
      // new ModelsGenerator(this.codeModel, this.host);
      // new OperationGroupsGenerator(this.codeModel, this.host);
    ];

    for (const generator of generators) {
      await generator.process();
    }
  }
}
