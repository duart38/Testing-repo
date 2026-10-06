import { test } from "node:test";
import assert from "node:assert/strict";
import { chunk } from "../src/chunk.js";

test("chunk: basic", () => {
  assert.deepEqual(chunk("dog signal world", 2), ["do","g ","si","gn","al"," w","or","ld"]);
});

test("chunk: mixed input", () => {
  assert.deepEqual(chunk("brown", 4), ["brow","n"]);
});

test("chunk: edge case", () => {
  assert.deepEqual(chunk("banana", 5), ["banan","a"]);
});
