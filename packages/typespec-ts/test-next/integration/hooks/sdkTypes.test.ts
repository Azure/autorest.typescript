import { describe, it, beforeAll, assert } from "vitest";
import { createSdkContextFromTypespec } from "../test-hots.js";
import { SdkContext, SdkHttpOperation, SdkPackage, SdkUnionType, namespace as tcgcNamespace } from "@azure-tools/typespec-client-generator-core";
import { provideSdkTypes, useSdkTypes } from "../../../src/framework/hooks/sdkTypes.js"
import { getNamespaceFullName, isGlobalNamespace, isStdNamespace, Namespace, navigateProgram } from "@typespec/compiler"
import { namespace as httpNamespace } from "@typespec/http"
import { provideContext } from "../../../src/contextManager.js";

describe("SdkTypes hook", () => {

    let sdkPackage: SdkPackage<SdkHttpOperation>;
    let sdkContext: SdkContext;
    beforeAll(async () => {
        const spec = `
            union NoNamespaceUnion {
                D: "d"
            };

            @service(#{
            title: "Widget Service",
            })
            namespace DemoService{

            model Widget {
            @visibility(Lifecycle.Read, Lifecycle.Update)
            @path
            id: string;

            weight: int32;
            color: "red" | "blue";
            position: Foo
            }

            @error
            model Error {
            code: int32;
            message: string;
            bar: Bar;
            }

            enum Foo {
               ONE: "one";
               TWO: "two";
            };

            union Bar {
               ONE: "one";
               TWO: "two";
            }

            @route("/widgets")
            @tag("Widgets")
            interface Widgets {
            @get list(): Widget[] | Error;
            @get read(@path id: string): Widget | Error;
            @post create(...Widget): Widget | Error;
            @patch(#{implicitOptionality: true}) update(...Widget): Widget | Error;
            @delete delete(@path id: string): void | Error;
            @route("{id}/analyze") @post analyze(@path id: string): string | Error;
            }

            namespace SubDemoService {
               interface SubWidgets {
                    @get list(): Widget[] | Error;
                    @post create(...SubWidget): SubWidget | Error;
               }

                model SubWidget {
                    weight: int32;
                    color: "red" | "blue";
                    number: SubFoo;
                    bar: SubBar;
                }

                enum SubFoo {
                    THREE: "3";
                    FOUR: "4";
                };

                 union SubBar {
                    ONE: "one";
                    TWO: "two";
                 }
            }
    }
        `
        sdkContext = await createSdkContextFromTypespec(spec, {});
        provideSdkTypes(sdkContext);
        provideContext("emitContext", { tcgcContext: sdkContext, compilerContext: sdkContext.emitContext as any })
    });

    it("should setup the SdkTypeContext", async () => {
        const getSdkType = useSdkTypes();
        assert.isDefined(getSdkType);
    });

    it("should provide all operations regardless of namespace", () => {
        const getSdkType = useSdkTypes();

        navigateProgram(sdkContext.program, {
            operation(o) {
                const sdkMethod = getSdkType(o);
                assert.isDefined(sdkMethod, `Couldn't find sdkOperation for ${o.name}`);
            }
        })
    })

    it("should provide all models regardless of namespace", () => {
        const getSdkType = useSdkTypes();

        navigateProgram(sdkContext.program, {
            model(m) {
                // Filtering out namespaces declared in other libraries such as @typespec/http
                if (isIgnoredNamespace(m.namespace)) {
                    return;
                }

                const sdkMethod = getSdkType(m);
                assert.isDefined(sdkMethod, `Couldn't find sdk model for ${m.name}`);
            }
        })
    })

    it("should provide all enums regardless of namespace", () => {
        const getSdkType = useSdkTypes();

        navigateProgram(sdkContext.program, {
            enum(e) {
                // Filtering out namespaces declared in other libraries such as @typespec/http
                if (isIgnoredNamespace(e.namespace)) {
                    return;
                }

                const sdkMethod = getSdkType(e);
                assert.isDefined(sdkMethod, `Couldn't find sdk model for ${e.name}`);
            },
            union(u) {
                if (isIgnoredNamespace(u.namespace)) {
                    return;
                }

                const sdkMethod = getSdkType(u);
                assert.isDefined(sdkMethod, `Couldn't find sdk union for ${u.name}`);
            }
        })
    })
})

function isIgnoredNamespace(namespace: Namespace | undefined) {
    const externalNamespaces = [httpNamespace, tcgcNamespace]
    if (!namespace) {
        return true;
    }

    if (namespace) {
        const nsName = getNamespaceFullName(namespace);
        if (isStdNamespace(namespace) || externalNamespaces.includes(nsName)) {
            return true;
        }
    }

}