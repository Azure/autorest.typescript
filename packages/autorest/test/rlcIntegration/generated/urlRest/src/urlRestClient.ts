// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { UrlRestClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): UrlRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const userAgentInfo = `azsdk-js-url-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, options) as UrlRestClient;

  return {
    ...client,
    paths: {
      getBooleanTrue: (boolPath, options) => {
        return client
          .path("/paths/bool/true/{boolPath}", boolPath)
          .get(options);
      },
      getBooleanFalse: (boolPath, options) => {
        return client
          .path("/paths/bool/false/{boolPath}", boolPath)
          .get(options);
      },
      getIntOneMillion: (intPath, options) => {
        return client
          .path("/paths/int/1000000/{intPath}", intPath)
          .get(options);
      },
      getIntNegativeOneMillion: (intPath, options) => {
        return client
          .path("/paths/int/-1000000/{intPath}", intPath)
          .get(options);
      },
      getTenBillion: (longPath, options) => {
        return client
          .path("/paths/long/10000000000/{longPath}", longPath)
          .get(options);
      },
      getNegativeTenBillion: (longPath, options) => {
        return client
          .path("/paths/long/-10000000000/{longPath}", longPath)
          .get(options);
      },
      floatScientificPositive: (floatPath, options) => {
        return client
          .path("/paths/float/1.034E+20/{floatPath}", floatPath)
          .get(options);
      },
      floatScientificNegative: (floatPath, options) => {
        return client
          .path("/paths/float/-1.034E-20/{floatPath}", floatPath)
          .get(options);
      },
      doubleDecimalPositive: (doublePath, options) => {
        return client
          .path("/paths/double/9999999.999/{doublePath}", doublePath)
          .get(options);
      },
      doubleDecimalNegative: (doublePath, options) => {
        return client
          .path("/paths/double/-9999999.999/{doublePath}", doublePath)
          .get(options);
      },
      stringUnicode: (stringPath, options) => {
        return client
          .path("/paths/string/unicode/{stringPath}", stringPath)
          .get(options);
      },
      stringUrlEncoded: (stringPath, options) => {
        return client
          .path(
            "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
            stringPath
          )
          .get(options);
      },
      stringUrlNonEncoded: (stringPath, options) => {
        return client
          .path("/paths/string/begin!*'();:@&=+$,end/{stringPath}", stringPath)
          .get(options);
      },
      stringEmpty: (stringPath, options) => {
        return client
          .path("/paths/string/empty/{stringPath}", stringPath)
          .get(options);
      },
      stringNull: (stringPath, options) => {
        return client
          .path("/paths/string/null/{stringPath}", stringPath)
          .get(options);
      },
      enumValid: (enumPath, options) => {
        return client
          .path("/paths/enum/green%20color/{enumPath}", enumPath)
          .get(options);
      },
      enumNull: (enumPath, options) => {
        return client
          .path("/paths/string/null/{enumPath}", enumPath)
          .get(options);
      },
      byteMultiByte: (bytePath, options) => {
        return client
          .path("/paths/byte/multibyte/{bytePath}", bytePath)
          .get(options);
      },
      byteEmpty: (bytePath, options) => {
        return client
          .path("/paths/byte/empty/{bytePath}", bytePath)
          .get(options);
      },
      byteNull: (bytePath, options) => {
        return client
          .path("/paths/byte/null/{bytePath}", bytePath)
          .get(options);
      },
      dateValid: (datePath, options) => {
        return client
          .path("/paths/date/2012-01-01/{datePath}", datePath)
          .get(options);
      },
      dateNull: (datePath, options) => {
        return client
          .path("/paths/date/null/{datePath}", datePath)
          .get(options);
      },
      dateTimeValid: (dateTimePath, options) => {
        return client
          .path(
            "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
            dateTimePath
          )
          .get(options);
      },
      dateTimeNull: (dateTimePath, options) => {
        return client
          .path("/paths/datetime/null/{dateTimePath}", dateTimePath)
          .get(options);
      },
      base64Url: (base64UrlPath, options) => {
        return client
          .path("/paths/string/bG9yZW0/{base64UrlPath}", base64UrlPath)
          .get(options);
      },
      arrayCsvInPath: (arrayPath, options) => {
        return client
          .path(
            "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
            arrayPath
          )
          .get(options);
      },
      unixTimeUrl: (unixTimeUrlPath, options) => {
        return client
          .path("/paths/int/1460505600/{unixTimeUrlPath}", unixTimeUrlPath)
          .get(options);
      }
    },
    queries: {
      getBooleanTrue: (options) => {
        return client.path("/queries/bool/true").get(options);
      },
      getBooleanFalse: (options) => {
        return client.path("/queries/bool/false").get(options);
      },
      getBooleanNull: (options) => {
        return client.path("/queries/bool/null").get(options);
      },
      getIntOneMillion: (options) => {
        return client.path("/queries/int/1000000").get(options);
      },
      getIntNegativeOneMillion: (options) => {
        return client.path("/queries/int/-1000000").get(options);
      },
      getIntNull: (options) => {
        return client.path("/queries/int/null").get(options);
      },
      getTenBillion: (options) => {
        return client.path("/queries/long/10000000000").get(options);
      },
      getNegativeTenBillion: (options) => {
        return client.path("/queries/long/-10000000000").get(options);
      },
      getLongNull: (options) => {
        return client.path("/queries/long/null").get(options);
      },
      floatScientificPositive: (options) => {
        return client.path("/queries/float/1.034E+20").get(options);
      },
      floatScientificNegative: (options) => {
        return client.path("/queries/float/-1.034E-20").get(options);
      },
      floatNull: (options) => {
        return client.path("/queries/float/null").get(options);
      },
      doubleDecimalPositive: (options) => {
        return client.path("/queries/double/9999999.999").get(options);
      },
      doubleDecimalNegative: (options) => {
        return client.path("/queries/double/-9999999.999").get(options);
      },
      doubleNull: (options) => {
        return client.path("/queries/double/null").get(options);
      },
      stringUnicode: (options) => {
        return client.path("/queries/string/unicode/").get(options);
      },
      stringUrlEncoded: (options) => {
        return client
          .path(
            "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend"
          )
          .get(options);
      },
      stringEmpty: (options) => {
        return client.path("/queries/string/empty").get(options);
      },
      stringNull: (options) => {
        return client.path("/queries/string/null").get(options);
      },
      enumValid: (options) => {
        return client.path("/queries/enum/green%20color").get(options);
      },
      enumNull: (options) => {
        return client.path("/queries/enum/null").get(options);
      },
      byteMultiByte: (options) => {
        return client.path("/queries/byte/multibyte").get(options);
      },
      byteEmpty: (options) => {
        return client.path("/queries/byte/empty").get(options);
      },
      byteNull: (options) => {
        return client.path("/queries/byte/null").get(options);
      },
      dateValid: (options) => {
        return client.path("/queries/date/2012-01-01").get(options);
      },
      dateNull: (options) => {
        return client.path("/queries/date/null").get(options);
      },
      dateTimeValid: (options) => {
        return client
          .path("/queries/datetime/2012-01-01T01%3A01%3A01Z")
          .get(options);
      },
      dateTimeNull: (options) => {
        return client.path("/queries/datetime/null").get(options);
      },
      arrayStringCsvValid: (options) => {
        return client.path("/queries/array/csv/string/valid").get(options);
      },
      arrayStringCsvNull: (options) => {
        return client.path("/queries/array/csv/string/null").get(options);
      },
      arrayStringCsvEmpty: (options) => {
        return client.path("/queries/array/csv/string/empty").get(options);
      },
      arrayStringNoCollectionFormatEmpty: (options) => {
        return client.path("/queries/array/none/string/empty").get(options);
      },
      arrayStringSsvValid: (options) => {
        return client.path("/queries/array/ssv/string/valid").get(options);
      },
      arrayStringTsvValid: (options) => {
        return client.path("/queries/array/tsv/string/valid").get(options);
      },
      arrayStringPipesValid: (options) => {
        return client.path("/queries/array/pipes/string/valid").get(options);
      }
    },
    pathItems: {
      getAllWithValues: (
        globalStringPath,
        pathItemStringPath,
        localStringPath,
        options
      ) => {
        return client
          .path(
            "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
            globalStringPath,
            pathItemStringPath,
            localStringPath
          )
          .get(options);
      },
      getGlobalQueryNull: (
        globalStringPath,
        pathItemStringPath,
        localStringPath,
        options
      ) => {
        return client
          .path(
            "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
            globalStringPath,
            pathItemStringPath,
            localStringPath
          )
          .get(options);
      },
      getGlobalAndLocalQueryNull: (
        globalStringPath,
        pathItemStringPath,
        localStringPath,
        options
      ) => {
        return client
          .path(
            "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
            globalStringPath,
            pathItemStringPath,
            localStringPath
          )
          .get(options);
      },
      getLocalPathItemQueryNull: (
        globalStringPath,
        pathItemStringPath,
        localStringPath,
        options
      ) => {
        return client
          .path(
            "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
            globalStringPath,
            pathItemStringPath,
            localStringPath
          )
          .get(options);
      }
    }
  };
}
