// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetData0,
  WidgetData2,
  WidgetData1,
  WidgetData3,
  WidgetData4,
  WidgetData5,
  WidgetData6,
} from "../models/models.js";
import {
  WidgetData0 as WidgetData0Rest,
  WidgetData2 as WidgetData2Rest,
  WidgetData1 as WidgetData1Rest,
  WidgetData3 as WidgetData3Rest,
  WidgetData4 as WidgetData4Rest,
  WidgetData5 as WidgetData5Rest,
  WidgetData6 as WidgetData6Rest,
} from "../rest/index.js";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

/** type predict function for WidgetData2 from WidgetData0 | WidgetData2 */
function isWidgetData2(obj: WidgetData0 | WidgetData2): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData1 | WidgetData2 */
function isWidgetData2(obj: WidgetData1 | WidgetData2): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData2 | WidgetData3 */
function isWidgetData2(obj: WidgetData2 | WidgetData3): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData0[] | WidgetData2 */
function isWidgetData2(obj: WidgetData0[] | WidgetData2): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData1[] | WidgetData2 */
function isWidgetData2(obj: WidgetData1[] | WidgetData2): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData2 | WidgetData3[] */
function isWidgetData2(obj: WidgetData2 | WidgetData3[]): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData2 | WidgetData4 | WidgetData6[] */
function isWidgetData2(
  obj: WidgetData2 | WidgetData4 | WidgetData6[]
): obj is WidgetData2;
/** type predict function for WidgetData2 from WidgetData0 | WidgetData2 */
function isWidgetData2(
  obj:
    | WidgetData2
    | WidgetData4
    | WidgetData6[]
    | WidgetData3[]
    | WidgetData1[]
    | WidgetData0[]
    | WidgetData3
    | WidgetData1
    | WidgetData0
): obj is WidgetData2 {
  return (obj as WidgetData2).foo_prop !== undefined;
}

/** serialize function for WidgetData2 */
function serializeWidgetData2(obj: WidgetData2): WidgetData2Rest {
  return { foo_prop: obj["fooProp"] };
}

/** serialize function for WidgetData0 | WidgetData2 */
export function serializeWidgetData0AndWidgetData2Union(
  obj: WidgetData0 | WidgetData2
): WidgetData0Rest | WidgetData2Rest {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData1 | WidgetData2 */
export function serializeWidgetData1AndWidgetData2Union(
  obj: WidgetData1 | WidgetData2
): WidgetData1Rest | WidgetData2Rest {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** type predict function for WidgetData3 from WidgetData2 | WidgetData3 */
function isWidgetData3(obj: WidgetData2 | WidgetData3): obj is WidgetData3;
/** type predict function for WidgetData3 from WidgetData2[] | WidgetData3 */
function isWidgetData3(obj: WidgetData2[] | WidgetData3): obj is WidgetData3;
/** type predict function for WidgetData3 from WidgetData0 | WidgetData3 | WidgetData5[] */
function isWidgetData3(
  obj: WidgetData0 | WidgetData3 | WidgetData5[]
): obj is WidgetData3;
/** type predict function for WidgetData3 from WidgetData2 | WidgetData3 */
function isWidgetData3(
  obj: WidgetData0 | WidgetData3 | WidgetData5[] | WidgetData2[] | WidgetData2
): obj is WidgetData3 {
  return (obj as WidgetData3).bar_prop !== undefined;
}

/** serialize function for WidgetData3 */
function serializeWidgetData3(obj: WidgetData3): WidgetData3Rest {
  return { bar_prop: obj["barProp"] };
}

/** serialize function for WidgetData2 | WidgetData3 */
export function serializeWidgetData2AndWidgetData3Union(
  obj: WidgetData2 | WidgetData3
): WidgetData2Rest | WidgetData3Rest {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  return obj;
}

/** type predict function for WidgetData4 from WidgetData0 | WidgetData4 */
function isWidgetData4(obj: WidgetData0 | WidgetData4): obj is WidgetData4;
/** type predict function for WidgetData4 from WidgetData0[] | WidgetData4 */
function isWidgetData4(obj: WidgetData0[] | WidgetData4): obj is WidgetData4;
/** type predict function for WidgetData4 from WidgetData2 | WidgetData4 | WidgetData6[] */
function isWidgetData4(
  obj: WidgetData2 | WidgetData4 | WidgetData6[]
): obj is WidgetData4;
/** type predict function for WidgetData4 from WidgetData0 | WidgetData4 */
function isWidgetData4(
  obj: WidgetData2 | WidgetData4 | WidgetData6[] | WidgetData0[] | WidgetData0
): obj is WidgetData4 {
  return (obj as WidgetData4).start !== undefined;
}

/** serialize function for WidgetData4 */
function serializeWidgetData4(obj: WidgetData4): WidgetData4Rest {
  return { start: obj["start"].toISOString(), end: obj["end"]?.toISOString() };
}

/** serialize function for WidgetData0 | WidgetData4 */
export function serializeWidgetData0AndWidgetData4Union(
  obj: WidgetData0 | WidgetData4
): WidgetData0Rest | WidgetData4Rest {
  if (isWidgetData4(obj)) {
    return serializeWidgetData4(obj);
  }
  return obj;
}

/** type predict function for WidgetData5 from WidgetData0 | WidgetData5 */
function isWidgetData5(obj: WidgetData0 | WidgetData5): obj is WidgetData5;
/** type predict function for WidgetData5 from WidgetData0[] | WidgetData5 */
function isWidgetData5(obj: WidgetData0[] | WidgetData5): obj is WidgetData5;
/** type predict function for WidgetData5 from WidgetData0 | WidgetData5 */
function isWidgetData5(
  obj: WidgetData0[] | WidgetData5 | WidgetData0
): obj is WidgetData5 {
  return (obj as WidgetData5).data !== undefined;
}

/** serialize function for WidgetData5 */
function serializeWidgetData5(obj: WidgetData5): WidgetData5Rest {
  return { data: uint8ArrayToString(obj["data"], "base64") };
}

/** serialize function for WidgetData0 | WidgetData5 */
export function serializeWidgetData0AndWidgetData5Union(
  obj: WidgetData0 | WidgetData5
): WidgetData0Rest | WidgetData5Rest {
  if (isWidgetData5(obj)) {
    return serializeWidgetData5(obj);
  }
  return obj;
}

/** type predict function for WidgetData2 array from WidgetData0[] | WidgetData2[] */
function isWidgetData2Array(
  obj: WidgetData0[] | WidgetData2[]
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData1[] | WidgetData2[] */
function isWidgetData2Array(
  obj: WidgetData1[] | WidgetData2[]
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData2[] | WidgetData3[] */
function isWidgetData2Array(
  obj: WidgetData2[] | WidgetData3[]
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData0 | WidgetData2[] */
function isWidgetData2Array(
  obj: WidgetData0 | WidgetData2[]
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData1 | WidgetData2[] */
function isWidgetData2Array(
  obj: WidgetData1 | WidgetData2[]
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData2[] | WidgetData3 */
function isWidgetData2Array(
  obj: WidgetData2[] | WidgetData3
): obj is WidgetData2[];
/** type predict function for WidgetData2 array from WidgetData0[] | WidgetData2[] */
function isWidgetData2Array(
  obj:
    | WidgetData2[]
    | WidgetData3
    | WidgetData1
    | WidgetData0
    | WidgetData3[]
    | WidgetData1[]
    | WidgetData0[]
): obj is WidgetData2[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData2[])[0].foo_prop !== undefined;
  }

  return false;
}

/** serialize function for WidgetData2 array */
function serializeWidgetData2Array(obj: WidgetData2[]): WidgetData2Rest[] {
  return (obj || []).map((item) => {
    return { fooProp: item["foo_prop"] };
  });
}

/** serialize function for WidgetData0[] | WidgetData2[] */
export function serializeWidgetData0ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData0[] | WidgetData2[]
): WidgetData0Rest[] | WidgetData2Rest[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData1[] | WidgetData2[] */
export function serializeWidgetData1ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData1[] | WidgetData2[]
): WidgetData1Rest[] | WidgetData2Rest[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData3 array from WidgetData2[] | WidgetData3[] */
function isWidgetData3Array(
  obj: WidgetData2[] | WidgetData3[]
): obj is WidgetData3[];
/** type predict function for WidgetData3 array from WidgetData2 | WidgetData3[] */
function isWidgetData3Array(
  obj: WidgetData2 | WidgetData3[]
): obj is WidgetData3[];
/** type predict function for WidgetData3 array from WidgetData2[] | WidgetData3[] */
function isWidgetData3Array(
  obj: WidgetData2 | WidgetData3[] | WidgetData2[]
): obj is WidgetData3[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData3[])[0].bar_prop !== undefined;
  }

  return false;
}

/** serialize function for WidgetData3 array */
function serializeWidgetData3Array(obj: WidgetData3[]): WidgetData3Rest[] {
  return (obj || []).map((item) => {
    return { barProp: item["bar_prop"] };
  });
}

/** serialize function for WidgetData2[] | WidgetData3[] */
export function serializeWidgetData2ArrayAndWidgetData3ArrayUnion(
  obj: WidgetData2[] | WidgetData3[]
): WidgetData2Rest[] | WidgetData3Rest[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  if (isWidgetData3Array(obj)) {
    return serializeWidgetData3Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData4 array from WidgetData0[] | WidgetData4[] */
function isWidgetData4Array(
  obj: WidgetData0[] | WidgetData4[]
): obj is WidgetData4[];
/** type predict function for WidgetData4 array from WidgetData0 | WidgetData4[] */
function isWidgetData4Array(
  obj: WidgetData0 | WidgetData4[]
): obj is WidgetData4[];
/** type predict function for WidgetData4 array from WidgetData0[] | WidgetData4[] */
function isWidgetData4Array(
  obj: WidgetData0 | WidgetData4[] | WidgetData0[]
): obj is WidgetData4[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData4[])[0].start !== undefined;
  }

  return false;
}

/** serialize function for WidgetData4 array */
function serializeWidgetData4Array(obj: WidgetData4[]): WidgetData4Rest[] {
  return (obj || []).map((item) => {
    return {
      start: new Date(item["start"]),
      end: item["end"] !== undefined ? new Date(item["end"]) : undefined,
    };
  });
}

/** serialize function for WidgetData0[] | WidgetData4[] */
export function serializeWidgetData0ArrayAndWidgetData4ArrayUnion(
  obj: WidgetData0[] | WidgetData4[]
): WidgetData0Rest[] | WidgetData4Rest[] {
  if (isWidgetData4Array(obj)) {
    return serializeWidgetData4Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData5 array from WidgetData0[] | WidgetData5[] */
function isWidgetData5Array(
  obj: WidgetData0[] | WidgetData5[]
): obj is WidgetData5[];
/** type predict function for WidgetData5 array from WidgetData0 | WidgetData5[] */
function isWidgetData5Array(
  obj: WidgetData0 | WidgetData5[]
): obj is WidgetData5[];
/** type predict function for WidgetData5 array from WidgetData0 | WidgetData3 | WidgetData5[] */
function isWidgetData5Array(
  obj: WidgetData0 | WidgetData3 | WidgetData5[]
): obj is WidgetData5[];
/** type predict function for WidgetData5 array from WidgetData0[] | WidgetData5[] */
function isWidgetData5Array(
  obj: WidgetData0 | WidgetData3 | WidgetData5[] | WidgetData0[]
): obj is WidgetData5[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData5[])[0].data !== undefined;
  }

  return false;
}

/** serialize function for WidgetData5 array */
function serializeWidgetData5Array(obj: WidgetData5[]): WidgetData5Rest[] {
  return (obj || []).map((item) => {
    return {
      data:
        typeof item["data"] === "string"
          ? stringToUint8Array(item["data"], "base64")
          : item["data"],
    };
  });
}

/** serialize function for WidgetData0[] | WidgetData5[] */
export function serializeWidgetData0ArrayAndWidgetData5ArrayUnion(
  obj: WidgetData0[] | WidgetData5[]
): WidgetData0Rest[] | WidgetData5Rest[] {
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0[] | WidgetData2 */
export function serializeWidgetData0ArrayAndWidgetData2Union(
  obj: WidgetData0[] | WidgetData2
): WidgetData0Rest[] | WidgetData2Rest {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData0 | WidgetData2[] */
export function serializeWidgetData0AndWidgetData2ArrayUnion(
  obj: WidgetData0 | WidgetData2[]
): WidgetData0Rest | WidgetData2Rest[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData1[] | WidgetData2 */
export function serializeWidgetData1ArrayAndWidgetData2Union(
  obj: WidgetData1[] | WidgetData2
): WidgetData1Rest[] | WidgetData2Rest {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData1 | WidgetData2[] */
export function serializeWidgetData1AndWidgetData2ArrayUnion(
  obj: WidgetData1 | WidgetData2[]
): WidgetData1Rest | WidgetData2Rest[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData2[] | WidgetData3 */
export function serializeWidgetData2ArrayAndWidgetData3Union(
  obj: WidgetData2[] | WidgetData3
): WidgetData2Rest[] | WidgetData3Rest {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  return obj;
}

/** serialize function for WidgetData2 | WidgetData3[] */
export function serializeWidgetData2AndWidgetData3ArrayUnion(
  obj: WidgetData2 | WidgetData3[]
): WidgetData2Rest | WidgetData3Rest[] {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  if (isWidgetData3Array(obj)) {
    return serializeWidgetData3Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0[] | WidgetData4 */
export function serializeWidgetData0ArrayAndWidgetData4Union(
  obj: WidgetData0[] | WidgetData4
): WidgetData0Rest[] | WidgetData4Rest {
  if (isWidgetData4(obj)) {
    return serializeWidgetData4(obj);
  }
  return obj;
}

/** serialize function for WidgetData0 | WidgetData4[] */
export function serializeWidgetData0AndWidgetData4ArrayUnion(
  obj: WidgetData0 | WidgetData4[]
): WidgetData0Rest | WidgetData4Rest[] {
  if (isWidgetData4Array(obj)) {
    return serializeWidgetData4Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0[] | WidgetData5 */
export function serializeWidgetData0ArrayAndWidgetData5Union(
  obj: WidgetData0[] | WidgetData5
): WidgetData0Rest[] | WidgetData5Rest {
  if (isWidgetData5(obj)) {
    return serializeWidgetData5(obj);
  }
  return obj;
}

/** serialize function for WidgetData0 | WidgetData5[] */
export function serializeWidgetData0AndWidgetData5ArrayUnion(
  obj: WidgetData0 | WidgetData5[]
): WidgetData0Rest | WidgetData5Rest[] {
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0 | WidgetData3 | WidgetData5[] */
export function serializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion(
  obj: WidgetData0 | WidgetData3 | WidgetData5[]
): WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[] {
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData6 array from WidgetData2 | WidgetData4 | WidgetData6[] */
function isWidgetData6Array(
  obj: WidgetData2 | WidgetData4 | WidgetData6[]
): obj is WidgetData6[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (
      (obj as WidgetData6[])[0].data !== undefined &&
      (obj as WidgetData6[])[0].data.data !== undefined
    );
  }

  return false;
}

/** serialize function for WidgetData6 array */
function serializeWidgetData6Array(obj: WidgetData6[]): WidgetData6Rest[] {
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

/** serialize function for WidgetData2 | WidgetData4 | WidgetData6[] */
export function serializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion(
  obj: WidgetData2 | WidgetData4 | WidgetData6[]
): WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[] {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  if (isWidgetData4(obj)) {
    return serializeWidgetData4(obj);
  }
  if (isWidgetData6Array(obj)) {
    return serializeWidgetData6Array(obj);
  }
  return obj;
}
