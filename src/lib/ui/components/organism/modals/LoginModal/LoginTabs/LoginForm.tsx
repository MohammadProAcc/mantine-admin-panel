import styled from "@emotion/styled"
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export function LoginForm() {
  const form = useForm();

  // functions
  function submitForm(form: any) {
    console.log(form);
  }

  return (
    <$ onSubmit={form.onSubmit(submitForm)}>
      <TextInput {...form.getInputProps("username")} label="نام کاربری" />
      <TextInput {...form.getInputProps("password")} label="رمزعبور" />
      <Button type="submit" mt="sm">
        ورود
      </Button>
    </$>
  )
}

const $ = styled.form`

`
