// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface Generator {
  process(): void;
  getTemplate(): string;
  templateName: string;
}
