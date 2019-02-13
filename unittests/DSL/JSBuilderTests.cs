// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AutoRest.TypeScript.DSL
{
    [TestClass]
    public class JSBuilderTests
    {
        [TestMethod]
        public void Constructor()
        {
            JSBuilder builder = new JSBuilder();
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void CreatePositionWithEmptyBuilder()
        {
            JSBuilder builder = new JSBuilder();
            BuilderPosition p = builder.CreatePosition();
            Assert.AreEqual(0, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWithNonEmptyBuilder()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("abcd");
            BuilderPosition p = builder.CreatePosition();
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
            Assert.AreSame(p, builder.CreatePosition());
        }

        [TestMethod]
        public void CreatePositionWhenAnotherPositionAlreadyExists()
        {
            JSBuilder builder = new JSBuilder();
            BuilderPosition p1 = builder.CreatePosition();
            builder.Text("abcd");
            BuilderPosition p2 = builder.CreatePosition();
            Assert.AreEqual(0, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(0, p1.GetIndexInBuilder());
            Assert.AreEqual(4, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p2.GetIndexInBuilder());
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndEmptyBuilder()
        {
            JSBuilder builder = new JSBuilder();
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndSingleLine()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("abc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithNegativeIndexAndMultipleLines()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("a\nb\nc");
            Assert.ThrowsException<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndEmptyBuilder()
        {
            JSBuilder builder = new JSBuilder();
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndSingleLine()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("abc");
            Assert.IsFalse(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void HasChangedLinesSinceWithZeroIndexAndMultipleLines()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("a\nb\nc");
            Assert.IsTrue(builder.HasChangedLinesSince(0));
        }

        [TestMethod]
        public void InsertWithNoPositions()
        {
            JSBuilder builder = new JSBuilder();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
        }

        [TestMethod]
        public void InsertAtAnExistingPosition()
        {
            JSBuilder builder = new JSBuilder();
            BuilderPosition p = builder.CreatePosition();
            builder.Insert(0, "abcd");
            Assert.AreEqual("abcd", builder.ToString());
            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertBeforeAnExistingPosition()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("abd");
            BuilderPosition p = builder.CreatePosition();
            builder.Text("ef");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());

            builder.Insert(2, "c");

            Assert.AreEqual(4, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertAfterAnExistingPosition()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("abc");
            BuilderPosition p = builder.CreatePosition();
            builder.Text("df");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());

            builder.Insert(4, "e");

            Assert.AreEqual(3, p.CharactersAfterPreviousPosition);
            Assert.AreEqual(3, p.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertBetweenExistingPositions()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("ab");
            BuilderPosition p1 = builder.CreatePosition();
            builder.Text("cd");
            BuilderPosition p2 = builder.CreatePosition();
            builder.Text("ef");

            Assert.AreEqual(2, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(2, p1.GetIndexInBuilder());
            Assert.AreEqual(2, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(4, p2.GetIndexInBuilder());

            builder.Insert(3, "Z");
            Assert.AreEqual("abcZdef", builder.ToString());

            Assert.AreEqual(2, p1.CharactersAfterPreviousPosition);
            Assert.AreEqual(2, p1.GetIndexInBuilder());
            Assert.AreEqual(3, p2.CharactersAfterPreviousPosition);
            Assert.AreEqual(5, p2.GetIndexInBuilder());
        }

        [TestMethod]
        public void InsertNewLine()
        {
            JSBuilder builder = new JSBuilder();
            builder.InsertNewLine(0);
            Assert.AreEqual("\n", builder.ToString());
        }

        [TestMethod]
        public void AddPropertyToParentObjectWhileBuildingChildObject()
        {
            JSBuilder builder = new JSBuilder();
            InvalidOperationException exception = Assert.ThrowsException<InvalidOperationException>(() =>
            {
                builder.Object((JSObject parentObject) =>
                {
                    parentObject.ObjectProperty("child", (JSObject childObject) =>
                    {
                        childObject.TextProperty("a", "A");
                        parentObject.TextProperty("b", "B");
                    });
                });
            });
            Assert.AreEqual("Cannot add a property to a JSObject while constructing its child property (\"child\").", exception.Message);
        }

        [TestMethod]
        public void LineWithNoArguments()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line();
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNoArgumentsTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line();
            builder.Line();
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNull()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithNullTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line(null);
            builder.Line(null);
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithEmpty()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithEmptyTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line("");
            builder.Line("");
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithText()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line("Hello");
            Assert.AreEqual("Hello", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void LineWithTextTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line("Hello");
            builder.Line("World");
            Assert.AreEqual("Hello\nWorld", builder.ToString());
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNull()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNullTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text(null);
            builder.Text(null);
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithEmpty()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithEmptyTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("");
            builder.Text("");
            Assert.AreEqual("", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithText()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("a");
            Assert.AreEqual("a", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithTextTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("a");
            builder.Text("b");
            Assert.AreEqual("ab", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNewLine()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("\n");
            Assert.AreEqual("\n", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TextWithNewLineTwice()
        {
            JSBuilder builder = new JSBuilder();
            builder.Text("\n");
            builder.Text("\n");
            Assert.AreEqual("\n\n", builder.ToString());
            Assert.IsFalse(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void TryWithEmptyBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.Try(tryBlock => { });
            AssertEx.EqualLines(
                new[]
                {
                    "try {",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void NestedTryBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.Try(tryBlock1 =>
            {
                tryBlock1.Try(tryBlock2 =>
                {
                })
                .Catch("error1", catchBlock2 =>
                {
                });
            })
            .Catch("error2", catchBlock1 =>
            {
            });
            AssertEx.EqualLines(
                new[]
                {
                    "try {",
                    "  try {",
                    "  } catch (error1) {",
                    "  }",
                    "} catch (error2) {",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void IfWithEmptyBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock => { });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfWithTextBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Text("Hello");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "  Hello",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfWithLineBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Line("Hello");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "  Hello",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfElseWithEmptyBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock => { })
                .Else(elseBlock => { });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "} else {",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfElseIfWithEmptyBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock => { })
                .ElseIf("false", elseBlock => { });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "} else if (false) {",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfElseIfWithTextBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Text("Hello");
            })
            .ElseIf("false", elseBlock =>
            {
                elseBlock.Text("World");
            });
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "  Hello",
                    "} else if (false) {",
                    "  World",
                    "}"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void IfWithLineAfterwards()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock => { });
            builder.Line("Test");
            AssertEx.EqualLines(
                new[]
                {
                    "if (true) {",
                    "}",
                    "Test"
                },
                builder);
            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
        }

        [TestMethod]
        public void NestedIfBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("a", ifBlock1 =>
            {
                Assert.IsTrue(builder.WriteNewLineBeforeNextText);
                AssertEx.EqualLines(
                    "if (a) {",
                    builder);

                ifBlock1.If("b", ifBlock2 =>
                {
                    Assert.IsTrue(builder.WriteNewLineBeforeNextText);
                    AssertEx.EqualLines(
                    new[]
                    {
                        "if (a) {",
                        "  if (b) {"
                    },
                    builder);
                });

                Assert.IsTrue(builder.WriteNewLineBeforeNextText);
                AssertEx.EqualLines(
                    new[]
                    {
                        "if (a) {",
                        "  if (b) {",
                        "  }"
                    },
                    builder);
            });

            Assert.IsTrue(builder.WriteNewLineBeforeNextText);
            AssertEx.EqualLines(
                new[]
                {
                    "if (a) {",
                    "  if (b) {",
                    "  }",
                    "}"
                },
                builder);
        }

        [TestMethod]
        public void NestedElseBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("a", ifBlock1 =>
            {
                ifBlock1.If("b", ifBlock2 =>
                {
                })
                .Else(elseBlock2 =>
                {
                });
            })
            .Else(elseBlock1 =>
            {
            }); ;
            AssertEx.EqualLines(
                new[]
                {
                    "if (a) {",
                    "  if (b) {",
                    "  } else {",
                    "  }",
                    "} else {",
                    "}",
                },
                builder.ToString());
        }

        [TestMethod]
        public void NestedElseIfBlocks()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("a1", ifBlock1 =>
            {
                ifBlock1.If("b1", ifBlock2 =>
                {
                })
                .ElseIf("b2", elseIfBlock2 =>
                {
                });
            })
            .ElseIf("a2", elseIfBlock1 =>
            {
            }); ;
            AssertEx.EqualLines(
                new[]
                {
                    "if (a1) {",
                    "  if (b1) {",
                    "  } else if (b2) {",
                    "  }",
                    "} else if (a2) {",
                    "}",
                },
                builder.ToString());
        }

        [TestMethod]
        public void TryBlockInIfBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Try(tryBlock =>
                {
                })
                .Catch("error", catchBlock2 =>
                {
                });
            });
            AssertEx.EqualLines(
                "if (true) {" + Environment.NewLine +
                "  try {" + Environment.NewLine +
                "  } catch (error) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [TestMethod]
        public void IfBlockInTryBlock()
        {
            JSBuilder builder = new JSBuilder();
            builder.Try(tryBlock =>
            {
                tryBlock.If("true", ifBlock =>
                {
                });
            })
            .Catch("error", catchBlock1 =>
            {
            });
            AssertEx.EqualLines(
                "try {" + Environment.NewLine +
                "  if (true) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} catch (error) {" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [TestMethod]
        public void IfBlockWithSurroundingLines()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line("const x = 5;");
            builder.If("true", ifBlock =>
            {
            });
            builder.Line("const y = 6;");
            AssertEx.EqualLines(
                new[]
                {
                    "const x = 5;",
                    "if (true) {",
                    "}",
                    "const y = 6;"
                },
                builder.ToString());
        }

        [TestMethod]
        public void IfBlockWithSurroundingEmptyLines()
        {
            JSBuilder builder = new JSBuilder();
            builder.Line();
            builder.If("true", ifBlock =>
            {
            });
            builder.Line();
            AssertEx.EqualLines(
                new[]
                {
                    "",
                    "if (true) {",
                    "}",
                    ""
                },
                builder.ToString());
        }

        [TestMethod]
        public void DocumentCommentWithNoContents()
        {
            JSBuilder builder = new JSBuilder();
            builder.DocumentationComment(comment => { });
            Assert.AreEqual("", builder.ToString());
        }

        [TestMethod]
        public void DocumentationCommentWithDescription()
        {
            JSBuilder builder = new JSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("Hello");
            });
            AssertEx.EqualLines(
                "/**\n" +
                " * Hello\n" +
                " */",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithDescriptionAndParameter()
        {
            JSBuilder builder = new JSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("This is my description.");
                comment.Parameter("parameterName", "parameterType", "This is my parameter description.");
            });
            AssertEx.EqualLines(
                "/**\n" +
                " * This is my description.\n" +
                " * @param {parameterType} parameterName This is my parameter description.\n" +
                " */",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithLeadingWhitespaceInDescription()
        {
            JSBuilder builder = new JSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description("This\n  is\n\tmy\ndescription.");
            });
            // The leading whitespace in the description should be preserved, but the AutoRest
            // WordWrap() trims away leading whitespace.
            AssertEx.EqualLines(
                "/**\n" +
                " * This\n" +
                " * is\n" +
                " * my\n" +
                " * description.\n" +
                " */",
                builder);
        }

        [TestMethod]
        public void DocumentationCommentWithWrappedDescription()
        {
            JSBuilder builder = new JSBuilder(10);
            builder.DocumentationComment(comment =>
            {
                comment.Description("This is my long description that will get wrapped.");
            });
            // The AutoRest WordWrap() function seems to include the trailing newline character in
            // its wordwrap algorithm. " * This is" is 10 characters long, so it shouldn't get
            // wrapped, but AutoRest WordWrap() wraps it.
            AssertEx.EqualLines(
                "/**\n" +
                " * This\n" +
                " * is my\n" +
                " * long\n" +
                " * description\n" +
                " * that\n" +
                " * will\n" +
                " * get\n" +
                " * wrapped.\n" +
                " */",
                builder);
        }

        [TestMethod]
        public void QuoteWithNull()
        {
            Assert.AreEqual("\"\"", JSBuilder.Quote(null));
        }

        [TestMethod]
        public void QuoteWithEmpty()
        {
            Assert.AreEqual("\"\"", JSBuilder.Quote(""));
        }

        [TestMethod]
        public void QuoteWithNonEmpty()
        {
            Assert.AreEqual("\"abc\"", JSBuilder.Quote("abc"));
        }

        [TestMethod]
        public void QuoteWithSurroundingSingleQuotes()
        {
            Assert.AreEqual("'abc'", JSBuilder.Quote("'abc'"));
        }

        [TestMethod]
        public void QuoteWithSurroundingDoubleQuotes()
        {
            Assert.AreEqual("\"abc\"", JSBuilder.Quote("\"abc\""));
        }

        [TestMethod]
        public void QuoteWithSurroundingBacktickQuotes()
        {
            Assert.AreEqual("`abc`", JSBuilder.Quote("`abc`"));
        }

        [TestMethod]
        public void QuoteWithInternalSingleQuote()
        {
            Assert.AreEqual("\"ab'c\"", JSBuilder.Quote("ab'c"));
        }

        [TestMethod]
        public void QuoteWithInternalDoubleQuote()
        {
            Assert.AreEqual("`ab\"c`", JSBuilder.Quote("ab\"c"));
        }

        [TestMethod]
        public void QuoteWithInternalBacktickQuote()
        {
            Assert.AreEqual("\"ab`c\"", JSBuilder.Quote("ab`c"));
        }

        [TestMethod]
        public void ConstObjectVariableWithNoProperties()
        {
            JSBuilder builder = new JSBuilder();
            builder.ConstObjectVariable("a", value => { });
            AssertEx.EqualLines("const a = {};", builder);
        }

        [TestMethod]
        public void ConstObjectVariableWithOneProperty()
        {
            JSBuilder builder = new JSBuilder();
            builder.ConstObjectVariable("a", value => { value.BooleanProperty("b", true); });
            AssertEx.EqualLines(new[]
                {
                    "const a = {",
                    "  b: true",
                    "};"
                },
                builder);
        }

        [TestMethod]
        public void ConstObjectVariableWithTwoProperties()
        {
            JSBuilder builder = new JSBuilder();
            builder.ConstObjectVariable("a", value =>
            {
                value.BooleanProperty("b", true);
                value.QuotedStringProperty("c", "cats");
            });
            AssertEx.EqualLines(new[]
                {
                    "const a = {",
                    "  b: true,",
                    "  c: \"cats\"",
                    "};"
                },
                builder);
        }



        [TestMethod]
        public void ObjectAssignmentWithNoProperties()
        {
            JSBuilder builder = new JSBuilder();
            builder.ObjectAssignment("a", value => { });
            AssertEx.EqualLines("a = {};", builder);
        }

        [TestMethod]
        public void ObjectAssignmentWithOneProperty()
        {
            JSBuilder builder = new JSBuilder();
            builder.ObjectAssignment("a", value => { value.BooleanProperty("b", true); });
            AssertEx.EqualLines(new[]
                {
                    "a = {",
                    "  b: true",
                    "};"
                },
                builder);
        }

        [TestMethod]
        public void ObjectAssignmentWithTwoProperties()
        {
            JSBuilder builder = new JSBuilder();
            builder.ObjectAssignment("a", value =>
            {
                value.BooleanProperty("b", true);
                value.QuotedStringProperty("c", "cats");
            });
            AssertEx.EqualLines(new[]
                {
                    "a = {",
                    "  b: true,",
                    "  c: \"cats\"",
                    "};"
                },
                builder);
        }
    }
}
