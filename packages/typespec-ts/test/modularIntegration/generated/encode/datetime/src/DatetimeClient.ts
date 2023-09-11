// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
} from "./api/index.js";

export { DatetimeClientOptions } from "./api/DatetimeContext.js";

export class DatetimeClient {
  private _client: DatetimeContext;

  /** Test for encode decorator on datetime. */
  constructor(options: DatetimeClientOptions = {}) {
    this._client = createDatetime(options);
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
      value: Date,
      options?: PropertyDefaultOptions
    ): Promise<DefaultDatetimeProperty> => {
      return propertyDefault(this._client, value, options);
    },
    rfc3339: (
      value: Date,
      options?: PropertyRfc3339Options
    ): Promise<Rfc3339DatetimeProperty> => {
      return propertyRfc3339(this._client, value, options);
    },
    rfc7231: (
      value: Date,
      options?: PropertyRfc7231Options
    ): Promise<Rfc7231DatetimeProperty> => {
      return propertyRfc7231(this._client, value, options);
    },
    unixTimestamp: (
      value: Date,
      options?: PropertyUnixTimestampOptions
    ): Promise<UnixTimestampDatetimeProperty> => {
      return propertyUnixTimestamp(this._client, value, options);
    },
    unixTimestampArray: (
      value: Date[],
      options?: PropertyUnixTimestampArrayOptions
    ): Promise<UnixTimestampArrayDatetimeProperty> => {
      return propertyUnixTimestampArray(this._client, value, options);
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
}
