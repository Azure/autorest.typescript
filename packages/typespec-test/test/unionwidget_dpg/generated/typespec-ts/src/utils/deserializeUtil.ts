// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetData0Output,
  WidgetData2Output,
  WidgetData1Output,
  WidgetData3Output,
  WidgetData4Output,
  WidgetData5Output,
  WidgetData6Output,
} from "../rest/index.js";
import {
  WidgetData0,
  WidgetData2,
  WidgetData1,
  WidgetData3,
  WidgetData4,
  WidgetData5,
  WidgetData6,
} from "../models/models.js";
import { stringToUint8Array } from "@azure/core-util";

/** type predict function fpr WidgetData2 from WidgetData0Output | WidgetData2Output */
function isWidgetData2(
  obj: WidgetData0Output | WidgetData2Output
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData1Output | WidgetData2Output */
function isWidgetData2(
  obj: WidgetData1Output | WidgetData2Output
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData2Output | WidgetData3Output */
function isWidgetData2(
  obj: WidgetData2Output | WidgetData3Output
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData0Output[] | WidgetData2Output */
function isWidgetData2(
  obj: WidgetData0Output[] | WidgetData2Output
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData1Output[] | WidgetData2Output */
function isWidgetData2(
  obj: WidgetData1Output[] | WidgetData2Output
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData2Output | WidgetData3Output[] */
function isWidgetData2(
  obj: WidgetData2Output | WidgetData3Output[]
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData2Output | WidgetData4Output | WidgetData6Output[] */
function isWidgetData2(
  obj: WidgetData2Output | WidgetData4Output | WidgetData6Output[]
): obj is WidgetData2Output;
/** type predict function fpr WidgetData2 from WidgetData0Output | WidgetData2Output */
function isWidgetData2(
  obj:
    | WidgetData0Output
    | WidgetData2Output
    | WidgetData1Output
    | WidgetData2Output
    | WidgetData2Output
    | WidgetData3Output
    | WidgetData0Output[]
    | WidgetData2Output
    | WidgetData1Output[]
    | WidgetData2Output
    | WidgetData2Output
    | WidgetData3Output[]
    | WidgetData2Output
    | WidgetData4Output
    | WidgetData6Output[]
): obj is WidgetData2Output {
  return (obj as WidgetData2Output).foo_prop !== undefined;
}

/** deserialize function for WidgetData2 */
function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
  return { fooProp: obj["foo_prop"] };
}

/** deserialize function for WidgetData0Output | WidgetData2Output */
export function deserializeWidgetData0AndWidgetData2Union(
  obj: WidgetData0Output | WidgetData2Output
): WidgetData0 | WidgetData2 {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  return obj;
}

/** deserialize function for WidgetData1Output | WidgetData2Output */
export function deserializeWidgetData1AndWidgetData2Union(
  obj: WidgetData1Output | WidgetData2Output
): WidgetData1 | WidgetData2 {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData3 from WidgetData2Output | WidgetData3Output */
function isWidgetData3(
  obj: WidgetData2Output | WidgetData3Output
): obj is WidgetData3Output;
/** type predict function fpr WidgetData3 from WidgetData2Output[] | WidgetData3Output */
function isWidgetData3(
  obj: WidgetData2Output[] | WidgetData3Output
): obj is WidgetData3Output;
/** type predict function fpr WidgetData3 from WidgetData0Output | WidgetData3Output | WidgetData5Output[] */
function isWidgetData3(
  obj: WidgetData0Output | WidgetData3Output | WidgetData5Output[]
): obj is WidgetData3Output;
/** type predict function fpr WidgetData3 from WidgetData2Output | WidgetData3Output */
function isWidgetData3(
  obj:
    | WidgetData2Output
    | WidgetData3Output
    | WidgetData2Output[]
    | WidgetData3Output
    | WidgetData0Output
    | WidgetData3Output
    | WidgetData5Output[]
): obj is WidgetData3Output {
  return (obj as WidgetData3Output).bar_prop !== undefined;
}

/** deserialize function for WidgetData3 */
function deserializeWidgetData3(obj: WidgetData3Output): WidgetData3 {
  return { barProp: obj["bar_prop"] };
}

/** deserialize function for WidgetData2Output | WidgetData3Output */
export function deserializeWidgetData2AndWidgetData3Union(
  obj: WidgetData2Output | WidgetData3Output
): WidgetData2 | WidgetData3 {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  if (isWidgetData3(obj)) {
    return deserializeWidgetData3(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData4 from WidgetData0Output | WidgetData4Output */
function isWidgetData4(
  obj: WidgetData0Output | WidgetData4Output
): obj is WidgetData4Output;
/** type predict function fpr WidgetData4 from WidgetData0Output[] | WidgetData4Output */
function isWidgetData4(
  obj: WidgetData0Output[] | WidgetData4Output
): obj is WidgetData4Output;
/** type predict function fpr WidgetData4 from WidgetData2Output | WidgetData4Output | WidgetData6Output[] */
function isWidgetData4(
  obj: WidgetData2Output | WidgetData4Output | WidgetData6Output[]
): obj is WidgetData4Output;
/** type predict function fpr WidgetData4 from WidgetData0Output | WidgetData4Output */
function isWidgetData4(
  obj:
    | WidgetData0Output
    | WidgetData4Output
    | WidgetData0Output[]
    | WidgetData4Output
    | WidgetData2Output
    | WidgetData4Output
    | WidgetData6Output[]
): obj is WidgetData4Output {
  return (obj as WidgetData4Output).start !== undefined;
}

/** deserialize function for WidgetData4 */
function deserializeWidgetData4(obj: WidgetData4Output): WidgetData4 {
  return {
    start: new Date(obj["start"]),
    end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
  };
}

/** deserialize function for WidgetData0Output | WidgetData4Output */
export function deserializeWidgetData0AndWidgetData4Union(
  obj: WidgetData0Output | WidgetData4Output
): WidgetData0 | WidgetData4 {
  if (isWidgetData4(obj)) {
    return deserializeWidgetData4(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData5 from WidgetData0Output | WidgetData5Output */
function isWidgetData5(
  obj: WidgetData0Output | WidgetData5Output
): obj is WidgetData5Output;
/** type predict function fpr WidgetData5 from WidgetData0Output[] | WidgetData5Output */
function isWidgetData5(
  obj: WidgetData0Output[] | WidgetData5Output
): obj is WidgetData5Output;
/** type predict function fpr WidgetData5 from WidgetData0Output | WidgetData5Output */
function isWidgetData5(
  obj:
    | WidgetData0Output
    | WidgetData5Output
    | WidgetData0Output[]
    | WidgetData5Output
): obj is WidgetData5Output {
  return (obj as WidgetData5Output).data !== undefined;
}

/** deserialize function for WidgetData5 */
function deserializeWidgetData5(obj: WidgetData5Output): WidgetData5 {
  return {
    data:
      typeof obj["data"] === "string"
        ? stringToUint8Array(obj["data"], "base64")
        : obj["data"],
  };
}

/** deserialize function for WidgetData0Output | WidgetData5Output */
export function deserializeWidgetData0AndWidgetData5Union(
  obj: WidgetData0Output | WidgetData5Output
): WidgetData0 | WidgetData5 {
  if (isWidgetData5(obj)) {
    return deserializeWidgetData5(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData2Output array from WidgetData0Output[] | WidgetData2Output[] */
function isWidgetData2Array(
  obj: WidgetData0Output[] | WidgetData2Output[]
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData1Output[] | WidgetData2Output[] */
function isWidgetData2Array(
  obj: WidgetData1Output[] | WidgetData2Output[]
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData2Output[] | WidgetData3Output[] */
function isWidgetData2Array(
  obj: WidgetData2Output[] | WidgetData3Output[]
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData0Output | WidgetData2Output[] */
function isWidgetData2Array(
  obj: WidgetData0Output | WidgetData2Output[]
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData1Output | WidgetData2Output[] */
function isWidgetData2Array(
  obj: WidgetData1Output | WidgetData2Output[]
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData2Output[] | WidgetData3Output */
function isWidgetData2Array(
  obj: WidgetData2Output[] | WidgetData3Output
): obj is WidgetData2Output[];
/** type predict function fpr WidgetData2Output array from WidgetData0Output[] | WidgetData2Output[] */
function isWidgetData2Array(
  obj:
    | WidgetData0Output[]
    | WidgetData2Output[]
    | WidgetData1Output[]
    | WidgetData2Output[]
    | WidgetData2Output[]
    | WidgetData3Output[]
    | WidgetData0Output
    | WidgetData2Output[]
    | WidgetData1Output
    | WidgetData2Output[]
    | WidgetData2Output[]
    | WidgetData3Output
): obj is WidgetData2Output[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData2Output[])[0].foo_prop !== undefined;
  }

  return false;
}

/** deserialize function for WidgetData2 array */
function deserializeWidgetData2Array(obj: WidgetData2Output[]): WidgetData2[] {
  return (obj || []).map((item) => {
    return { fooProp: item["foo_prop"] };
  });
}

/** deserialize function for WidgetData0Output[] | WidgetData2Output[] */
export function deserializeWidgetData0ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData0Output[] | WidgetData2Output[]
): WidgetData0[] | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData1Output[] | WidgetData2Output[] */
export function deserializeWidgetData1ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData1Output[] | WidgetData2Output[]
): WidgetData1[] | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData3Output array from WidgetData2Output[] | WidgetData3Output[] */
function isWidgetData3Array(
  obj: WidgetData2Output[] | WidgetData3Output[]
): obj is WidgetData3Output[];
/** type predict function fpr WidgetData3Output array from WidgetData2Output | WidgetData3Output[] */
function isWidgetData3Array(
  obj: WidgetData2Output | WidgetData3Output[]
): obj is WidgetData3Output[];
/** type predict function fpr WidgetData3Output array from WidgetData2Output[] | WidgetData3Output[] */
function isWidgetData3Array(
  obj:
    | WidgetData2Output[]
    | WidgetData3Output[]
    | WidgetData2Output
    | WidgetData3Output[]
): obj is WidgetData3Output[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData3Output[])[0].bar_prop !== undefined;
  }

  return false;
}

/** deserialize function for WidgetData3 array */
function deserializeWidgetData3Array(obj: WidgetData3Output[]): WidgetData3[] {
  return (obj || []).map((item) => {
    return { barProp: item["bar_prop"] };
  });
}

/** deserialize function for WidgetData2Output[] | WidgetData3Output[] */
export function deserializeWidgetData2ArrayAndWidgetData3ArrayUnion(
  obj: WidgetData2Output[] | WidgetData3Output[]
): WidgetData2[] | WidgetData3[] {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  if (isWidgetData3Array(obj)) {
    return deserializeWidgetData3Array(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData4Output array from WidgetData0Output[] | WidgetData4Output[] */
function isWidgetData4Array(
  obj: WidgetData0Output[] | WidgetData4Output[]
): obj is WidgetData4Output[];
/** type predict function fpr WidgetData4Output array from WidgetData0Output | WidgetData4Output[] */
function isWidgetData4Array(
  obj: WidgetData0Output | WidgetData4Output[]
): obj is WidgetData4Output[];
/** type predict function fpr WidgetData4Output array from WidgetData0Output[] | WidgetData4Output[] */
function isWidgetData4Array(
  obj:
    | WidgetData0Output[]
    | WidgetData4Output[]
    | WidgetData0Output
    | WidgetData4Output[]
): obj is WidgetData4Output[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData4Output[])[0].start !== undefined;
  }

  return false;
}

/** deserialize function for WidgetData4 array */
function deserializeWidgetData4Array(obj: WidgetData4Output[]): WidgetData4[] {
  return (obj || []).map((item) => {
    return {
      start: new Date(item["start"]),
      end: item["end"] !== undefined ? new Date(item["end"]) : undefined,
    };
  });
}

/** deserialize function for WidgetData0Output[] | WidgetData4Output[] */
export function deserializeWidgetData0ArrayAndWidgetData4ArrayUnion(
  obj: WidgetData0Output[] | WidgetData4Output[]
): WidgetData0[] | WidgetData4[] {
  if (isWidgetData4Array(obj)) {
    return deserializeWidgetData4Array(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData5Output array from WidgetData0Output[] | WidgetData5Output[] */
function isWidgetData5Array(
  obj: WidgetData0Output[] | WidgetData5Output[]
): obj is WidgetData5Output[];
/** type predict function fpr WidgetData5Output array from WidgetData0Output | WidgetData5Output[] */
function isWidgetData5Array(
  obj: WidgetData0Output | WidgetData5Output[]
): obj is WidgetData5Output[];
/** type predict function fpr WidgetData5Output array from WidgetData0Output | WidgetData3Output | WidgetData5Output[] */
function isWidgetData5Array(
  obj: WidgetData0Output | WidgetData3Output | WidgetData5Output[]
): obj is WidgetData5Output[];
/** type predict function fpr WidgetData5Output array from WidgetData0Output[] | WidgetData5Output[] */
function isWidgetData5Array(
  obj:
    | WidgetData0Output[]
    | WidgetData5Output[]
    | WidgetData0Output
    | WidgetData5Output[]
    | WidgetData0Output
    | WidgetData3Output
    | WidgetData5Output[]
): obj is WidgetData5Output[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData5Output[])[0].data !== undefined;
  }

  return false;
}

/** deserialize function for WidgetData5 array */
function deserializeWidgetData5Array(obj: WidgetData5Output[]): WidgetData5[] {
  return (obj || []).map((item) => {
    return {
      data:
        typeof item["data"] === "string"
          ? stringToUint8Array(item["data"], "base64")
          : item["data"],
    };
  });
}

/** deserialize function for WidgetData0Output[] | WidgetData5Output[] */
export function deserializeWidgetData0ArrayAndWidgetData5ArrayUnion(
  obj: WidgetData0Output[] | WidgetData5Output[]
): WidgetData0[] | WidgetData5[] {
  if (isWidgetData5Array(obj)) {
    return deserializeWidgetData5Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output[] | WidgetData2Output */
export function deserializeWidgetData0ArrayAndWidgetData2Union(
  obj: WidgetData0Output[] | WidgetData2Output
): WidgetData0[] | WidgetData2 {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output | WidgetData2Output[] */
export function deserializeWidgetData0AndWidgetData2ArrayUnion(
  obj: WidgetData0Output | WidgetData2Output[]
): WidgetData0 | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData1Output[] | WidgetData2Output */
export function deserializeWidgetData1ArrayAndWidgetData2Union(
  obj: WidgetData1Output[] | WidgetData2Output
): WidgetData1[] | WidgetData2 {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  return obj;
}

/** deserialize function for WidgetData1Output | WidgetData2Output[] */
export function deserializeWidgetData1AndWidgetData2ArrayUnion(
  obj: WidgetData1Output | WidgetData2Output[]
): WidgetData1 | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData2Output[] | WidgetData3Output */
export function deserializeWidgetData2ArrayAndWidgetData3Union(
  obj: WidgetData2Output[] | WidgetData3Output
): WidgetData2[] | WidgetData3 {
  if (isWidgetData2Array(obj)) {
    return deserializeWidgetData2Array(obj);
  }
  if (isWidgetData3(obj)) {
    return deserializeWidgetData3(obj);
  }
  return obj;
}

/** deserialize function for WidgetData2Output | WidgetData3Output[] */
export function deserializeWidgetData2AndWidgetData3ArrayUnion(
  obj: WidgetData2Output | WidgetData3Output[]
): WidgetData2 | WidgetData3[] {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  if (isWidgetData3Array(obj)) {
    return deserializeWidgetData3Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output[] | WidgetData4Output */
export function deserializeWidgetData0ArrayAndWidgetData4Union(
  obj: WidgetData0Output[] | WidgetData4Output
): WidgetData0[] | WidgetData4 {
  if (isWidgetData4(obj)) {
    return deserializeWidgetData4(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output | WidgetData4Output[] */
export function deserializeWidgetData0AndWidgetData4ArrayUnion(
  obj: WidgetData0Output | WidgetData4Output[]
): WidgetData0 | WidgetData4[] {
  if (isWidgetData4Array(obj)) {
    return deserializeWidgetData4Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output[] | WidgetData5Output */
export function deserializeWidgetData0ArrayAndWidgetData5Union(
  obj: WidgetData0Output[] | WidgetData5Output
): WidgetData0[] | WidgetData5 {
  if (isWidgetData5(obj)) {
    return deserializeWidgetData5(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output | WidgetData5Output[] */
export function deserializeWidgetData0AndWidgetData5ArrayUnion(
  obj: WidgetData0Output | WidgetData5Output[]
): WidgetData0 | WidgetData5[] {
  if (isWidgetData5Array(obj)) {
    return deserializeWidgetData5Array(obj);
  }
  return obj;
}

/** deserialize function for WidgetData0Output | WidgetData3Output | WidgetData5Output[] */
export function deserializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion(
  obj: WidgetData0Output | WidgetData3Output | WidgetData5Output[]
): WidgetData0 | WidgetData3 | WidgetData5[] {
  if (isWidgetData3(obj)) {
    return deserializeWidgetData3(obj);
  }
  if (isWidgetData5Array(obj)) {
    return deserializeWidgetData5Array(obj);
  }
  return obj;
}

/** type predict function fpr WidgetData6Output array from WidgetData2Output | WidgetData4Output | WidgetData6Output[] */
function isWidgetData6Array(
  obj: WidgetData2Output | WidgetData4Output | WidgetData6Output[]
): obj is WidgetData6Output[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData6Output[])[0].data !== undefined;
  }

  return false;
}

/** deserialize function for WidgetData6 array */
function deserializeWidgetData6Array(obj: WidgetData6Output[]): WidgetData6[] {
  return (obj || []).map((item) => {
    return {
      data: {
        data:
          typeof item.data["data"] === "string"
            ? stringToUint8Array(item.data["data"], "base64")
            : item.data["data"],
      },
    };
  });
}

/** deserialize function for WidgetData2Output | WidgetData4Output | WidgetData6Output[] */
export function deserializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion(
  obj: WidgetData2Output | WidgetData4Output | WidgetData6Output[]
): WidgetData2 | WidgetData4 | WidgetData6[] {
  if (isWidgetData2(obj)) {
    return deserializeWidgetData2(obj);
  }
  if (isWidgetData4(obj)) {
    return deserializeWidgetData4(obj);
  }
  if (isWidgetData6Array(obj)) {
    return deserializeWidgetData6Array(obj);
  }
  return obj;
}
