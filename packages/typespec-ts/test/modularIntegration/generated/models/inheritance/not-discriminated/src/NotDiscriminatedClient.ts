// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Siamese } from "./models/models.js";
import {
  PostValidOptions,
  GetValidOptions,
  PutValidOptions,
} from "./models/options.js";
import {
  createNotDiscriminated,
  NotDiscriminatedClientOptions,
  NotDiscriminatedContext,
  postValid,
  getValid,
  putValid,
} from "./api/index.js";

export { NotDiscriminatedClientOptions } from "./api/NotDiscriminatedContext.js";

export class NotDiscriminatedClient {
  private _client: NotDiscriminatedContext;

  /** Illustrates not-discriminated inheritance model. */
  constructor(options: NotDiscriminatedClientOptions = {}) {
    this._client = createNotDiscriminated(options);
  }

  postValid(
    name: string,
    age: number,
    smart: boolean,
    options: PostValidOptions = { requestOptions: {} }
  ): Promise<void> {
    return postValid(this._client, name, age, smart, options);
  }

  getValid(
    options: GetValidOptions = { requestOptions: {} }
  ): Promise<Siamese> {
    return getValid(this._client, options);
  }

  putValid(
    name: string,
    age: number,
    smart: boolean,
    options: PutValidOptions = { requestOptions: {} }
  ): Promise<Siamese> {
    return putValid(this._client, name, age, smart, options);
  }
}
