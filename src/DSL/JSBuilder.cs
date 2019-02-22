// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A StringBuilder that has helper methods for building JavaScript code.
    /// </summary>
    public class JSBuilder : IBuilder
    {
        protected const int defaultCommentWordWrapWidth = 100;

        private readonly IBuilder builder;
        protected readonly int commentWordWrapWidth;

        public JSBuilder(int commentWordWrapWidth = defaultCommentWordWrapWidth)
            : this(new Builder(), commentWordWrapWidth)
        {
        }

        public JSBuilder(IBuilder builder, int commentWordWrapWidth = defaultCommentWordWrapWidth)
        {
            this.builder = builder;
            this.commentWordWrapWidth = commentWordWrapWidth;
        }

        /// <summary>
        /// Whether or not a newline will be written before the next text.
        /// </summary>
        public bool WriteNewLineBeforeNextText { get => builder.WriteNewLineBeforeNextText; set => builder.WriteNewLineBeforeNextText = value; }

        /// <summary>
        /// The word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        public int? WordWrapWidth { get => builder.WordWrapWidth; set => builder.WordWrapWidth = value; }

        /// <summary>
        /// Create a position object that will track a certain position within the JSBuilder's content.
        /// </summary>
        /// <returns></returns>
        public BuilderPosition CreatePosition()
        {
            return builder.CreatePosition();
        }

        /// <summary>
        /// Get whether or not a new line character has been added to this JSBuilder since the provided character index.
        /// </summary>
        /// <param name="index">The character index to begin the search at.</param>
        /// <returns></returns>
        public bool HasChangedLinesSince(int index)
        {
            return builder.HasChangedLinesSince(index);
        }

        public void Insert(int index, string text)
        {
            builder.Insert(index, text);
        }

        public void InsertNewLine(int index)
        {
            builder.InsertNewLine(index);
        }

        public void AddIndentToLinesAfter(int index)
        {
            builder.AddIndentToLinesAfter(index);
        }

        /// <summary>
        /// Add the provided value to end of the line prefix.
        /// </summary>
        /// <param name="toAdd">The value to add to the line prefix.</param>
        public void AddToPrefix(string toAdd)
        {
            builder.AddToPrefix(toAdd);
        }

        /// <summary>
        /// Remove the provided value from the end of the line prefix.
        /// </summary>
        /// <param name="toRemove">The value to remove from the end of the line prefix.</param>
        public void RemoveFromPrefix(string toRemove)
        {
            builder.RemoveFromPrefix(toRemove);
        }

        /// <summary>
        /// Invoke the provided action with the provided additional prefix.
        /// </summary>
        /// <param name="toAdd">The additional text to add to the line prefix for the duration of the provided action.</param>
        /// <param name="action">The action to invoke with the provided additional line prefix text.</param>
        public void WithAddedPrefix(string toAdd, Action action)
        {
            builder.WithAddedPrefix(toAdd, action);
        }

        /// <summary>
        /// Add a single indentation for the context of the provided action.
        /// </summary>
        /// <param name="action">The action to invoke with an extra level of indentation.</param>
        public void Indent(Action action)
        {
            builder.Indent(action);
        }

        /// <summary>
        /// Add a new level of indentation to the line prefix.
        /// </summary>
        public void IncreaseIndent()
        {
            builder.IncreaseIndent();
        }

        /// <summary>
        /// Remove a level of indentation from the line prefix.
        /// </summary>
        public void DecreaseIndent()
        {
            builder.DecreaseIndent();
        }

        /// <summary>
        /// Add the provided text to this JSBuilder.
        /// </summary>
        /// <param name="text">The text to add.</param>
        public void Text(string text, params object[] formattedArguments)
        {
            builder.Text(text, formattedArguments);
        }

        /// <summary>
        /// Add the provided line of the text to this JSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this JSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        public void Line(string text = "", params object[] formattedArguments)
        {
            builder.Line(text, formattedArguments);
        }

        public override string ToString()
        {
            return builder.ToString();
        }

        public void Class(string className, Action<JSClass> classAction)
        {
            Block($"class {className}", block =>
            {
                classAction?.Invoke(new JSClass(this));
            });
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
        /// Add a /* */ comment to this JSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void Comment(params string[] lines)
        {
            Comment("/*", lines);
        }

        public void DocumentationComment(Action<JSDocumentationComment> commentAction)
        {
            if (commentAction != null)
            {
                using (JSDocumentationComment comment = new JSDocumentationComment(this, commentWordWrapWidth))
                {
                    commentAction.Invoke(comment);
                }
            }
        }

        /// <summary>
        /// Add a // comment to this JSBuilder.
        /// </summary>
        /// <param name="line"></param>
        public void LineComment(string line)
        {
            Line($"// {line}");
        }

        /// <summary>
        /// Add a /** */ comment to this JSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(params string[] lines)
        {
            Comment("/**", lines);
        }

        /// <summary>
        /// Add a /** */ comment to this JSBuilder. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(IEnumerable<string> lines)
        {
            Comment("/**", lines);
        }

        /// <summary>
        /// Add a JSON array to this JSBuilder that uses the provided action to add the array's elements.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the array's elements.</param>
        public void Array(Action<JSArray> action = null)
        {
            Text("[");
            Indent(() =>
            {
                using (JSArray tsArray = new JSArray(this))
                {
                    action?.Invoke(tsArray);
                }
            });
            Text("]");
        }

        /// <summary>
        /// Add a JSON object to this JSBuilder that uses the provided action to add the object's properties.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the object's properties.</param>
        public void Object(Action<JSObject> action = null)
        {
            Text($"{{");
            Indent(() =>
            {
                using (JSObject tsObject = new JSObject(this))
                {
                    action?.Invoke(tsObject);
                }
            });
            Text($"}}");
        }

        /// <summary>
        /// Surround the provided text with quotes and add it to this JSBuilder.
        /// </summary>
        /// <param name="text">The text to quote and add to this JSBuilder.</param>
        public void QuotedString(string text)
        {
            Text(Quote(text));
        }

        public static string Quote(string text)
        {
            string result;
            if (string.IsNullOrEmpty(text))
            {
                result = "\"\"";
            }
            else
            {
                if (IsQuoted(text))
                {
                    result = text;
                }
                else
                {
                    char quote = '"';
                    if (text.Contains('\n') || text.Contains('"'))
                    {
                        quote = '`';
                    }
                    result = $"{quote}{text}{quote}";
                }
            }
            return result;
        }

        public static bool IsQuoted(string value)
        {
            bool result = false;
            int valueLength = value == null ? 0 : value.Length;
            if (2 <= valueLength)
            {
                char firstCharacter = value[0];
                result = IsQuote(firstCharacter) && firstCharacter == value[valueLength - 1];
            }
            return result;
        }

        private static bool IsQuote(char value)
        {
            return value == '\'' || value == '\"' || value == '`';
        }

        /// <summary>
        /// Add the provided boolean value to this JSBuilder.
        /// </summary>
        /// <param name="value"></param>
        public void Boolean(bool value)
        {
            Text(value ? "true" : "false");
        }

        /// <summary>
        /// Add a null value to this JSBuilder.
        /// </summary>
        public void Null()
        {
            Text("null");
        }

        /// <summary>
        /// Add an undefined value to this JSBuilder.
        /// </summary>
        public void Undefined()
        {
            Text("undefined");
        }

        public void Lambda(string paramName, Action<JSBlock> lambdaBodyAction)
        {
            Line($"{paramName} => {{");
            Indent(() =>
            {
                lambdaBodyAction.Invoke(new JSBlock(this));
            });
            Text($"}}");
        }

        /// <summary>
        /// Invoke the provided action in order to produce a value in this JSBuilder.
        /// </summary>
        /// <param name="valueAction">The action to invoke.</param>
        public void Value(Action<JSValue> valueAction)
        {
            valueAction?.Invoke(new JSValue(this));
        }

        /// <summary>
        /// Add a function call with the provided functionName to this JSBuilder. The provided
        /// action will be used to create the arguments for the function call.
        /// </summary>
        /// <param name="functionName">The name of the function to invoke.</param>
        /// <param name="argumentListAction">The action to invoke to populate the arguments of the function.</param>
        public void FunctionCall(string functionName, Action<JSArgumentList> argumentListAction)
        {
            Text($"{functionName}(");
            using (JSArgumentList argumentList = new JSArgumentList(this))
            {
                argumentListAction.Invoke(argumentList);
            }
            Text(")");
        }

        public void Method(string methodName, string parameterList, Action<JSBlock> methodBodyAction)
        {
            Block($"{methodName}({parameterList})", methodBodyAction);
        }

        public void Block(string beforeBlock, Action<JSBlock> blockAction)
        {
            Block(beforeBlock, true, blockAction);
        }

        public void Block(string beforeBlock, bool newLineAfterBlock, Action<JSBlock> blockAction)
        {
            Line($"{beforeBlock} {{");
            Indent(() =>
            {
                using (JSBlock block = new JSBlock(this))
                {
                    blockAction.Invoke(block);
                }
            });
            WriteNewLineBeforeNextText = true;
            Text($"}}");
            WriteNewLineBeforeNextText = newLineAfterBlock;
        }

        public JSIfBlock If(string condition, Action<JSBlock> bodyAction)
        {
            Block($"if ({condition})", bodyAction);
            return new JSIfBlock(this);
        }

        public JSIfBlock ElseIf(string condition, Action<JSBlock> bodyAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" else if ({condition})", bodyAction);
            return new JSIfBlock(this);
        }

        public void Else(Action<JSBlock> bodyAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" else", bodyAction);
        }

        public JSTryBlock Try(Action<JSBlock> tryAction)
        {
            Block($"try", tryAction);
            return new JSTryBlock(this);
        }

        public void Catch(string errorName, Action<JSBlock> catchAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" catch ({errorName})", catchAction);
        }

        public void Return(string result)
        {
            Return(value => value.Text(result));
        }

        public void Return(Action<JSValue> returnValueAction)
        {
            Text("return ");
            Value(returnValueAction);
            Line(";");
        }

        public void Throw(string valueToThrow)
        {
            Line($"throw {valueToThrow};");
        }

        public void ConstQuotedStringVariable(string variableName, string text)
        {
            ConstVariable(variableName, $"\"{text}\"");
        }

        public void ConstVariable(string variableName, string variableValue)
        {
            Assignment($"const {variableName}", variableValue);
        }

        public void ThisAssignment(string memberVariableName, string variableValue) {
            Assignment($"this.{memberVariableName}", variableValue);
        }

        public void ConstObjectVariable(string variableName, string value)
        {
            Assignment($"const {variableName}", value);
        }

        public void Assignment(string variableName, string variableValue) {
            Line($"{variableName} = {variableValue};");
        }

        public void ConstObjectVariable(string variableName, Action<JSObject> valueAction)
        {
            ObjectAssignment($"const {variableName}", valueAction);
        }

        public void ObjectAssignment(string variableName, Action<JSObject> valueAction)
        {
            Text($"{variableName} = ");
            Object(valueAction);
            Line(";");
        }

        public void ImportAllAs(string importAs, string importSource)
        {
            Line($"import * as {importAs} from \"{importSource}\";");
        }

        public void ImportFrom(string importAs, string importSource)
        {
            Line($"import {importAs} from \"{importSource}\";");
        }

        public void Import(IEnumerable<string> importedTypeNames, string importSource)
        {
            Line($"import {{ {string.Join(", ", importedTypeNames)} }} from \"{importSource}\";");
        }

        public void ExportDefault(string variableName)
        {
            Line($"export default {variableName};");
        }
    }
}
