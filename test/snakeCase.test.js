import { test } from "node:test";
import assert from "node:assert/strict";
import { snakeCase } from "../src/snakeCase.js";

test("snakeCase: basic", () => {
  assert.equal(snakeCase("maxRetryCount"), "max_retry_count");
});

test("snakeCase: mixed input", () => {
  assert.equal(snakeCase("brown-kettle"), "brown_kettle");
});

test("snakeCase: edge case", () => {
  assert.equal(snakeCase("signal rocket"), "signal_rocket");
});

test("snakeCase: longer input", () => {
  assert.equal(snakeCase("XMLHttpRequest"), "xmlhttp_request");
});
