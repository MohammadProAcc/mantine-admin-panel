import { logout } from "$/lib/utils";
import { modals } from "@mantine/modals"
import { Text } from "@mantine/core"

export function useLogoutModal() {
  return () => modals.openConfirmModal({
    title: "خروج از حساب کاربری",
    children: <Text>آیا از خروج خود اطمینان دارید؟</Text>,
    labels: {
      cancel: "خیر",
      confirm: "بله"
    },
    confirmProps: {
      color: "red"
    },
    onConfirm() {
      logout();
    }
  })
}
