// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.Model
{
    [TestClass]
    public class CodeModelTSTests
    {
        private static CodeModelTS CreateCodeModel(string outputFolder, string packageName = "arm-batch")
        {
            return Models.CodeModel(
                settings: new GeneratorSettingsTS
                {
                    OutputFolder = outputFolder,
                    PackageName = packageName
                });
        }

        [TestMethod]
        public void HomePageUrlWithNullOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel(null);
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithEmptyOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel("");
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithOutputFolderThatDoesntContainAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("test/azure/generated/StorageManagementClient");
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithBackslashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:\\Users\\daschult\\Sources\\azure-sdk-for-js\\packages\\arm-batch");
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch");
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButNullPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch", null);
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [TestMethod]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButEmptyPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch", "");
            Assert.AreEqual("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }
    }
}
