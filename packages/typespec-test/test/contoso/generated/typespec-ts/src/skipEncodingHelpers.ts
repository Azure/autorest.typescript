import { GetWidget, WidgetManagerClient } from "./clientDefinitions.js";
import createClient from "./widgetManagerClient.js";
import { isUnexpected } from "./isUnexpected.js";
import { Client } from "@azure-rest/core-client";

/**
 * here is the code for proof of concept
 */
// step 1: build the mapping between the path and uri template
const uriTemplateMapper = {
  "widgets/{widgetName}": "widgets/{+widgetName}{?+key}",
};

// step 2: the overloading with paths which includes special skip encoding
export function path(
  client: WidgetManagerClient,
  path: "/widgets/{widgetName}",
  widgetName: string
): GetWidget;
// step 3: implement the overloading
export function path(client: Client, path: string, ...pathParams: string[]) {
  const uriTemplate = uriTemplateMapper["widgets/{widgetName}"];
  // step 3.1: if no uri template, just call the client.path
  if (!uriTemplate) {
    return client.path(path, ...pathParams);
  }
  // step 3.2: if uri template, re-implement the get method
  return {
    get: (options?: any) => {
      // 3.2.1. always skip operation-level encoding
      const _options = { ...options, skipUrlEncoding: true };
      // 3.2.2. prepare path parameters and query parameters
      const uriTemplateParams = {
        ...preparePathParameters(path, ...pathParams),
        ..._options.queryParameters,
      };
      delete _options.queryParameters;
      return client
        .pathUnchecked(
          // 3.2.3. prepare the url from uri template
          prepareUrlFromUriTemplate(uriTemplate, uriTemplateParams)
        )
        .get(_options);
    },
    // step 4: re-implement other methods
  } as any;
}

// return {widgetName: "widgetName"};
function preparePathParameters(path: string, ...pathParams: string[]) {
  const parameters = {};
  // convert the any thing in {} as key and relevant path param as value
  return parameters;
}

function prepareUrlFromUriTemplate(uri: string, uriParams: any) {
  return uri.replace(/{\+?(.*?)}/g, (_, key) => {
    return encodeURIComponent(uriParams[key]);
  });
}

/**
 * here is the customer's code
 */
const client = createClient("https://example.com");
const getWidgetResponse = await path(
  client,
  "/widgets/{widgetName}",
  "widgetName"
).get({
  queryParameters: { key: "value" },
});

if (isUnexpected(getWidgetResponse)) {
  throw getWidgetResponse.body.error;
}
