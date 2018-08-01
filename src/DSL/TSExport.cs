// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A TypeScript DSL representation for an ESM export block.
    /// </summary>
    public class TSExport : IDisposable
    {
        private readonly TSBuilder builder;
        private State currentState = State.Start;

        private enum State
        {
            Start,
            Property
        }

        /// <summary>
        /// Create a new export object.
        /// </summary>
        /// <param name="builder">The TSBuilder that this TSExport will emit to.</param>
        public TSExport(TSBuilder builder)
        {
            this.builder = builder;
        }

        /// <summary>
        /// Set the current state of this TSExport. Changing the state may add "\n" or ",\n".
        /// </summary>
        /// <param name="value"></param>
        private void SetCurrentState(State value)
        {
            switch (currentState)
            {
                case State.Start:
                    builder.Line();
                    break;

                case State.Property:
                    builder.Line(",");
                    break;

                default:
                    throw new Exception($"Unrecognized current state: {currentState}");
            }

            currentState = value;
        }

        /// <summary>
        /// Mark the end of this TSExport. If the current state is not Start, then a newline will be added.
        /// </summary>
        public void Dispose()
        {
            if (currentState != State.Start)
            {
                builder.Line();
            }
        }

        /// <summary>
        /// Exports the provided name in this TSExport block.
        /// </summary>
        /// <param name="name">The name of the variable to export.</param>
        public void Export(string name)
        {
            SetCurrentState(State.Property);
            builder.Text(name);
        }

        /// <summary>
        /// Exports the given name under the given alias in this TSExport block.
        /// </summary>
        /// <param name="name">The name of the variable to export.</param>
        /// <param name="name">The alias to expose to consumers of this module.</param>
        public void ExportAs(string name, string alias)
        {
            SetCurrentState(State.Property);
            builder.Text($"{name} as {alias}");
        }
    }
}
