// Licensed under the MIT license.

import {
  InputOutputRecord,
  InputRecord,
  OutputRecord,
} from "../models/models.js";
import {
  InputOutputRecord as RestInputOutputRecord,
  InputRecord as RestInputRecord,
  OutputRecordOutput as RestOutputRecord,
} from "../rest/index.js";

export function serializeInputOutputRecord(
  o: InputOutputRecord,
): RestInputOutputRecord {
  return {
    requiredProp: o["requiredProp"],
  };
}

export function deserializeInputOutputRecord(
  o: RestInputOutputRecord,
): InputOutputRecord {
  return {
    requiredProp: o["requiredProp"],
  };
}

export function serializeInputRecord(o: InputRecord): RestInputRecord {
  return {
    requiredProp: o["requiredProp"],
  };
}

export function deserializeOutputRecord(o: RestOutputRecord): OutputRecord {
  return {
    requiredProp: o["requiredProp"],
  };
}
