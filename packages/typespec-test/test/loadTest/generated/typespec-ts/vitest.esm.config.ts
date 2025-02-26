// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { mergeConfig } from "vitest/config";
import * as vitestConfig from "./vitest.config.ts";
import * as vitestEsmConfig from "../../../vitest.esm.shared.config.ts";

export default mergeConfig(vitestConfig, vitestEsmConfig);
