import * as coreClient from "@azure/core-client";

export const CaptionResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CaptionResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      text: {
        serializedName: "text",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      highlights: {
        serializedName: "highlights",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
