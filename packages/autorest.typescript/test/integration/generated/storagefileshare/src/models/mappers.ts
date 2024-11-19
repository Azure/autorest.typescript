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

export const FileUploadRangeFromURLHeaders: coreClient.CompositeMapper = {
  serializedName: "File_uploadRangeFromURLHeaders",
  type: {
    name: "Composite",
    className: "FileUploadRangeFromURLHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String",
        },
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123",
        },
      },
      xMsContentCrc64: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
          name: "ByteArray",
        },
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String",
        },
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123",
        },
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const FileUploadRangeFromURLExceptionHeaders: coreClient.CompositeMapper =
  {
    serializedName: "File_uploadRangeFromURLExceptionHeaders",
    type: {
      name: "Composite",
      className: "FileUploadRangeFromURLExceptionHeaders",
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
