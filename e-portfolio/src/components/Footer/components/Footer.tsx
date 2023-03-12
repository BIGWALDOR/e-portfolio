import { Anchor, Group, ActionIcon } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react';

import { useStyles } from '../utils/useStyles';

import type { FooterProps } from '../types/FooterProps';

export const Footer = ({ links }: FooterProps): JSX.Element => {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <h2>Footer</h2>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};
