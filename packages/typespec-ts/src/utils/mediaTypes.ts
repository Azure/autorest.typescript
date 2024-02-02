// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { HttpOperationParameters } from "@typespec/http";
import { transformHeaderParameters } from "../transform/transformParameters.js";
import { ParameterMetadata, SchemaContext } from "@azure-tools/rlc-common";
import { getTypeName } from "./modelUtils.js";

// Media Type is: type "/" [tree "."] subtype ["+" suffix] * [";" parameter]

const json = "json";
const xml = "xml";
const application = "application";
const text = "text";
const multipart = "multipart";
const formData = "form-data";
const formEncoded = "x-www-form-urlencoded";

export enum KnownMediaType {
  Json = "json",
  Xml = "xml",
  Form = "form",
  Binary = "binary",
  Multipart = "multipart",
  Text = "text",
  Unknown = "unknown"
}

export function parseMediaType(mediaType: string) {
  if (mediaType) {
    const parsed =
      /(application|audio|font|example|image|message|model|multipart|text|video|x-(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+))\/([0-9A-Za-z!#$%&'*.^_`|~-]+)\s*(?:\+([0-9A-Za-z!#$%&'*.^_`|~-]+))?\s*(?:;.\s*(\S*))?/g.exec(
        mediaType
      );
    if (parsed) {
      return {
        type: parsed[1],
        subtype: parsed[2],
        suffix: parsed[3],
        parameter: parsed[4]
      };
    }
  }
  return undefined;
}

export function knownMediaType(mediaType: string) {
  const mt = parseMediaType(mediaType);
  if (mt) {
    if (
      (mt.subtype === json || mt.suffix === json) &&
      (mt.type === application || mt.type === text)
    ) {
      return KnownMediaType.Json;
    }
    if (
      (mt.subtype === xml || mt.suffix === xml) &&
      (mt.type === application || mt.type === text)
    ) {
      return KnownMediaType.Xml;
    }
    if (
      mt.type === "audio" ||
      mt.type === "image" ||
      mt.type === "video" ||
      mt.subtype === "octet-stream"
    ) {
      return KnownMediaType.Binary;
    }
    if (mt.type === application && mt.subtype === formEncoded) {
      // x-www-form-urlencoded
      return KnownMediaType.Form;
    }
    if (mt.type === "multipart" && mt.subtype === "form-data") {
      return KnownMediaType.Multipart;
    }
    if (mt.type === application) {
      // at this point, an unrecognized application/* is considered a binary format
      // since we don't have any other way of dealing with it.
      return KnownMediaType.Binary;
    }
    if (mt.type === "text") {
      return KnownMediaType.Text;
    }
  }
  return KnownMediaType.Unknown;
}

export function normalizeMediaType(contentType: string) {
  if (contentType) {
    const mt = parseMediaType(contentType);
    if (mt) {
      return mt.suffix
        ? `${mt.type}/${mt.subtype}+${mt.suffix}`
        : `${mt.type}/${mt.subtype}`;
    }
  }
  return undefined;
}

export function isMediaTypeJson(mediaType: string): boolean {
  const mt = parseMediaType(mediaType);
  return mt
    ? (mt.subtype === json || mt.suffix === json) &&
        (mt.type === application || mt.type === text)
    : false;
}

export function isMediaTypeJsonMergePatch(
  mediaType: string | string[]
): boolean {
  if (Array.isArray(mediaType)) {
    return Boolean(
      mediaType.length === 1 &&
        mediaType[0] &&
        isMediaTypeJsonMergePatch(mediaType[0])
    );
  }
  const mt = parseMediaType(mediaType);
  return mt
    ? mt.type === application &&
        mt.subtype === "merge-patch" &&
        mt.suffix === json
    : false;
}

export function isMediaTypeXml(mediaType: string): boolean {
  const mt = parseMediaType(mediaType);
  return mt
    ? (mt.subtype === xml || mt.suffix === xml) &&
        (mt.type === application || mt.type === text)
    : false;
}

export function isMediaTypeMultipartFormData(mediaType: string): boolean {
  const mt = parseMediaType(mediaType);
  return mt ? mt.type === multipart && mt.subtype === formData : false;
}

export function hasMediaType(
  target: KnownMediaType,
  sourceTypes: KnownMediaType[] = []
) {
  return sourceTypes.some((type) => type === target);
}

export function extractMediaTypes(
  parameters?: HttpOperationParameters,
  dpgContext?: SdkContext
): KnownMediaType[];
export function extractMediaTypes(
  headers?: ParameterMetadata[]
): KnownMediaType[];
export function extractMediaTypes(
  headersOrParams?: ParameterMetadata[] | HttpOperationParameters,
  dpgContext?: SdkContext
): KnownMediaType[] {
  if (!headersOrParams) {
    return [];
  }
  if (!Array.isArray(headersOrParams) && dpgContext) {
    headersOrParams = transformHeaderParameters(
      dpgContext!,
      headersOrParams as HttpOperationParameters,
      new Set<string>()
    );
  } else {
    headersOrParams = headersOrParams as ParameterMetadata[];
  }
  return (headersOrParams ?? [])
    .filter((h) => h.name === "contentType")
    .map((h) => {
      return knownMediaType(getTypeName(h.param, [SchemaContext.Input]));
    });
}
