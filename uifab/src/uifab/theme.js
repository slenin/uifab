const breakpoints = ['40em', '52em', '64em', '80em'];
[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints;

const theme = {
  minimumWidth: '20em',
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
  fontSizes: {
    'xxxx-small': 10,
    'xxx-small': 11,
    'xx-small': 12,
    'x-small': 13,
    small: 14,
    'small-medium': 15,
    medium: 16,
    'medium-large': 17,
    large: 18,
    'x-large': 19,
    'xx-large': 20,
    'xxx-large': 21,
    'xxxx-large': 22,
  },
  colors: {
    primary: '#3081e8',
    accent: '#ffd022',
    error: '#ff7422',
    white: '#fff',
    black: '#000',
    muted: '#999ca1',
    light: '#f8f9fa',
    dark: '#3a3f47',
    border: '#e0e2e4',
    'primary-light': '#81b2f1',
    'primary-dark': '#0750ae',
    'accent-light': '#ffe37d',
    'accent-dark': '#ffc900',
    'error-light': '#ffae7d',
    'error-dark': '#ff5f00',
  },
  breakpoints,
};

export default theme;
