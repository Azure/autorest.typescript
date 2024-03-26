// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NonReferencedModel,
  UpdateWidget,
  CreateWidget,
  AnalyzeResult,
  ListWidgetsPagesResults,
  WidgetError,
  Widget,
} from "../models/models.js";
import {
  NonReferencedModel as RestNonReferencedModel,
  UpdateWidget as RestUpdateWidget,
  CreateWidget as RestCreateWidget,
  AnalyzeResultOutput as RestAnalyzeResult,
  ListWidgetsPagesResultsOutput as RestListWidgetsPagesResults,
  WidgetErrorOutput as RestWidgetError,
  WidgetOutput as RestWidget,
} from "../rest/index.js";

export function serializeNonReferencedModel(
  o: NonReferencedModel,
): RestNonReferencedModel {
  return {
    prop2: o["prop2"],
    prop1: o["prop1"],
  };
}

export function deserializeNonReferencedModel(
  o: RestNonReferencedModel,
): NonReferencedModel {
  return {
    prop2: o["prop2"],
    prop1: o["prop1"],
  };
}

export function serializeUpdateWidget(o: UpdateWidget): RestUpdateWidget {
  return {
    color: o["color"],
    weight: o["weight"],
  };
}

export function serializeCreateWidget(o: CreateWidget): RestCreateWidget {
  return {
    color: o["color"],
    weight: o["weight"],
  };
}

export function deserializeAnalyzeResult(o: RestAnalyzeResult): AnalyzeResult {
  return {
    summary: o["summary"],
  };
}

export function deserializeListWidgetsPagesResults(
  o: RestListWidgetsPagesResults,
): ListWidgetsPagesResults {
  return {
    "odata.nextLink": o["odata.nextLink"],
    results: o["results"].map((e: RestWidget) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeWidgetError(o: RestWidgetError): WidgetError {
  return {
    message: o["message"],
    code: o["code"],
  };
}

export function deserializeWidget(o: RestWidget): Widget {
  return {
    color: o["color"],
    weight: o["weight"],
    id: o["id"],
  };
}
