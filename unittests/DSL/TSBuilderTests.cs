// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using Xunit;

namespace AutoRest.TypeScript.DSL
{
    public class TSBuilderTests
    {
        [Fact]
        public void Constructor()
        {
            TSBuilder builder = new TSBuilder();
            Assert.Equal("", builder.ToString());
        }

        [Fact]
        public void CreatePositionWithEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p = builder.CreatePosition();
            Assert.Equal(0, p.CharactersAfterPreviousPosition);
            Assert.Equal(0, p.GetIndexInBuilder());
            Assert.Same(p, builder.CreatePosition());
        }

        [Fact]
        public void CreatePositionWithNonEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abcd");
            TSPosition p = builder.CreatePosition();
            Assert.Equal(4, p.CharactersAfterPreviousPosition);
            Assert.Equal(4, p.GetIndexInBuilder());
            Assert.Same(p, builder.CreatePosition());
        }

        [Fact]
        public void CreatePositionWhenAnotherPositionAlreadyExists()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p1 = builder.CreatePosition();
            builder.Text("abcd");
            TSPosition p2 = builder.CreatePosition();
            Assert.Equal(0, p1.CharactersAfterPreviousPosition);
            Assert.Equal(0, p1.GetIndexInBuilder());
            Assert.Equal(4, p2.CharactersAfterPreviousPosition);
            Assert.Equal(4, p2.GetIndexInBuilder());
        }

        [Fact]
        public void HasChangedLinesSinceWithNegativeIndexAndEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            Assert.Throws<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [Fact]
        public void HasChangedLinesSinceWithNegativeIndexAndSingleLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            Assert.Throws<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [Fact]
        public void HasChangedLinesSinceWithNegativeIndexAndMultipleLines()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("a\nb\nc");
            Assert.Throws<IndexOutOfRangeException>(() => builder.HasChangedLinesSince(-1));
        }

        [Fact]
        public void HasChangedLinesSinceWithZeroIndexAndEmptyBuilder()
        {
            TSBuilder builder = new TSBuilder();
            Assert.False(builder.HasChangedLinesSince(0));
        }

        [Fact]
        public void HasChangedLinesSinceWithZeroIndexAndSingleLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            Assert.False(builder.HasChangedLinesSince(0));
        }

        [Fact]
        public void HasChangedLinesSinceWithZeroIndexAndMultipleLines()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("a\nb\nc");
            Assert.True(builder.HasChangedLinesSince(0));
        }

        [Fact]
        public void InsertWithNoPositions()
        {
            TSBuilder builder = new TSBuilder();
            builder.Insert(0, "abcd");
            Assert.Equal("abcd", builder.ToString());
        }

        [Fact]
        public void InsertAtAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            TSPosition p = builder.CreatePosition();
            builder.Insert(0, "abcd");
            Assert.Equal("abcd", builder.ToString());
            Assert.Equal(4, p.CharactersAfterPreviousPosition);
            Assert.Equal(4, p.GetIndexInBuilder());
        }

        [Fact]
        public void InsertBeforeAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abd");
            TSPosition p = builder.CreatePosition();
            builder.Text("ef");

            Assert.Equal(3, p.CharactersAfterPreviousPosition);
            Assert.Equal(3, p.GetIndexInBuilder());

            builder.Insert(2, "c");

            Assert.Equal(4, p.CharactersAfterPreviousPosition);
            Assert.Equal(4, p.GetIndexInBuilder());
        }

        [Fact]
        public void InsertAfterAnExistingPosition()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("abc");
            TSPosition p = builder.CreatePosition();
            builder.Text("df");

            Assert.Equal(3, p.CharactersAfterPreviousPosition);
            Assert.Equal(3, p.GetIndexInBuilder());

            builder.Insert(4, "e");

            Assert.Equal(3, p.CharactersAfterPreviousPosition);
            Assert.Equal(3, p.GetIndexInBuilder());
        }

        [Fact]
        public void InsertBetweenExistingPositions()
        {
            TSBuilder builder = new TSBuilder();
            builder.Text("ab");
            TSPosition p1 = builder.CreatePosition();
            builder.Text("cd");
            TSPosition p2 = builder.CreatePosition();
            builder.Text("ef");

            Assert.Equal(2, p1.CharactersAfterPreviousPosition);
            Assert.Equal(2, p1.GetIndexInBuilder());
            Assert.Equal(2, p2.CharactersAfterPreviousPosition);
            Assert.Equal(4, p2.GetIndexInBuilder());

            builder.Insert(3, "Z");
            Assert.Equal("abcZdef", builder.ToString());

            Assert.Equal(2, p1.CharactersAfterPreviousPosition);
            Assert.Equal(2, p1.GetIndexInBuilder());
            Assert.Equal(3, p2.CharactersAfterPreviousPosition);
            Assert.Equal(5, p2.GetIndexInBuilder());
        }

        [Fact]
        public void InsertNewLine()
        {
            TSBuilder builder = new TSBuilder();
            builder.InsertNewLine(0);
            Assert.Equal("\n", builder.ToString());
        }

        [Fact]
        public void AddPropertyToParentObjectWhileBuildingChildObject()
        {
            TSBuilder builder = new TSBuilder();
            InvalidOperationException exception = Assert.Throws<InvalidOperationException>(() =>
            {
                builder.Object((TSObject parentObject) =>
                {
                    parentObject.ObjectProperty("child", (TSObject childObject) =>
                    {
                        childObject.TextProperty("a", "A");
                        parentObject.TextProperty("b", "B");
                    });
                });
            });
            Assert.Equal("Cannot add a property to a TSObject while constructing its child property (\"child\").", exception.Message);
        }

        [Fact]
        public void NestedTryBlocks()
        {
            TSBuilder builder = new TSBuilder();
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
            Assert.Equal(
                "try {" + Environment.NewLine +
                "  try {" + Environment.NewLine +
                "  } catch (error1) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} catch (error2) {" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [Fact]
        public void NestedIfBlocks()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("a", ifBlock1 =>
            {
                ifBlock1.If("b", ifBlock2 =>
                {
                });
            });
            Assert.Equal(
                "if (a) {" + Environment.NewLine +
                "  if (b) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [Fact]
        public void NestedElseBlocks()
        {
            TSBuilder builder = new TSBuilder();
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
            Assert.Equal(
                "if (a) {" + Environment.NewLine +
                "  if (b) {" + Environment.NewLine +
                "  } else {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} else {" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [Fact]
        public void NestedElseIfBlocks()
        {
            TSBuilder builder = new TSBuilder();
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
            Assert.Equal(
                "if (a1) {" + Environment.NewLine +
                "  if (b1) {" + Environment.NewLine +
                "  } else if (b2) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} else if (a2) {" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [Fact]
        public void TryBlockInIfBlock()
        {
            TSBuilder builder = new TSBuilder();
            builder.If("true", ifBlock =>
            {
                ifBlock.Try(tryBlock =>
                {
                })
                .Catch("error", catchBlock2 =>
                {
                });
            });
            Assert.Equal(
                "if (true) {" + Environment.NewLine +
                "  try {" + Environment.NewLine +
                "  } catch (error) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "}",
                builder.ToString());
        }

        [Fact]
        public void IfBlockInTryBlock()
        {
            TSBuilder builder = new TSBuilder();
            builder.Try(tryBlock =>
            {
                tryBlock.If("true", ifBlock =>
                {
                });
            })
            .Catch("error", catchBlock1 =>
            {
            });
            Assert.Equal(
                "try {" + Environment.NewLine +
                "  if (true) {" + Environment.NewLine +
                "  }" + Environment.NewLine +
                "} catch (error) {" + Environment.NewLine +
                "}",
                builder.ToString());
        }
    }
}
