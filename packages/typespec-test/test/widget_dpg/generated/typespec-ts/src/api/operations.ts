// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import { WidgetServiceContext as Client, isUnexpected } from "../rest/index.js";
import { Widget, ColorType, AnalyzeResult } from "./models.js";

export interface ListWidgetsOptions extends RequestOptions {}

async function _listWidgetsSend(
  context: Client,
  options: ListWidgetsOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

/** */
export async function listWidgets(
  context: Client,
  options: ListWidgetsOptions = { requestOptions: {} }
): Promise<Widget[]> {
  const result = await _listWidgetsSend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return (result.body ?? []).map((p) => ({
    id: p["id"],
    weight: p["weight"],
    color: p["color"],
  }));
}

export interface GetWidgetOptions extends RequestOptions {}

async function _getWidgetSend(
  context: Client,
  id: string,
  options: GetWidgetOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets/{id}", id)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

/** */
export async function getWidget(
  context: Client,
  id: string,
  options: GetWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
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

async function _createWidgetSend(
  context: Client,
  weight: number,
  color: ColorType,
  options: CreateWidgetOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets")
    .post({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      body: { weight: weight, color: color },
    });
}

/** */
export async function createWidget(
  context: Client,
  weight: number,
  color: ColorType,
  options: CreateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _createWidgetSend(context, weight, color, options);
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

async function _updateWidgetSend(
  context: Client,
  id: string,
  options: UpdateWidgetOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets/{id}", id)
    .patch({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      body: {
        ...(options.weight && { weight: options.weight }),
        ...(options.color && { color: options.color }),
      },
    });
}

/** */
export async function updateWidget(
  context: Client,
  id: string,
  options: UpdateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _updateWidgetSend(context, id, options);
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

async function _deleteWidgetSend(
  context: Client,
  id: string,
  options: DeleteWidgetOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets/{id}", id)
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

/** */
export async function deleteWidget(
  context: Client,
  id: string,
  options: DeleteWidgetOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteWidgetSend(context, id, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

export interface AnalyzeWidgetOptions extends RequestOptions {}

async function _analyzeWidgetSend(
  context: Client,
  id: string,
  options: AnalyzeWidgetOptions = { requestOptions: {} }
) {
  return context
    .path("/widgets/{id}/analyze", id)
    .post({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

/** */
export async function analyzeWidget(
  context: Client,
  id: string,
  options: AnalyzeWidgetOptions = { requestOptions: {} }
): Promise<AnalyzeResult> {
  const result = await _analyzeWidgetSend(context, id, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    summary: result.body["summary"],
  };
}
