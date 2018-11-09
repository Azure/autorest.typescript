// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;

namespace AutoRest.TypeScript.DSL
{
    public interface IBuilder
    {
        /// <summary>
        /// Whether or not a newline will be written before the next text.
        /// </summary>
        bool WriteNewLineBeforeNextText { get; set; }

        /// <summary>
        /// The word wrap width. A null wordWrapWidth indicates that no word wrapping should take place.
        /// </summary>
        int? WordWrapWidth { get; set; }

        /// <summary>
        /// Create a position object that will track a certain position within the TSBuilder's content.
        /// </summary>
        /// <returns></returns>
        BuilderPosition CreatePosition();

        /// <summary>
        /// Get whether or not a new line character has been added to this TSBuilder since the provided character index.
        /// </summary>
        /// <param name="index">The character index to begin the search at.</param>
        /// <returns></returns>
        bool HasChangedLinesSince(int index);

        void Insert(int index, string text);

        void InsertNewLine(int index);

        void AddIndentToLinesAfter(int index);

        /// <summary>
        /// Add the provided value to end of the line prefix.
        /// </summary>
        /// <param name="toAdd">The value to add to the line prefix.</param>
        void AddToPrefix(string toAdd);

        /// <summary>
        /// Remove the provided value from the end of the line prefix.
        /// </summary>
        /// <param name="toRemove">The value to remove from the end of the line prefix.</param>
        void RemoveFromPrefix(string toRemove);

        /// <summary>
        /// Invoke the provided action with the provided additional prefix.
        /// </summary>
        /// <param name="toAdd">The additional text to add to the line prefix for the duration of the provided action.</param>
        /// <param name="action">The action to invoke with the provided additional line prefix text.</param>
        void WithAddedPrefix(string toAdd, Action action);

        /// <summary>
        /// Add a single indentation for the context of the provided action.
        /// </summary>
        /// <param name="action">The action to invoke with an extra level of indentation.</param>
        void Indent(Action action);

        /// <summary>
        /// Add a new level of indentation to the line prefix.
        /// </summary>
        void IncreaseIndent();

        /// <summary>
        /// Remove a level of indentation from the line prefix.
        /// </summary>
        void DecreaseIndent();

        /// <summary>
        /// Add the provided text to this TSBuilder.
        /// </summary>
        /// <param name="text">The text to add.</param>
        void Text(string text, params object[] formattedArguments);

        /// <summary>
        /// Add the provided line of the text to this TSBuilder.
        /// </summary>
        /// <param name="text">The line of text to add to this TSBuilder.</param>
        /// <param name="formattedArguments">Any optional formatted arguments that will be inserted into the text if provided.</param>
        void Line(string text = "", params object[] formattedArguments);
    }
}
