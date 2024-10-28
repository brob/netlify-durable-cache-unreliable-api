import { Context, Config } from "@netlify/functions";
import { purgeCache } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { tag } = context.params;
  // if no tag, no need for further action
  if (!tag) {
    return;
  }

  console.log("Purging cache for ", tag);

  await purgeCache({
    tags: [tag],
  });

  return new Response("Purged!", { status: 202 })
};

export const config: Config = {
    path: "/api/purge-cache/:tag"
  };