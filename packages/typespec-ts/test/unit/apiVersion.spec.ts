import { assert } from "chai";
import { emitClientFactoryFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

interface DefinitionOptions {
  "@service"?: boolean;
  "@versioned"?: boolean;
  crossVersion?: boolean;
}

const buildDefaultDefinition = (options: DefinitionOptions) => {
  const serviceDefault = !options["@service"]
    ? ``
    : `version: "2022-05-15-preview"`;
  const versionDef = !options["@versioned"]
    ? ``
    : `
    @versioned(Versions)`;
  return `
  ${versionDef}
  @server(
    "{Endpoint}/language",
    "Language Service",
    {
      Endpoint: Endpoint
    }
  )
  @service({
    title: "PetStoreClient",
    ${serviceDefault}
  })
  namespace PetStore;
  @doc("The endpoint to use.")
  scalar Endpoint extends string;

  enum Versions {
    v2022_05_15_preview: "2022-05-15-preview"
  }
  `;
};

const buildQueryDefinition = (options: DefinitionOptions) => {
  const crossVersionDef = options.crossVersion
    ? `
  enum VersionEnum {
    v1,
    v2,
  }
  model ApiVersion3Parameter {
    @query
    "api-version": VersionEnum;
  }
  @route("/baz")
  op baz(...ApiVersion3Parameter): string;

  model ApiVersion2Parameter {
    @query
    "api-version": "v1.1";
  }
  @route("/bar")
  op bar(...ApiVersion2Parameter): string;`
    : ``;
  return `${buildDefaultDefinition(options)}
  model ApiVersionParameter {
    @query
    "api-version": string;
  }
  @route("/foo")
  op foo(...ApiVersionParameter): string;
  ${crossVersionDef}
  `;
};

const buildPathDefinition = (options: DefinitionOptions) => {
  const serviceDefault = !options["@service"]
    ? ``
    : `version: "2022-05-15-preview"`;
  const versionDef = !options["@versioned"]
    ? ``
    : `
    @versioned(Versions)`;
  return `
  ${versionDef}
  @server(
    "{Endpoint}/anomalydetector/{apiVersion}",
    "Language Service",
    {
      Endpoint: Endpoint,
      @doc("Api Version")
      @path
      apiVersion: Versions,
    }
  )
  @service({
    title: "PetStoreClient",
    ${serviceDefault}
  })
  namespace PetStore;
  @doc("The endpoint to use.")
  scalar Endpoint extends string;

  enum Versions {
    v2022_05_15_preview: "2022-05-15-preview"
  }
  `;
};

const buildMixedDefinition = (options: DefinitionOptions) => {
  const crossVersionDef = options.crossVersion
    ? `
  model ApiVersion2Parameter {
    @query
    "api-version": "v1.1";
  }
  op foo(...ApiVersion2Parameter): string;`
    : ``;
  return `${buildPathDefinition(options)}
  model ApiVersionParameter {
    @query
    "api-version": string;
  }
  op test(...ApiVersionParameter): string;
  ${crossVersionDef}
  `;
};

const buildDefaultReturn = (hasDefault: boolean, hasQueryDefinition: boolean) => {
  const defaultDef = !hasDefault
    ? ``
    : `options.apiVersion = options.apiVersion ?? "2022-05-15-preview";`;
  const apiVersionDef = !hasQueryDefinition ? `\n    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });\n    \n`: ``;
  return `
  import { getClient, ClientOptions } from "@azure-rest/core-client";
  import { logger } from "./logger";
  import { testClient } from "./clientDefinitions";
  
  /**
   * Initialize a new instance of \`testClient\`
   * @param endpoint - The endpoint to use.
   * @param options - the parameter for all optional parameters
   */
  export default function createClient(
    endpoint: string,
    options: ClientOptions = {}
  ): testClient {
    const baseUrl = options.baseUrl ?? \`\${endpoint}/language\`;
    ${defaultDef}
    const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
        : \`\${userAgentInfo}\`;
    options = {
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      loggingOptions: {
        logger: options.loggingOptions?.logger ?? logger.info
      },
    };
  
    const client = getClient(baseUrl, options) as testClient;
    ${apiVersionDef}
    return client;
  }`;
};

const buildPathReturn_WithDefault = () => {
  return `
  import { getClient, ClientOptions } from "@azure-rest/core-client";
  import { logger } from "./logger";
  import { testClient } from "./clientDefinitions";

  export interface testClientOptions extends ClientOptions {
    apiVersion?: string;
  }
  
  /**
   * Initialize a new instance of \`testClient\`
   * @param endpoint - The endpoint to use.
   * @param options - the parameter for all optional parameters
   */
  export default function createClient(
    endpoint: string,
    options: testClientOptions = {}
  ): testClient {
    const apiVersion = options.apiVersion ?? "2022-05-15-preview";
    const baseUrl = options.baseUrl ?? \`\${endpoint}/anomalydetector/\${apiVersion}\`;

    const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
        : \`\${userAgentInfo}\`;
    options = {
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      loggingOptions: {
        logger: options.loggingOptions?.logger ?? logger.info
      },
    };
  
    const client = getClient(baseUrl, options) as testClient;

    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  
    return client;          
  }`;
};

const buildPathReturn_WithoutDefault = () => {
  return `
  import { getClient, ClientOptions } from "@azure-rest/core-client";
  import { logger } from "./logger";
  import { testClient } from "./clientDefinitions";
  
  /**
   * Initialize a new instance of \`testClient\`
   * @param endpoint - The endpoint to use.
   * @param apiVersion - Api Version Possible values: "2022-05-15-preview"
   * @param options - the parameter for all optional parameters
   */
  export default function createClient(
    endpoint: string,
    apiVersion: string,
    options: ClientOptions = {}
  ): testClient {
    const baseUrl = options.baseUrl ?? \`\${endpoint}/anomalydetector/\${apiVersion}\`;

    const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
        : \`\${userAgentInfo}\`;
    options = {
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      loggingOptions: {
        logger: options.loggingOptions?.logger ?? logger.info
      },
    };
  
    const client = getClient(baseUrl, options) as testClient;

    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  
    return client;          
  }`;
};

describe("api-version", () => {
  describe("defined in query position", () => {
    describe("with default value", () => {
      it("in @serivce", async () => {
        const def = buildQueryDefinition({
          "@service": true
        });
        const expectedRes = buildDefaultReturn(true, true);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
      it("in @versioned", async () => {
        const def = buildQueryDefinition({
          "@versioned": true
        });
        const expectedRes = buildDefaultReturn(true, true);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
    describe("without default value", () => {
      it("due to cross version", async () => {
        const def = buildQueryDefinition({
          "@service": true,
          "@versioned": false,
          crossVersion: true
        });
        const expectedRes = buildDefaultReturn(false, true);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
      it("no @service or @versioned", async () => {
        const def = buildQueryDefinition({
          "@service": false,
          "@versioned": false
        });
        const expectedRes = buildDefaultReturn(false, true);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
  });
  describe("defined in url path", () => {
    describe("with default value", () => {
      it("in @serivce", async () => {
        const def = buildPathDefinition({
          "@service": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
      it("in @versioned", async () => {
        const def = buildPathDefinition({
          "@versioned": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
    describe("without default value", () => {
      it("no @service or @versioned", async () => {
        const def = buildPathDefinition({
          "@service": false,
          "@versioned": false
        });
        const expectedRes = buildPathReturn_WithoutDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
  });
  describe("defined in both positions[path preferred]", () => {
    describe("with default value", () => {
      it("in @serivce", async () => {
        const def = buildMixedDefinition({
          "@service": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
      it("in @versioned", async () => {
        const def = buildMixedDefinition({
          "@versioned": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
    describe("without default value", () => {
      it("no @service or @versioned", async () => {
        const def = buildMixedDefinition({
          "@service": false,
          "@versioned": false
        });
        const expectedRes = buildPathReturn_WithoutDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
  });
  describe("without definition", () => {
    // if there's no definition, it's pointless to add default version and have the api version policy
    describe("with default value", () => {
      it("in @serivce", async () => {
        const def = buildDefaultDefinition({
          "@service": true
        });
        const expectedRes = buildDefaultReturn(false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
      it("in @versioned", async () => {
        const def = buildDefaultDefinition({
          "@versioned": true
        });
        const expectedRes = buildDefaultReturn(false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
    describe("without default value", () => {
      it("no @service or @versioned", async () => {
        const def = buildDefaultDefinition({
          "@service": false,
          "@versioned": false
        });
        const expectedRes = buildDefaultReturn(false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
  });
});
