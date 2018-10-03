// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.TypeScript.DSL;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript
{
    public static class AssertEx
    {
        private static IEnumerable<string> Lines(string text)
        {
            return text?.Split(new[] { "\r\n", "\n", "\r" }, StringSplitOptions.None);
        }

        public static void EqualLines(string expected, string actual)
        {
            EqualLines(Lines(expected), Lines(actual));
        }

        public static void EqualLines(string expected, TSBuilder actual)
        {
            EqualLines(Lines(expected), actual?.ToString());
        }

        public static void EqualLines(string expected, IEnumerable<string> actual)
        {
            EqualLines(Lines(expected), actual);
        }

        public static void EqualLines(IEnumerable<string> expected, string actual)
        {
            EqualLines(expected, Lines(actual));
        }

        public static void EqualLines(IEnumerable<string> expected, TSBuilder actual)
        {
            EqualLines(expected, actual?.ToString());
        }

        public static void EqualLines(IEnumerable<string> expected, IEnumerable<string> actual)
        {
            if (expected != actual)
            {
                Assert.IsNotNull(expected, "expected was null, but actual was not null.");
                Assert.IsNotNull(actual, "actual was null but expected was not null.");

                string[] expectedLines = expected.ToArray();
                string[] actualLines = actual.ToArray();

                int commonLineCount = Math.Min(expectedLines.Length, actualLines.Length);
                for (int i = 0; i < commonLineCount; ++i)
                {
                    string expectedLine = expectedLines[i];
                    string actualLine = actualLines[i];
                    if (!expectedLine.Equals(actualLine))
                    {
                        int commonLineLength = Math.Min(expectedLine.Length, actualLine.Length);

                        int differentIndex;
                        for (differentIndex = 0; differentIndex < commonLineLength; ++differentIndex)
                        {
                            if (expectedLine[differentIndex] != actualLine[differentIndex])
                            {
                                break;
                            }
                        }

                        Assert.Fail(
                            $"Line {i + 1} doesn't match at character {differentIndex + 1}:\n" +
                            $"expected: \"{expectedLine}\"\n" +
                            $"actual:   \"{actualLine}\"");
                    }
                }

                if (expectedLines.Length != actualLines.Length)
                {
                    Assert.Fail(
                        $"Line counts don't match:\n" +
                        $"expected: {expectedLines.Length}\n" +
                        $"actual:   {actualLines.Length}");
                }
            }
        }
    }
}
