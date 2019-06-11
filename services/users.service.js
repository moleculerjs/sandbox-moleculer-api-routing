"use strict";

// users.service.js
module.exports = {
  name: "users",

  actions: {
    list: {
      // Expose as "/users/"
      rest: "GET /",
      handler(ctx) {
        return "GET Users list";
      }
    },

    get: {
      // Expose as "/users/:id"
      rest: "GET /:id",
      handler(ctx) {
        return `GET user with Id = ${ctx.params.id}`;
      }
    },

    create: {
      // Expose as "/users/"
      rest: "POST /",
      params: {
        name: { type: "string" }
      },
      handler(ctx) {
        return `CREATE user with name = ${ctx.params.name}`;
      }
    },

    update: {
      // Expose as "/users/:id"
      rest: "PUT /:id",
      params: {
        name: { type: "string" }
      },
      handler(ctx) {
        return `UPDATE name of user with id = ${ctx.params.id}. New name: ${
          ctx.params.name
        }`;
      }
    },

    remove: {
      // Expose as "/users/:id"
      rest: "DELETE /:id",
      handler(ctx) {
        return `DELETE user with id = ${ctx.params.id}`;
      }
    }
  }
};
