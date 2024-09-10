import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  fontFamily: '"SUSE", sans-serif',
  headings: {
    fontFamily: '"Protest Guerrilla", sans-serif',
    sizes: {
      h1: { fontSize: rem(48) },
    },
  },
});

export default theme;
