import { test } from "node:test";
import assert from "node:assert/strict";
import { titleCase } from "../src/titleCase.js";

test("titleCase: basic", () => {
  assert.equal(titleCase("quartz brown"), "Quartz Brown");
});

test("titleCase: mixed input", () => {
  assert.equal(titleCase("noodle-velvet-river"), "Noodle-Velvet-River");
});

test("titleCase: edge case", () => {
  assert.equal(titleCase("noodle hello rocket"), "Noodle Hello Rocket");
});
