// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetServiceContext as Client, isUnexpected } from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../common/interfaces.js";
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

async function _listWidgetsDeserialize(
  result: OperationRawReturnType<typeof _listWidgetsSend>
): Promise<Widget[]> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return (result.body ?? []).map((p) => ({
    id: p["id"],
    weight: p["weight"],
    color: p["color"],
  }));
}

/** */
export async function listWidgets(
  context: Client,
  options: ListWidgetsOptions = { requestOptions: {} }
): Promise<Widget[]> {
  const result = await _listWidgetsSend(context, options);
  return _listWidgetsDeserialize(result);
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

async function _getWidgetDeserialize(
  result: OperationRawReturnType<typeof _getWidgetSend>
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/** */
export async function getWidget(
  context: Client,
  id: string,
  options: GetWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _getWidgetSend(context, id, options);
  return _getWidgetDeserialize(result);
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

async function _createWidgetDeserialize(
  result: OperationRawReturnType<typeof _createWidgetSend>
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/** */
export async function createWidget(
  context: Client,
  weight: number,
  color: ColorType,
  options: CreateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _createWidgetSend(context, weight, color, options);
  return _createWidgetDeserialize(result);
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

async function _updateWidgetDeserialize(
  result: OperationRawReturnType<typeof _updateWidgetSend>
): Promise<Widget> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    weight: result.body["weight"],
    color: result.body["color"],
  };
}

/** */
export async function updateWidget(
  context: Client,
  id: string,
  options: UpdateWidgetOptions = { requestOptions: {} }
): Promise<Widget> {
  const result = await _updateWidgetSend(context, id, options);
  return _updateWidgetDeserialize(result);
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

async function _deleteWidgetDeserialize(
  result: OperationRawReturnType<typeof _deleteWidgetSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** */
export async function deleteWidget(
  context: Client,
  id: string,
  options: DeleteWidgetOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteWidgetSend(context, id, options);
  return _deleteWidgetDeserialize(result);
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

async function _analyzeWidgetDeserialize(
  result: OperationRawReturnType<typeof _analyzeWidgetSend>
): Promise<AnalyzeResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    summary: result.body["summary"],
  };
}

/** */
export async function analyzeWidget(
  context: Client,
  id: string,
  options: AnalyzeWidgetOptions = { requestOptions: {} }
): Promise<AnalyzeResult> {
  const result = await _analyzeWidgetSend(context, id, options);
  return _analyzeWidgetDeserialize(result);
}
