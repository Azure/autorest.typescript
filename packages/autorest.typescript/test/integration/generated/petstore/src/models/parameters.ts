import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  Pet as PetMapper,
  Order as OrderMapper,
  User as UserMapper,
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: {
    serializedName: "body",
    xmlName: "body",
    type: {
      name: "Stream",
    },
  },
};

export const contentType1: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: {
    serializedName: "body",
    xmlName: "body",
    type: {
      name: "Stream",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    xmlName: "$host",
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PetMapper,
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    defaultValue: ["available", "unavailable"],
    serializedName: "status",
    xmlName: "status",
    xmlElementName: "Get0ItemsItem",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    xmlName: "tags",
    xmlElementName: "String",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const petId: OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    serializedName: "petId",
    required: true,
    xmlName: "petId",
    type: {
      name: "Number",
    },
  },
};

export const contentType3: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/x-www-form-urlencoded",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const name: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    xmlName: "name",
    type: {
      name: "String",
    },
  },
};

export const status1: OperationParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    xmlName: "status",
    type: {
      name: "String",
    },
  },
};

export const petId1: OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    serializedName: "petId",
    required: true,
    xmlName: "petId",
    type: {
      name: "String",
    },
  },
};

export const apiKey: OperationParameter = {
  parameterPath: ["options", "apiKey"],
  mapper: {
    serializedName: "api_key",
    xmlName: "api_key",
    type: {
      name: "String",
    },
  },
};

export const contentType4: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const additionalMetadata: OperationParameter = {
  parameterPath: ["options", "additionalMetadata"],
  mapper: {
    serializedName: "additionalMetadata",
    xmlName: "additionalMetadata",
    type: {
      name: "String",
    },
  },
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "file",
    xmlName: "file",
    type: {
      name: "Stream",
    },
  },
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: OrderMapper,
};

export const orderId: OperationURLParameter = {
  parameterPath: "orderId",
  mapper: {
    serializedName: "orderId",
    required: true,
    xmlName: "orderId",
    type: {
      name: "String",
    },
  },
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UserMapper,
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: {
    serializedName: "body",
    xmlName: "body",
    xmlElementName: "User",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "User",
        },
      },
    },
  },
};

export const username: OperationQueryParameter = {
  parameterPath: ["options", "username"],
  mapper: {
    serializedName: "username",
    xmlName: "username",
    type: {
      name: "String",
    },
  },
};

export const password: OperationQueryParameter = {
  parameterPath: ["options", "password"],
  mapper: {
    serializedName: "password",
    xmlName: "password",
    type: {
      name: "String",
    },
  },
};

export const username1: OperationURLParameter = {
  parameterPath: "username",
  mapper: {
    serializedName: "username",
    required: true,
    xmlName: "username",
    type: {
      name: "String",
    },
  },
};
