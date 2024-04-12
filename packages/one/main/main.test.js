import {describe, it, expect} from "vitest";
import {add} from "./main";

describe("one", () => {
  it('should add', () => {
    expect(add(1, 2)).toEqual(3);
  })
});
