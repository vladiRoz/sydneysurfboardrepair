export async function register() {
  // Node.js 22+ exposes a broken localStorage stub when --localstorage-file
  // is not provided. Next.js SSR hits it and crashes. Remove it so that
  // browser-only code falls back correctly via typeof checks.
  if (
    typeof localStorage !== "undefined" &&
    typeof localStorage.getItem !== "function"
  ) {
    // @ts-expect-error — intentionally removing the broken Node.js stub
    delete globalThis.localStorage;
  }
}
