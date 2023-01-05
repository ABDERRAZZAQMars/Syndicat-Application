const supertest = require('supertest');
const app = require('../server');

//Test_Register
describe("POST /api/auth/register", () => {
    it("should CREATE USER", async () => {
        const response = await supertest(app).post("/api/auth/register").send({
            name: "",
            email: "",
            password: "",
            role: ""
        });
        expect(response.statusCode).toBe(200);
    });
});

//Test_Login
describe("POST /api/auth/register", () => {
    it("should response with a 200 status code", async () => {
      const response = await supertest(app).post("/api/auth/register").send({
        name: "test",
        email: "test@gmail.com",
        password: "azazaz",
        role: "admin"
      });
      expect(response.statusCode).toBe(200);
    });
  });

//Test_Forget_Password
describe("POST /api/auth/forgetpassword",()=>{
    it("should response with a 200 status code", async ()=>{
        const response = await (await supertest(app).post("/api/auth/forgetpassword")).setEncoding({
            email:"test@gmail.com"
        });
        expect(response.statusCode).toBe(200);
    });
});