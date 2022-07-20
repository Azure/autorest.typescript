// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import "./responses";

const responseMap: Record<string, string[]> = {
  "GET /customization/model/{mode}": ["200"],
  "POST /customization/model/{mode}": ["200"],
  "GET /customization/paging/{mode}": ["200"],
  "PUT /customization/lro/{mode}": ["200"],
  "GET /customization/lro/{mode}": ["200"]
};
