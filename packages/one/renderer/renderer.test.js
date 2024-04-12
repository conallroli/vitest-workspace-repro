import {describe, it, expect} from "vitest";
import {subtract} from "./renderer";

describe('two', () => {
  it('should subtract', () => {
    expect(subtract(2, 1)).toEqual(1);
  });
})
