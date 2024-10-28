import { Config, Context } from "@netlify/functions";

async function getArticles(username: string) {
  // Artificial slow API
  await new Promise(resolve => setTimeout(resolve, 2000));

  // API that returns articles from a proxy API to Dev.to
  const response = await fetch(`https://www.federatethis.com/api/devto/articles/${username}`);
  const data = await response.json();
  return data;
}


export default async (req: Request, context: Context) => {

  const { username } = context.params;
  const articles = await getArticles(username);

  const response = new Response(JSON.stringify({
    articles,
    username
  }));
  return response;
};

export const config: Config = {
  path: "/api/no-cache/:username"
};