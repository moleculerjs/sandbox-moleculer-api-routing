# Moleculer Routing Examples

Routing examples from Moleculer Web Examples repository:

[https://github.com/moleculerjs/moleculer-web/tree/master/examples](https://github.com/moleculerjs/moleculer-web/tree/master/examples)

## Default Route Settings

Access to all services through the **'/simple'** route.

Uses API Gateway service with default settings.

Access greeter.\*, math.\* & internal \$node.\* actions.

#### Examples:

- Greeter Moleculer
  `GET` [`/simple/v1/greeter/hello`](/simple/v1/greeter/hello)
- Add two numbers
  `GET`
  [`/simple/math/add?a=25&b=13`](/simple/math/add?a=25&b=13)
- Get health info
  `GET` [`/simple/~node/health`](/simple/~node/health)
- List of actions
  `GET` [`/simple/~node/actions`](/simple/~node/actions)

Official Documentation:
[https://moleculer.services/docs/0.13/moleculer-web.html\#Aliases](https://moleculer.services/docs/0.13/moleculer-web.html#Aliases)

## Auto-aliases generator

Access to all services through the **'/autoalias'** route.

Uses API Gateway service auto-aliases generator feature

You don't need to create aliases for your actions.

It collects & read from action definitions & build aliases.

#### Examples:

- Get all users
  `GET` [`/autoalias/users`](/autoalias/users)
- Create a new user
  `POST` [`/autoalias/users`](/autoalias/users)

  `Body { "name": "Razvan Predescu" }`

- Get an user by ID
  `GET` [`/autoalias/users/11`](/autoalias/users/11)
- Update an user by ID
  `PUT` [`/autoalias/users/11`](/autoalias/users/11)\

  `Body { "name": "Updated User Name" }`

- Remove an user by ID
  `DELETE` [`/autoalias/users/11`](/autoalias/users/11)

Official Documentation:
[https://moleculer.services/docs/0.13/moleculer-web.html\#Aliases](https://moleculer.services/docs/0.13/moleculer-web.html#Aliases)

## REST aliases

This route uses API Gateway as a RESTful API server

Access 'articles' service through the **'/rest'** route.

#### Examples:

- Get all articles
  `GET` [`/rest/articles`](/rest/articles)
- Create a new article
  `POST` [`/rest/articles`](/rest/articles)

  `Body { "title": "New article via REST" }`

- Get an article by ID
  `GET` [`/rest/articles/11`](/rest/articles/11)
- Update an article by ID
  `PUT` [`/rest/articles/11`](/rest/articles/11)\

  `Body { "title": "Modified article title" }`

- Remove an article by ID
  `DELETE` [`/rest/articles/11`](/rest/articles/11)

## Shorthand RESTful aliases

Shorthand RESTful aliases

Access 'articles' service through the **'/shortrest'** route.

Disable direct URLs (\`/articles/list\` or \`/articles.list\`)

#### Examples:

- Get all articles
  `GET` [`/shortrest/articles`](/shortrest/articles)
- Create a new article
  `POST` [`/shortrest/articles`](/shortrest/articles)

  `Body { "title": "New article via REST" }`

- Get an article by ID
  `GET` [`/shortrest/articles/11`](/shortrest/articles/11)
- Update an article by ID
  `PUT` [`/shortrest/articles/11`](/shortrest/articles/11)

  `Body { "title": "Modified article title" }`

- Remove an article by ID
  `DELETE`
  [`/shortrest/articles/11`](/shortrest/articles/11)

Official Documentation:
[https://moleculer.services/docs/0.13/moleculer-web.html\#Aliases](https://moleculer.services/docs/0.13/moleculer-web.html#Aliases)

## Route Whitelisting

Access to all services through the **'/whitelist'** route.

Provides access to certain services & actions

Services and actions outside the whitelist are not accessible.

#### Examples:

- Greeter Hello
  `GET`
  [`/whitelist/v1/greeter/hello`](/whitelist/v1/greeter/hello)
- Add two numbers
  `GET`
  [`/whitelist/math/add?a=25&b=13`](/whitelist/math/add?a=25&b=13)

Official Documentation:
[https://moleculer.services/docs/0.13/moleculer-web.html\#Whitelist](https://moleculer.services/docs/0.13/moleculer-web.html#Whitelist)
