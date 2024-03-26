// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PublicDecoratorModelInPublic,
  NoDecoratorModelInPublic,
  PublicDecoratorModelInInternal,
  InternalDecoratorModelInInternal,
  NoDecoratorModelInInternal,
  SharedModel,
  RealModel,
  AbstractModel,
  InnerModel,
  OuterModel,
  BaseModel,
} from "../models/models.js";
import {
  PublicDecoratorModelInPublicOutput as RestPublicDecoratorModelInPublic,
  NoDecoratorModelInPublicOutput as RestNoDecoratorModelInPublic,
  PublicDecoratorModelInInternalOutput as RestPublicDecoratorModelInInternal,
  InternalDecoratorModelInInternalOutput as RestInternalDecoratorModelInInternal,
  NoDecoratorModelInInternalOutput as RestNoDecoratorModelInInternal,
  SharedModelOutput as RestSharedModel,
  RealModelOutput as RestRealModel,
  AbstractModelOutput as RestAbstractModel,
  InnerModelOutput as RestInnerModel,
  OuterModelOutput as RestOuterModel,
  BaseModelOutput as RestBaseModel,
} from "../rest/index.js";

export function deserializePublicDecoratorModelInPublic(
  o: RestPublicDecoratorModelInPublic,
): PublicDecoratorModelInPublic {
  return {
    name: o["name"],
  };
}

export function deserializeNoDecoratorModelInPublic(
  o: RestNoDecoratorModelInPublic,
): NoDecoratorModelInPublic {
  return {
    name: o["name"],
  };
}

export function deserializePublicDecoratorModelInInternal(
  o: RestPublicDecoratorModelInInternal,
): PublicDecoratorModelInInternal {
  return {
    name: o["name"],
  };
}

export function deserializeInternalDecoratorModelInInternal(
  o: RestInternalDecoratorModelInInternal,
): InternalDecoratorModelInInternal {
  return {
    name: o["name"],
  };
}

export function deserializeNoDecoratorModelInInternal(
  o: RestNoDecoratorModelInInternal,
): NoDecoratorModelInInternal {
  return {
    name: o["name"],
  };
}

export function deserializeSharedModel(o: RestSharedModel): SharedModel {
  return {
    name: o["name"],
  };
}

export function deserializeRealModel(o: RestRealModel): RealModel {
  return {
    kind: o["kind"],
    name: o["name"],
  };
}

export function deserializeAbstractModel(o: RestAbstractModel): AbstractModel {
  return {
    kind: o["kind"],
    name: o["name"],
  };
}

export function deserializeInnerModel(o: RestInnerModel): InnerModel {
  return {
    name: o["name"],
  };
}

export function deserializeOuterModel(o: RestOuterModel): OuterModel {
  return {
    name: o["name"],
    inner: MISSING_SERIALIZER(o["inner"]),
  };
}

export function deserializeBaseModel(o: RestBaseModel): BaseModel {
  return {
    name: o["name"],
  };
}
