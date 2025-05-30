// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "mocha";

import { createMockModel } from "./mockHelper.js";
import { buildSnippets } from "../../src/test/buildSnippets.js"
import { expect } from "chai";

describe("Snippets file generation", () => {
    describe("Should generate snippets for modular", () => {
        it("should create snippets with subscriptionId", () => {
            const clientName = "testClient";
            const azureSdkForJs = true;
            const model = createMockModel({
                scopeName: "azure",
                hasSubscriptionId: true,
                isModularLibrary: true,
                azureArm: true,
                addCredentials: true
            });
            const snippetsFile = buildSnippets(model, clientName, azureSdkForJs);

            expect(snippetsFile?.content).includes(
                `const subscriptionId = "00000000-0000-0000-0000-000000000000";`
            );
            expect(snippetsFile?.content).includes(
                "const client = new testClient(new DefaultAzureCredential(), subscriptionId);"
            );
        });

        it("should create snippets without subscriptionId", () => {
            const clientName = "testClient";
            const azureSdkForJs = true;
            const model = createMockModel({
                scopeName: "azure",
                isModularLibrary: true,
                azureArm: true,
                addCredentials: true
            });
            const snippetsFile = buildSnippets(model, clientName, azureSdkForJs);

            expect(snippetsFile?.content).includes(
                "const client = new testClient(new DefaultAzureCredential());"
            );
        });
    });
});

