import cors from "@elysia/cors";
import { Elysia } from "elysia";
import { betterAuthPlugin } from "./plugins/better-auth";
import { openApiPlugin } from "./plugins/openapi";

const PORT = Number(process.env.PORT) ?? 4000;

const corsOptions = {
  origin: String(process.env.WEB_URL) ?? "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = new Elysia()
  .use(cors(corsOptions))
  .use(betterAuthPlugin)
  .use(openApiPlugin)
  .get("/", () => "Hello Elysia")
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
