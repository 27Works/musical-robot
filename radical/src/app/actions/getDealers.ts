"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const getDealers = async () => {
  const authHeaders = {
    headers: {
      Authorization: `Api-key-v1 ${process.env.TwentySeven_WORKS_API_KEY}`,
    },
  };

  const response = await axios.get(
    "https://caruuto.27.works/api/v1/dealers",
    authHeaders
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch dealers");
  }
  return response.data as DealerResponse;
};

export type DealerResponse = {
  results: Dealer[];
};
export type Dealer = {
  address: string;
  city: string;
  contactName: string;
  content_type_id: string;
  continent: string;
  country: string;
  createdBy: string | null;
  created_at: string;
  created_by: string | null;
  deleted: boolean;
  description: string;
  email: string;
  excerpt: string;
  id: string;
  lat: number;
  lng: number;
  metadata: any[];
  phone: string;
  project_id: string;
  publish_at: string | null;
  published: boolean;
  published_at: string | null;
  slug: string;
  title: string;
  updatedBy: string | null;
  updated_at: string;
  updated_by: string | null;
  website: string;
};
