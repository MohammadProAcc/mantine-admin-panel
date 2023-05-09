import { ReactNode, useLayoutEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
  Footer,
} from "@mantine/core";
import { Navbar as DashboardNavbar } from "./Navbar";
import { Header as DashboardHeader } from "./Header";
import styled from "@emotion/styled";
import Head from "next/head";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}
export function DashboardLayout(props: DashboardLayoutProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const [showAside, setShowAside] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useLayoutEffect(() => {
    const asideTarget = document.getElementById("dashboard-layout-sidebar-portal-target");
    if (asideTarget?.childNodes?.length! > 0) setShowAside(true);

    const footerTarget = document.getElementById("dashboard-layout-footer-portal-target");
    if (footerTarget?.childNodes?.length! > 0) setShowFooter(true);
  })

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

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
            <Aside
              p={showAside ? "md" : 0}
              hiddenBreakpoint="sm"
              width={{
                sm: showAside ? 200 : 0,
                lg: showAside ? 300 : 0
              }}
            >
              <div id="dashboard-layout-sidebar-portal-target" />
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={showFooter ? "60" : "0"}>
            <div id="dashboard-layout-footer-portal-target" />
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p={{ md: "md", sm: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%"
              }}
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
        {props.children}
      </AppShell>
    </>
  );
}
