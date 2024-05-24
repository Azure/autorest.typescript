// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Routes {}

export type BatchRlcServiceClient = Client & {
  path: Routes;
};
