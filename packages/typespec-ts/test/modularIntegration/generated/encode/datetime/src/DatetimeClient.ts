// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "./models/models.js";
import {
  QueryDefaultOptions,
  QueryRfc3339Options,
  QueryRfc7231Options,
  QueryUnixTimestampOptions,
  QueryUnixTimestampArrayOptions,
  PropertyDefaultOptions,
  PropertyRfc3339Options,
  PropertyRfc7231Options,
  PropertyUnixTimestampOptions,
  PropertyUnixTimestampArrayOptions,
  HeaderDefaultOptions,
  HeaderRfc3339Options,
  HeaderRfc7231Options,
  HeaderUnixTimestampOptions,
  HeaderUnixTimestampArrayOptions,
  ResponseHeaderDefaultOptions,
  ResponseHeaderRfc3339Options,
  ResponseHeaderRfc7231Options,
  ResponseHeaderUnixTimestampOptions,
} from "./models/options.js";
import {
  createDatetime,
  DatetimeClientOptions,
  DatetimeContext,
  headerDefault,
  headerRfc3339,
  headerRfc7231,
  headerUnixTimestamp,
  headerUnixTimestampArray,
  propertyDefault,
  propertyRfc3339,
  propertyRfc7231,
  propertyUnixTimestamp,
  propertyUnixTimestampArray,
  queryDefault,
  queryRfc3339,
  queryRfc7231,
  queryUnixTimestamp,
  queryUnixTimestampArray,
  responseHeaderDefault,
  responseHeaderRfc3339,
  responseHeaderRfc7231,
  responseHeaderUnixTimestamp,
} from "./api/index.js";

export { DatetimeClientOptions } from "./api/DatetimeContext.js";

export class DatetimeClient {
  private _client: DatetimeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on datetime. */
  constructor(options: DatetimeClientOptions = {}) {
    this._client = createDatetime(options);
    this.pipeline = this._client.pipeline;
  }

  query = {
    default: (value: Date, options?: QueryDefaultOptions): Promise<void> => {
      return queryDefault(this._client, value, options);
    },
    rfc3339: (value: Date, options?: QueryRfc3339Options): Promise<void> => {
      return queryRfc3339(this._client, value, options);
    },
    rfc7231: (value: Date, options?: QueryRfc7231Options): Promise<void> => {
      return queryRfc7231(this._client, value, options);
    },
    unixTimestamp: (
      value: Date,
      options?: QueryUnixTimestampOptions
    ): Promise<void> => {
      return queryUnixTimestamp(this._client, value, options);
    },
    unixTimestampArray: (
      value: Date[],
      options?: QueryUnixTimestampArrayOptions
    ): Promise<void> => {
      return queryUnixTimestampArray(this._client, value, options);
    },
  };
  property = {
    default: (
      body: DefaultDatetimeProperty,
      options?: PropertyDefaultOptions
    ): Promise<DefaultDatetimeProperty> => {
      return propertyDefault(this._client, body, options);
    },
    rfc3339: (
      body: Rfc3339DatetimeProperty,
      options?: PropertyRfc3339Options
    ): Promise<Rfc3339DatetimeProperty> => {
      return propertyRfc3339(this._client, body, options);
    },
    rfc7231: (
      body: Rfc7231DatetimeProperty,
      options?: PropertyRfc7231Options
    ): Promise<Rfc7231DatetimeProperty> => {
      return propertyRfc7231(this._client, body, options);
    },
    unixTimestamp: (
      body: UnixTimestampDatetimeProperty,
      options?: PropertyUnixTimestampOptions
    ): Promise<UnixTimestampDatetimeProperty> => {
      return propertyUnixTimestamp(this._client, body, options);
    },
    unixTimestampArray: (
      body: UnixTimestampArrayDatetimeProperty,
      options?: PropertyUnixTimestampArrayOptions
    ): Promise<UnixTimestampArrayDatetimeProperty> => {
      return propertyUnixTimestampArray(this._client, body, options);
    },
  };
  header = {
    default: (value: Date, options?: HeaderDefaultOptions): Promise<void> => {
      return headerDefault(this._client, value, options);
    },
    rfc3339: (value: Date, options?: HeaderRfc3339Options): Promise<void> => {
      return headerRfc3339(this._client, value, options);
    },
    rfc7231: (value: Date, options?: HeaderRfc7231Options): Promise<void> => {
      return headerRfc7231(this._client, value, options);
    },
    unixTimestamp: (
      value: Date,
      options?: HeaderUnixTimestampOptions
    ): Promise<void> => {
      return headerUnixTimestamp(this._client, value, options);
    },
    unixTimestampArray: (
      value: Date[],
      options?: HeaderUnixTimestampArrayOptions
    ): Promise<void> => {
      return headerUnixTimestampArray(this._client, value, options);
    },
  };
  responseHeader = {
    default: (options?: ResponseHeaderDefaultOptions): Promise<void> => {
      return responseHeaderDefault(this._client, options);
    },
    rfc3339: (options?: ResponseHeaderRfc3339Options): Promise<void> => {
      return responseHeaderRfc3339(this._client, options);
    },
    rfc7231: (options?: ResponseHeaderRfc7231Options): Promise<void> => {
      return responseHeaderRfc7231(this._client, options);
    },
    unixTimestamp: (
      options?: ResponseHeaderUnixTimestampOptions
    ): Promise<void> => {
      return responseHeaderUnixTimestamp(this._client, options);
    },
  };
}
