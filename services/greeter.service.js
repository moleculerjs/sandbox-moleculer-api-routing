"use strict";

// greeter.service.js
module.exports = {
  name: "greeter",
  version: 1,

  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    hello() {
      return "Hello Moleculer";
    },

    /**
     * Welcome a username
     *
     * @param {String} name - User name
     */
    welcome: {
      params: {
        name: "string"
      },
      handler(ctx) {
        return `Welcome, ${ctx.params.name}`;
      }
    }
  }
};
