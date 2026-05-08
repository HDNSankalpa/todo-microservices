import request from "supertest";
import { app } from "../src/index";
describe("auth endpoints", () => {
    it("validates registration input", async () => {
        const res = await request(app).post("/register").send({ email: "bad", password: "short" });
        expect(res.status).toBe(400);
    });
});
