export function exhaustive(x: never): never {
  throw new Error(`${x} was not expected`);
}
