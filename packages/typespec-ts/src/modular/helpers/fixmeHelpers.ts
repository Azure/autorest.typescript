export function getFixmeForMultilineDocs(fixme: string[]): string[] {
  return fixme.map((fixme) => ` @fixme ${fixme}`);
}
