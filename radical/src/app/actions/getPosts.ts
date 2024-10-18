"use server";

import axios from "axios";

export const getPosts = async ({
  count = 12,
  page = 1,
}: {
  count?: number;
  page?: number;
}) => {
  const authHeaders = {
    headers: {
      Authorization: `Api-key-v1 ${process.env.TwentySeven_WORKS_API_KEY}`,
    },
  };

  const response = await axios.get(
    `https://caruuto.27.works/api/v1/posts?count=${count}&page=${page}`,
    authHeaders
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch posts");
  }

  const posts = response.data as PostResponse;

  return posts.results;
};

export type PostResponse = {
  results: Post[];
};

type Metadata = {
  id: string;
  name: string;
  type: string;
  value: string;
};

type Image = {
  id: string;
  created_at: string;
  project_id: string;
  fileName: string;
  path: string;
  contentLength: number;
  mimeType: string;
  url: string;
};

type Section = {
  content_id: string;
  id: string;
  content_type: string;
  image?: Image[];
  content?: string;
};

export type Post = {
  id: string;
  content_type_id: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  published: boolean;
  project_id: string;
  deleted: boolean;
  publish_at: string | null;
  published_at: string | null;
  metadata: Metadata[];
  updatedBy: string | null;
  createdBy: string | null;
  slug: string;
  title: string;
  sections: Section[];
};
