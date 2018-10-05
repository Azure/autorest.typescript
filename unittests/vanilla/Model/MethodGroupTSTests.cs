// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Model
{
    [TestClass]
    public class MethodGroupTSTests
    {
        [TestMethod]
        public void OperationModelNamesWithNoMethods()
        {
            MethodGroupTS methodGroup = Models.MethodGroup();
            IEnumerable<string> operationModelNames = methodGroup.OperationModelNames;
            AssertEx.HaveEqualContents(new string[0], operationModelNames);
        }

        [TestMethod]
        public void OperationModelNamesWithOneMethodWithNoReturnTypeAndNoParameters()
        {
            MethodGroupTS methodGroup = Models.MethodGroup(
                methods: new[]
                {
                    Models.Method()
                });
            IEnumerable<string> operationModelNames = methodGroup.OperationModelNames;
            AssertEx.HaveEqualContents(new string[0], operationModelNames);
        }

        [TestMethod]
        public void OperationModelNamesWithOneMethodWithCloudErrorDefaultResponseWithNoProperties()
        {
            MethodGroupTS methodGroup = Models.MethodGroup(
                methods: new[]
                {
                    Models.Method(
                        defaultResponse: Models.Response(
                            body: Models.CompositeType(name: "CloudError")))
                });
            IEnumerable<string> operationModelNames = methodGroup.OperationModelNames;
            AssertEx.HaveEqualContents(
                new[] { "CloudError" }, 
                operationModelNames);
        }

        [TestMethod]
        public void OperationModelNamesWithOneMethodWithCloudErrorDefaultResponseWithProperties()
        {
            MethodGroupTS methodGroup = Models.MethodGroup(
                methods: new[]
                {
                    Models.Method(
                        defaultResponse: Models.Response(
                            body: Models.CompositeType(
                                name: "CloudError",
                                properties: new[]
                                {
                                    Models.Property(type: Models.CompositeType(name: "CloudErrorBody")),
                                    Models.Property(type: Models.CompositeType(name: "VirtualMachine"))
                                })))
                });
            IEnumerable<string> operationModelNames = methodGroup.OperationModelNames;
            AssertEx.HaveEqualContents(
                new[]
                {
                    "CloudError",
                    "VirtualMachine"
                },
                operationModelNames);
        }

        [TestMethod]
        public void OperationModelNamesWithOneMethodWithSpamDefaultResponseWithProperties()
        {
            MethodGroupTS methodGroup = Models.MethodGroup(
                methods: new[]
                {
                    Models.Method(
                        defaultResponse: Models.Response(
                            body: Models.CompositeType(
                                name: "Spam",
                                properties: new[]
                                {
                                    Models.Property(type: Models.CompositeType(name: "Apples")),
                                    Models.Property(type: Models.CompositeType(name: "Bananas"))
                                })))
                });
            IEnumerable<string> operationModelNames = methodGroup.OperationModelNames;
            AssertEx.HaveEqualContents(
                new[]
                {
                    "Spam",
                    "Apples",
                    "Bananas"
                },
                operationModelNames);
        }
    }
}
