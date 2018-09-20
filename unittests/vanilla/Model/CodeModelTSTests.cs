// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Xunit;

namespace AutoRest.TypeScript.Model
{
    public class CodeModelTSTests
    {
        private static CodeModelTS CreateCodeModel(string outputFolder, string packageName = "arm-batch")
        {
            return new CodeModelTS()
            {
                Settings = new GeneratorSettingsTS()
                {
                    OutputFolder = outputFolder,
                    PackageName = packageName
                }
            };
        }

        [Fact]
        public void HomePageUrlWithNullOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel(null);
            Assert.Equal("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithEmptyOutputFolder()
        {
            CodeModelTS codeModel = CreateCodeModel("");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithOutputFolderThatDoesntContainAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("test/azure/generated/StorageManagementClient");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithBackslashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:\\Users\\daschult\\Sources\\azure-sdk-for-js\\packages\\arm-batch");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButNullPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch", null);
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJsButEmptyPackageNameProperty()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/packages/arm-batch", "");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/tree/master/packages/arm-batch", codeModel.HomePageUrl);
        }
    }
}
