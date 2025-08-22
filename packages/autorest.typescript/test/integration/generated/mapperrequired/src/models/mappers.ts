// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

export const CertificateIssuerUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateIssuerUpdateParameters",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String",
        },
      },
    },
  },
};
