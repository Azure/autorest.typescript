// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from "@azure-tools/codemodel";
import { Host } from "@azure-tools/autorest-extension-base";
import { RollupConfigFileGenerator } from "./static/rollupConfigFileGenerator";
import { TsConfigFileGenerator } from "./static/tsConfigFileGenerator";

export class StaticFilesGenerator implements Generator {
  private codeModel: CodeModel;
  private host: Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
  }

  public async process(): Promise<void> {
    const generators = [
      new RollupConfigFileGenerator(this.codeModel, this.host),
      new TsConfigFileGenerator(this.codeModel, this.host)
    ];

    for (let generator of generators) {
      await generator.process();
    }
  }
}
