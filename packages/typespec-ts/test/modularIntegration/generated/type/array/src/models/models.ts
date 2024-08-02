// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Array inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: InnerModel[];
}

export function innerModelSerializer(
  item: InnerModel,
): Record<string, unknown> {
  return {
    property: item["property"],
    children:
      item["children"] === undefined
        ? item["children"]
        : item["children"].map(innerModelSerializer),
  };
}
