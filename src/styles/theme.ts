import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'royal-blue',
  colors: {
    'royal-blue': [
      '#E7EEFD',
      '#CFDDFA',
      '#9BB9F8',
      '#6C97F4',
      '#3C75F1',
      '#1155E5',
      '#0E44B9',
      '#0B3389',
      '#08215B',
      '#05112F',
      '#010919',
    ],
  },
  fontFamily: '"SUSE", sans-serif',
  headings: {
    fontFamily: '"Protest Guerrilla", sans-serif',
    sizes: {
      h1: { fontSize: rem(48) },
    },
  },
});

export default theme;
