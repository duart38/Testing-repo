import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: longer input 2ujj", () => {
  assert.equal(kebabCase("tunnel  lazy"), "tunnel-lazy");
});

test("kebabCase: mixed input ucbm", () => {
  assert.equal(kebabCase("world-Lantern-stone-hello"), "world-lantern-stone-hello");
});

test("kebabCase: basic ivob", () => {
  assert.equal(kebabCase("quartz Summer"), "quartz-summer");
});
