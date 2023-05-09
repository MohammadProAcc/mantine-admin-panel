import { device } from "$/lib/ui/design";
import styled from "@emotion/styled";
import { Text } from "@mantine/core";
import Link from "next/link";
import { LayoutDashboard } from "tabler-icons-react";

export function Header() {
  return (
    <$>
      <Link href="/" className="header-link">
        <h1>
          {/* logo */}
          <div className="logo">
            <LayoutDashboard />
          </div>
          <Text ff="Black">بخش مدیریت</Text>
        </h1>
      </Link>

      <div id="dashboard-layout-header-portal-target" style={{
        margin: "0 1rem",
        display: "flex",
        alignItems: "center"
      }} />
    </$>
  );
}

const $ = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device('max', 'md')} {
    margin: auto;
  }

  a {
    display: flex;
    align-items: center;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1rem;

    @media ${device('min', 'md')} {
      font-size: 1.5rem;
    }

    .logo {
      display: flex;
      align-items: center;

      @media ${device('max', 'md')} {
        display: none;
      }
    }
  }
`
