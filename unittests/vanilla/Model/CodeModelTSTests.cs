// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Xunit;

namespace AutoRest.TypeScript.Model
{
    public class CodeModelTSTests
    {
        private static CodeModelTS CreateCodeModel(string outputFolder)
        {
            return new CodeModelTS()
            {
                Settings = new GeneratorSettingsTS()
                {
                    OutputFolder = outputFolder,
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
            CodeModelTS codeModel = CreateCodeModel("C:\\Users\\daschult\\Sources\\azure-sdk-for-js\\lib\\services\\batchManagement");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/lib/services/batchManagement", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = CreateCodeModel("C:/Users/daschult/Sources/azure-sdk-for-js/lib/services/batchManagement");
            Assert.Equal("https://github.com/azure/azure-sdk-for-js/lib/services/batchManagement", codeModel.HomePageUrl);
        }
    }
}
