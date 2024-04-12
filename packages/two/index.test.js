import {describe, it, expect} from "vitest";
import {multiply} from "./index";

describe('two', () => {
  it('should subtract', () => {
    expect(multiply(2, 3)).toEqual(6);
  });
})
