import { getAuditHistory } from "./getAuditHistory";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document",
    description: "your description here",
    termsOfService: "",
    contact: {
      name: "Scott Perkins",
      email: "scott.perkins@protonmail.com",
      url: "https://hoangtran.co",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  paths: {
    "/audit": {
      get: getAuditHistory,
    },
  },
};
