/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const PetAPTrue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetAPTrue",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PetAPObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetAPObject",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const PetAPString: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetAPString",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const PetAPInProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetAPInProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } },
        },
      },
    },
  },
};

export const PetAPInPropertiesWithAPString: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetAPInPropertiesWithAPString",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      odataLocation: {
        serializedName: "@odata\\.location",
        required: true,
        type: {
          name: "String",
        },
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } },
        },
      },
    },
  },
};

export const CatAPTrue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CatAPTrue",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...PetAPTrue.type.modelProperties,
      friendly: {
        serializedName: "friendly",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};
