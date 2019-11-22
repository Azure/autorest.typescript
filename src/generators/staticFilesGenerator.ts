// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from "@azure-tools/codemodel";
import { Host } from "@azure-tools/autorest-extension-base";

export class StaticFilesGenerator implements Generator {
  private codeModel: CodeModel;
  private host: Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
  }

  public async process(): Promise<void> {}
}
