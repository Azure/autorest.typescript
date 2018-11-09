// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A position within a TSBuilder.
    /// </summary>
    public class BuilderPosition
    {
        private readonly BuilderPosition previousPosition;

        public BuilderPosition(BuilderPosition previousPosition, int charactersAfterPreviousPosition)
        {
            this.previousPosition = previousPosition;
            this.CharactersAfterPreviousPosition = charactersAfterPreviousPosition;
        }

        /// <summary>
        /// The number of characters between this position and the position before this one.
        /// </summary>
        public int CharactersAfterPreviousPosition { get; set; }

        /// <summary>
        /// Get the character index within the TSBuilder that this position points to.
        /// </summary>
        /// <returns></returns>
        public int GetIndexInBuilder()
        {
            return (previousPosition == null ? 0 : previousPosition.GetIndexInBuilder()) + CharactersAfterPreviousPosition;
        }
    }
}
