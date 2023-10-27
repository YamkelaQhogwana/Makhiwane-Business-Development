import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import Socials from '../Socials-Bar/Socials';

const  MenuMobile = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Sitemap</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
         Services
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Contact Us
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
        >
         About Us
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Get In Touch</Menu.Label>
        <Menu.Item>
            <Socials></Socials>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuMobile;