import { describe, expect, it } from "vitest";

import { renameClientName } from "../../src/index.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import {
  adaptMethods,
  adaptOperationGroups,
  adaptSingleClient,
  adaptToCodeModel
} from "../../src/tcgcadapter/adapter.js";
import type {
  TSClient,
  TSMethod,
  TSParameter
} from "../../src/codemodel/index.js";
import { getClientHierarchyMap } from "../../src/utils/clientUtils.js";
import {
  createDpgContextTestHelper,
  rlcEmitterFor,
  type RLCEmitterOptions
} from "../util/testUtil.js";

function buildAdapterTypeSpec(tspContent: string): string {
  return `
    import "@typespec/http";
    import "@typespec/rest";
    import "@typespec/versioning";
    import "@azure-tools/typespec-client-generator-core";
    import "@azure-tools/typespec-azure-core";

    using Http;
    using Rest;
    using Versioning;
    using Azure.ClientGenerator.Core;
    using Azure.Core;
    using Azure.Core.Traits;

    ${tspContent}
  `;
}

function buildServiceTypeSpec(
  body: string,
  namespaceDecorators: string = ""
): string {
  return `
    ${namespaceDecorators}
    @service(#{
      title: "Azure TypeScript Testing"
    })
    namespace Azure.TypeScript.Testing {
      ${body}
    }
  `;
}

async function buildAdapterFixture(
  tspContent: string,
  configs: Record<string, unknown> = {},
  hostOptions: RLCEmitterOptions = { withRawContent: true }
) {
  const host = await rlcEmitterFor(
    buildAdapterTypeSpec(tspContent),
    hostOptions
  );
  const sdkContext = await createDpgContextTestHelper(host.program, false, {
    isModularLibrary: true,
    ...configs
  });
  sdkContext.rlcOptions!.isModularLibrary = true;

  const emitterOptions = transformModularEmitterOptions(sdkContext, "", {
    casing: "camel"
  });

  for (const client of sdkContext.sdkPackage.clients) {
    await renameClientName(client, emitterOptions);
  }

  const clientMap = getClientHierarchyMap(sdkContext);
  expect(clientMap).toHaveLength(1);

  return {
    sdkContext,
    emitterOptions,
    clientMap: clientMap[0]!
  };
}

async function adaptCodeModelFromTypeSpec(
  tspContent: string,
  configs: Record<string, unknown> = {}
) {
  const { sdkContext, emitterOptions } = await buildAdapterFixture(
    tspContent,
    configs
  );

  return adaptToCodeModel({ sdkContext, emitterOptions });
}

async function adaptFirstClientFromTypeSpec(
  tspContent: string,
  configs: Record<string, unknown> = {}
) {
  const { sdkContext, emitterOptions, clientMap } = await buildAdapterFixture(
    tspContent,
    configs
  );

  return adaptSingleClient(clientMap, sdkContext, emitterOptions);
}

function findMethod(client: TSClient, name: string): TSMethod {
  const method = [
    ...client.methods,
    ...client.operationGroups.flatMap((group) => group.methods)
  ].find(
    (candidate) => candidate.name === name || candidate.originalName === name
  );

  expect(method, `Expected method ${name} to exist`).toBeDefined();
  return method!;
}

function findParameter(method: TSMethod, name: string): TSParameter {
  const parameter = method.parameters.find(
    (candidate) => candidate.name === name
  );
  expect(
    parameter,
    `Expected parameter ${name} on ${method.name}`
  ).toBeDefined();
  return parameter!;
}

function expectLocationIfAvailable(
  parameter: TSParameter,
  expectedLocation: string
): void {
  const candidate = parameter as TSParameter & {
    location?: string;
    httpLocation?: string;
  };

  if (candidate.location !== undefined) {
    expect(candidate.location).toBe(expectedLocation);
  }

  if (candidate.httpLocation !== undefined) {
    expect(candidate.httpLocation).toBe(expectedLocation);
  }
}

describe("tcgc adapter", () => {
  it("adapts a single client with top-level methods into the TS client model", async () => {
    const model = await adaptCodeModelFromTypeSpec(
      buildServiceTypeSpec(
        `
          @route("/widgets")
          @doc("Pings the service")
          op ping(@query message?: string): void;
        `,
        `
          @doc("Testing client docs")
          @server("{endpoint}/widgets", "Widgets", {
            endpoint: url
          })
        `
      )
    );

    expect(Object.keys(model).sort()).toEqual([
      "clients",
      "enums",
      "models",
      "settings",
      "unions"
    ]);
    expect(model.clients).toHaveLength(1);
    expect(model.models).toEqual([]);
    expect(model.enums).toEqual([]);
    expect(model.unions).toEqual([]);
    expect(model.settings.flavor).toBe("azure");
    expect(model.settings.sourceRoot).toBe("");

    const client = model.clients[0]!;
    expect(Object.keys(client).sort()).toEqual([
      "allowOptionalSubscriptionId",
      "apiOptions",
      "apiVersion",
      "children",
      "contextTypeName",
      "credential",
      "docs",
      "endpoint",
      "hasParentInitializedChildren",
      "id",
      "lroConfig",
      "methods",
      "modularName",
      "name",
      "operationGroups",
      "parameters",
      "path",
      "usesNamespacedContextType"
    ]);
    expect(client.name).toBe("TestingClient");
    expect(client.modularName).toBe("Testing");
    expect(client.contextTypeName).toBe("TestingContext");
    expect(client.docs).toEqual(["Testing client docs"]);
    expect(client.path).toEqual([]);
    expect(client.children).toEqual([]);
    expect(client.operationGroups).toEqual([]);
    expect(client.apiOptions).toHaveLength(1);
    expect(client.apiOptions[0]).toMatchObject({
      prefixes: [],
      interfaces: [{ name: "PingOptionalParams" }]
    });
    expect(client.hasParentInitializedChildren).toBe(false);
    expect(client.apiVersion).toBeUndefined();
    expect(client.lroConfig).toBeUndefined();
    expect(client.endpoint).toEqual({
      isParameterized: true,
      serverUrl: "{endpoint}/widgets",
      templateParameters: [
        {
          name: "endpointParam",
          clientDefaultValue: undefined,
          isOptional: false,
          tcgcName: "endpoint"
        }
      ],
      useArmCloudEndpoint: false
    });
    expect(client.methods).toHaveLength(1);
    expect(Object.keys(client.methods[0]!).sort()).toEqual([
      "apiFunction",
      "apiRefKey",
      "compatibilityLroPagingReturnType",
      "compatibilityLroReturnType",
      "description",
      "deserializeExceptionHeadersFunction",
      "deserializeFunction",
      "deserializeHeadersFunction",
      "httpMethod",
      "id",
      "kind",
      "name",
      "originalName",
      "parameters",
      "responseTypeAlias",
      "returnType",
      "route",
      "sendFunction"
    ]);
    expect(client.methods[0]).toMatchObject({
      id: "method:ping",
      name: "ping",
      kind: "basic",
      description: "Pings the service",
      httpMethod: "GET",
      route: {
        pathTemplate: "/widgets",
        verb: "GET"
      },
      returnType: {
        isVoid: true,
        nullable: false
      }
    });
    expect(client.methods[0]?.returnType.type).toContain("Promise");
    expect(client.methods[0]?.parameters).toEqual([
      {
        name: "message",
        type: "string",
        optional: true,
        defaultValue: undefined,
        httpLocation: "query"
      }
    ]);
  });

  it("captures templated endpoint metadata for parameterized servers", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(
        `
          @route("/widgets")
          op ping(): void;
        `,
        `
          @server("{endpoint}/widgets/{region}", "Widgets", {
            endpoint: url,
            @doc("Region")
            region?: string = "westus"
          })
        `
      )
    );

    expect(client.endpoint.isParameterized).toBe(true);
    expect(client.endpoint.serverUrl).toBe("{endpoint}/widgets/{region}");
    expect(client.endpoint.templateParameters).toEqual([
      {
        name: "endpointParam",
        clientDefaultValue: undefined,
        isOptional: false,
        tcgcName: "endpoint"
      },
      {
        name: "region",
        clientDefaultValue: "westus",
        isOptional: true,
        tcgcName: "region"
      }
    ]);
  });

  it("does not synthesize client api-version metadata from operation-only query parameters", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(
        `
          model ApiVersionParameter {
            @query
            "api-version": string;
          }

          @route("/widgets")
          op ping(...ApiVersionParameter): void;
        `,
        `
          @server("{endpoint}/widgets", "Widgets", {
            endpoint: url
          })
        `
      )
    );

    expect(client.apiVersion).toBeUndefined();
    expect(client.parameters.some((parameter) => parameter.isApiVersion)).toBe(
      false
    );
  });

  it("tracks client api-version metadata when it is embedded in endpoint templates", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(
        `
          enum Versions {
            v2026_05_15: "2026-05-15"
          }

          @route("/widgets")
          op ping(): void;
        `,
        `
          @versioned(Versions)
          @server("{endpoint}/widgets/{apiVersion}", "Widgets", {
            endpoint: url,
            @path apiVersion: Versions
          })
        `
      )
    );

    expect(client.apiVersion).toMatchObject({
      parameterName: "apiVersion",
      isInEndpointTemplate: true,
      knownValuesEnumName: undefined
    });
    expect(client.parameters.some((parameter) => parameter.isApiVersion)).toBe(
      true
    );
  });

  it("groups nested operations when operation groups are enabled", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        namespace Reports {
          namespace Daily {
            @route("/reports/daily/run")
            op run(): void;
          }
        }
      `),
      {
        enableOperationGroup: true,
        hierarchyClient: false
      }
    );

    expect(client.methods).toEqual([]);
    expect(client.operationGroups).toHaveLength(1);
    expect(Object.keys(client.operationGroups[0]!).sort()).toEqual([
      "methods",
      "name",
      "prefixes"
    ]);
    expect(client.operationGroups[0]).toMatchObject({
      name: "Daily",
      prefixes: ["Daily"]
    });
    expect(client.operationGroups[0]?.methods).toHaveLength(1);
    expect(client.operationGroups[0]?.methods[0]).toMatchObject({
      kind: "basic",
      httpMethod: "GET",
      route: {
        pathTemplate: "/reports/daily/run",
        verb: "GET"
      }
    });
  });

  it("adapts a basic GET operation into a TS method", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        model Widget {
          name: string;
        }

        @route("/widgets/{widgetId}")
        @get
        op getWidget(@path widgetId: string): Widget;
      `)
    );

    expect(client.methods).toHaveLength(1);
    expect(client.methods[0]).toMatchObject({
      id: "method:getWidget",
      name: "getWidget",
      kind: "basic",
      httpMethod: "GET",
      route: {
        pathTemplate: "/widgets/{widgetId}",
        verb: "GET"
      }
    });
  });

  it("maps required path, query, and header parameters onto method parameters", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        model Widget {
          name: string;
        }

        @route("/widgets/{widgetId}")
        @get
        op getWidget(
          @path widgetId: string,
          @query filter: string,
          @header requestId: string
        ): Widget;
      `)
    );

    const method = findMethod(client, "getWidget");
    const widgetId = findParameter(method, "widgetId");
    const filter = findParameter(method, "filter");
    const requestId = findParameter(method, "requestId");

    expect(widgetId).toMatchObject({ type: "string", optional: false });
    expect(filter).toMatchObject({ type: "string", optional: false });
    expect(requestId).toMatchObject({ type: "string", optional: false });
    expect(method.parameters.map((parameter) => parameter.name)).toEqual([
      "widgetId",
      "filter",
      "requestId"
    ]);
    expectLocationIfAvailable(widgetId, "path");
    expectLocationIfAvailable(filter, "query");
    expectLocationIfAvailable(requestId, "header");
  });

  it("maps body parameters onto method parameters", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        model Widget {
          name: string;
        }

        @route("/widgets")
        @post
        op createWidget(@body widget: Widget): Widget;
      `)
    );

    const method = findMethod(client, "createWidget");
    const widget = findParameter(method, "widget");

    expect(widget).toMatchObject({
      optional: false,
      defaultValue: undefined,
      httpLocation: "body"
    });
    expect(widget.type).toBeTruthy();
    expect(method.returnType).toMatchObject({
      isVoid: false,
      nullable: false
    });
    expect(method.returnType.type).toContain("Promise<");
    expectLocationIfAvailable(widget, "body");
  });

  it("marks long-running operations as lro methods", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        @resource("widgets")
        model Widget {
          @key("widgetName")
          @visibility(Lifecycle.Read)
          name: string;
        }

        interface Widgets {
          getWidget is ResourceRead<Widget>;
          getWidgetOperationStatus is GetResourceOperationStatus<Widget>;

          @pollingOperation(Widgets.getWidgetOperationStatus)
          createOrUpdateWidget is StandardResourceOperations.LongRunningResourceCreateOrUpdate<Widget>;
        }
      `),
      {
        enableOperationGroup: true,
        hierarchyClient: false
      }
    );

    const method = findMethod(client, "createOrUpdateWidget");

    expect(method).toMatchObject({
      kind: "lro",
      originalName: "createOrUpdateWidget",
      httpMethod: "PATCH",
      route: {
        pathTemplate: "/widgets/{widgetName}",
        verb: "PATCH"
      },
      returnType: {
        isVoid: false,
        nullable: false
      }
    });
    expect(method.returnType.type).toBeTruthy();
  });

  it("preserves paging operation metadata when the adapter surfaces it", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        @resource("widgets")
        model Widget {
          @key("widgetName")
          @visibility(Lifecycle.Read)
          name: string;
        }

        interface Widgets {
          listWidgets is ResourceList<Widget>;
        }
      `)
    );

    const method = findMethod(client, "listWidgets");

    expect(method).toMatchObject({
      kind: "paging",
      httpMethod: "GET",
      route: {
        pathTemplate: "/widgets",
        verb: "GET"
      },
      returnType: {
        isVoid: false,
        nullable: false
      }
    });
    expect(method.returnType.type).toBeTruthy();
    expect(method.returnType.type).not.toBe("Promise<void>");
  });

  it("creates separate operation groups for different prefixes", async () => {
    const { clientMap, sdkContext } = await buildAdapterFixture(
      buildServiceTypeSpec(`
        namespace Reports {
          @route("/reports/daily")
          op getDaily(): void;
        }

        namespace Admin {
          @route("/admin/users")
          op listUsers(): void;
        }
      `),
      {
        enableOperationGroup: true,
        hierarchyClient: false
      }
    );

    const methods = adaptMethods(clientMap[1], sdkContext);
    const operationGroups = adaptOperationGroups(clientMap[1], sdkContext);

    expect(methods).toEqual([]);
    expect(
      operationGroups.map((group) => ({
        name: group.name,
        prefixes: group.prefixes,
        methods: group.methods.map((method) => method.name).sort(),
        originalNames: group.methods
          .map((method) => method.originalName ?? method.name)
          .sort()
      }))
    ).toEqual([
      {
        name: "Admin",
        prefixes: ["Admin"],
        methods: ["adminListUsers"],
        originalNames: ["listUsers"]
      },
      {
        name: "Reports",
        prefixes: ["Reports"],
        methods: ["reportsGetDaily"],
        originalNames: ["getDaily"]
      }
    ]);
  });

  it("keeps required parameters explicit while folding optional inputs into the options bag", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        @route("/widgets/{widgetId}")
        @delete
        op deleteWidget(
          @path widgetId: string,
          @query force?: boolean,
          @header requestId?: string
        ): void;
      `)
    );

    const method = findMethod(client, "deleteWidget");

    expect(method.parameters).toEqual([
      {
        name: "widgetId",
        type: "string",
        optional: false,
        defaultValue: undefined,
        httpLocation: "path"
      },
      {
        name: "force",
        type: "boolean",
        optional: true,
        defaultValue: undefined,
        httpLocation: "query"
      },
      {
        name: "requestId",
        type: "string",
        optional: true,
        defaultValue: undefined,
        httpLocation: "header"
      }
    ]);
  });

  it("maps model and void return types and keeps paged return types non-empty", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        model Widget {
          name: string;
        }

        @route("/widgets/{widgetId}")
        @get
        op getWidget(@path widgetId: string): Widget;

        @route("/widgets/{widgetId}")
        @delete
        op deleteWidget(@path widgetId: string): void;
      `)
    );

    const getWidget = findMethod(client, "getWidget");
    const deleteWidget = findMethod(client, "deleteWidget");

    expect(getWidget.returnType).toMatchObject({
      isVoid: false,
      nullable: false
    });
    expect(getWidget.returnType.type).toContain("Promise<");
    expect(deleteWidget.returnType).toEqual({
      type: "Promise<void>",
      nullable: false,
      isVoid: true
    });

    const pagingClient = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        @resource("widgets")
        model Widget {
          @key("widgetName")
          @visibility(Lifecycle.Read)
          name: string;
        }

        interface Widgets {
          listWidgets is ResourceList<Widget>;
        }
      `)
    );

    expect(findMethod(pagingClient, "listWidgets").returnType).toBeTruthy();
  });

  it("falls back to the default endpoint-only client shape when no server is declared", async () => {
    const client = await adaptFirstClientFromTypeSpec(
      buildServiceTypeSpec(`
        @client({
          name: "EmptyClient",
          service: Azure.TypeScript.Testing
        })
        interface Empty {}
      `)
    );

    expect(client.name).toBe("EmptyClient");
    expect(client.methods).toEqual([]);
    expect(client.operationGroups).toEqual([]);
    expect(client.apiOptions).toEqual([]);
    expect(client.lroConfig).toBeUndefined();
    expect(client.endpoint).toEqual({
      isParameterized: false,
      serverUrl: "{endpoint}",
      templateParameters: [
        {
          name: "endpointParam",
          clientDefaultValue: undefined,
          isOptional: false,
          tcgcName: "endpoint"
        }
      ],
      useArmCloudEndpoint: false
    });
    expect(client.apiVersion).toBeUndefined();
  });
});
