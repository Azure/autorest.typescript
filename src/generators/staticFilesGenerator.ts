// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from '@azure-tools/codemodel';
import { Host } from '@azure-tools/autorest-extension-base';
import { LicenseFileGenerator } from './static/licenseFileGenerator';
import { ReadmeFileGenerator } from './static/readmeFileGenerator';
import { PackageFileGenerator } from './static/packageFileGenerator';
import { RollupConfigFileGenerator } from './static/rollupConfigFileGenerator';
import { TsConfigFileGenerator } from './static/tsConfigFileGenerator';

export class StaticFilesGenerator implements Generator {
  templateName: string;
  private codeModel:CodeModel;
  private host:Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.templateName = ''; //Nothing is generated in this class
  }

  getTemplate(): string {
    throw new Error("Method not implemented.");
  }

  public async process(): Promise<void> {
    const generators = [
      new LicenseFileGenerator(this.codeModel, this.host),
      new ReadmeFileGenerator(this.codeModel, this.host),
      new PackageFileGenerator(this.codeModel, this.host),
      // new RollupConfigFileGenerator(this.codeModel, this.host);
      // new TsConfigFileGenerator(this.codeModel, this.host);
    ];

    for (let generator of generators) {
      await generator.process();
    }
  }
}
