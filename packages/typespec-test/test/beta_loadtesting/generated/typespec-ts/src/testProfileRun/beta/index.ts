// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "./augmentations.js";
import { _setDefaultApiVersion } from "../api/testProfileRunContext.js";
// Upgrade default API version for all operations when beta features are enabled.
// Preview API versions are supersets of stable — using the preview version for stable
// operations ensures consistency when both stable and preview operations share a client.
_setDefaultApiVersion("2024-05-01-preview");
