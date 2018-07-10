// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using Xunit;

namespace AutoRest.TypeScript.Model
{
    public class CodeModelTSTests
    {
        [Fact]
        public void HomePageUrlWithNullOutputFolder()
        {
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.OutputFolder = null;
            Assert.Equal("http://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithEmptyOutputFolder()
        {
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.OutputFolder = "";
            Assert.Equal("http://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithOutputFolderThatDoesntContainAzureSdkForJs()
        {
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.OutputFolder = "test/azure/generated/StorageManagementClient";
            Assert.Equal("http://github.com/azure/azure-sdk-for-js", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithBackslashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.OutputFolder = "C:\\Users\\daschult\\Sources\\azure-sdk-for-js\\lib\\services\\batchManagement";
            Assert.Equal("http://github.com/azure/azure-sdk-for-js/lib/services/batchManagement", codeModel.HomePageUrl);
        }

        [Fact]
        public void HomePageUrlWithForwardSlashOutputFolderThatContainsAzureSdkForJs()
        {
            CodeModelTS codeModel = new CodeModelTS();
            codeModel.OutputFolder = "C:/Users/daschult/Sources/azure-sdk-for-js/lib/services/batchManagement";
            Assert.Equal("http://github.com/azure/azure-sdk-for-js/lib/services/batchManagement", codeModel.HomePageUrl);
        }
    }
}
