/* eslint-disable @typescript-eslint/no-explicit-any */
// global.d.ts
declare global {
  interface Window {
    unisat: any; // Specify the appropriate type instead of `any` if possible
  }
}

export {};
