import request from "supertest";
import { app } from "../src/index";
describe("gateway", () => {
    it("has health endpoint", async () => {
        const res = await request(app).get("/health");
        expect(res.status).toBe(200);
    });
});
