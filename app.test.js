const request = require("supertest");
const app = require("./app");

describe("Node.js Demo App", () => {
    test("GET / should return the DevOps message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello DevOps! CI/CD Pipeline is Working 🚀"
        );
    });
});
