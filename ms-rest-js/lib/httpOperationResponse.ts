// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { WebResource } from "./webResource";
import { HttpHeaders } from "./httpHeaders";

/**
 * Wrapper object for http request and response. Deserialized object is stored in
 * the `parsedBody` property when the response body is received in JSON or XML.
 * @class
 * Initializes a new instance of the HttpOperationResponse class.
 * @constructor
 */
export interface HttpOperationResponse {
  /**
   * The raw request
   */
  request: WebResource;

  /**
   * The HTTP response status (e.g. 200)
   */
  status: number;

  /**
   * The HTTP response headers.
   */
  headers: HttpHeaders;

  /**
   * The response body as text (string format)
   */
  bodyAsText?: string | null;

  /**
   * The response body as parsed JSON or XML
   */
  parsedBody?: any;

  /**
   * The response body as a Blob.
   * Always undefined in node.js.
   */
  blobBody?: (() => Promise<Blob>);

  /**
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
}
