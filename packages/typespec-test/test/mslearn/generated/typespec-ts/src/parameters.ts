// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface ReadLearningPathQueryParamProperties {
  /** A list of the related resources to be included in line with each resource This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  expand?: string;
  /**
   * A single, valid locale of the requested resource.
   * If this parameter isn't supplied, the `en-us` response will be returned.
   * If the resource isn't available in the requested locale, 404 will be returned.
   *
   * Possible values: id-id, ms-my, bs-latn-ba, ca-es, cs-cz, da-dk, de-at, de-ch, de-de, et-ee, en-au, en-ca, en-in, en-ie, en-my, en-nz, en-sg, en-za, en-gb, en-us, es-mx, es-es, eu-es, fil-ph, fr-be, fr-ca, fr-ch, fr-fr, ga-ie, gl-es, ka-ge, hr-hr, is-is, it-ch, it-it, lv-lv, lb-lu, lt-lt, hu-hu, mt-mt, nl-be, nl-nl, nb-no, pl-pl, pt-br, pt-pt, ro-ro, sk-sk, sl-si, sr-latn-rs, fi-fi, sv-se, vi-vn, tr-tr, el-gr, bg-bg, kk-kz, ru-ru, sr-cyrl-rs, uk-ua, he-il, ar-sa, hi-in, th-th, ko-kr, zh-cn, zh-tw, zh-hk, ja-jp
   */
  locale?: string;
}

export interface ReadLearningPathQueryParam {
  queryParameters?: ReadLearningPathQueryParamProperties;
}

export type ReadLearningPathParameters = ReadLearningPathQueryParam &
  RequestParameters;

export interface ListLearningPathsQueryParamProperties {
  /** A list of the related resources to be included in line with each resource This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  expand?: string;
  /**
   * A single, valid locale of the requested resource.
   * If this parameter isn't supplied, the `en-us` response will be returned.
   * If the resource isn't available in the requested locale, 404 will be returned.
   *
   * Possible values: id-id, ms-my, bs-latn-ba, ca-es, cs-cz, da-dk, de-at, de-ch, de-de, et-ee, en-au, en-ca, en-in, en-ie, en-my, en-nz, en-sg, en-za, en-gb, en-us, es-mx, es-es, eu-es, fil-ph, fr-be, fr-ca, fr-ch, fr-fr, ga-ie, gl-es, ka-ge, hr-hr, is-is, it-ch, it-it, lv-lv, lb-lu, lt-lt, hu-hu, mt-mt, nl-be, nl-nl, nb-no, pl-pl, pt-br, pt-pt, ro-ro, sk-sk, sl-si, sr-latn-rs, fi-fi, sv-se, vi-vn, tr-tr, el-gr, bg-bg, kk-kz, ru-ru, sr-cyrl-rs, uk-ua, he-il, ar-sa, hi-in, th-th, ko-kr, zh-cn, zh-tw, zh-hk, ja-jp
   */
  locale?: string;
  /** An offset into the collection of the first resource to be returned */
  skip?: number;
  /** The maximum number of resources to return from the collection */
  top?: number;
}

export interface ListLearningPathsQueryParam {
  queryParameters?: ListLearningPathsQueryParamProperties;
}

export type ListLearningPathsParameters = ListLearningPathsQueryParam &
  RequestParameters;

export interface ReadModuleQueryParamProperties {
  /** A list of the related resources to be included in line with each resource This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  expand?: string;
  /**
   * A single, valid locale of the requested resource.
   * If this parameter isn't supplied, the `en-us` response will be returned.
   * If the resource isn't available in the requested locale, 404 will be returned.
   *
   * Possible values: id-id, ms-my, bs-latn-ba, ca-es, cs-cz, da-dk, de-at, de-ch, de-de, et-ee, en-au, en-ca, en-in, en-ie, en-my, en-nz, en-sg, en-za, en-gb, en-us, es-mx, es-es, eu-es, fil-ph, fr-be, fr-ca, fr-ch, fr-fr, ga-ie, gl-es, ka-ge, hr-hr, is-is, it-ch, it-it, lv-lv, lb-lu, lt-lt, hu-hu, mt-mt, nl-be, nl-nl, nb-no, pl-pl, pt-br, pt-pt, ro-ro, sk-sk, sl-si, sr-latn-rs, fi-fi, sv-se, vi-vn, tr-tr, el-gr, bg-bg, kk-kz, ru-ru, sr-cyrl-rs, uk-ua, he-il, ar-sa, hi-in, th-th, ko-kr, zh-cn, zh-tw, zh-hk, ja-jp
   */
  locale?: string;
}

export interface ReadModuleQueryParam {
  queryParameters?: ReadModuleQueryParamProperties;
}

export type ReadModuleParameters = ReadModuleQueryParam & RequestParameters;

export interface ListModulesQueryParamProperties {
  /** A list of the related resources to be included in line with each resource This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  expand?: string;
  /**
   * A single, valid locale of the requested resource.
   * If this parameter isn't supplied, the `en-us` response will be returned.
   * If the resource isn't available in the requested locale, 404 will be returned.
   *
   * Possible values: id-id, ms-my, bs-latn-ba, ca-es, cs-cz, da-dk, de-at, de-ch, de-de, et-ee, en-au, en-ca, en-in, en-ie, en-my, en-nz, en-sg, en-za, en-gb, en-us, es-mx, es-es, eu-es, fil-ph, fr-be, fr-ca, fr-ch, fr-fr, ga-ie, gl-es, ka-ge, hr-hr, is-is, it-ch, it-it, lv-lv, lb-lu, lt-lt, hu-hu, mt-mt, nl-be, nl-nl, nb-no, pl-pl, pt-br, pt-pt, ro-ro, sk-sk, sl-si, sr-latn-rs, fi-fi, sv-se, vi-vn, tr-tr, el-gr, bg-bg, kk-kz, ru-ru, sr-cyrl-rs, uk-ua, he-il, ar-sa, hi-in, th-th, ko-kr, zh-cn, zh-tw, zh-hk, ja-jp
   */
  locale?: string;
  /** An offset into the collection of the first resource to be returned */
  skip?: number;
  /** The maximum number of resources to return from the collection */
  top?: number;
}

export interface ListModulesQueryParam {
  queryParameters?: ListModulesQueryParamProperties;
}

export type ListModulesParameters = ListModulesQueryParam & RequestParameters;
