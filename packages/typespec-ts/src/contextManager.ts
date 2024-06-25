import { Project, SourceFile } from "ts-morph";
import { ModularMetaTree, RlcMetaTree } from "./metaTree.js";

type Contexts = {
  rlcMetaTree: RlcMetaTree;
  modularMetaTree: ModularMetaTree;
  outputProject: Project;
  symbolMap: Map<string, SourceFile>;
};

type ContextKey = keyof Contexts;

class ContextManager {
  private static instance: ContextManager;
  private contexts: Map<ContextKey, any> = new Map();

  private constructor() {}

  public static getInstance(): ContextManager {
    if (!ContextManager.instance) {
      ContextManager.instance = new ContextManager();
    }
    return ContextManager.instance;
  }

  public setContext<K extends ContextKey>(key: K, value: Contexts[K]): void {
    this.contexts.set(key, value);
  }

  public getContext<K extends ContextKey>(key: K): Contexts[K] | undefined {
    return this.contexts.get(key) as Contexts[K] | undefined;
  }
}

export const contextManager = ContextManager.getInstance();

export function useContext<K extends ContextKey>(key: K): Contexts[K] {
  const context = contextManager.getContext(key);
  if (!context) {
    throw new Error(`Context ${key} not found`);
  }
  return context;
}

export function provideContext<K extends ContextKey>(
  key: K,
  value: Contexts[K]
): void {
  contextManager.setContext(key, value);
}
