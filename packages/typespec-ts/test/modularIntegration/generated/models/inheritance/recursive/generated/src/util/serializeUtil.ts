// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Extension, Element } from "../models/models.js";
import {
  Extension as RestExtension,
  Element as RestElement,
} from "../rest/index.js";

export function serializeExtension(o: Extension): RestExtension {
  return {
    extension:
      o["extension"] === undefined
        ? o["extension"]
        : o["extension"].map((e) => MISSING_SERIALIZER(e)),
    level: o["level"],
  };
}

export function deserializeExtension(o: RestExtension): Extension {
  return {
    extension:
      o["extension"] === undefined
        ? o["extension"]
        : o["extension"].map((e) => MISSING_SERIALIZER(e)),
    level: o["level"],
  };
}

export function serializeElement(o: Element): RestElement {
  return {
    extension:
      o["extension"] === undefined
        ? o["extension"]
        : o["extension"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeElement(o: RestElement): Element {
  return {
    extension:
      o["extension"] === undefined
        ? o["extension"]
        : o["extension"].map((e) => MISSING_SERIALIZER(e)),
  };
}
