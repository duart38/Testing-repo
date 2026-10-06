import { test } from "node:test";
import assert from "node:assert/strict";
import { stripSuffix } from "../src/stripSuffix.js";

test("stripSuffix: removes suffix from end", () => {
  assert.equal(stripSuffix("report.txt", ".txt"), "report");
});

test("stripSuffix: empty string input", () => {
  assert.equal(stripSuffix("", ".txt"), "");
});

test("stripSuffix: suffix not present", () => {
  assert.equal(stripSuffix("document.pdf", ".txt"), "document.pdf");
});
