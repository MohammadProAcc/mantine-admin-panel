import { Button, Flex, createStyles } from "@mantine/core";
import { NAV_ITEMS } from "../NAV_ITEMS";
import { v4 } from "uuid";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarMenu } from "./NavbarMenu";

export function Navbar() {
  const router = useRouter();
  const styles = useStyled();

  // Aliases
  const classes = styles.classes;

  return (
    <Flex direction="column" justify="space-between" h="100vh">
      <Flex direction="column" gap="xs">
        {
          NAV_ITEMS
            .map((item) => (
              <Link href={item.href} className={classes.navButtonLabel}
                key={v4()}
              >
                <Button
                  w="100%"
                  variant={
                    (
                      item.exact
                        ? router.pathname === item.href
                        : router.pathname.includes(item.href)
                    )
                      ? 'filled'
                      : 'light'
                  }
                  classNames={{
                    inner: classes.navButtonInner,
                    label: classes.navButtonLabel
                  }}
                >
                  {item.icon}
                  {item.title}
                </Button>
              </Link>
            ))
        }
      </Flex>

      <NavbarMenu />
    </Flex>
  );
}

const useStyled = createStyles({
  navButtonInner: {
    justifyContent: "flex-start",
  },
  navButtonLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  },
  navLink: {
    width: "100%"
  }
})
