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

  public process() {
    let generator: Generator;
    //generator = new ClientContextFileGenerator(this.codeModel, this.host);
    //generator.process();
    generator = new ClientGenerator(this.codeModel, this.host);
    generator.process();
    //generator = new ModelsGenerator(this.codeModel, this.host);
    //generator.process();
    //generator = new OperationGroupsGenerator(this.codeModel, this.host);
    //generator.process();
    //generator = new StaticFilesGenerator(this.codeModel, this.host);
    //generator.process();
  }
}
