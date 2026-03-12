import Point from "./Point";

describe("Point testing", function () {
  it("working good with points", function () {
    let p = new Point(2, 7);
    expect(p.x).toBe(2);
    expect(p.y).toBe(7);
  });
});
