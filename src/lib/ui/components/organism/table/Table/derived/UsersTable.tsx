import { useGetUsers } from '$/lib/api';
import { ReactQueryTable } from '$/lib/ui';
import { TableColumn } from '$/lib/types';
import { Badge, Pagination } from '@mantine/core';

export function UsersTable() {

  const usersQuery = useGetUsers();

  const columns: TableColumn = [
    {
      accessorKey: "id",
      header: "شناسه",
    },
    {
      accessorKey: "name",
      header: "نام",
    },
    {
      accessorKey: "username",
      header: "نام‌کاربری",
    },
    {
      accessorKey: "email",
      header: "پست الکترونیکی",
    },
  ];


  return (
    <ReactQueryTable
      columns={columns}
      data={usersQuery.data}
      query={usersQuery}
      selectionActions={[
        {
          text: "گزارش",
          handler: (rows, table) => console.log("Selected Rows:\n", rows),
          buttonProps: {
            color: "dark",
            variant: "outline"
          }
        },
      ]}
      crud={{
        create: {
          buttonText: 'افزودن کاربر',
          href: '/users/create',
        },
        delete: {
          handler: (row, table) =>
            console.log("row:\n", row, "table:\n", table),
        },
        update: {
          href: "/",
        },
        read: {
          href: "",
        },
      }}
    />
    // TODO: `Pagination` placeholder
  )
}
