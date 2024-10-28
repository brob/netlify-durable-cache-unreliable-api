# Using Durable Cache to manage an unreliable API

This repository is a demo based on this article (link after). It demonstrates how to set up a function with Durable Caching so that a slow API can be served swiftly from a shared cache between all CDN nodes on Netlify's Edge network.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=<tbd>)


## Routes

| Route | Description |
| --- | --- |
| `/api/demo/:username` | This route will call the slow API dev.to API with the username and return articles with caching. The first response will be artificially slowed by 2 seconds. Subsequent responses will be served from Netlify's Durable Cache. |
| `/api/no-cache/:username` | This route will call the slow API dev.to API with the username and return articles without caching. |
| `/api/purge-cache/:tag` | This route will purge the cache for the given tag. The tags set up are `articles` and `articles-<username>` |

You can run this locally with the Netlify CLI. You can also deploy this to Netlify and test it out.

The deployed version will give you the best sense of the caching, as the local environment does not cache in the same way.