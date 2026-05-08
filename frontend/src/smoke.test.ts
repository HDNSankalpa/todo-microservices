import { describe, expect, it } from "vitest";

describe("frontend smoke test", () => {
  it("has a working test runner", () => {
    expect("todo").toContain("todo");
  });
});
