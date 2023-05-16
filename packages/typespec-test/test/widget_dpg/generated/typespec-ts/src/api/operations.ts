// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import {
  WidgetServiceContext as Client,
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
  isUnexpected,
} from "../rest/index.js";
import { Widget, ColorType, AnalyzeResult } from "./models.js";

export interface ListWidgetsOptions extends RequestOptions {}

export async function listWidgets(
  context: Client,
  options: ListWidgetsOptions = { requestOptions: {} }
): Promise<Widget[]> {
  const result = await _listWidgetsSend(context, options);

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  return _listWidgetDeserialize(result);
}

async function _listWidgetsSend(
  context: Client,
  options: ListWidgetsOptions = { requestOptions: {} }
): Promise<ListWidgets200Response | ListWidgetsDefaultResponse> {
  return await context.path("/widgets").get({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
  });
}

async function _listWidgetDeserialize(
  rawResponse: ListWidgets200Response | ListWidgetsDefaultResponse
) {
  if (isUnexpected(rawResponse)) {
    throw rawResponse.body;
  }

  return (rawResponse.body ?? []).map((p) => ({
    id: p["id"],
    weight: p["weight"],
    color: p["color"],
  }));
}

export interface GetWidgetOptions extends RequestOptions {}

/** */
export async function getWidget(
  context: Client,
  id: string,
  options: GetWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await context.path("/widgets/{id}", id).get({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
  });

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

export interface CreateWidgetOptions extends RequestOptions {}

/** */
export async function createWidget(
  context: Client,
  weight: number,
  color: ColorType,
  options: CreateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await context.path("/widgets").post({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
    body: { weight: weight, color: color },
  });

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

export interface UpdateWidgetOptions extends RequestOptions {
  /** */
  weight?: number;
  /** */
  color?: ColorType;
}

/** */
export async function updateWidget(
  context: Client,
  id: string,
  options: UpdateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await context.path("/widgets/{id}", id).patch({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
    body: {
      ...(options.weight && { weight: options.weight }),
      ...(options.color && { color: options.color }),
    },
  });

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

export interface DeleteWidgetOptions extends RequestOptions {}

/** */
export async function deleteWidget(
  context: Client,
  id: string,
  options: DeleteWidgetOptions = { requestOptions: {} }
): Promise<void> {
  const result = await context.path("/widgets/{id}", id).delete({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
  });

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface AnalyzeWidgetOptions extends RequestOptions {}

/** */
export async function analyzeWidget(
  context: Client,
  id: string,
  options: AnalyzeWidgetOptions = { requestOptions: {} }
): Promise<AnalyzeResult> {
  const result = await context.path("/widgets/{id}/analyze", id).post({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
  });

  if (typeof options.requestOptions?.onResponse === "function") {
    options.requestOptions.onResponse(result);
  }

  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    summary: result.body["summary"],
  };
}
