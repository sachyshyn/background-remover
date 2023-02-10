import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { expect, afterEach, vi } from "vitest";

import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
