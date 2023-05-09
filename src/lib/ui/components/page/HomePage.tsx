import { DashboardLayout } from "$/lib/ui";
import { Button, Text } from "@mantine/core";
import { useLoginModal } from "../organism/modals";
import { HeaderPortal } from "../layout/DashboardLayout/Header/HeaderPortal";
import { SidebarPortal } from "../layout/DashboardLayout/Sidebar";
import { FooterPortal } from "../layout/DashboardLayout/Footer";

export function HomePage() {
  const openLoginModal = useLoginModal();

  return (
    <DashboardLayout title="خانه">
      <h1>Home Page</h1>
      <Button onClick={openLoginModal}>
        Open Login Modal
      </Button>
      <Text>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      </Text>

      <FooterPortal>
        Footer Content
      </FooterPortal>
    </DashboardLayout>
  );
}
