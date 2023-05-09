import { Portal } from "@mantine/core";
import { ReactNode } from "react";

interface HeaderPortalProps {
  children: ReactNode
}
export function HeaderPortal(props: HeaderPortalProps) {
  return (
    <Portal target="#dashboard-layout-header-portal-target">
      {props.children}
    </Portal>
  );
}
