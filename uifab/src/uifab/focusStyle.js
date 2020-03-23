import 'focus-visible';

const focusStyle = {
  '&:focus': {
    outlineColor: 'primary',
    outlineStyle: 'auto',
    outlineWidth: 1,
  },
  '&:focus:not(.focus-visible)': {
    outline: 'none',
  },
};

export default focusStyle;
