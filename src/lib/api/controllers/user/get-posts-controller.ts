import { useQuery } from "@tanstack/react-query";
import { client } from "../../instances";

export async function getPostsController() {
  const response = await client().get('/posts');
  return response?.data;
}

export function useGetPosts() {
  return useQuery(['get-posts'], getPostsController);
}
