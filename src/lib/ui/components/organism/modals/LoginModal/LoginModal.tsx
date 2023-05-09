import styled from "@emotion/styled"
import { modals } from "@mantine/modals"
import { LoginTabs } from "./LoginTabs"

function LoginModal() {
  return (
    <$>
      <LoginTabs />
    </$>
  )
}

const $ = styled.div``

export function useLoginModal() {
  return () => modals.open({
    title: "ورود | ثبت‌نام",
    children: <LoginModal />
  })
}
