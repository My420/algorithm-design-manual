import fc from "fast-check";
import { insertionSort } from "./insertionSort";
const { performance } = require("perf_hooks");

describe("Test insertionSort function", () => {
  test("should produce an ordered array", () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = insertionSort(arr);

        for (let i = 0; i < result.length - 1; i++) {
          expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
        }
      })
    );
  });

  test("should have the same length as source", () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (data) => {
        expect(insertionSort(data)).toHaveLength(data.length);
      })
    );
  });
});
