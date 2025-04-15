import * as coreClient from "@azure/core-client";

export const StorageError: coreClient.CompositeMapper = {
  serializedName: "StorageError",
  type: {
    name: "Composite",
    className: "StorageError",
    modelProperties: {
      message: {
        serializedName: "Message",
        xmlName: "Message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const QueueGetPropertiesHeaders: coreClient.CompositeMapper = {
  serializedName: "Queue_getPropertiesHeaders",
  type: {
    name: "Composite",
    className: "QueueGetPropertiesHeaders",
    modelProperties: {
      metadata: {
        serializedName: "x-ms-meta",
        headerCollectionPrefix: "x-ms-meta-",
        xmlName: "x-ms-meta",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      approximateMessagesCount: {
        serializedName: "x-ms-approximate-messages-count",
        xmlName: "x-ms-approximate-messages-count",
        type: {
          name: "Number",
        },
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const QueueGetPropertiesExceptionHeaders: coreClient.CompositeMapper = {
  serializedName: "Queue_getPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "QueueGetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};
