"use strict";

const ApiGateway = require("moleculer-web");

/**
 * Routing tutorials from the original Moleculer Web Examples:
 * https://github.com/moleculerjs/moleculer-web/tree/master/examples
 */

module.exports = {
  name: "api",
  version: 1,
  mixins: [ApiGateway],

  // More info about settings: http://moleculer.services/docs/moleculer-web.html
  settings: {
    port: 8080,
    routes: [
      {
        // Access all services through the /simple route:
        // https://leyf6.sse.codesandbox.io/simple
        path: "/simple",

        /**
         * This route uses API Gateway service with default settings.
         * You can access to greeter.*, math.* & internal $node.* actions.
         *
         * Examples:
         *
         *  - Hello action
         * 		https://leyf6.sse.codesandbox.io/simple/greeter/hello
         *
         *  - Add two numbers
         * 		https://leyf6.sse.codesandbox.io/simple/math/add?a=25&b=13
         *
         *  - Get health info
         * 		https://leyf6.sse.codesandbox.io/simple/~node/health
         *
         *  - List of actions
         * 		https://leyf6.sse.codesandbox.io/simple/~node/actions
         *
         */

        // Access to any actions in all services under "/simple" URL
        whitelist: ["**"],

        // When using multiple routes you should explicitly
        // set the body parser(s) for each route.
        bodyParsers: {
          json: true,
          urlencoded: { extended: true }
        }
      },

      {
        // Access 'users' service through the /autoalias route:
        // https://leyf6.sse.codesandbox.io/autoalias
        path: "/autoalias",

        /**
         * This route uses API Gateway service auto-aliases generator feature.
         *
         * You don't need to create aliases for your actions. It collects & read from
         * action definitions & build aliases.
         *
         * Example:
         *
         *  - Get all users
         * 		GET https://leyf6.sse.codesandbox.io/autoalias/users
         *
         *  - Create a new user
         * 		POST https://leyf6.sse.codesandbox.io/autoalias/users
         *    Body
         * 		{
         * 			"name": "Razvan Predescu"
         * 		}
         *
         *  - Get an user by ID
         * 		GET https://leyf6.sse.codesandbox.io/autoalias/users/11
         *
         *  - Update an user by ID
         * 		PUT https://leyf6.sse.codesandbox.io/autoalias/users/11
         * 		Body
         *    {
         * 			"name": "Updated User Name"
         * 		}
         *
         *  - Remove an user by ID
         * 		DELETE https://leyf6.sse.codesandbox.io/autoalias/users/11
         *
         */

        // Auto generate aliases
        autoAliases: true,

        whitelist: [
          // Access any actions in 'users' service
          "users.*"
        ],

        // When using multiple routes you should explicitly
        // set the body parser(s) for each route.
        bodyParsers: {
          json: { limit: "2MB" },
          urlencoded: { extended: true, limit: "2MB" }
        }
      },

      {
        // Access 'articles' service through the /rest route:
        // https://leyf6.sse.codesandbox.io/rest
        path: "/rest",

        /**
         * This route uses API Gateway as a RESTful API server.
         *
         * Example:
         *
         *  - Get all articles
         * 		GET https://leyf6.sse.codesandbox.io/rest/articles
         *
         *  - Create a new article
         * 		POST https://leyf6.sse.codesandbox.io/rest/articles
         *    Body
         * 		{
         * 			"title": "New article via REST"
         * 		}
         *
         *  - Get an article by ID
         * 		GET https://leyf6.sse.codesandbox.io/rest/articles/11
         *
         *  - Update an article by ID
         * 		PUT https://leyf6.sse.codesandbox.io/rest/articles/11
         * 		{
         * 			"title": "Modified article title"
         * 		}
         *
         *  - Remove an article by ID
         * 		DELETE https://leyf6.sse.codesandbox.io/rest/articles/11
         *
         */

        // RESTful aliases
        aliases: {
          "GET articles": "articles.list",
          "GET articles/:id": "articles.get",
          "POST articles": "articles.create",
          "PUT articles/:id": "articles.update",
          "DELETE articles/:id": "articles.remove"
        },

        // Disable direct URLs (`/articles/list` or `/articles.list`)
        mappingPolicy: "restrict",

        whitelist: [
          // Access any actions in 'articles' service
          "articles.*"
        ],

        // When using multiple routes you should explicitly
        // set the body parser(s) for each route.
        bodyParsers: {
          json: true,
          urlencoded: { extended: true }
        }
      },

      {
        // Access 'articles' service through the /shortrest route:
        // https://leyf6.sse.codesandbox.io/shortrest
        path: "/shortrest",

        /**
         * This route uses API Gateway as a RESTful API server.
         *
         * Example:
         *
         *  - Get all articles
         * 		GET https://leyf6.sse.codesandbox.io/shortrest/articles
         *
         *  - Create a new article
         * 		POST https://leyf6.sse.codesandbox.io/shortrest/articles
         *    Body
         * 		{
         * 			"title": "New article via REST",
         * 		}
         *
         *  - Get an article by ID
         * 		GET https://leyf6.sse.codesandbox.io/shortrest/articles/11
         *
         *  - Update an article by ID
         * 		PUT https://leyf6.sse.codesandbox.io/shortrest/articles/11
         * 		{
         * 			"title": "Modified article title",
         * 		}
         *
         *  - Remove an article by ID
         * 		DELETE https://leyf6.sse.codesandbox.io/shortrest/articles/11
         *
         */

        // Shorthand RESTful aliases
        aliases: {
          "REST articles": "articles"
        },

        // Disable direct URLs (`/articles/list` or `/articles.list`)
        mappingPolicy: "restrict",

        whitelist: [
          // Access any actions in 'articles' service
          "articles.*"
        ],

        // When using multiple routes you should explicitly
        // set the body parser(s) for each route.
        bodyParsers: {
          json: true,
          urlencoded: { extended: true }
        }
      },

      {
        // Access specific service actions through the /whitelist route:
        // https://leyf6.sse.codesandbox.io/whitelist
        path: "/whitelist",

        /**
         * This route provides access to certain services and actions through whitelisting.
         * Services and actions outside the whitelist are not accessible.
         *
         * Example:
         *
         *  - Greeter Hello
         * 		GET https://leyf6.sse.codesandbox.io/whitelist/greeter/hello
         *
         *  - Math Add
         * 		POST https://leyf6.sse.codesandbox.io/whitelist/math/add?a=1&b=2
         *
         */

        whitelist: [
          // Access 'hello' action in 'greeter' service
          "greeter.hello",

          // Access any actions in 'math' service
          /^math\.\w+$/
        ]
      }
    ],

    assets: {
      folder: "./public"
    }
  }
};
