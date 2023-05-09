import { useGetUsers } from '$/lib/api';
import { Table } from '../Table';
import { TableColumn } from '$/lib/types';

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
    <Table
      selectionActions={[
        {
          text: "گزارش",
          handler: (rows, table) => console.log("Selected Rows:\n", rows),
        },
      ]}
      data={usersQuery.data}
      columns={columns}
      query={usersQuery}
      totalRowCount={usersQuery.data?.length ?? 0}
      crud={{
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
  )
}
