"use server";

import axios from "axios";
import { PostResponse } from "./getPosts";

export const getPost = async ({ slug }: { slug: string }) => {
  const authHeaders = {
    headers: {
      Authorization: `Api-key-v1 ${process.env.TwentySeven_WORKS_API_KEY}`,
    },
  };

  const response = await axios.get(
    `https://caruuto.27.works/api/v1/posts?filter={"slug":"${slug}"}`,
    authHeaders
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch posts");
  }

  const posts = response.data as PostResponse;

  return posts.results[0];
};
