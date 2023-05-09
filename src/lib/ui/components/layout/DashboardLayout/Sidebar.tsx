import { Portal } from "@mantine/core";
import { ReactNode, useEffect } from "react";

interface SidebarPortalProps {
  children: ReactNode
}
export function SidebarPortal(props: SidebarPortalProps) {
  useEffect(() => {

    const target = document.getElementById("dashboard-layout-sidebar-portal-target");
    console.log(target)

  }, [])
  return (
    <Portal target="#dashboard-layout-sidebar-portal-target">
      {props.children}
    </Portal>
  )
}
