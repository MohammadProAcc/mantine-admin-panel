import { ActionIcon, Box, Button, ButtonProps, Tooltip } from "@mantine/core";
import { IconEdit, IconEye, IconRefresh, IconTrash } from "@tabler/icons-react";
import { UseQueryResult } from "@tanstack/react-query";
import {
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  MantineReactTable,
} from "mantine-react-table";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";
import { v4 } from "uuid";

interface CRUD {
  handler: (row: any, table: any) => unknown;
}
interface Create extends CRUD {
  buttonText: string;
  el?: ReactNode;
}
interface Update {
  href: string;
}
interface Read {
  href: string;
}
interface SelectionAction {
  handler: (rows: any, table: any) => unknown;
  text: string;
  buttonProps?: ButtonProps;
}

interface TableProps {
  columns: MRT_ColumnDef<any>[];
  data: any[];
  totalRowCount: number;
  query: UseQueryResult<any>;
  crud?: {
    create?: Create;
    update?: Update;
    delete?: CRUD;
    read?: Read;
  };
  selectionActions?: SelectionAction[];
}

export const ReactQueryTable = (props: TableProps) => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo(() => props.columns, []);

  // aliases
  const isUpdatable = !!props.crud?.update;
  const isDeletable = !!props.crud?.delete;
  const isReadable = !!props.crud?.read;
  const isActionable = isUpdatable || isDeletable || isReadable;

  return (
    <MantineReactTable
      displayColumnDefOptions={
        isActionable
          ? {
            "mrt-row-actions": {
              header: "فعالیت ها",
              mantineTableHeadCellProps: {
                align: "center",
              },
            },
          }
          : {}
      }
      columns={columns}
      data={(props.data as any) ?? []} //data is undefined on first render
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      mantineToolbarAlertBannerProps={
        props.query.isError
          ? {
            color: "red",
            children: "Error loading data",
          }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      enableColumnOrdering
      enableEditing={isUpdatable}
      enableRowSelection
      onEditingRowSave={console.log}
      onEditingRowCancel={console.log}
      renderTopToolbarCustomActions={({ table }) => {
        const buttonsAreDisabled =
          table.getSelectedRowModel().rows.length === 0;

        return (
          <div style={{ display: "flex", gap: "8px" }}>
            {props.selectionActions?.map((action) => (
              <Button
                key={v4()}
                disabled={buttonsAreDisabled}
                onClick={() =>
                  action.handler(table.getSelectedRowModel(), table)
                }
                variant="filled"
                {...action.buttonProps}
              >
                {action.text}
              </Button>
            ))}

            {props.crud?.create &&
              (props.crud.create.el ?? (
                <Button
                  color="teal"
                  onClick={props.crud.create.handler as any}
                  variant="filled"
                >
                  {props.crud.create.buttonText}
                </Button>
              ))}
            <Tooltip withArrow label="Refresh Data">
              <ActionIcon onClick={() => props.query.refetch()}>
                <IconRefresh />
              </ActionIcon>
            </Tooltip>
          </div>
        );
      }}
      rowCount={props.totalRowCount ?? 0}
      state={{
        columnFilters,
        globalFilter,
        isLoading: props.query.isLoading,
        pagination,
        showAlertBanner: props.query.isError,
        showProgressBars: props.query.isFetching,
        sorting,
      }}
      renderRowActions={
        isActionable
          ? ({ row, table }) => (
            <Box sx={{ display: "flex", gap: "16px" }}>
              {isUpdatable ? (
                <Link href={props.crud?.update?.href ?? ""}>
                  <Tooltip withArrow position="left" label="ویرایش">
                    <ActionIcon>
                      <IconEdit />
                    </ActionIcon>
                  </Tooltip>
                </Link>
              ) : (
                <></>
              )}
              {isDeletable ? (
                <Tooltip withArrow position="right" label="حذف">
                  <ActionIcon
                    color="red"
                    onClick={() => props.crud?.delete?.handler(row, table)}
                  >
                    <IconTrash />
                  </ActionIcon>
                </Tooltip>
              ) : (
                <></>
              )}
              {isReadable ? (
                <Link href={props.crud?.read?.href ?? ""}>
                  <Tooltip withArrow position="right" label="مشاهده">
                    <ActionIcon color="blue">
                      <IconEye />
                    </ActionIcon>
                  </Tooltip>
                </Link>
              ) : (
                <></>
              )}
            </Box>
          )
          : undefined
      }
      enableBottomToolbar={false}
    />
  );
};
