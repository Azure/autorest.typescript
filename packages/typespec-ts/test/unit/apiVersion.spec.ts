import { assert } from "chai";
import { emitClientFactoryFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

interface DefinitionOptions {
  "@versioned"?: boolean;
  crossVersion?: boolean;
}

const buildDefaultDefinition = (options: DefinitionOptions) => {
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
  @service(#{
    title: "PetStoreClient",
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
  @service(#{
    title: "PetStoreClient"
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

const buildDefaultReturn = (
  hasDefault: boolean,
  hasQueryDefinition: boolean,
  hasApiVersionInClient: boolean = false,
  apiVersionRequired: boolean = true
) => {
  const apiVersionWarning =
    apiVersionRequired && !hasDefault && hasApiVersionInClient
      ? `
      if (options.apiVersion) {
      logger.warning(
        "This client does not support to set api-version in options, please change it at positional argument",
        );
      }`
      : !hasApiVersionInClient
        ? `
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }`
        : "";
  return `
  import type { ClientOptions } from "@azure-rest/core-client";
  import { getClient } from "@azure-rest/core-client";
  import { logger } from "./logger.js";
  import type { testClient } from "./clientDefinitions.js";
  
  /** The optional parameters for the client */
  export interface testClientOptions extends ClientOptions ${
    hasApiVersionInClient && (!apiVersionRequired || hasDefault)
      ? `{
    /** The api version option of the client */
    apiVersion?: string;
  }`
      : "{}"
  }

  /**
   * Initialize a new instance of \`testClient\`
   * @param endpointParam - The endpoint to use.${
     hasApiVersionInClient && apiVersionRequired && !hasDefault
       ? "\n  * @param apiVersion - The parameter apiVersion"
       : ""
   }
   * @param ${
     (!hasDefault && apiVersionRequired) || hasApiVersionInClient
       ? "options - the parameter for all optional parameters"
       : `{
   *     ${
     hasDefault && hasApiVersionInClient
       ? `apiVersion = "2022-05-15-preview"`
       : hasApiVersionInClient
         ? "apiVersion"
         : ""
   }, ...options} - the parameter for all optional parameters`
   }
   */
  export default function createClient(
    endpointParam: string,${
      hasApiVersionInClient && apiVersionRequired && !hasDefault
        ? "apiVersion: string,"
        : ""
    }
    ${
      (!hasDefault && apiVersionRequired) || !hasApiVersionInClient
        ? "options"
        : `{
         ${
           hasDefault && hasApiVersionInClient
             ? `apiVersion = "2022-05-15-preview"`
             : hasApiVersionInClient
               ? "apiVersion"
               : ""
         }, ...options}`
    }: testClientOptions = {}
  ): testClient {
    const endpointUrl = options.endpoint ?? \`\${endpointParam}/language\`;
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
      }
    };
    const client = getClient(endpointUrl, options) as testClient;

    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });${apiVersionWarning}
    ${
      hasQueryDefinition
        ? `client.pipeline.addPolicy({
      name: "ClientApiVersionPolicy",
      sendRequest: (req, next) => {
        // Use the apiVersion defined in request url directly
        // Append one if there is no apiVersion and we have one at client options
        const url = new URL(req.url);
        if (!url.searchParams.get("api-version") && apiVersion) {
          req.url = \`\${req.url}\${
            Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
          }api-version=\${apiVersion}\`;
        }

        return next(req);
      },
    });`
        : ``
    }
    

    return client;
  }`;
};

const buildPathReturn_WithDefault = () => {
  return `
  import type { ClientOptions } from "@azure-rest/core-client";
  import { getClient } from "@azure-rest/core-client";
  import { logger } from "./logger.js";
  import type { testClient } from "./clientDefinitions.js";
  import type { Versions } from "./models.js";
  /** The optional parameters for the client */
  export interface testClientOptions extends ClientOptions {
    /** Api Version */
    apiVersion?: Versions;
  }
  
  /**
   * Initialize a new instance of \`testClient\`
   * @param endpointParam - The endpoint to use.
   * @param options - the parameter for all optional parameters
   */
  export default function createClient(
    endpointParam: string,
    { apiVersion = "2022-05-15-preview", ...options}: testClientOptions = {}
  ): testClient {
    const endpointUrl = options.endpoint ?? \`\${endpointParam}/anomalydetector/\${apiVersion}\`;
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
      }
    };
  
    const client = getClient(endpointUrl, options) as testClient;

    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    return client;       
  }`;
};

const buildPathReturn_WithoutDefault = () => {
  return `
  import type { ClientOptions } from "@azure-rest/core-client";
  import { getClient } from "@azure-rest/core-client";
  import { logger } from "./logger.js";
  import type { testClient } from "./clientDefinitions.js";
  import type { Versions } from "./models.js";
  /** The optional parameters for the client */
  export interface testClientOptions extends ClientOptions {}
  /**
   * Initialize a new instance of \`testClient\`
   * @param endpointParam - The endpoint to use.
   * @param apiVersion - Api Version
   * @param options - the parameter for all optional parameters
   */
  export default function createClient(
    endpointParam: string,
    apiVersion: Versions,
    options: testClientOptions = {}
  ): testClient {
    const endpointUrl = options.endpoint ?? \`\${endpointParam}/anomalydetector/\${apiVersion}\`;
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
      }
    };
  
    const client = getClient(endpointUrl, options) as testClient;

    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    if (options.apiVersion) {
      logger.warning("This client does not support to set api-version in options, please change it at positional argument");
    }

    return client;       
  }`;
};

describe("api-version", () => {
  describe("defined in query position", () => {
    describe("with default value", () => {
      it("in @versioned", async () => {
        const def = buildQueryDefinition({
          "@versioned": true
        });
        const expectedRes = buildDefaultReturn(true, true, true);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
    describe("without default value", () => {
      it("no @versioned", async () => {
        const def = buildQueryDefinition({
          "@versioned": false
        });
        const expectedRes = buildDefaultReturn(false, false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes);
      });
    });
  });
  describe("defined in url path", () => {
    describe("with default value", () => {
      it("in @versioned", async () => {
        const def = buildPathDefinition({
          "@versioned": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
    describe("without default value", () => {
      it("no @versioned", async () => {
        const def = buildPathDefinition({
          "@versioned": false
        });
        const expectedRes = buildPathReturn_WithoutDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
  });
  describe("defined in both positions[path preferred]", () => {
    describe("with default value", () => {
      it("in @versioned", async () => {
        const def = buildMixedDefinition({
          "@versioned": true
        });
        const expectedRes = buildPathReturn_WithDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
    describe("without default value", () => {
      it("no @versioned", async () => {
        const def = buildMixedDefinition({
          "@versioned": false
        });
        const expectedRes = buildPathReturn_WithoutDefault();
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
  });
  describe("without definition", () => {
    // if there's no definition, it's pointless to add default version and have the api version policy
    describe("with default value", () => {
      it("in @versioned", async () => {
        const def = buildDefaultDefinition({
          "@versioned": true
        });
        const expectedRes = buildDefaultReturn(false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
    describe("without default value", () => {
      it("no @versioned", async () => {
        const def = buildDefaultDefinition({
          "@versioned": false
        });
        const expectedRes = buildDefaultReturn(false, false);
        const models = await emitClientFactoryFromTypeSpec(def);
        assert.ok(models);
        await assertEqualContent(models!.content, expectedRes, true);
      });
    });
  });
});
