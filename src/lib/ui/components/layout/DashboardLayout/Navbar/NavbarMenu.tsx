import { Menu, Text, UnstyledButton, Group, Avatar, Divider } from '@mantine/core';
import { IconSettings, IconChevronLeft, IconLogout } from '@tabler/icons-react';
import { useLogoutModal } from '../../../organism/modals';
import { forwardRef } from 'react';

export function NavbarMenu() {
  const openLogoutModal = useLogoutModal();

  return (
    <>
      <Divider mt="auto" mb="sm" />
      <Menu shadow="md" width={200} position="left">
        <Menu.Target>
          <UserButton
            image=""
            name="Firstname Lastname"
            email="email@service.domain"
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item icon={<IconSettings size={14} />}>تنظیمات</Menu.Item>
          <Menu.Item color="red" icon={<IconLogout size={14} />}
            onClick={openLogoutModal}
          >خروج</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}


interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

// eslint-disable-next-line react/display-name 
const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref: any) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronLeft size="1rem" />}
      </Group>
    </UnstyledButton>
  )
);
