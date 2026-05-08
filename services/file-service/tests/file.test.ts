import request from "supertest";
import { app } from "../src/index";
describe("file endpoints", () => {
  it("requires auth for listing files", async () => {
    const res = await request(app).get("/files/todo-1");
    expect(res.status).toBe(401);
  });
});
