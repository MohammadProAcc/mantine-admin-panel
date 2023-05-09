import { useQuery } from "@tanstack/react-query";
import { client } from "../../instances";

export async function getUsersController() {
  const response = await client().get('/users');
  return response?.data;
}

export function useGetUsers() {
  return useQuery(['get-users'], getUsersController);
}
