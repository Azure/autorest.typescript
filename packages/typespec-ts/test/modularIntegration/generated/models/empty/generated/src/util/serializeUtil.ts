// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EmptyInputOutput, EmptyInput, EmptyOutput } from "../models/models.js";
import {
  EmptyInputOutput as RestEmptyInputOutput,
  EmptyInput as RestEmptyInput,
  EmptyOutputOutput as RestEmptyOutput,
} from "../rest/index.js";

export function serializeEmptyInputOutput(
  o: EmptyInputOutput,
): RestEmptyInputOutput {
  return {};
}

export function deserializeEmptyInputOutput(
  o: RestEmptyInputOutput,
): EmptyInputOutput {
  return {};
}

export function serializeEmptyInput(o: EmptyInput): RestEmptyInput {
  return {};
}

export function deserializeEmptyOutput(o: RestEmptyOutput): EmptyOutput {
  return {};
}
