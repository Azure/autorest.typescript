// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface CreateWidget {
  weight: number;
  color: "red" | "blue";
}

export interface UpdateWidget {
  weight?: number;
  color?: "red" | "blue";
}
