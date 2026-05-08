import request from "supertest";
import { app } from "../src/index";
describe("todo endpoints", () => {
  it("requires auth for listing", async () => {
    const res = await request(app).get("/todos");
    expect(res.status).toBe(401);
  });
});
