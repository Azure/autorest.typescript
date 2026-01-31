import { Project, SourceFile } from "ts-morph";
import { RlcMetaTree } from "./metaTree.js";
import { EmitContext } from "@typespec/compiler";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { SdkTypeContext } from "./framework/hooks/sdkTypes.js";
import { Binder } from "./framework/hooks/binder.js";
import { ExternalDependencies } from "./framework/dependency.js";
import { ServiceOperation } from "./utils/operationUtil.js";
import { SdkServiceResponseHeader } from "@azure-tools/typespec-client-generator-core";

/**
 * Contexts Object Guidelines
 * --------------------------
 * The `Contexts` object contains various application-wide data that needs to be accessible across different parts of the program without the need to pass down props deeply.
 *
 * When to add a new context:
 * - **Cross-Cutting Concerns**: Add a new context when the data or functionality is a cross-cutting concern used by multiple unrelated components or modules.
 * - **Global State**: If the state needs to be globally accessible and mutable by different parts of the application, and does not belong to a specific component or module.
 * - **Performance Optimization**: To avoid unnecessary compute or prop drilling that may lead to performance bottlenecks, especially when passing down props through many levels.
 * - **Shared Resources**: For resources that are shared across various parts of the application, such as settings, configurations, or metadata.
 *
 * Remember, adding too many contexts can lead to complex dependencies and harder-to-maintain code. Always evaluate if the context is truly necessary or if there are better alternatives such as localized state management or passing props for simpler scenarios.
 */
type Contexts = {
  rlcMetaTree: RlcMetaTree; // Context for RLC types metadata.
  outputProject: Project; // The TS-Morph root project context for code generation.
  symbolMap: Map<string, SourceFile>; // Mapping of symbols to their corresponding source files.
  sdkTypes: SdkTypeContext;
  emitContext: {
    compilerContext: EmitContext;
    tcgcContext: SdkContext;
  };
  binder: Binder;
  dependencies: ExternalDependencies;
  headerOnlyResponses: Map<
    string,
    { operation: ServiceOperation; headers: SdkServiceResponseHeader[] }
  >;
};

type ContextKey = keyof Contexts;

/**
 * Manages shared contexts across the application to minimize prop drilling and enhance modularity.
 * Implements the Singleton pattern to ensure there is a single instance of ContextManager.
 */
class ContextManager {
  private static instance: ContextManager;
  private contexts: Map<ContextKey, any> = new Map();

  private constructor() {}

  /**
   * Retrieves the singleton instance of the ContextManager.
   * @returns {ContextManager} The singleton instance.
   */
  public static getInstance(): ContextManager {
    if (!ContextManager.instance) {
      ContextManager.instance = new ContextManager();
    }
    return ContextManager.instance;
  }

  /**
   * Sets a value for a specific context key.
   * @param {ContextKey} key - The key of the context to set.
   * @param {Contexts[K]} value - The value to set for the specified context.
   */
  public setContext<K extends ContextKey>(key: K, value: Contexts[K]): void {
    this.contexts.set(key, value);
  }

  /**
   * Retrieves the context value for a specific key.
   * @param {ContextKey} key - The key of the context to retrieve.
   * @returns {Contexts[K] | undefined} The value of the context if found, otherwise undefined.
   */
  public getContext<K extends ContextKey>(key: K): Contexts[K] | undefined {
    return this.contexts.get(key) as Contexts[K] | undefined;
  }
}

// Expose the singleton instance of the context manager.
export const contextManager = ContextManager.getInstance();

/**
 * A utility function to use a context by key.
 * @param {ContextKey} key - The key of the context to retrieve.
 * @throws Will throw an error if the context is not found.
 * @returns {Contexts[K]} The context value.
 */
export function useContext<K extends ContextKey>(key: K): Contexts[K] {
  const context = contextManager.getContext(key);
  if (!context) {
    throw new Error(`Context ${key} not found`);
  }
  return context;
}

/**
 * Provides a context with a value to be accessible across the program.
 * @param {ContextKey} key - The key of the context to provide.
 * @param {Contexts[K]} value - The value to set for the specified context.
 */
export function provideContext<K extends ContextKey>(
  key: K,
  value: Contexts[K]
): void {
  contextManager.setContext(key, value);
}
