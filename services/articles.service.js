"use strict";

// articles.service.js
module.exports = {
  name: "articles",

  actions: {
    list: {
      handler(ctx) {
        return "GET articles list";
      }
    },

    get: {
      handler(ctx) {
        return `GET the Article with Id = ${ctx.params.id}`;
      }
    },

    create: {
      params: {
        title: { type: "string" }
      },
      handler(ctx) {
        return `CREATE Article with title = ${ctx.params.title}`;
      }
    },

    update: {
      params: {
        title: { type: "string" }
      },
      handler(ctx) {
        return `UPDATE title of Article with Id = ${
          ctx.params.id
        }. New title: ${ctx.params.title}`;
      }
    },

    remove: {
      handler(ctx) {
        return `DELETE Article with Id = ${ctx.params.id}`;
      }
    }
  }
};
