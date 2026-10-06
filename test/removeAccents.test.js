import { test } from "node:test";
import assert from "node:assert/strict";
import { removeAccents } from "../src/removeAccents.js";

test("removeAccents: basic", () => {
  assert.equal(removeAccents("Crème brûlée"), "Creme brulee");
});

test("removeAccents: mixed input", () => {
  assert.equal(removeAccents("Crème brûlée"), "Creme brulee");
});

test("removeAccents: longer input 727o", () => {
  assert.equal(removeAccents("Ångström"), "Angstrom");
});
