import { DashboardLayout, UsersTable, HeaderPortal } from "$/lib/ui";
import { Badge } from "@mantine/core";

export function UsersPage() {
  return (
    <DashboardLayout title="کاربران">
      <HeaderPortal>
        <Badge size="xl" mx="sm">
          کاربران
        </Badge>
      </HeaderPortal>

      <UsersTable />
    </DashboardLayout>
  );
}
