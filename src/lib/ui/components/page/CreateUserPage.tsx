import { DashboardLayout, HeaderPortal } from "$/lib/ui";
import { Badge, Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form"

export function CreateUserPage() {
  const form = useForm();

  function submitForm(form: any) {
    console.log(form);
  }

  return (
    <DashboardLayout title="افزودن کاربر">
      <HeaderPortal>
        <Badge size="xl">
          افزودن کاربر
        </Badge>
      </HeaderPortal>

      <form onSubmit={form.onSubmit(submitForm)}>
        <TextInput label="نام" placeholder="نام" required {...form.getInputProps("name")} />
        <TextInput label="ایمیل" placeholder="ایمیل" type="email" required  {...form.getInputProps("email")} />
        <TextInput label="رمز‌عبور" placeholder="رمز‌عبور" type="password" required  {...form.getInputProps("password")} />
        <Button type="submit" mt="xs">
          تایید
        </Button>
      </form>
    </DashboardLayout>
  )
}
