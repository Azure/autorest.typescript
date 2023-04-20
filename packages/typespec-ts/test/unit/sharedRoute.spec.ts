import { assert } from "chai";
import {
  emitClientDefinitionFromCadl,
  emitParameterFromCadl
} from "./util/emitUtil.js";
import { assertEqualContent } from "./util/testUtil.js";

const COMMON_CLIENT_DEF = `
import { ListByResourceGroupParameters, ListBySubscriptionParameters } from "./parameters";
import { ListByResourceGroup200Response, ListBySubscription200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListByResourceGroup {
    post(options: ListByResourceGroupParameters): StreamableMethod<ListByResourceGroup200Response>;
    post(options: ListBySubscriptionParameters): StreamableMethod<ListBySubscription200Response>;
}

export interface Routes {
    /** Resource for '/sharedroutes/resources' has methods for the following verbs: post */
    (path: "/sharedroutes/resources"): ListByResourceGroup;
}

export type testClient = Client & {
    path: Routes;
};`;

const buildParamDef = (
  resourceQueryParamDef: string,
  subscriptionQueryParamDef: string
) => {
  return `
    import { RequestParameters } from "@azure-rest/core-client";
    import { Resource } from "./models";
    
    export interface ListByResourceGroupBodyParam {
      body?: Resource;
    }
    
    export interface ListByResourceGroupQueryParamProperties {
        ${resourceQueryParamDef}
    }
    
    export interface ListByResourceGroupQueryParam {
      queryParameters: ListByResourceGroupQueryParamProperties;
    }
    
    export type ListByResourceGroupParameters = ListByResourceGroupQueryParam &
      ListByResourceGroupBodyParam &
      RequestParameters;
    
    export interface ListBySubscriptionBodyParam {
      body?: Resource;
    }
    
    export interface ListBySubscriptionQueryParamProperties {
      ${subscriptionQueryParamDef}
    }

    export interface ListBySubscriptionQueryParam {
      queryParameters: ListBySubscriptionQueryParamProperties;
    }

    export type ListBySubscriptionParameters = ListBySubscriptionQueryParam &
      ListBySubscriptionBodyParam &
      RequestParameters;
    `;
};

describe("Shared route support", () => {
  describe("clientDefinitions.ts", () => {
    it("model shared routes that differ by variable query parameters", async () => {
      const tspDef = `
        model Resource {
            id: string;
        }
        @route("/sharedroutes/resources", { shared: true })
        op listByResourceGroup(...Resource, @query resourceGroup: string, @query foo?: string): Resource[];
        @route("/sharedroutes/resources", { shared: true })
        op listBySubscription(...Resource, @query subscription: string, @query foo?: string): Resource[];
        `;
      const clientDef = await emitClientDefinitionFromCadl(tspDef);
      const paramDef = await emitParameterFromCadl(tspDef);
      assertEqualContent(clientDef?.content!, COMMON_CLIENT_DEF);
      assertEqualContent(
        paramDef?.content!,
        buildParamDef(
          `
        resourceGroup: string;
        foo?: string;
        `,
          `
        subscription: string;
        foo?: string;
        `
        )
      );
    });

    it("model shared routes that differ by values of a renamed query parameter", async () => {
      const tspDef = `
        model Resource {
        id: string;
        }
        @route("/sharedroutes/resources", { shared: true })
        op listByResourceGroup(...Resource, @query("filter") foo: "resourceGroup"): Resource[];
        @route("/sharedroutes/resources", { shared: true })
        op listBySubscription(...Resource, @query("filter") foo: "subscription"): Resource[];
        `;
      const clientDef = await emitClientDefinitionFromCadl(tspDef);
      const paramDef = await emitParameterFromCadl(tspDef);
      assert.ok(clientDef);
      assert.ok(paramDef);
      assertEqualContent(clientDef?.content!, COMMON_CLIENT_DEF);
      assertEqualContent(
        paramDef?.content!,
        buildParamDef(
          `
            filter: "resourceGroup";
          `,
          `
            filter: "subscription";
          `
        )
      );
    });

    it("model shared routes that differ by values of a specific query parameter", async () => {
      const tspDef = `
        model Resource {
            id: string;
        }
        @route("/sharedroutes/resources", { shared: true })
        op listByResourceGroup(...Resource, @query filter: "resourceGroup"): Resource[];
        @route("/sharedroutes/resources", { shared: true })
        op listBySubscription(...Resource, @query filter: "subscription"): Resource[];
        `;
      const clientDef = await emitClientDefinitionFromCadl(tspDef);
      const paramDef = await emitParameterFromCadl(tspDef);
      assert.ok(clientDef);
      assert.ok(paramDef);
      assertEqualContent(clientDef?.content!, COMMON_CLIENT_DEF);
      assertEqualContent(
        paramDef?.content!,
        buildParamDef(
          `
            filter: "resourceGroup";
          `,
          `
            filter: "subscription";
          `
        )
      );
    });
  });
});
