﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A StringBuilder that has helper methods for building TypeScript code.
    /// </summary>
    public class TSBuilder
    {
        private const string newLine = "\n";
        private const string singleIndent = "  ";
        private const int defaultCommentWordWrapWidth = 100;

        private readonly int commentWordWrapWidth;
        private readonly StringBuilder contents = new StringBuilder();
        private readonly StringBuilder linePrefix = new StringBuilder();
        private readonly List<TSPosition> positions = new List<TSPosition>();

        public TSBuilder(int commentWordWrapWidth = defaultCommentWordWrapWidth)
        {
            this.commentWordWrapWidth = commentWordWrapWidth;
        }

        public enum State
        {
            EmptyLine,
            LineWithText,
        }

        public State CurrentState { get; private set; }

        /// <summary>
        /// The word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        public int? WordWrapWidth { get; set; }

        /// <summary>
        /// Create a position object that will track a certain position within the TSBuilder's content.
        /// </summary>
        /// <returns></returns>
        public TSPosition CreatePosition()
        {
            TSPosition position;
            int contentLength = contents.Length;
            if (!positions.Any())
            {
                position = new TSPosition(null, contentLength);
                positions.Add(position);
            }
            else
            {
                position = positions.Last();
                int lastPositionIndexInBuilder = position.GetIndexInBuilder();
                if (lastPositionIndexInBuilder != contentLength)
                {
                    position = new TSPosition(position, contentLength - lastPositionIndexInBuilder);
                    positions.Add(position);
                }
            }
            return position;
        }

        /// <summary>
        /// Get whether or not a new line character has been added to this TSBuilder since the provided character index.
        /// </summary>
        /// <param name="index">The character index to begin the search at.</param>
        /// <returns></returns>
        public bool HasChangedLinesSince(int index)
        {
            bool result = false;
            for (int i = index; i < contents.Length; ++i)
            {
                if (contents[i] == '\n')
                {
                    result = true;
                    break;
                }
            }
            return result;
        }

        public void Insert(int index, string text)
        {
            if (positions.Any())
            {
                int positionIndex = 0;
                foreach (TSPosition position in positions)
                {
                    if (index <= positionIndex + position.CharactersAfterPreviousPosition)
                    {
                        position.CharactersAfterPreviousPosition += text.Length;
                        break;
                    }
                    else
                    {
                        positionIndex += position.CharactersAfterPreviousPosition;
                    }
                }
            }
            contents.Insert(index, text);
        }

        public void InsertNewLine(int index)
        {
            Insert(index, newLine + linePrefix);
        }

        public void AddIndentToLinesAfter(int index)
        {
            for (int i = index; i < contents.Length; ++i)
            {
                if (contents[i] == '\n' && i + 1 < contents.Length && contents[i + 1] != '\n')
                {
                    contents.Insert(i + 1, singleIndent);
                }
            }
        }

        /// <summary>
        /// Get the text that has been added to this TSBuilder.
        /// </summary>
        /// <returns>The text that has been added to this TSBuilder.</returns>
        public override string ToString()
        {
            return contents.ToString();
        }

        /// <summary>
        /// Add the provided value to end of the line prefix.
        /// </summary>
        /// <param name="toAdd">The value to add to the line prefix.</param>
        public void AddToPrefix(string toAdd)
        {
            linePrefix.Append(toAdd);
        }

        /// <summary>
        /// Remove the provided value from the end of the line prefix.
        /// </summary>
        /// <param name="toRemove">The value to remove from the end of the line prefix.</param>
        public void RemoveFromPrefix(string toRemove)
        {
            int toRemoveLength = toRemove.Length;
            if (linePrefix.Length <= toRemoveLength)
            {
                linePrefix.Clear();
            }
            else
            {
                linePrefix.Remove(linePrefix.Length - toRemoveLength, toRemoveLength);
            }
        }

        /// <summary>
        /// Invoke the provided action with the provided additional prefix.
        /// </summary>
        /// <param name="toAdd">The additional text to add to the line prefix for the duration of the provided action.</param>
        /// <param name="action">The action to invoke with the provided additional line prefix text.</param>
        public void WithAddedPrefix(string toAdd, Action action)
        {
            AddToPrefix(toAdd);
            try
            {
                action.Invoke();
            }
            finally
            {
                RemoveFromPrefix(toAdd);
            }
        }

        /// <summary>
        /// Add a single indentation for the context of the provided action.
        /// </summary>
        /// <param name="action">The action to invoke with an extra level of indentation.</param>
        public void Indent(Action action)
        {
            IncreaseIndent();
            try
            {
                action.Invoke();
            }
            finally
            {
                DecreaseIndent();
            }
        }

        /// <summary>
        /// Add a new level of indentation to the line prefix.
        /// </summary>
        public void IncreaseIndent()
            => AddToPrefix(singleIndent);

        /// <summary>
        /// Remove a level of indentation from the line prefix.
        /// </summary>
        public void DecreaseIndent()
            => RemoveFromPrefix(singleIndent);

        /// <summary>
        /// Wrap the provided line using the existing wordWrapWidth.
        /// </summary>
        /// <param name="line">The line to wrap.</param>
        /// <param name="addPrefix">Whether or not to add the line prefix to the wrapped lines.</param>
        /// <returns>The wrapped lines.</returns>
        internal IEnumerable<string> WordWrap(string line, bool addPrefix)
        {
            List<string> lines = new List<string>();

            if (!string.IsNullOrEmpty(line))
            {
                if (WordWrapWidth == null)
                {
                    lines.Add(line);
                }
                else
                {
                    // Subtract an extra column from the word wrap width because columns generally are
                    // 1 -based instead of 0-based.
                    int wordWrapIndexMinusLinePrefixLength = WordWrapWidth.Value - (addPrefix ? linePrefix.Length : 0) - 1;

                    IEnumerable<string> wrappedLines = line.WordWrap(wordWrapIndexMinusLinePrefixLength);
                    foreach (string wrappedLine in wrappedLines.SkipLast(1))
                    {
                        lines.Add(wrappedLine + newLine);
                    }

                    string lastWrappedLine = wrappedLines.Last();
                    if (!string.IsNullOrEmpty(lastWrappedLine))
                    {
                        lines.Add(lastWrappedLine);
                    }
                }
            }
            return lines;
        }

        /// <summary>
        /// Add the provided text to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to add.</param>
        public void Text(string text, params object[] formattedArguments)
        {
            if (!string.IsNullOrEmpty(text) && formattedArguments != null && formattedArguments.Length > 0)
            {
                text = string.Format(text, formattedArguments);
            }

            bool addPrefix = (CurrentState == State.EmptyLine);

            List<string> lines = new List<string>();

            if (string.IsNullOrEmpty(text))
            {
                lines.Add("");
            }
            else
            {
                int lineStartIndex = 0;
                int textLength = text.Length;
                while (lineStartIndex < textLength)
                {
                    int newLineCharacterIndex = text.IndexOf(newLine, lineStartIndex);
                    if (newLineCharacterIndex == -1)
                    {
                        string line = text.Substring(lineStartIndex);
                        IEnumerable<string> wrappedLines = WordWrap(line, addPrefix);
                        lines.AddRange(wrappedLines);
                        lineStartIndex = textLength;
                    }
                    else
                    {
                        int nextLineStartIndex = newLineCharacterIndex + 1;
                        string line = text.Substring(lineStartIndex, nextLineStartIndex - lineStartIndex);
                        IEnumerable<string> wrappedLines = WordWrap(line, addPrefix);
                        lines.AddRange(wrappedLines);
                        lineStartIndex = nextLineStartIndex;
                    }
                }
            }

            string prefix = addPrefix ? linePrefix.ToString() : null;
            foreach (string line in lines)
            {
                if (addPrefix && !string.IsNullOrWhiteSpace(prefix) || (!string.IsNullOrEmpty(prefix) && !string.IsNullOrWhiteSpace(line)))
                {
                    contents.Append(prefix);
                }

                contents.Append(line);
            }

            CurrentState = text.EndsWith(newLine) ? State.EmptyLine : State.LineWithText;
        }

        /// <summary>
        /// Add the provided line of the text to this TSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this TSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        public void Line(string text = "", params object[] formattedArguments)
        {
            Text(text + Environment.NewLine, formattedArguments);
        }

        /// <summary>
        /// Get whether or not the provided lines has any lines that are not null and not whitespace.
        /// </summary>
        /// <param name="lines">The lines to check.</param>
        /// <returns>Whether or not the provided lines has any lines that are not null and not whitespace.</returns>
        public bool AnyCommentLines(IEnumerable<string> lines)
        {
            return lines != null && lines.Any((string line) => !string.IsNullOrWhiteSpace(line));
        }

        private void Comment(string commentHeader, IEnumerable<string> lines)
        {
            if (AnyCommentLines(lines))
            {
                Line(commentHeader);
                WithAddedPrefix(" * ", () =>
                {
                    int? previousWordWrapWidth = WordWrapWidth;
                    WordWrapWidth = commentWordWrapWidth;
                    try
                    {
                        foreach (string line in lines)
                        {
                            if (line != null)
                            {
                                Line(line);
                            }
                        }
                    }
                    finally
                    {
                        WordWrapWidth = previousWordWrapWidth;
                    }
                });
                Line(" */");
            }
        }

        /// <summary>
        /// Add a /* */ comment to this TSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void Comment(params string[] lines)
        {
            Comment("/*", lines);
        }

        public void DocumentationComment(Action<TSDocumentationComment> commentAction)
        {
            if (commentAction != null)
            {
                using (TSDocumentationComment comment = new TSDocumentationComment(this, commentWordWrapWidth))
                {
                    commentAction.Invoke(comment);
                }
            }
        }

        /// <summary>
        /// Add a // comment to this TSBuilder.
        /// </summary>
        /// <param name="line"></param>
        public void LineComment(string line)
        {
            Line($"// {line}");
        }

        /// <summary>
        /// Add a /** */ comment to this TSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(params string[] lines)
        {
            Comment("/**", lines);
        }

        /// <summary>
        /// Add a /** */ comment to this TSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(IEnumerable<string> lines)
        {
            Comment("/**", lines);
        }

        /// <summary>
        /// Add a JSON array to this TSBuilder that uses the provided action to add the array's elements.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the array's elements.</param>
        public void Array(Action<TSArray> action)
        {
            Text("[");
            Indent(() =>
            {
                using (TSArray tsArray = new TSArray(this))
                {
                    action.Invoke(tsArray);
                }
            });
            Text("]");
        }

        /// <summary>
        /// Add a JSON object to this TSBuilder that uses the provided action to add the object's properties.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the object's properties.</param>
        public void Object(Action<TSObject> action)
        {
            Text($"{{");
            Indent(() =>
            {
                using (TSObject tsObject = new TSObject(this))
                {
                    action.Invoke(tsObject);
                }
            });
            Text($"}}");
        }

        /// <summary>
        /// Surround the provided text with double-quotes and add it to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to double-quote and add to this TSBuilder.</param>
        public void QuotedString(string text)
        {
            Text($"\"{text}\"");
        }

        /// <summary>
        /// Add the provided boolean value to this TSBuilder.
        /// </summary>
        /// <param name="value"></param>
        public void Boolean(bool value)
        {
            Text(value ? "true" : "false");
        }

        /// <summary>
        /// Add a null value to this TSBuilder.
        /// </summary>
        public void Null()
        {
            Text("null");
        }

        /// <summary>
        /// Add an undefined value to this TSBuilder.
        /// </summary>
        public void Undefined()
        {
            Text("undefined");
        }

        public void Lambda(string paramName, Action<TSBlock> lambdaBodyAction)
        {
            Line($"{paramName} => {{");
            Indent(() =>
            {
                lambdaBodyAction.Invoke(new TSBlock(this));
            });
            Text($"}}");
        }

        /// <summary>
        /// Invoke the provided action in order to produce a value in this TSBuilder.
        /// </summary>
        /// <param name="valueAction">The action to invoke.</param>
        public void Value(Action<TSValue> valueAction)
        {
            valueAction?.Invoke(new TSValue(this));
        }

        public void ExportIntersectionType(string typeName, Action<TSIntersectionType> typeAction)
        {
            this.Text($"export type {typeName} = ");
            typeAction?.Invoke(new TSIntersectionType(this));
            this.Line(";");
        }

        /// <summary>
        /// Add a function call with the provided functionName to this TSBuilder. The provided
        /// action will be used to create the arguments for the function call.
        /// </summary>
        /// <param name="functionName">The name of the function to invoke.</param>
        /// <param name="argumentListAction">The action to invoke to populate the arguments of the function.</param>
        public void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            Text($"{functionName}(");
            using (TSArgumentList argumentList = new TSArgumentList(this))
            {
                argumentListAction.Invoke(argumentList);
            }
            Text(")");
        }

        public void MethodOverload(string methodName, string returnType, string parameterList)
        {
            Line($"{methodName}({parameterList}): {returnType};");
        }

        public void Method(string methodName, string returnType, string parameterList, Action<TSBlock> methodBodyAction)
        {
            Line($"{methodName}({parameterList}): {returnType} {{");
            Indent(() =>
            {
                methodBodyAction.Invoke(new TSBlock(this));
            });
            Line($"}}");
        }

        public TSIfBlock If(string condition, Action<TSBlock> bodyAction)
        {
            Line($"if ({condition}) {{");
            Indent(() =>
            {
                using (TSBlock block = new TSBlock(this))
                {
                    bodyAction.Invoke(block);
                }
            });
            if (CurrentState == State.LineWithText)
            {
                Line();
            }
            Text($"}}");
            return new TSIfBlock(this);
        }

        public TSTryBlock Try(Action<TSBlock> tryAction)
        {
            Line($"try {{");
            Indent(() =>
            {
                using (TSBlock block = new TSBlock(this))
                {
                    tryAction.Invoke(block);
                }
            });
            if (CurrentState == State.LineWithText)
            {
                Line();
            }
            Text($"}}");
            return new TSTryBlock(this);
        }

        public void Return(string result)
        {
            Return(value => value.Text(result));
        }

        public void Return(Action<TSValue> returnValueAction)
        {
            Text("return ");
            Value(returnValueAction);
            Line(";");
        }

        public void Throw(string valueToThrow)
        {
            Line($"throw {valueToThrow};");
        }

        public void ConstObjectVariable(string variableName, string variableType, Action<TSObject> valueAction)
        {
            Text($"const {variableName}");
            if (!string.IsNullOrEmpty(variableType))
            {
                Text($": {variableType}");
            }
            Text(" = ");
            Object(valueAction);
            Line($";");
        }

        public void ConstObjectVariable(string variableName, string variableType, string value)
        {
            Text($"const {variableName}");
            if (!string.IsNullOrEmpty(variableType))
            {
                Text($": {variableType}");
            }
            Line($" = {value};");
        }

        public void ConstObjectVariable(string variableName, Action<TSObject> valueAction)
        {
            ConstObjectVariable(variableName, null, valueAction);
        }

        public void ConstObjectVariable(string variableName, string value)
        {
            ConstObjectVariable(variableName, null, value);
        }

        public void ImportAllAs(string importAs, string importSource)
        {
            Line($"import * as {importAs} from \"{importSource}\";");
        }

        public void Import(IEnumerable<string> importedTypeNames, string importSource)
        {
            Line($"import {{ {string.Join(", ", importedTypeNames)} }} from \"{importSource}\";");
        }

        public void Export(Action<TSExport> exportAction)
        {
            Line($"export {{");
            Indent(() =>
            {
                using (TSExport tsExport = new TSExport(this))
                {
                    exportAction.Invoke(tsExport);
                }
            });
            Line($"}};");
        }

        /// <summary>
        /// Exports all the exports from the given module.
        /// </summary>
        public void ExportAll(string modulePath)
        {
            Line($"export * from \"{modulePath}\";");
        }
    }
}