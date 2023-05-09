import { Portal } from "@mantine/core";
import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode
}
export function FooterPortal(props: FooterProps) {
  return (
    <Portal target="#dashboard-layout-footer-portal-target">
      {props.children}
    </Portal>
  );
}
