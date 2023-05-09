import { useQuery } from "@tanstack/react-query";
import { client } from "../../instances";
import { useRouter } from "next/router";

interface GetUsersControllerProps {
  page: number;
}
export async function getUsersController(props: GetUsersControllerProps) {
  const response = await client().get('/users', {
    params: {
      page: props.page ?? 1
    }
  });
  return response?.data;
}

export function useGetUsers() {
  const router = useRouter();

  return useQuery(['get-users', router.query.page], () => getUsersController({
    page: Number(router.query.page)
  }));
}
