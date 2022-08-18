// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import {
  buildPackageFile,
  buildRollupConfig,
  buildTsConfig,
  buildApiExtractorConfig
} from "@azure-tools/rlc-codegen";
import { transform } from "./transforms/transform";
import { hasRLCSamplesGenerated } from "../generators/samples/rlcSampleGenerator";

export function generatePackageJson(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildPackageFile(rlcModels, hasRLCSamplesGenerated);
  if (preparedContent) {
    project.createSourceFile("package.json", preparedContent.content, {
      overwrite: true
    });
  }
}

export function generateRollupConfig(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildRollupConfig(rlcModels);
  if (preparedContent) {
    project.createSourceFile("rollup.config.js", preparedContent.content, {
      overwrite: true
    });
  }
}

export function generateTsConfig(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildTsConfig(rlcModels, hasRLCSamplesGenerated);
  if (preparedContent) {
    project.createSourceFile("tsconfig.json", preparedContent.content, {
      overwrite: true
    });
  }
}

export function generateApiExtractorConfig(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildApiExtractorConfig(rlcModels);
  if (preparedContent) {
    project.createSourceFile("api-extractor.json", preparedContent.content, {
      overwrite: true
    });
  }
}
