import { test } from "node:test";
import assert from "node:assert/strict";
import { snakeCase } from "../src/snakeCase.js";

test("snakeCase: basic", () => {
  assert.equal(snakeCase("userId"), "user_id");
});

test("snakeCase: mixed input", () => {
  assert.equal(snakeCase("maxRetryCount"), "max_retry_count");
});

test("snakeCase: edge case", () => {
  assert.equal(snakeCase("XMLHttpRequest"), "xmlhttp_request");
});
