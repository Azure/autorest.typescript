// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetData0 as WidgetData0Rest,
  WidgetData2 as WidgetData2Rest,
  WidgetData1 as WidgetData1Rest,
  WidgetData3 as WidgetData3Rest,
  WidgetData4 as WidgetData4Rest,
  WidgetData5 as WidgetData5Rest,
  WidgetData6 as WidgetData6Rest,
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
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";

/** type predict function for WidgetData2Rest from WidgetData0Rest | WidgetData2Rest */
function isWidgetData2(
  obj: WidgetData0Rest | WidgetData2Rest
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData1Rest | WidgetData2Rest */
function isWidgetData2(
  obj: WidgetData1Rest | WidgetData2Rest
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData2Rest | WidgetData3Rest */
function isWidgetData2(
  obj: WidgetData2Rest | WidgetData3Rest
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData0Rest[] | WidgetData2Rest */
function isWidgetData2(
  obj: WidgetData0Rest[] | WidgetData2Rest
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData1Rest[] | WidgetData2Rest */
function isWidgetData2(
  obj: WidgetData1Rest[] | WidgetData2Rest
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData2Rest | WidgetData3Rest[] */
function isWidgetData2(
  obj: WidgetData2Rest | WidgetData3Rest[]
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[] */
function isWidgetData2(
  obj: WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[]
): obj is WidgetData2Rest;
/** type predict function for WidgetData2Rest from WidgetData0Rest | WidgetData2Rest */
function isWidgetData2(
  obj:
    | WidgetData2Rest
    | WidgetData4Rest
    | WidgetData6Rest[]
    | WidgetData3Rest[]
    | WidgetData1Rest[]
    | WidgetData0Rest[]
    | WidgetData3Rest
    | WidgetData1Rest
    | WidgetData0Rest
): obj is WidgetData2Rest {
  return (obj as WidgetData2Rest).foo_prop !== undefined;
}

/** serialize function for WidgetData2 */
function serializeWidgetData2(obj: WidgetData2): WidgetData2Rest {
  return { foo_prop: obj["fooProp"] };
}

/** serialize function for WidgetData0Rest | WidgetData2Rest */
export function serializeWidgetData0AndWidgetData2Union(
  obj: WidgetData0Rest | WidgetData2Rest
): WidgetData0 | WidgetData2 {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData1Rest | WidgetData2Rest */
export function serializeWidgetData1AndWidgetData2Union(
  obj: WidgetData1Rest | WidgetData2Rest
): WidgetData1 | WidgetData2 {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** type predict function for WidgetData3Rest from WidgetData2Rest | WidgetData3Rest */
function isWidgetData3(
  obj: WidgetData2Rest | WidgetData3Rest
): obj is WidgetData3Rest;
/** type predict function for WidgetData3Rest from WidgetData2Rest[] | WidgetData3Rest */
function isWidgetData3(
  obj: WidgetData2Rest[] | WidgetData3Rest
): obj is WidgetData3Rest;
/** type predict function for WidgetData3Rest from WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[] */
function isWidgetData3(
  obj: WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[]
): obj is WidgetData3Rest;
/** type predict function for WidgetData3Rest from WidgetData2Rest | WidgetData3Rest */
function isWidgetData3(
  obj:
    | WidgetData0Rest
    | WidgetData3Rest
    | WidgetData5Rest[]
    | WidgetData2Rest[]
    | WidgetData2Rest
): obj is WidgetData3Rest {
  return (obj as WidgetData3Rest).bar_prop !== undefined;
}

/** serialize function for WidgetData3 */
function serializeWidgetData3(obj: WidgetData3): WidgetData3Rest {
  return { bar_prop: obj["barProp"] };
}

/** serialize function for WidgetData2Rest | WidgetData3Rest */
export function serializeWidgetData2AndWidgetData3Union(
  obj: WidgetData2Rest | WidgetData3Rest
): WidgetData2 | WidgetData3 {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  return obj;
}

/** type predict function for WidgetData4Rest from WidgetData0Rest | WidgetData4Rest */
function isWidgetData4(
  obj: WidgetData0Rest | WidgetData4Rest
): obj is WidgetData4Rest;
/** type predict function for WidgetData4Rest from WidgetData0Rest[] | WidgetData4Rest */
function isWidgetData4(
  obj: WidgetData0Rest[] | WidgetData4Rest
): obj is WidgetData4Rest;
/** type predict function for WidgetData4Rest from WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[] */
function isWidgetData4(
  obj: WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[]
): obj is WidgetData4Rest;
/** type predict function for WidgetData4Rest from WidgetData0Rest | WidgetData4Rest */
function isWidgetData4(
  obj:
    | WidgetData2Rest
    | WidgetData4Rest
    | WidgetData6Rest[]
    | WidgetData0Rest[]
    | WidgetData0Rest
): obj is WidgetData4Rest {
  return (obj as WidgetData4Rest).start !== undefined;
}

/** serialize function for WidgetData4 */
function serializeWidgetData4(obj: WidgetData4): WidgetData4Rest {
  return { start: obj["start"].toISOString(), end: obj["end"]?.toISOString() };
}

/** serialize function for WidgetData0Rest | WidgetData4Rest */
export function serializeWidgetData0AndWidgetData4Union(
  obj: WidgetData0Rest | WidgetData4Rest
): WidgetData0 | WidgetData4 {
  if (isWidgetData4(obj)) {
    return serializeWidgetData4(obj);
  }
  return obj;
}

/** type predict function for WidgetData5Rest from WidgetData0Rest | WidgetData5Rest */
function isWidgetData5(
  obj: WidgetData0Rest | WidgetData5Rest
): obj is WidgetData5Rest;
/** type predict function for WidgetData5Rest from WidgetData0Rest[] | WidgetData5Rest */
function isWidgetData5(
  obj: WidgetData0Rest[] | WidgetData5Rest
): obj is WidgetData5Rest;
/** type predict function for WidgetData5Rest from WidgetData0Rest | WidgetData5Rest */
function isWidgetData5(
  obj: WidgetData0Rest[] | WidgetData5Rest | WidgetData0Rest
): obj is WidgetData5Rest {
  return (obj as WidgetData5Rest).data !== undefined;
}

/** serialize function for WidgetData5 */
function serializeWidgetData5(obj: WidgetData5): WidgetData5Rest {
  return { data: uint8ArrayToString(obj["data"], "base64") };
}

/** serialize function for WidgetData0Rest | WidgetData5Rest */
export function serializeWidgetData0AndWidgetData5Union(
  obj: WidgetData0Rest | WidgetData5Rest
): WidgetData0 | WidgetData5 {
  if (isWidgetData5(obj)) {
    return serializeWidgetData5(obj);
  }
  return obj;
}

/** type predict function for WidgetData2Rest array from WidgetData0Rest[] | WidgetData2Rest[] */
function isWidgetData2Array(
  obj: WidgetData0Rest[] | WidgetData2Rest[]
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData1Rest[] | WidgetData2Rest[] */
function isWidgetData2Array(
  obj: WidgetData1Rest[] | WidgetData2Rest[]
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData2Rest[] | WidgetData3Rest[] */
function isWidgetData2Array(
  obj: WidgetData2Rest[] | WidgetData3Rest[]
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData0Rest | WidgetData2Rest[] */
function isWidgetData2Array(
  obj: WidgetData0Rest | WidgetData2Rest[]
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData1Rest | WidgetData2Rest[] */
function isWidgetData2Array(
  obj: WidgetData1Rest | WidgetData2Rest[]
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData2Rest[] | WidgetData3Rest */
function isWidgetData2Array(
  obj: WidgetData2Rest[] | WidgetData3Rest
): obj is WidgetData2Rest[];
/** type predict function for WidgetData2Rest array from WidgetData0Rest[] | WidgetData2Rest[] */
function isWidgetData2Array(
  obj:
    | WidgetData2Rest[]
    | WidgetData3Rest
    | WidgetData1Rest
    | WidgetData0Rest
    | WidgetData3Rest[]
    | WidgetData1Rest[]
    | WidgetData0Rest[]
): obj is WidgetData2Rest[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData2Rest[])[0].foo_prop !== undefined;
  }

  return false;
}

/** serialize function for WidgetData2 array */
function serializeWidgetData2Array(obj: WidgetData2[]): WidgetData2Rest[] {
  return (obj || []).map((item) => {
    return { fooProp: item["foo_prop"] };
  });
}

/** serialize function for WidgetData0Rest[] | WidgetData2Rest[] */
export function serializeWidgetData0ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData0Rest[] | WidgetData2Rest[]
): WidgetData0[] | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData1Rest[] | WidgetData2Rest[] */
export function serializeWidgetData1ArrayAndWidgetData2ArrayUnion(
  obj: WidgetData1Rest[] | WidgetData2Rest[]
): WidgetData1[] | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData3Rest array from WidgetData2Rest[] | WidgetData3Rest[] */
function isWidgetData3Array(
  obj: WidgetData2Rest[] | WidgetData3Rest[]
): obj is WidgetData3Rest[];
/** type predict function for WidgetData3Rest array from WidgetData2Rest | WidgetData3Rest[] */
function isWidgetData3Array(
  obj: WidgetData2Rest | WidgetData3Rest[]
): obj is WidgetData3Rest[];
/** type predict function for WidgetData3Rest array from WidgetData2Rest[] | WidgetData3Rest[] */
function isWidgetData3Array(
  obj: WidgetData2Rest | WidgetData3Rest[] | WidgetData2Rest[]
): obj is WidgetData3Rest[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData3Rest[])[0].bar_prop !== undefined;
  }

  return false;
}

/** serialize function for WidgetData3 array */
function serializeWidgetData3Array(obj: WidgetData3[]): WidgetData3Rest[] {
  return (obj || []).map((item) => {
    return { barProp: item["bar_prop"] };
  });
}

/** serialize function for WidgetData2Rest[] | WidgetData3Rest[] */
export function serializeWidgetData2ArrayAndWidgetData3ArrayUnion(
  obj: WidgetData2Rest[] | WidgetData3Rest[]
): WidgetData2[] | WidgetData3[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  if (isWidgetData3Array(obj)) {
    return serializeWidgetData3Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData4Rest array from WidgetData0Rest[] | WidgetData4Rest[] */
function isWidgetData4Array(
  obj: WidgetData0Rest[] | WidgetData4Rest[]
): obj is WidgetData4Rest[];
/** type predict function for WidgetData4Rest array from WidgetData0Rest | WidgetData4Rest[] */
function isWidgetData4Array(
  obj: WidgetData0Rest | WidgetData4Rest[]
): obj is WidgetData4Rest[];
/** type predict function for WidgetData4Rest array from WidgetData0Rest[] | WidgetData4Rest[] */
function isWidgetData4Array(
  obj: WidgetData0Rest | WidgetData4Rest[] | WidgetData0Rest[]
): obj is WidgetData4Rest[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData4Rest[])[0].start !== undefined;
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

/** serialize function for WidgetData0Rest[] | WidgetData4Rest[] */
export function serializeWidgetData0ArrayAndWidgetData4ArrayUnion(
  obj: WidgetData0Rest[] | WidgetData4Rest[]
): WidgetData0[] | WidgetData4[] {
  if (isWidgetData4Array(obj)) {
    return serializeWidgetData4Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData5Rest array from WidgetData0Rest[] | WidgetData5Rest[] */
function isWidgetData5Array(
  obj: WidgetData0Rest[] | WidgetData5Rest[]
): obj is WidgetData5Rest[];
/** type predict function for WidgetData5Rest array from WidgetData0Rest | WidgetData5Rest[] */
function isWidgetData5Array(
  obj: WidgetData0Rest | WidgetData5Rest[]
): obj is WidgetData5Rest[];
/** type predict function for WidgetData5Rest array from WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[] */
function isWidgetData5Array(
  obj: WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[]
): obj is WidgetData5Rest[];
/** type predict function for WidgetData5Rest array from WidgetData0Rest[] | WidgetData5Rest[] */
function isWidgetData5Array(
  obj: WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[] | WidgetData0Rest[]
): obj is WidgetData5Rest[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (obj as WidgetData5Rest[])[0].data !== undefined;
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

/** serialize function for WidgetData0Rest[] | WidgetData5Rest[] */
export function serializeWidgetData0ArrayAndWidgetData5ArrayUnion(
  obj: WidgetData0Rest[] | WidgetData5Rest[]
): WidgetData0[] | WidgetData5[] {
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest[] | WidgetData2Rest */
export function serializeWidgetData0ArrayAndWidgetData2Union(
  obj: WidgetData0Rest[] | WidgetData2Rest
): WidgetData0[] | WidgetData2 {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest | WidgetData2Rest[] */
export function serializeWidgetData0AndWidgetData2ArrayUnion(
  obj: WidgetData0Rest | WidgetData2Rest[]
): WidgetData0 | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData1Rest[] | WidgetData2Rest */
export function serializeWidgetData1ArrayAndWidgetData2Union(
  obj: WidgetData1Rest[] | WidgetData2Rest
): WidgetData1[] | WidgetData2 {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  return obj;
}

/** serialize function for WidgetData1Rest | WidgetData2Rest[] */
export function serializeWidgetData1AndWidgetData2ArrayUnion(
  obj: WidgetData1Rest | WidgetData2Rest[]
): WidgetData1 | WidgetData2[] {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData2Rest[] | WidgetData3Rest */
export function serializeWidgetData2ArrayAndWidgetData3Union(
  obj: WidgetData2Rest[] | WidgetData3Rest
): WidgetData2[] | WidgetData3 {
  if (isWidgetData2Array(obj)) {
    return serializeWidgetData2Array(obj);
  }
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  return obj;
}

/** serialize function for WidgetData2Rest | WidgetData3Rest[] */
export function serializeWidgetData2AndWidgetData3ArrayUnion(
  obj: WidgetData2Rest | WidgetData3Rest[]
): WidgetData2 | WidgetData3[] {
  if (isWidgetData2(obj)) {
    return serializeWidgetData2(obj);
  }
  if (isWidgetData3Array(obj)) {
    return serializeWidgetData3Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest[] | WidgetData4Rest */
export function serializeWidgetData0ArrayAndWidgetData4Union(
  obj: WidgetData0Rest[] | WidgetData4Rest
): WidgetData0[] | WidgetData4 {
  if (isWidgetData4(obj)) {
    return serializeWidgetData4(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest | WidgetData4Rest[] */
export function serializeWidgetData0AndWidgetData4ArrayUnion(
  obj: WidgetData0Rest | WidgetData4Rest[]
): WidgetData0 | WidgetData4[] {
  if (isWidgetData4Array(obj)) {
    return serializeWidgetData4Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest[] | WidgetData5Rest */
export function serializeWidgetData0ArrayAndWidgetData5Union(
  obj: WidgetData0Rest[] | WidgetData5Rest
): WidgetData0[] | WidgetData5 {
  if (isWidgetData5(obj)) {
    return serializeWidgetData5(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest | WidgetData5Rest[] */
export function serializeWidgetData0AndWidgetData5ArrayUnion(
  obj: WidgetData0Rest | WidgetData5Rest[]
): WidgetData0 | WidgetData5[] {
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** serialize function for WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[] */
export function serializeWidgetData0AndWidgetData3AndWidgetData5ArrayUnion(
  obj: WidgetData0Rest | WidgetData3Rest | WidgetData5Rest[]
): WidgetData0 | WidgetData3 | WidgetData5[] {
  if (isWidgetData3(obj)) {
    return serializeWidgetData3(obj);
  }
  if (isWidgetData5Array(obj)) {
    return serializeWidgetData5Array(obj);
  }
  return obj;
}

/** type predict function for WidgetData6Rest array from WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[] */
function isWidgetData6Array(
  obj: WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[]
): obj is WidgetData6Rest[] {
  if (Array.isArray(obj) && obj.length > 0) {
    return (
      (obj as WidgetData6Rest[])[0].data !== undefined &&
      (obj as WidgetData6Rest[])[0].data.data !== undefined
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

/** serialize function for WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[] */
export function serializeWidgetData2AndWidgetData4AndWidgetData6ArrayUnion(
  obj: WidgetData2Rest | WidgetData4Rest | WidgetData6Rest[]
): WidgetData2 | WidgetData4 | WidgetData6[] {
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
