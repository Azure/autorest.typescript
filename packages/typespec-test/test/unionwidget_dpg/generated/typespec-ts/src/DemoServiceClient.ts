// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Widget,
  ColorType,
  Widget1,
  Widget2,
  Widget3,
  Widget4,
  Widget5,
  Widget6,
  Widget7,
  Widget8,
  Widget9,
  Widget10,
  Widget11,
  Widget12,
  Widget13,
  Widget14,
  Widget15,
  Widget16,
  WidgetCollectionWithNextLink,
} from "./models/models.js";
import {
  GetOptions,
  UpdateOptions,
  DeleteOptions,
  CreateOptions,
  ListOptions,
  CustomGetOptions,
  CustomGet1Options,
  CustomGet2Options,
  CustomGet3Options,
  CustomGet4Options,
  CustomGet5Options,
  CustomGet6Options,
  CustomGet7Options,
  CustomGet8Options,
  CustomGet9Options,
  CustomGet10Options,
  CustomGet11Options,
  CustomGet12Options,
  CustomGet13Options,
  CustomGet14Options,
  CustomGet15Options,
  CustomGet16Options,
} from "./models/options.js";
import {
  createDemoService,
  DemoServiceClientOptions,
  DemoServiceContext,
  get,
  update,
  deleteOperation,
  create,
  list,
  customGet,
  customGet1,
  customGet2,
  customGet3,
  customGet4,
  customGet5,
  customGet6,
  customGet7,
  customGet8,
  customGet9,
  customGet10,
  customGet11,
  customGet12,
  customGet13,
  customGet14,
  customGet15,
  customGet16,
} from "./api/index.js";

export { DemoServiceClientOptions } from "./api/DemoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;

  constructor(endpoint: string, options: DemoServiceClientOptions = {}) {
    this._client = createDemoService(endpoint, options);
  }

  /** Gets an instance of the resource. */
  get(
    id: string,
    options: GetOptions = { requestOptions: {} }
  ): Promise<Widget> {
    return get(this._client, id, options);
  }

  /** Updates an existing instance of the resource. */
  update(
    weight: number,
    color: ColorType,
    id: string,
    options: UpdateOptions = { requestOptions: {} }
  ): Promise<Widget> {
    return update(this._client, weight, color, id, options);
  }

  /** Deletes an existing instance of the resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    id: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteOperation(this._client, id, options);
  }

  /** Creates a new instance of the resource. */
  create(
    weight: number,
    color: ColorType,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<Widget> {
    return create(this._client, weight, color, options);
  }

  /** Lists all instances of the resource. */
  list(
    options: ListOptions = { requestOptions: {} }
  ): Promise<WidgetCollectionWithNextLink> {
    return list(this._client, options);
  }

  customGet(
    options: CustomGetOptions = { requestOptions: {} }
  ): Promise<Widget> {
    return customGet(this._client, options);
  }

  customGet1(
    options: CustomGet1Options = { requestOptions: {} }
  ): Promise<Widget1> {
    return customGet1(this._client, options);
  }

  customGet2(
    options: CustomGet2Options = { requestOptions: {} }
  ): Promise<Widget2> {
    return customGet2(this._client, options);
  }

  customGet3(
    options: CustomGet3Options = { requestOptions: {} }
  ): Promise<Widget3> {
    return customGet3(this._client, options);
  }

  customGet4(
    options: CustomGet4Options = { requestOptions: {} }
  ): Promise<Widget4> {
    return customGet4(this._client, options);
  }

  customGet5(
    options: CustomGet5Options = { requestOptions: {} }
  ): Promise<Widget5> {
    return customGet5(this._client, options);
  }

  customGet6(
    options: CustomGet6Options = { requestOptions: {} }
  ): Promise<Widget6> {
    return customGet6(this._client, options);
  }

  customGet7(
    options: CustomGet7Options = { requestOptions: {} }
  ): Promise<Widget7> {
    return customGet7(this._client, options);
  }

  customGet8(
    options: CustomGet8Options = { requestOptions: {} }
  ): Promise<Widget8> {
    return customGet8(this._client, options);
  }

  customGet9(
    options: CustomGet9Options = { requestOptions: {} }
  ): Promise<Widget9> {
    return customGet9(this._client, options);
  }

  customGet10(
    options: CustomGet10Options = { requestOptions: {} }
  ): Promise<Widget10> {
    return customGet10(this._client, options);
  }

  customGet11(
    options: CustomGet11Options = { requestOptions: {} }
  ): Promise<Widget11> {
    return customGet11(this._client, options);
  }

  customGet12(
    options: CustomGet12Options = { requestOptions: {} }
  ): Promise<Widget12> {
    return customGet12(this._client, options);
  }

  customGet13(
    options: CustomGet13Options = { requestOptions: {} }
  ): Promise<Widget13> {
    return customGet13(this._client, options);
  }

  customGet14(
    options: CustomGet14Options = { requestOptions: {} }
  ): Promise<Widget14> {
    return customGet14(this._client, options);
  }

  customGet15(
    options: CustomGet15Options = { requestOptions: {} }
  ): Promise<Widget15> {
    return customGet15(this._client, options);
  }

  customGet16(
    options: CustomGet16Options = { requestOptions: {} }
  ): Promise<Widget16> {
    return customGet16(this._client, options);
  }
}
