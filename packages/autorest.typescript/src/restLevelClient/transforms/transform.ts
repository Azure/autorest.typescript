// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  ImplementationLocation,
  ParameterLocation,
  Protocol
} from "@autorest/codemodel";
import {
  ImportKind,
  RLCModel,
  AnnotationDetails,
  UrlInfo,
  ApiVersionInfo
} from "@azure-tools/rlc-common";
import { getAutorestOptions } from "../../autorestSession";
import { transformBaseUrl } from "../../transforms/urlTransforms";
import {
  extractPaginationDetails,
  hasPagingOperations
} from "../../utils/extractPaginationDetails";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { hasPollingOperations } from "../helpers/hasPollingOperations";
import { isConstantSchema } from "../schemaHelpers";
import { transformOptions } from "./transformOptions";
import {
  transformParameterTypes,
  getSpecialSerializeInfo
} from "./transformParameterTypes";
import { transformPaths } from "./transformPaths";
import { transformResponseTypes } from "./transformResponseTypes";
import { transformSchemas } from "./transformSchemas";
import { UUID } from "crypto";

export function transform(model: CodeModel): RLCModel {
  const { srcPath } = getAutorestOptions();
  const importDetails = new Map<ImportKind, Set<string>>();
  const urlInfo = transformUrlInfo(model);
  const rlcModel: RLCModel = {
    libraryName: normalizeName(
      getLanguageMetadata(model.language).name,
      NameType.Interface
    ),
    srcPath,
    paths: transformPaths(model),
    options: transformOptions(model),
    schemas: transformSchemas(model),
    responses: transformResponseTypes(model, importDetails),
    importSet: importDetails,
    parameters: transformParameterTypes(model, importDetails),
    annotations: transformAnnotationDetails(model),
    urlInfo: transformUrlInfo(model),
    apiVersionInfo: transformApiVersion(model, urlInfo)
  };
  return rlcModel;
}

function transformApiVersion(
  model: CodeModel,
  urlInfo: UrlInfo
): ApiVersionInfo | undefined {
  const queryVersionDetail = getOperationQueryApiVersion(model);
  const pathVersionDetail = getPathApiVersion(urlInfo);
  const definedPosition = extractDefinedPosition(
    queryVersionDetail,
    pathVersionDetail
  );
  const isCrossedVersion =
    definedPosition === "query"
      ? Boolean(queryVersionDetail?.isCrossedVersion)
      : false;
  let defaultValue =
    pathVersionDetail?.defaultValue ?? queryVersionDetail?.defaultValue;

  // Clear the default value if there exists cross version
  if (isCrossedVersion) {
    defaultValue = undefined;
  }

  return {
    definedPosition,
    isCrossedVersion,
    defaultValue
  };
}

function extractDefinedPosition(
  queryApiVersion?: ApiVersionInfo,
  pathVersionDetail?: ApiVersionInfo
) {
  let pos: "none" | "both" | "query" | "path" = "none";
  if (queryApiVersion && pathVersionDetail) {
    pos = "both";
  } else if (queryApiVersion && !pathVersionDetail) {
    pos = "query";
  } else if (!queryApiVersion && pathVersionDetail) {
    pos = "path";
  }

  return pos;
}

function getPathApiVersion(urlInfo?: UrlInfo): ApiVersionInfo | undefined {
  if (!urlInfo) {
    return;
  }
  const param = urlInfo.urlParameters?.filter(
    p =>
      p.name.toLowerCase() === "api-version" ||
      p.name.toLowerCase() === "apiversion"
  );
  if (!param || param?.length < 1) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition: "query",
    isCrossedVersion: false
  };
  return detail;
}

function getOperationQueryApiVersion(
  model: CodeModel
): ApiVersionInfo | undefined {
  if (!model.globalParameters || !model.globalParameters.length) {
    return;
  }

  const apiVersionParam = model.globalParameters
    .filter(
      gp =>
        gp.implementation === ImplementationLocation.Client &&
        gp.protocol.http?.in === ParameterLocation.Query
    )
    .find(
      param =>
        getLanguageMetadata(param.language).serializedName === "api-version"
    );

  if (apiVersionParam && isConstantSchema(apiVersionParam.schema)) {
    return {
      definedPosition: "path",
      isCrossedVersion: false,
      defaultValue: apiVersionParam.schema.value.value.toString()
    };
  }

  return;
}

export function transformAnnotationDetails(
  model: CodeModel
): AnnotationDetails {
  const nextLinks = new Set<string>();
  const itemNames = new Set<string>();
  // Add default values
  nextLinks.add("nextLink");
  itemNames.add("value");
  let hasMultiCollection = false;
  let hasPipeCollection = false;
  let hasSsvCollection = false;
  let hasTsvCollection = false;
  for (let operationGroup of model.operationGroups) {
    for (let operation of operationGroup.operations) {
      const paginationDetails = extractPaginationDetails(operation);
      if (paginationDetails) {
        const { nextLinkName, itemName } = paginationDetails;
        nextLinkName && nextLinks.add(`${nextLinkName}`);
        itemName && itemNames.add(`${itemName}`);
      }
      operation.signatureParameters?.forEach(parameter => {
        const serializeInfo = getSpecialSerializeInfo(parameter);
        hasMultiCollection = hasMultiCollection
          ? hasMultiCollection
          : serializeInfo.hasMultiCollection;
        hasPipeCollection = hasPipeCollection
          ? hasPipeCollection
          : serializeInfo.hasPipeCollection;
        hasSsvCollection = hasSsvCollection
          ? hasSsvCollection
          : serializeInfo.hasSsvCollection;
        hasTsvCollection = hasTsvCollection
          ? hasTsvCollection
          : serializeInfo.hasTsvCollection;
      });
    }
  }

  // If there are more than one options for nextLink and item names we need to generate a
  // more complex pagination helper.
  const isComplexPaging = nextLinks.size > 1 || itemNames.size > 1;
  return {
    hasPaging: hasPagingOperations(model),
    hasLongRunning: hasPollingOperations(model),
    pageDetails: {
      itemNames: [...itemNames],
      nextLinkNames: [...nextLinks],
      isComplexPaging
    },
    hasMultiCollection,
    hasPipeCollection,
    hasSsvCollection,
    hasTsvCollection
  };
}

function transformUrlInfo(model: CodeModel): UrlInfo {
  const { endpoint, urlParameters } = transformBaseUrl(model);
  return { endpoint, urlParameters };
}
