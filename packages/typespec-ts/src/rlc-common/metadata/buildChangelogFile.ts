// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";

function getPackageVersion(model: RLCModel): string {
  return model.options?.packageDetails?.version ?? "1.0.0-beta.1";
}

export function buildChangelogFile(model: RLCModel) {
  const version = getPackageVersion(model);
  const content = `# Release History

## ${version} (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes
`;

  return {
    path: "CHANGELOG.md",
    content
  };
}
