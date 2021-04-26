import * as coreHttp from "@azure/core-http";

export const Product: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      integer: {
        serializedName: "integer",
        type: {
          name: "Number"
        }
      },
      string: {
        serializedName: "string",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dummy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Dummy",
    modelProperties: {
      integer: {
        serializedName: "integer",
        type: {
          name: "Number"
        }
      },
      string: {
        serializedName: "string",
        type: {
          name: "String"
        }
      }
    }
  }
};
