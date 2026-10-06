import { test } from "node:test";
import assert from "node:assert/strict";
import { mask } from "../src/mask.js";

test("mask: basic", () => {
  assert.equal(mask("896683879577", 3), "*********577");
});

test("mask: mixed input", () => {
  assert.equal(mask("417725354095", 5), "*******54095");
});

test("mask: edge case", () => {
  assert.equal(mask("947880855455", 5), "*******55455");
});

test("mask: basic 8xqe", () => {
  assert.equal(mask("210185478045", 4), "********8045");
});
