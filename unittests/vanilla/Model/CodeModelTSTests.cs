// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Model
{
    [TestClass]
    public class CodeModelTSTests
    {
        private static CodeModelTS CreateCodeModel(string outputFolder = null, string packageName = "arm-batch", IEnumerable<CompositeTypeTS> modelTypes = null)
        {
            return Models.CodeModel(
                settings: new GeneratorSettingsTS
                {
                    OutputFolder = outputFolder,
                    PackageName = packageName
                },
                modelTypes: modelTypes);
        }

        [TestMethod]
        public void HomePageUrlWithNullOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel(null);
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithEmptyOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel("");
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithOutputFolderThatDoesntContainAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("test/azure/generated/StorageManagementClient");
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithBackslashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:\\Users\\daschult\\Sources\\azure-sdk-for-js\\sdk\\batch\\arm-batch");
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/batch/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/sdk/batch/arm-batch");
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/batch/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButNullPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/sdk/batch/arm-batch", null);
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/batch/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButEmptyPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/sdk/batch/arm-batch", "");
            Assert.AreEqual("https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/batch/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void GenerateServiceClientImportsWithEmptyCodeModel()
        {
            CodeModelTS codeModel = CreateCodeModel();
            AssertEx.EqualLines(
                new[]
                {
                    "import * as coreHttp from \"@azure/core-http\";",
                    "import { Context } from \"./context\";"
                },
                codeModel.GenerateServiceClientImports());
        }

        [TestMethod]
        public void GenerateServiceClientImportsWithOneModelType()
        {
            CodeModelTS codeModel = CreateCodeModel(modelTypes: new[] { Models.CompositeType(name: "MyFakeType") });
            AssertEx.EqualLines(
                new[]
                {
                    "import * as coreHttp from \"@azure/core-http\";",
                    "import * as Models from \"./models\";",
                    "import * as Mappers from \"./models/mappers\";",
                    "import { Context } from \"./context\";"
                },
                codeModel.GenerateServiceClientImports());
        }

        [TestMethod]
        public void GenerateClassFieldsGeneratesProperlyOptionalPropertyDeclaration()
        {
            PropertyTS property = Models.Property("property", new PrimaryTypeTS(KnownPrimaryType.String));
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.Add(property);

            string fieldsDeclaration = codeModel.GenerateClassProperties("");

            Assert.AreEqual("Property?: string;", fieldsDeclaration);
        }

        [TestMethod]
        public void GenerateClassFieldsGeneratesProperlyRequiredPropertyDeclaration()
        {
            PropertyTS property = Models.Property("property-name", new PrimaryTypeTS(KnownPrimaryType.String));
            property.IsRequired = true;
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.Add(property);

            string fieldsDeclaration = codeModel.GenerateClassProperties("");

            Assert.AreEqual("PropertyName: string;", fieldsDeclaration);
        }

        [TestMethod]
        public void GenerateClassFieldsGeneratesMultiplePropertiesDeclaration()
        {
            PropertyTS stringProperty = Models.Property("property-name", new PrimaryTypeTS(KnownPrimaryType.String));
            PropertyTS boolProperty = Models.Property("is-property", new PrimaryTypeTS(KnownPrimaryType.Boolean));
            PropertyTS intProperty = Models.Property("numProperty", new PrimaryTypeTS(KnownPrimaryType.Int));
            boolProperty.IsRequired = true;
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.Add(stringProperty);
            codeModel.Add(boolProperty);
            codeModel.Add(intProperty);

            string fieldsDeclaration = codeModel.GenerateClassProperties("");

            Assert.AreEqual("PropertyName?: string;\nIsProperty: boolean;\nNumProperty?: number;", fieldsDeclaration);
        }

        [TestMethod]
        public void GenerateClassFieldsSkipBaseClassProperties()
        {
            PropertyTS stringProperty = Models.Property("property-name", new PrimaryTypeTS(KnownPrimaryType.String));
            PropertyTS baseClassProperty = Models.Property("user-agent-info", new PrimaryTypeTS(KnownPrimaryType.String));
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.Add(stringProperty);
            codeModel.Add(baseClassProperty);

            string fieldsDeclaration = codeModel.GenerateClassProperties("");

            Assert.AreEqual("PropertyName?: string;", fieldsDeclaration);
        }
    }
}
