import { Elysia } from "elysia";
import { openapi } from "@elysia/openapi";
import { OpenAPI } from "../lib/auth";

export const openApiPlugin = new Elysia().use(
  openapi({
    documentation: {
      components: await OpenAPI.components,
      paths: await OpenAPI.getPaths(),
    },
    path: "/docs",
  }),
);
