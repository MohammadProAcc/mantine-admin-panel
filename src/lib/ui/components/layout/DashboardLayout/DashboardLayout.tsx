import { ReactNode, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Navbar as DashboardNavbar } from "./Navbar";
import { Header as DashboardHeader } from "./Header";
import { Sidebar as DashboardSidebar } from "./Sidebar";
import { Footer as DashboardFooter } from "./Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}
export function DashboardLayout(props: DashboardLayoutProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <DashboardNavbar />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <DashboardSidebar />
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <DashboardFooter />
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <DashboardHeader />
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
      {props.children}
    </AppShell>
  );
}
