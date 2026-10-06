import { test } from "node:test";
import assert from "node:assert/strict";
import { stripTags } from "../src/stripTags.js";

test("stripTags: basic", () => {
  assert.equal(stripTags("<p>Ocean <b>noodle</b> <i>dog</i></p>"), "Ocean noodle dog");
});

test("stripTags: mixed input", () => {
  assert.equal(stripTags("<p>kettle <b>Ocean</b> <i>lazy</i></p>"), "kettle Ocean lazy");
});

test("stripTags: edge case", () => {
  assert.equal(stripTags("<p>pixel <b>maple</b> <i>maple</i></p>"), "pixel maple maple");
});

test("stripTags: longer input", () => {
  assert.equal(stripTags("<p>brown <b>brown</b> <i>Cherry</i></p>"), "brown brown Cherry");
});
