// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetData0Output,
  WidgetData2Output,
  WidgetData1Output,
  WidgetData3Output,
} from "../rest/index.js";
import {
  WidgetData0,
  WidgetData2,
  WidgetData1,
  WidgetData3,
} from "../models/models.js";

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
/** type predict function fpr WidgetData3 from WidgetData2Output | WidgetData3Output */
function isWidgetData3(
  obj:
    | WidgetData2Output
    | WidgetData3Output
    | WidgetData2Output[]
    | WidgetData3Output
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
