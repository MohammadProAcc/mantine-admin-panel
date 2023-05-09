import { useGetPosts } from "$/lib/api";
import { Badge } from "@mantine/core";
import { DashboardLayout } from "../layout";
import { HeaderPortal } from "../layout/DashboardLayout/Header/HeaderPortal";
import { TableColumn } from "$/lib/types";
import { Table } from "../organism/table";

export function PostsPage() {
  const postsQuery = useGetPosts();

  const columns: TableColumn = [
    {
      accessorKey: "id",
      header: "شناسه",
    },
    {
      accessorKey: "userId",
      header: "شناسه کاربر",
    },
    {
      accessorKey: "title",
      header: "عنوان",
    },
    {
      accessorKey: "body",
      header: "محتوا",
    },
  ];

  return (
    <DashboardLayout title="پست ها">
      <HeaderPortal>
        <Badge size="xl">پست ها</Badge>
      </HeaderPortal>

      <Table
        columns={columns}
        data={postsQuery.data}
        query={postsQuery}
        totalRowCount={postsQuery.data?.length ?? 0}
      />
    </DashboardLayout>
  );
}
