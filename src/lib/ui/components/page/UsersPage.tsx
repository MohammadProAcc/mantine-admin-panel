import { DashboardLayout } from "../layout";
import { UsersTable } from "../organism/table";
import { HeaderPortal } from "../layout/DashboardLayout/Header/HeaderPortal";
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
