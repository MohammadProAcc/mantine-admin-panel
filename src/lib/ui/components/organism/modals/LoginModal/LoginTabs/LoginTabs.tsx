import { Tabs } from '@mantine/core';
import { IconLogin, IconBook } from '@tabler/icons-react';
import { LoginForm } from './LoginForm';

export function LoginTabs() {
  return (
    <Tabs defaultValue="login">
      <Tabs.List>
        <Tabs.Tab value="login" icon={<IconLogin size="0.8rem" />}>ورود</Tabs.Tab>
        <Tabs.Tab value="logout" icon={<IconBook size="0.8rem" />}>ثبت‌نام</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="login" pt="xs">
        <LoginForm />
      </Tabs.Panel>

      <Tabs.Panel value="logout" pt="xs">
        Messages tab content
      </Tabs.Panel>
    </Tabs>
  );
}
