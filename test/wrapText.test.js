import { test } from "node:test";
import assert from "node:assert/strict";
import { wrapText } from "../src/wrapText.js";

test("wrapText: basic", () => {
  assert.equal(wrapText("maple rocket tunnel kettle lazy tunnel", 16), "maple rocket\ntunnel kettle\nlazy tunnel");
});

test("wrapText: mixed input", () => {
  assert.equal(wrapText("velvet noodle rocket fox Lantern velvet", 15), "velvet noodle\nrocket fox\nLantern velvet");
});
